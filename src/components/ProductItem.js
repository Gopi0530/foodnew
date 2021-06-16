import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const ProductItem = (props) => {


    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('Product', {
               id: props.product.id
            })
        
        }}>
            <View style={styles.container}>
                <Image source={{ uri: props.product.image }} style={styles.imageStyle} />
                <Text style={styles.titleStyle}>{props.product.title}</Text>
                <Text style={styles.priceStyle}>₹ {props.product.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 310,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginRight: 15
    },
    imageStyle: {
        width: 300,
        height: 120,
        borderRadius: 4
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 14,
        flexWrap: 'wrap'
    },
    priceStyle: {

    }
})
export default ProductItem;