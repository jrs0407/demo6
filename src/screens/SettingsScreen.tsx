import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function SettingsScreen() {
  return (
    <View>
      <Text>Settings 1 (Prueba de imagen)</Text>
      <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
       style={{width: 200, height: 200}} />
    </View>
  )
}
// /wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg
const styles = StyleSheet.create({})