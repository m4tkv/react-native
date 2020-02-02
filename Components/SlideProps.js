import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export const SlideProps = props => {

    const propertyVal = props.propertyVal;
    const propertyKey = props.propertyKey;
    return (
        <View>
            {typeof propertyVal === 'object' ? (
                <View>
                    {/*I know that the object is on the second level*/}
                    <Text style={[styles.text, styles.textDefault]}>{propertyKey} :</Text>
                    <View style={[styles.row,{justifyContent: 'space-around'}]}>
                        {Object.keys(propertyVal).map((key) => {
                            return <Text key={key}
                                         style={[styles.text, styles.textSmall]}>
                                {key} : {propertyVal[key]}
                            </Text>
                        })}
                    </View>
                </View>
            ) : (
                <View style={styles.row}>
                    <Text style={[styles.text, styles.textDefault]}>
                        {propertyKey} :&nbsp;
                    </Text>
                    <Text style={[styles.text, styles.textSmall,{justifyContent: 'flex-start'}]}>{propertyVal}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#fff',
    },
    textSmall: {
        fontSize: 15
    },
    textDefault: {
        fontSize: 19,
        fontWeight: "bold",
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap',
    }
});