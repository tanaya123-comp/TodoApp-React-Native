import React from 'react';
import { StyleSheet, TextInput,Text, View,FlatList,Button } from 'react-native';

const styles=StyleSheet.create({
    container:{
        paddingTop:40,
        backgroundColor:'#ddd',
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    boxOne:{
        backgroundColor:'violet',
        padding:10,
        flex:1,
    },
    boxTwo:{
        backgroundColor:'red',
        padding:10,
        flex:2
    },
    boxThree:{
        backgroundColor:'green',
        padding:10,
        flex:1
    },boxFour:{
        backgroundColor:'skyblue',
        padding:10,
        flex:2
    }

})

function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>Box1</Text>
            <Text style={styles.boxTwo}>Box2</Text>
            <Text style={styles.boxThree}>Box3</Text>
            <Text style={styles.boxFour}>Box4</Text>
        </View>
    )
}

export default Sandbox
