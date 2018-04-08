import React, { Component, PropTypes } from 'react';
import {
	View,
	Image,
	ListView,
	StyleSheet,
	Dimensions,
} from 'react-native';
// import { Navigation } from 'react-navigation';
import SGListView from 'react-native-sglistview';
import ProgressBar from './ProgessBar';
// import {Card,CardItem,Left,Icon,Body,Right,ProgressiveImage} from 'native-base';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');


export default class NewsFeed extends Component {


	static navigationOptions = {
	headerTitle: 'Feed',
	headerRight: (
		<Button
			onPress={() => alert('This is a button!')}
			title="Info"
			color="#000"
		/>
	),};

   	constructor(props) {
			super(props);
		// const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.stories = [
			{title : 'Title 1',
			topicName: 'topic 1',
			imageurl: 'https://www.gstatic.com/webp/gallery3/1.png',
			stories: 'STOTOTTOTOTOTOTO TPOTOTOTTOTO'
		},
			{title : 'Title 2',
			topicName: 'topic 2',
			imageurl: 'https://www.gstatic.com/webp/gallery3/1.png',
			stories: 'STOTOTTOTOTOTOTO TPOTOTOTTOTO'
		},
			{title : 'Title 3',
			topicName: 'topic 3',
			imageurl: 'https://www.gstatic.com/webp/gallery3/1.png',
			stories: 'STOTOTTOTOTOTOTO TPOTOTOTTOTO'
		},
			{title : 'Title 4',
			topicName: 'topic 4',
			imageurl: 'https://www.gstatic.com/webp/gallery3/1.png',
			stories: 'STOTOTTOTOTOTOTO TPOTOTOTTOTO'
		}];
		this.state = {
			isLoading: true,
			dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
															.cloneWithRows(this.stories)
		}
	}

	renderLoader() {
		return (
			this.state.showLoader ?
			<View><Spinner color='red' /></View> : null
		)
	}

	hideLoader(){
		setTimeout(() => {
			this.setState({showLoader:false})
		}, 1);
	}
	componentDidMount() {
		var self = this;
		// var stories = [
		// 	{title : 'Title 1',
		// 	topicName: 'topic 1',
		// 	imageurl: 'https://www.gstatic.com/webp/gallery3/1.png',
		// 	stories: 'STOTOTTOTOTOTOTO TPOTOTOTTOTO'
		// },
		// 	{title : 'Title 2',
		// 	topicName: 'topic 2',
		// 	imageurl: 'https://www.gstatic.com/webp/gallery3/1.png',
		// 	stories: 'STOTOTTOTOTOTOTO TPOTOTOTTOTO'
		// },
		// 	{title : 'Title 3',
		// 	topicName: 'topic 3',
		// 	imageurl: 'https://www.gstatic.com/webp/gallery3/1.png',
		// 	stories: 'STOTOTTOTOTOTOTO TPOTOTOTTOTO'
		// },
		// 	{title : 'Title 4',
		// 	topicName: 'topic 4',
		// 	imageurl: 'https://www.gstatic.com/webp/gallery3/1.png',
		// 	stories: 'STOTOTTOTOTOTOTO TPOTOTOTTOTO'
		// }];
		this.setState({
		// 	// dataSource: this.state.dataSource.cloneWithRows(stories),
			isLoading: false
		});
		setTimeout(function () {
			self.setState({ isLoading: false });
		}, 1);

		}

    render() {
			const { navigate } = this.props.navigation;
		return (
			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
				<View >
				// style={styles.listContainer}>
					<SGListView
						dataSource={this.state.dataSource}
						renderRow={(item) => this.renderCards(item,navigate)}
						// renderRow={this.renderCards}
						pageSize={10}
						stickyHeaderIndices={[]}
						onEndReachedThreshold={1}
						initialListSize={10}
						renderFooter={(event)=>this.renderLoader(event)}
						scrollRenderAheadDistance={4}
						onEndReached={(event)=>this.hideLoader(event)}
					/>
				</View>
		);
	}



	renderCards(stories,navigate) {
		// console.log("Nav is " + navigate);
		return (
			<Container>
			 <Content>
				 // <Card >
					 <CardItem>
						 <Left>
							 <Thumbnail source={{uri:"../images/logo_1.png"}} />
							 <Body>
								 <Text>{stories.topicName}</Text>
								 <Text note>GeekyAnts</Text>
							 </Body>
						 </Left>
					 </CardItem>
					 <CardItem cardBody>
						 <Image source={{uri: "../images/logo_1.png"}} style={{height: 200, width: null, flex: 1}}/>
					 </CardItem>
					 <CardItem>
						 <Right>
							 <Button transparent onPress={()=> navigate('Video')}>
							 		<Text>Watch Now</Text>
							 </Button>
						 </Right>
						 // <Body>
							//  <Button transparent>
							// 	 <Icon active name="chatbubbles" />
							// 	 <Text>4 Comments</Text>
							//  </Button>
						 // </Body>
						 // <Right>
							//  <Text>11h ago</Text>
						 // </Right>
					 </CardItem>
				 </Card>
			 </Content>
		 </Container>
			// <Card>
			// 	<CardItem>
			// 		// <Left style={{flex:0.8}}>
			// 		 	// <Icon name="ios-book" />
			// 			<Body>
			// 				<Text style={{fontWeight:'bold',fontSize:17}}>{stories.title} {stories.topicName}</Text>
			// 				// <Text note style={{fontSize:15}}>{stories.topicName}</Text>
			// 			</Body>
			// 		// </Left>
			// 		// <Right style={{flex:0.2}}>
			// 		// 	<Icon name="ios-heart"/>
			// 		// </Right>
			// 	</CardItem>
			// 	// <CardItem cardBody>
			// 	// 	<ProgressiveImage source={{ uri: stories.imageurl }} thumbnail={require("../images/logo_1.png")} style={{ width: viewportWidth, height: 170 }} thumbnailresizeMode={"cover"} thumbnailkey={"pimg"} />
			// 	// </CardItem>
			// 	// <CardItem content>
			// 	// 	<Text>{stories.story}</Text>
			// 	// </CardItem>
			// </Card>
		)
	}
}
const styles = StyleSheet.create({
	progressBar: {
		flex: 1,
		justifyContent: 'center'
	}
});
