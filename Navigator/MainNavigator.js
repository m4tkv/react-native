import React from 'react';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import {Login} from "../Containers/Login";
import {Images} from "../Containers/Images";
import {Users} from "../Containers/Users";
import {createAppContainer} from "react-navigation";
import {useSelector} from "react-redux";
import shallowEqual from "react-redux/es/utils/shallowEqual";
import {StyleSheet} from "react-native";



export const MainNavigator = () => {
    const {isLogin} = useSelector(state => ({
        isLogin: state.loginReducer.isLogin,
    }), shallowEqual);

    let screens = {
        Users: {screen: Users},
        Login: {
            screen: Login,
            navigationOptions: {title:"Sign In"},
        }
    };

    if (isLogin){
        screens = {
            Users: {screen: Users},
            Images: {screen:Images},
            Login: {
                screen: Login,
                navigationOptions: {title:"Sign Out"},
            }
        };
    }

    let Navigator = createAppContainer(createMaterialTopTabNavigator(screens,{
        initialRouteName: 'Login',
        tabBarOptions:{
            style:styles.nav,
            labelStyle:styles.label
        }
    }));

    return <Navigator/>
};



const styles = StyleSheet.create({
    nav:{
        height:70,
    },
    label:{
        marginTop:35
    }
});