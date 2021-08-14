import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TabScreen from './Screens/TabScreen'
import AllTabScreen from './Screens/AllTabScreen'
import ArticleTabScreen from './Screens/ArticleTabScreen'
import VideoTabScreen from './Screens/VideoTabScreen'
import VideoPlayScreen from './Screens/VideoPlayScreen'
import ArticleDisplayScreen from './Screens/ArticleDisplayScreen'
const App = createStackNavigator({
    TabScreen:{screen:TabScreen},
    AllTabScreen:{screen:AllTabScreen},
    ArticleTabScreen:{screen:ArticleTabScreen},
    VideoTabScreen:{screen:VideoTabScreen},
    VideoPlayScreen:{screen:VideoPlayScreen},
    ArticleDisplayScreen:{screen:ArticleDisplayScreen}
},
    {
        initialRouteName: 'TabScreen',
    }

);
export default createAppContainer(App);
