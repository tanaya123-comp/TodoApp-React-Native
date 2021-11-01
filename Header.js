import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function Header1(){

    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )

}

const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral',
    },
    title:{
        textAlign:'center',
        color:"#fff",
        fontSize:20,
        fontWeight:'bold',
    }
})