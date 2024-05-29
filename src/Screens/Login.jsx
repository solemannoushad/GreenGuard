import {Image, View, Text} from 'react-native';
import {GlobalStyles, loginWith, primaryClr} from '../Style/Global';
import {LoginStyles} from '../Style/ScreenStyles';
import KeyboardAvoidingContainer from '../Components/KeyboardAvoidingContainer';
import TextField from '../Components/TextField/TextField';
import BtnIcon from '../Components/Buttons/BtnIcon';
import Seperator from '../Components/Seperator';
import { useState } from 'react';
import FontAwesome from '../Components/Icons/FontAwesome';
import LoginWith from '../Components/Buttons/LoginWith';

const Login = ({navigation}) => {

  const [credentials, setCredentials] = useState({email: "" , password: ""});

  const handleChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value
    });
  };


  return (
    <View style={GlobalStyles.container}>
      <KeyboardAvoidingContainer>
        <View style={LoginStyles.imgMain}>
          <Image
            source={require('../../assets/images/loginVector.png')}
            style={LoginStyles.loginIllustration}
          />
        </View>
        <View>
          <Text style={GlobalStyles.heading}> Login </Text>
          <TextField
            label="Email Address"
            placeholder="Email Address"
            iconSource={require('../../assets/icons/email.png')}
            value={credentials.email}
            onChangeText={(val)=> handleChange("email", val)}
          />
          <View style={LoginStyles.passField}>
            <TextField
              label="Password"
              placeholder="Password"
              iconSource={require('../../assets/icons/password.png')}
              value={credentials.password}
              onChangeText={(val)=> handleChange("password", val)}
              password={true}
            />
            <Text onPress={()=> navigation.navigate("Forget")} style={LoginStyles.forgetTxt}>Forget?</Text>
          </View>
          <BtnIcon
            title="Login"
            icon={<FontAwesome name="paper-plane" color={"white"} size={15}/>}
            position="left"
            onPress={()=> navigation.navigate("Home")}
          />
          <View>
            <Text style={LoginStyles.loginTxt}>
              New to this platform?{' '}
              <Text
                style={{
                  color: primaryClr,
                  fontFamily: 'Poppins-Bold',
                  textDecorationLine: 'underline'
                }}
                onPress={()=> navigation.navigate("Register")}
              >
                Register
              </Text>
            </Text>
          </View>
          <Seperator />
          <LoginWith
            title="Login with Google"
            iconSource={require('../../assets/icons/google.png')}
          />
          <LoginWith
            title="Login with Facebook"
            iconSource={require('../../assets/icons/facebook.png')}
          />
        </View>
      </KeyboardAvoidingContainer>
    </View>
  );
};

export default Login;
