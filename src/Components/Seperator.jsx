import React from 'react'
import { Text, View } from 'react-native'
import { SeparatorStyle } from '../Style/ComponentsStyle'

const Seperator = () => {
  return (
    <View style={SeparatorStyle.main}>
        <View style={SeparatorStyle.line}></View>
        <Text style={SeparatorStyle.text}>or</Text>
        <View style={SeparatorStyle.line}></View>
    </View>
  )
}

export default Seperator
