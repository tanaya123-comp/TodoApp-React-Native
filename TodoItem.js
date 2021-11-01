import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import {MaterialIcons} from '@expo/vector-icons';


export default function TodoItem({ item,pressHandler }){

    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item} >
                <MaterialIcons name="delete" size={20} color="#333"/>
            <Text style={styles.itemText}>
                {item.todo}
            </Text>
            </View>
        </TouchableOpacity>
    )

}

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10
    }
})