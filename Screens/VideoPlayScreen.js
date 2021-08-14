import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { WebView } from 'react-native-webview';

class VideoPlayScreen extends Component {
    static navigationOptions = {
        headerShown: false,
    };
    render() {
        const { navigation } = this.props;
        const openUrl = navigation.getParam('Video_Url');
        const thumbnail = navigation.getParam('thumbnail')

        return (
            <View style={[styles.container, {
                flexDirection: "column"
              }]}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                         <Image style={{ height: 30, width: 30, resizeMode: 'cover' }} source={require('../images/backArrow.png')}>
                         </Image>
                    </TouchableOpacity>
                <View style={{ flex: 2, backgroundColor: "#f5f5f5" ,marginTop:30}}>
                 <WebView
                      source = {{ uri:openUrl}}
                     />
                </View>
                <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
                 </View>
              </View>
        );
    }
}

export default VideoPlayScreen;
const styles = StyleSheet.create({
    cardContainer: {
        marginTop: -5,
        overflow: 'hidden',
        height: 350,
        width: 250,
        borderRadius: 0,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 5,
        elevation: 3,
        marginVertical: 20,
        shadowColor: '#F5F5F5',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowOpacity: 0.4

    },
    container: {
        flex: 1,
        padding: 20,
      },
    container: {
        flex: 1,
        padding: 20,
      },
});