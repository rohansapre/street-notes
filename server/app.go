package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	. "street-notes/server/config"
)

var config = Config{}

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