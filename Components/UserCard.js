import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ADDRESS, COLORS, COMPANY} from "../Constants/system";
import {FontAwesome, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import {SlideDown} from "./SlideDown";


export const UserCard = props => {

    const item = props.item;
    const index = props.index;

    return (
        <View style={[styles.card, {backgroundColor: COLORS[index % COLORS.length]}]}>
            <View style={styles.row}>
                <Text style={[styles.text, styles.textLarge]}>
                    {item.username}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={[styles.text, styles.textDefault]}>
                    {item.name}
                </Text>
            </View>
            <View style={styles.row}>
                <View style={styles.icon}>
                    <MaterialIcons name="email" size={25} color="#fff"/>
                </View>
                <Text style={[styles.text, styles.textDefault]}>
                    : {item.email}
                </Text>
            </View>
            <View style={styles.row}>
                <View style={styles.icon}>
                    <FontAwesome name="phone" size={25} color="#fff"/>
                </View>
                <Text style={[styles.text, styles.textDefault]}>
                    : {item.phone}
                </Text>
            </View>
            <View style={styles.row}>
                <View style={styles.icon}>
                    <MaterialCommunityIcons name="web" size={25} color="#fff"/>
                </View>
                <Text style={[styles.text, styles.textDefault]}>
                    : {item.website}
                </Text>
            </View>
            <SlideDown obj={item.address} header={ADDRESS}/>
            <SlideDown obj={item.company} header={COMPANY}/>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        opacity: .8,
        padding: 20,
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
    },
    textLarge: {
        fontSize: 25
    },
    textDefault: {
        fontSize: 18
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 3,
        paddingTop: 3,
    },
    icon: {
        marginRight: 5,
        width: 25,
    }
});