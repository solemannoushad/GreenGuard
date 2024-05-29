import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { TextFieldStyles } from '../../Style/ComponentsStyle'
import { placeholderGray, primaryClr, textFieldBorder } from '../../Style/Global';

const TextField = (props) => {

  const [isFocused, setisFocused] = useState(false);

  const handleFocus = () => {
      setisFocused(true);
    };
  
    const handleBlur = () => {
      setisFocused(false);
    };


  return (
    <View>
      {props.label !== undefined && <Text style={TextFieldStyles.label}>{props.label}</Text>}
      <View>
        { props.iconSource && <Image
          source={props.iconSource}
          style={[TextFieldStyles.icon, {tintColor: isFocused || props.value.trim() !== '' ? primaryClr : placeholderGray}]}
        />}
        {/* { props.iconSource && <Image
          source={props.iconSource}
          style={[TextFieldStyles.icon, {tintColor: isFocused || props.value.trim() !== '' ? primaryClr : placeholderGray}]}
        />} */}
        <TextInput
          style={[TextFieldStyles.textFieldMain, {paddingLeft: props.iconSource ? 48 : 12} , { borderColor: isFocused || props.value.trim() !== '' ? primaryClr : textFieldBorder}]}
          value={props.value}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          placeholderTextColor={props.placeholderClr ? props.placeholderClr : placeholderGray}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={props.password}
          editable={props.disabled ? false : true}
        />
      </View>
    </View>
  )
}

export default TextField
