import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {GlobalStyles, primaryClr} from '../Style/Global';
import Header from '../Components/Header/Header';
import KeyboardAvoidingContainer from '../Components/KeyboardAvoidingContainer';
import TextField from '../Components/TextField/TextField';
import BtnIcon from '../Components/Buttons/BtnIcon';
import { LoginStyles } from '../Style/ScreenStyles';
import Seperator from '../Components/Seperator';
import LoginWith from '../Components/Buttons/LoginWith';
import FontAwesome from '../Components/Icons/FontAwesome';

const Register = ({navigation}) => {

  const [credentials, setCredentials] = useState({name: "", email: "" , phone: "", password: "", confirmPass: ""});

  const handleChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  return (
    <View style={GlobalStyles.container}>
        <Header title="Register" />
      <KeyboardAvoidingContainer>
        <TextField
          label="Full Name"
          placeholder="Soleman Noushad"
          iconSource={require('../../assets/icons/profile.png')}
          value={credentials.name}
          onChangeText={(val)=> handleChange("name", val)}
        />
        <TextField
          label="Email Address"
          placeholder="demo@email.com"
          iconSource={require('../../assets/icons/email.png')}
          value={credentials.email}
          onChangeText={(val)=> handleChange("email", val)}
        />
        <TextField
          label="Phone"
          placeholder="999999999"
          iconSource={require('../../assets/icons/phone.png')}
          value={credentials.phone}
          onChangeText={(val)=> handleChange("phone", val)}
        />
        <TextField
          label="Password"
          placeholder="*********"
          iconSource={require('../../assets/icons/password.png')}
          value={credentials.password}
          onChangeText={(val)=> handleChange("password", val)}
          password={true}
        />
        <TextField
          label="Confirm Password"
          placeholder="*********"
          iconSource={require('../../assets/icons/password.png')}
          value={credentials.confirmPass}
          onChangeText={(val)=> handleChange("confirmPass", val)}
          password={true}
        />
        <BtnIcon
          position="right"
          title="Signup"
          icon={<FontAwesome name={"arrow-right"} color="white" />}
          onPress={()=> navigation.navigate("Login")}
        />
        <View>
          <Text style={LoginStyles.loginTxt}>
            Already have an account?{' '}
            <Text
              style={{
                color: primaryClr,
                fontFamily: 'Poppins-Bold',
                textDecorationLine: 'underline',
              }}
              onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </View>
        <Seperator/>
        <LoginWith
            title="Signup with Google"
            iconSource={require('../../assets/icons/google.png')}
          />
          <LoginWith
            title="Signup with Facebook"
            iconSource={require('../../assets/icons/facebook.png')}
          />
      </KeyboardAvoidingContainer>
    </View>
  );
};

export default Register;
