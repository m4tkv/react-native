import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {SlideProps} from "./SlideProps";


export const SlideDown = props => {

    const obj = props.obj;
    const [isShowData, setIsShowData] = useState(false);
    let bounceValue = new Animated.Value(0);
    let rotateValue = new Animated.Value(0);

    const spin = rotateValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    });

    useEffect(() => {
        let height = 0;
        let angle = 0;

        if (isShowData) {
            height = 150;
            angle = 180;
        }

        Animated.spring(
            bounceValue,
            {
                toValue: height,
            }
        ).start();

        Animated.spring(
            rotateValue,
            {
                toValue: angle,
            }
        ).start();
    }, [isShowData]);

    const header = props.header;
    return (
        <View style={styles.slideDown}>
            <TouchableOpacity style={styles.row} onPress={() => setIsShowData(!isShowData)}>
                <Text style={[styles.text, styles.textDefault]}>
                    {header}
                </Text>
                <Animated.View style={[styles.buttonSlideDown,{transform:[{rotate:spin}]}]}>
                    <Entypo name={"chevron-down"} color={'#fff'} size={20}/>
                </Animated.View>
            </TouchableOpacity>
            <Animated.View
                style={[styles.subView,
                    {maxHeight: bounceValue}]}
            >
                {Object.keys(obj).map((key) => {
                    return <SlideProps key={key} propertyVal={obj[key]} propertyKey={key}/>
                })}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontWeight: "bold",
    },
    textDefault: {
        fontSize: 18
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    buttonSlideDown: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideDown: {
        borderWidth: .5,
        borderColor: '#fff',
        borderRadius: 5,
        marginTop: 3,
        marginBottom: 3,
        padding: 10
    },
});