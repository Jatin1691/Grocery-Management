import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItem from './AllItem';
import Create from './Create';




const HomeScreen = () => {
    const [data,setdata]=useState([
        { id: 1, name: "Rice", stock: 15, unit: "kg" },
        { id: 2, name: "Wheat", stock: 20, unit: "kg" },
        { id: 3, name: "Sugar", stock: 10, unit: "kg" },
        { id: 4, name: "Salt", stock: 8, unit: "kg" },
        { id: 5, name: "Milk", stock: 25, unit: "liters" }
       
    ]);

    const [view,setView]=useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view===0 ?{backgroundColor:"green"}: null]} onPress={()=>setView(0)}>
            <Text style={[styles.btnText,view===0 ? {color:"white"}:null]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view===1 ?{backgroundColor:"green"}: null]} onPress={()=>setView(1)}>
            <Text style={[styles.btnText,view===1 ? {color:"white"}:null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view===2 ?{backgroundColor:"green"}: null]} onPress={()=>setView(2)}>
            <Text style={[styles.btnText,view===2 ? {color:"white"}:null]}>Create</Text>
        </Pressable>
      </View>

        {view===0 && <AllItem data={data}/>}
        {view===1 && <AllItem data={data.filter((item)=>item.stock<20)}/>}
        {view===2 && <Create data={data} setdata={setdata}/>}

    </View>


  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height:"100%",
        padding: "4%",
        backgroundColor: "#ffffff"
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        color:"#333333"
    },
    buttonContainer:{
        flexDirection:"row",
        gap:10,
        marginVertical: 10
    },
    button:{
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius: 50,
        borderWidth:0.8,
        borderColor: "green"
    },
    btnText:{
        fontSize:14,
        color:"green"
    }

})