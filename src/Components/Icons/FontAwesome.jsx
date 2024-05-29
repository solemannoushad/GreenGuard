import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';

const FontAwesome = ({name, color, size}) => {
  return (
    <Icon name={name} color={color || 'white'} size={size || 15} solid />
  )
}

export default FontAwesome