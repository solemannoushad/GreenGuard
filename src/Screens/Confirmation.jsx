import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {GlobalStyles} from '../Style/Global';
import Header from '../Components/Header/Header';
import KeyboardAvoidingContainer from '../Components/KeyboardAvoidingContainer';
import BtnPrimary from '../Components/Buttons/BtnPrimary';
import OtpField from '../Components/TextField/OtpField';

const Confirmation = ({navigation}) => {

  const [credentials, setCredentials] = useState({otp1: "" , otp2: "" , otp3: "" , otp4: "" , otp5: ""});

  const handleChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  return (
    <View style={GlobalStyles.container}>
      <Header title="OTP" />
      <KeyboardAvoidingContainer>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 17,
            color: '#000000',
          }}>
          We sent a reset link to user@email.com enter 5 digit code that
          mentioned in the email
        </Text>
        <View style={{
            flexDirection: 'row',
            marginVertical: 20
        }}>
            <OtpField
            placeholder="0"
            value={credentials.otp1}
            onChangeText={(val)=> handleChange("otp1", val)}
            />
            <OtpField
            placeholder="0"
            value={credentials.otp2}
            onChangeText={(val)=> handleChange("otp2", val)}
            />
            <OtpField
            placeholder="0"
            value={credentials.otp3}
            onChangeText={(val)=> handleChange("otp3", val)}
            />
            <OtpField
            placeholder="0"
            value={credentials.otp4}
            onChangeText={(val)=> handleChange("otp4", val)}
            />
            <OtpField
            placeholder="0"
            value={credentials.otp5}
            onChangeText={(val)=> handleChange("otp5", val)}
            />
        </View>
        <BtnPrimary
            title="Reset Password"
            onPress={()=> navigation.navigate("UpdatePassword")}
        />
      </KeyboardAvoidingContainer>
    </View>
  );
};

export default Confirmation;
