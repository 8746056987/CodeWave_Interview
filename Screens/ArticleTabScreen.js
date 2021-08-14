import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput, Alert ,ImageBackground } from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class ArticleTabScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      feed_Array: ''
    }
  }
  componentDidMount() {
    this.getServerData();
  }
  getServerData = () => {
    var value = []
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://cw-tech.herokuapp.com/feed.json", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result,"response")
        for (var i = 0; i < result.feed.length; i++) {
          value.push({
            "title": result.feed[i].title,
            "thumbnail": result.feed[i].thumbnail,
            "author": result.feed[i].author.name,
            "type":result.feed[i].type,
            "video_link":result.feed[i].video_link,
            "description":result.feed[i].description
          })
        }
        this.setState({ feed_Array: value });
        this.forceUpdate();
      }
      )
      .catch(error => console.log('error', error));
  }
  goToScreen = (item) => {
    if(item.type=="video"){
      this.props.navigation.navigate('VideoPlayScreen', { Video_Url: item.video_link,thumbnail:item.thumbnail }); 
    }
    else if(item.type=="article"){
      this.props.navigation.navigate('ArticleDisplayScreen', { thumbnail_Value: item.thumbnail,description:item.description }); 
    }
  }
  renderItemfeed(item) {
    return (
      <TouchableOpacity onPress={() => this.goToScreen(item)}>
        <View style={styles.CardContainerStyle}>
          <ImageBackground source={{ uri: item.thumbnail }} style={styles.thumbnail}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.titleText}>Author Name:{item.author}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }
  renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={text => this.searchFilterFunction(text)}
          status='info'
          placeholder='Search here......'
          placeholderTextColor='black'
          style={{
            borderRadius: 25,
            borderColor: 'black',
            borderWidth:1,
            backgroundColor: '#dddd',
            width: 350,
            paddingHorizontal:20
          }}
          textStyle={{ color: '#000' }}
        />
      </View>
    );
  };
  searchFilterFunction = text => {
    if (text.length <= 0) {
      this.getServerData();
      return
    }
    const newData = this.state.feed_Array.filter(item => {
      const itemData = `${item.title.toUpperCase()}   
      ${item.author.toUpperCase()}
      ${item.author.toLowerCase()}
      ${item.title.toLowerCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ feed_Array: newData });
  };
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.feed_Array}
          renderItem={({ item }) => this.renderItemfeed(item)}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  CardContainerStyle: {
    width: Dimensions.get('window').width / -5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 1,
    color: 'red',
    backgroundColor: '#f5f5f5',
  },
  thumbnail: {
    height: 200,
    width: 360,
    resizeMode: 'contain'
  },
  titleText: {
    fontSize: hp('1.5%'),
    paddingHorizontal: 4,
    marginTop: 5,
    color:'white',
    fontWeight:'bold'
  },
})

export default ArticleTabScreen;