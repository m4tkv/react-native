import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';


export const ImageCard = props => {

    const item = props.item;
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.header}>Album # {item.albumId}</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image source={{uri:item.url}} style={styles.image} resizeMode={'contain'}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    imgContainer:{
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#f0f0f0',
        borderBottomWidth:.3,
        borderBottomColor:'#8c8c8c',
        borderTopWidth:.3,
        borderTopColor:'#8c8c8c'
    },
    image:{
        height: 300,
        width: 'auto'
    },
    card: {
        backgroundColor: "#e0e0e0",
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingTop:20,
        paddingBottom:20
    },
    row:{
        paddingLeft:20,
        paddingRight:20
    },
    header:{
        fontWeight:'bold',
        fontSize:18
    },
    text:{
        fontSize: 18,
        textAlign: 'center'
    }
});