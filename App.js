import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header1 from './Header';
import TodoItem from './TodoItem';
import AddTodo from './addTodo';
import Sandbox from './sandbox';

export default function App() {

  const [todos,setTodos]=useState([
    {todo:"Buy a coffee",key:1},
    {todo:"Listen to a song",key:2},
    {todo:"Draw a painting",key:3}
  ]);

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
        return todos.filter(todo=>todo.key!=key);
    })
  }

  const submitTodo=(text)=>{
    if(text.length>3)
    {
      setTodos((prevTodos)=>{
        return [
          {todo:text,key:Math.random().toString() },
          ...prevTodos
        ]
      })

    }
    else{
      Alert.alert('OOPS','Todos must be 3 chars long',[
        {
          text:"Understood",
          onPress:()=>console.log('Alert close')
        }
      ])
    }
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header1/>
        {/** Header */}
        <View style={styles.content}>
          <AddTodo submitTodo={submitTodo}/>
          {/** Todo form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>


        </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    backgroundColor:'pink',
    flex:1
  },
  list:{
    flex:1,
    marginTop:20,
    backgroundColor:'yellow',
  }
});
