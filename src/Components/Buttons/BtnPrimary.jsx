import React from 'react'
import { Text, Pressable } from 'react-native'
import { BtnPrimaryStyle } from '../../Style/ComponentsStyle'
import { BtnGlobalStyles } from '../../Style/Global'

const BtnPrimary = (props) => {
  return (
    <Pressable style={[BtnPrimaryStyle.btnMain, BtnGlobalStyles.btnMain]} onPress={props.onPress}>
        <Text style={BtnPrimaryStyle.btnText}>{props.title}</Text>
    </Pressable>
  )
}

export default BtnPrimary
