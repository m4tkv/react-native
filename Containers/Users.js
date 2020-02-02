import React from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../actions/users';
import {UserCard} from "../Components/UserCard";


export const Users = () => {

    const {users, fetchingUsers} = useSelector(state => ({
        users: state.usersReducer.users,
        fetchingUsers: state.usersReducer.fetchingUsers,
    }), shallowEqual);
    const dispatch = useDispatch();
    if (!users.length && !fetchingUsers) {
        dispatch(getUsers());
    }
    return (
        <View style={styles.main}>
            {!fetchingUsers ? (
                <ScrollView>
                    {users.map((item, index) => {
                        return <UserCard key={item.id.toString()} item={item} index={index} />
                    })}
                </ScrollView>
            ) : (
                <ActivityIndicator size="large" color="#0000ff"/>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    main:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});