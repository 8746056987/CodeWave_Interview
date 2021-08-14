import React, { Component } from 'react';
import { Text, View,Image,TouchableOpacity ,StyleSheet,Dimensions, Alert} from 'react-native';

class ArticleDisplayScreen extends Component {
  static navigationOptions = {
    headerShown: false,
};
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const thumbnail_Value=navigation.getParam('thumbnail_Value')
   
      const resizeMode = 'center';
      const text = description;
  
      return (
        <View style={[styles.container, {
          flexDirection: "column"
        }]}>
          <View style={{ flex: 2, backgroundColor: "white" }}>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Image style={{height:30,width:30,resizeMode:'cover'}} source={require('../images/backArrow.png')}>

              </Image>
            </TouchableOpacity>
          <Image
              style={{
                flex: 1,
                resizeMode:'contain',
                height: Dimensions.get('window').height / -5,
                width: Dimensions.get('window').width / -5,
                marginTop:-5
              }}
              source={{ uri: thumbnail_Value }}
            />
          </View>
          <View style={{ flex: 3, backgroundColor: "white" }}>
          <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginTop:-10
              }}
            >
              {text}
            </Text>
          </View>
        </View>
      );

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
});
export default ArticleDisplayScreen;
