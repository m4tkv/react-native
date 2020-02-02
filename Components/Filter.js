import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";



export const Filter = props => {

    const filterValue = props.filterValue;
    const setFilterValue = props.setFilterValue;
    return (
        <View style={{alignSelf: 'stretch'}}>
            <Input
                placeholder='Enter album ID'
                leftIcon={
                    <Icon
                        name='filter'
                        size={18}
                        color='black'
                    />
                }
                label={"filter"}
                containerStyle={styles.inputContainer}
                leftIconContainerStyle={styles.leftIconContainerStyle}
                value={filterValue}
                onChange={(e) => setFilterValue(e.nativeEvent.text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    leftIconContainerStyle: {
        marginRight: 8
    },
    inputContainer:{
        padding:10,
    }
});