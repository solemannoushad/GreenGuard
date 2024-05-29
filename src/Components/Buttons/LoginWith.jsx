import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { BtnGlobalStyles } from '../../Style/Global'
import { LoginWithStyles } from '../../Style/ComponentsStyle'

const LoginWith = (props) => {

  return (
    <Pressable style={[BtnGlobalStyles.btnMain, LoginWithStyles.btnMain]}>
        <View style={LoginWithStyles.txtView}>
            <Image
                source={props.iconSource}
                style={{marginRight: 10}}
            />
            <Text style={LoginWithStyles.btnTxt}>{props.title}</Text>
        </View>
    </Pressable>
  )
}

export default LoginWith
