import React, {useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View,Text} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getImages} from '../actions/images';
import {ImageCard} from "../Components/ImageCard";
import {Filter} from "../Components/Filter";


export const Images = props => {

    const [filterValue, setFilterValue] = useState('');
    const {images, fetchingImages} = useSelector(state => ({
        images: state.imagesReducer.images,
        fetchingImages: state.imagesReducer.fetchingImages,
    }), shallowEqual);
    const dispatch = useDispatch();
    if (!images.length && !fetchingImages) {
        dispatch(getImages());
    }

    let filteredImages = filterValue !== ''?images.filter(image => image.albumId === +filterValue):images;

    return (
        <View style={styles.main}>
            {!fetchingImages ? (
                <View style={[{alignSelf: 'stretch'},styles.main]}>
                    <Filter filterValue={filterValue} setFilterValue={setFilterValue}/>
                    {filteredImages.length > 0?(
                        <FlatList
                            containerContentStyle={{alignSelf: 'stretch'}}
                            data={filteredImages}
                            renderItem={({item}) => (
                                <ImageCard item={item}/>
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    ):(
                        <View style={[styles.main,{alignItems:'center'}]}>
                            <Text style={styles.text}>Images not found.</Text>
                        </View>
                    )}
                </View>
            ) : (
                <ActivityIndicator style={{alignSelf:'center'}} size="large" color="#0000ff"/>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    text:{
        fontSize:18
    }
});