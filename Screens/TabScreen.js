import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import AllTabScreen from './AllTabScreen';
import ArticleTabScreen from './ArticleTabScreen'
import VideoTabScreen from './VideoTabScreen'

export default createMaterialTopTabNavigator({
    AllTabScreen: {
        screen: AllTabScreen,
        headerShown: false,
        navigationOptions: {
            tabBarLabel: 'All',
        }
    },
    ArticleTabScreen: {
        screen: ArticleTabScreen,
        header: 'none',
        navigationOptions: {
            tabBarLabel: 'Article',
        }
    },
    VideoTabScreen: {
        screen: VideoTabScreen,
        headerShown: false,
        navigationOptions: {
            tabBarLabel: 'Video',
        }
    },
});
