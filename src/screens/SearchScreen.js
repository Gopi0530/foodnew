import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useProduct from '../hooks/useProduct';
import ProductList from './ProductList';


const SearchScreen = ({ navigation }) => {
  
    const [term, setTerm] = useState('')
    const [products, errorMessage] = useProduct()

    const filterProducts = (one, two) => {
        return products.filter((product) => {
            return product.price > one && product.price <= two
        })
    }

    return (
        <View style={{ marginLeft: 10, flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log("On Term Submit--new")} />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            <ScrollView>
                <ProductList title="Cost Effective" products={filterProducts(0, 10)} navigation = { navigation} />
                <ProductList title="Affordable Pricer" products={filterProducts(10, 50)} navigation = { navigation}/>
                <ProductList title="Big Pricer" products={filterProducts(50, 1000000000000000000)} navigation = { navigation}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    errorStyle: {
        color: 'red',
        marginHorizontal: 10,
        fontSize: 15
    }
})

export default SearchScreen;