import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native';
import yelp from '../api/yelp';

const ProductShowScreen = (props) => {
    const [product, setProduct] = useState({})
    const [errorMessage, setErrorMessage] = useState('')

    const loadProduct = (id) => {
        yelp.get('/products/' + props.route.params.id).then(response => {
            setProduct(response.data)
        }).catch(error => { setErrorMessage("Something went wrong") })
    }


    useEffect(() => {
        loadProduct()
    }, [])

    return (
        <View style={styles.container}>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Image source={{ uri: product.image }} style={styles.imageStyle} />
            <Text style={styles.titleStyle}>{product.title}</Text>
            <Text style={styles.descStyle}>{product.description}</Text>
            <View style={styles.childContainerStyle}>
                <Text style={styles.priceStyle}>₹ {product.price}</Text>
                <Text style={{ flex: 1 }}>{product.category}</Text>
               
            </View>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: 'white',
        borderRadius: 5,
      
    },
    childContainerStyle: {
        flexDirection: 'row',
        alignContent: 'space-between',
        padding: 15
    },
    imageStyle: {
        width: Dimensions.width,
        height: 250
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 15
    },
    priceStyle: {
        flex: 1,
        fontSize: 20,
    },
    descStyle: {
        paddingHorizontal: 15,
        
    }
})

export default ProductShowScreen;