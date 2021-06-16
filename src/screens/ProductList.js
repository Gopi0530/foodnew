import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import ProductItem from '../components/ProductItem';


const ProductList = ({ title, products, navigation }) => {
    return (
        <View style={{ marginVertical: 0 }}>
            <Text style={styles.titleStyle}>{title} </Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                data={products}
                renderItem={({ item }) => {
                    return <ProductItem product={item} navigation = { navigation} />
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5

    }
})

export default ProductList;

