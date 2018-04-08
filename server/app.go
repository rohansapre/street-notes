package main

import (
	"encoding/json"
	"log"
	"net/http"
  	"net/url"
  	"strings"
  	"fmt"
  	"os"

	"github.com/gorilla/mux"
	. "street-notes/server/config"
)

var config = Config{}

type BroadcastRequest struct {
	Artist_id string `bson:"artist_id" json:"artist_id"`
	Message string `bson:"message" json:"message"`
}

// GET: Fetch a post
func GetPost(w http.ResponseWriter, r *http.Request) {	
	respondWithJson(w, http.StatusOK, r.URL.Query())
}

// GET: Fetch the artist profile
func GetArtistProfile(w http.ResponseWriter, r *http.Request) {	
	respondWithJson(w, http.StatusOK, r.URL.Query())
}

// GET: Fetch the news feed
func GetFeed(w http.ResponseWriter, r *http.Request) {	
	respondWithJson(w, http.StatusOK, r)
}

// POST: Upload a post
func UploadPost(w http.ResponseWriter, r *http.Request) {
	respondWithJson(w, http.StatusOK, r)
}

// POST: Donate to artist
func Donate(w http.ResponseWriter, r *http.Request) {
	respondWithJson(w, http.StatusOK, r)
}

// POST: Subscribe to artist
func Subscribe(w http.ResponseWriter, r *http.Request) {
	respondWithJson(w, http.StatusOK, r)
}

// POST: Artist broadcasts to subscribers
func BroadcastMessage(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	var messageRequest BroadcastRequest
		
	if err := json.NewDecoder(r.Body).Decode(&messageRequest); err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	// TODO: Use artist id and fetch subscriber's phone number
	subcriberPhoneNumbers := [1]string{"+11234567890"}

	for i := 0; i < len(subcriberPhoneNumbers); i++ {
		
		// Set account keys & information
		accountSid := os.Getenv("twilioSID")
		authToken := os.Getenv("twilioAuthToken")
		urlStr := "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Messages.json"

		// Pack up the data for our message
		msgData := url.Values{}
		msgData.Set("To",subcriberPhoneNumbers[i])
		msgData.Set("From",os.Getenv("twilioFromPhoneNumber"))
		msgData.Set("Body",messageRequest.Message)
		msgDataReader := *strings.NewReader(msgData.Encode())

		// Create HTTP request client
		client := &http.Client{}
		req, _ := http.NewRequest("POST", urlStr, &msgDataReader)
		req.SetBasicAuth(accountSid, authToken)
		req.Header.Add("Accept", "application/json")
		req.Header.Add("Content-Type", "application/x-www-form-urlencoded")

		// Make HTTP POST request and return message SID
		resp, _ := client.Do(req)
		if (resp.StatusCode >= 200 && resp.StatusCode < 300) {
		var data map[string]interface{}
		decoder := json.NewDecoder(resp.Body)
		err := decoder.Decode(&data)
		if (err == nil) {
			fmt.Println(data["sid"])
		}
		} else {
			fmt.Println(resp.Status);
		}
	}
	respondWithJson(w, http.StatusOK, r)
}

// Test GET request
func TestEndPoint(w http.ResponseWriter, r *http.Request) {	
	respondWithJson(w, http.StatusOK, "")
}

func respondWithError(w http.ResponseWriter, code int, msg string) {
	respondWithJson(w, code, map[string]string{"error": msg})
}

func respondWithJson(w http.ResponseWriter, code int, payload interface{}) {
	response, _ := json.Marshal(payload)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	w.Write(response)
}

// Parse the configuration file 'config.toml', and establish a connection to DB
func init() {
	config.Read()
}

// Define HTTP request routes
func main() {
	r := mux.NewRouter()

	r.HandleFunc("/artist", GetArtistProfile).Methods("GET")
	r.HandleFunc("/feed", GetFeed).Methods("GET")
	r.HandleFunc("/post", GetPost).Methods("GET")
	r.HandleFunc("/test", TestEndPoint).Methods("GET")
	r.HandleFunc("/upload", UploadPost).Methods("POST")
	r.HandleFunc("/donate", Donate).Methods("POST")
	r.HandleFunc("/subscribe", Subscribe).Methods("POST")
	r.HandleFunc("/broadcast", BroadcastMessage).Methods("POST")

	if err := http.ListenAndServe(":8000", r); err != nil {
		log.Fatal(err)
	}
}