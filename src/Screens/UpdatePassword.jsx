import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {GlobalStyles} from '../Style/Global';
import Header from '../Components/Header/Header';
import KeyboardAvoidingContainer from '../Components/KeyboardAvoidingContainer';
import TextField from '../Components/TextField/TextField';
import BtnPrimary from '../Components/Buttons/BtnPrimary';

const UpdatePassword = ({navigation}) => {

  const [credentials, setCredentials] = useState({password: "", confirmPass: ""});

  const handleChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  return (
    <View style={GlobalStyles.container}>
      <Header title="New Password" />
      <KeyboardAvoidingContainer>
        <Text
            style={{fontFamily: 'Poppins-Regular', fontSize: 19, color: '#000000'}}>
            Set a new password
        </Text>
        <TextField
            placeholder="********"
            label="New Password"
            iconSource={require('../../assets/icons/password.png')}
            password={true}
            value={credentials.password}
            onChangeText={(val)=> handleChange("password", val)}
        />
        <TextField
            placeholder="********"
            label="Confirm New Password"
            iconSource={require('../../assets/icons/password.png')}
            password={true}
            value={credentials.confirmPass}
            onChangeText={(val)=> handleChange("confirmPass", val)}
        />
        <BtnPrimary
            title="Update Password"
            onPress={()=> navigation.navigate("Login")}
        />
      </KeyboardAvoidingContainer>
    </View>
  );
};

export default UpdatePassword;
