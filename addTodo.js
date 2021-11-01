import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { createPortal } from 'react-dom';
import { StyleSheet, TextInput, View,FlatList,Button } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';



export default function AddTodo({ submitTodo }){

    const [text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);
    }

    return (
        <View>
            <TextInput
                placeholder="new todo.."
                onChangeText={changeHandler}
            />
            <Button onPress={()=>{submitTodo(text); setText('');}} title="add todo" color="coral" />
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})