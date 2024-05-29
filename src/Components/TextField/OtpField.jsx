import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {OtpFieldStyles, TextFieldStyles} from '../../Style/ComponentsStyle';
import {placeholderGray, primaryClr, textFieldBorder} from '../../Style/Global';

const OtpField = props => {
  const [isFocused, setisFocused] = useState(false);

  const handleFocus = () => {
    setisFocused(true);
  };

  const handleBlur = () => {
    setisFocused(false);
  };

  return (
    <TextInput
      style={[
        OtpFieldStyles.textFieldMain,
        {borderColor: isFocused || props.value.trim() !== '' ? primaryClr : textFieldBorder},
      ]}
      value={props.value}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      placeholderTextColor={placeholderGray}
      onFocus={handleFocus}
      onBlur={handleBlur}
      secureTextEntry={props.password}
      maxLength={1}
      keyboardType='number-pad'
    />
  );
};

export default OtpField;
