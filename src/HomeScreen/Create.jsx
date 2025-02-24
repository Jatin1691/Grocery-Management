import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native';

const Create = ({data,setdata}) => {
  const [name,setName]=useState('');
  const [stock,setStock]=useState('');
  const [isEdit,setIsEdit]=useState(false);
  const [editItemId,setEditItemId]=useState(null);
  const addItemHandler=()=>{
    const newItem={
      id: Date.now(),
      name:name,
      stock:stock
    }

    setdata([...data,newItem]);
    setName('');
    setStock('');
  }

  const addDeleteHandler=(id)=>{
     setdata(data.filter((item)=>item.id!=id))
  }

  const addEditHandler=(items)=>{
     setIsEdit(true);
     setName(items.name);
     setEditItemId(items.id);

  }

  const updateItemHandler=()=>{
    setdata(data.map((item)=>(
      item.id===editItemId ? {...item,name:name ,stock:stock}: item
    )))
    setName('');
    setStock('');
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter Name here...'
        placeholderTextColor="#999"
        value={name}
        onChangeText={(item)=>setName(item)}
        style={styles.input}
      />
      <TextInput
        placeholder='Enter Stock Amount'
        placeholderTextColor="#999"
        value={stock}
        onChangeText={(item)=>setStock(item)}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={()=>isEdit ? updateItemHandler() :addItemHandler()}>
        <Text style={styles.AddText}>{isEdit ? 'save Edit' : 'Add Item'}</Text>
      </Pressable>

       <View style={styles.headingContainer}>
              <Text style={styles.headingText}>All Item in the Stock</Text>
            </View>
      
            <FlatList 
             data={data}
             keyExtractor={(item)=>item.id}
             renderItem={({item})=>(
              <View style={[styles.ItemContainer, {backgroundColor:item.stock<20 ? "#ffcccc":"#b3f66a"}]}>
                 <Text style={styles.ItemText}>{item.name}</Text>
                 <Text style={styles.ItemText}>{item.stock}</Text>
                 <View style={{flexDirection:"row",gap:10}}>
                 <Pressable onPress={()=>addEditHandler(item)}>
                 <Text style={styles.ItemText}>Edit</Text>
                 </Pressable>
                 <Pressable onPress={()=>addDeleteHandler(item.id)}>
                 <Text style={styles.ItemText}>Delete</Text>
                 </Pressable>
                 
                 </View>
              </View>
             )}
             contentContainerStyle={{gap:10}}
            />
      
    </View>
  )
}

export default Create

const styles = StyleSheet.create({
  container:{
    padding:"3%",
    gap:15
  },
  input:{
    borderWidth:1.5,
    borderRadius: 10,
    borderColor: "#4F7942",
    paddingHorizontal:10,
    paddingVertical:15
  },
  button:{
     borderWidth: 1,
     borderRadius:7,
     paddingHorizontal:10,
     paddingVertical:15,
     backgroundColor:"#Cabfeeff",
     justifyContent:"center",
     alignItems:"center"
  },
  AddText:{
    fontSize:16,
    fontWeight:"bold"
  },headingContainer:{
    flexDirection:"row",
    paddingVertical: 10,
    paddingHorizontal:10,
    justifyContent:"space-between"
  },
  headingText:{
    fontSize:18,
    fontWeight:"bold"
  },
  ItemContainer:{
    flexDirection:"row",
    borderRadius:7,
    padding:10,
    justifyContent:"space-between"
  },
  ItemText:{
     fontSize:15,
    fontWeight:"semibold"
  }
})