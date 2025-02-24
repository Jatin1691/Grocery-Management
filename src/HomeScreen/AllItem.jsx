import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItem = ({data}) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Item</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList 
       data={data}
       keyExtractor={(item)=>item.id}
       renderItem={({item})=>(
        <View style={[styles.ItemContainer, {backgroundColor:item.stock<20 ? "#ffcccc":"#b3f66a"}]}>
           <Text style={styles.ItemText}>{item.name}</Text>
           <Text style={styles.ItemText}>{item.stock}</Text>
        </View>
       )}
       contentContainerStyle={{gap:10}}
      />
    </View>
  )
}

export default AllItem

const styles = StyleSheet.create({
  headingContainer:{
    flexDirection:"row",
    paddingVertical: 10,
    paddingHorizontal:10,
    justifyContent:"space-between"
  },
  headingText:{
    fontSize:16,
    fontWeight:"500"
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