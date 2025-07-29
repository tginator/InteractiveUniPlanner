import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'


// Manage dynamic routes in Expo Router
const Property = () => {
    const {id} = useLocalSearchParams();
  
    return (
    <View>
      <Text>Property {id}</Text>
    </View>
  )
}

export default Property;