import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { GlobalStyles } from '../Style/Global'
import Header from '../Components/Header/Header'
import KeyboardAvoidingContainer from '../Components/KeyboardAvoidingContainer'
import TextField from '../Components/TextField/TextField'
import BtnPrimary from '../Components/Buttons/BtnPrimary'

const Forget = ({navigation}) => {

    const [credentials, setCredentials] = useState({email: ""});

    const handleChange = (name, value) => {
      setCredentials({
        ...credentials,
        [name]: value
      });
    };

  return (
    <View style={GlobalStyles.container}>
        <Header title="Reset Password"/>
        <KeyboardAvoidingContainer>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 19, color: '#000000'}}>
                Please enter your email or number to reset password
            </Text>
            <View style={{marginTop: 20}}>
              <TextField
                  placeholder="Email or Phone"
                  iconSource={require('../../assets/icons/email.png')}
                  value={credentials.email}
                  onChangeText={(val)=> handleChange("email", val)}
              />
            </View>
            <BtnPrimary
                title="Next"
                onPress={()=> navigation.navigate("Confirmation")}
            />
        </KeyboardAvoidingContainer>
    </View>
  )
}

export default Forget
