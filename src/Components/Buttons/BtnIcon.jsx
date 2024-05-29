import { Image, Pressable, Text, View } from 'react-native'
import { BtnGlobalStyles } from '../../Style/Global'
import { BtnIconStyles, BtnPrimaryStyle } from '../../Style/ComponentsStyle'

const BtnIcon = (props) => {
  return (
    <Pressable style={[BtnGlobalStyles.btnMain, BtnIconStyles.btnMain, {marginVertical: props.margin !== undefined ? props.margin : 32}]} onPress={props.onPress}>
        {props.position === "left" && 
            <View style={{
                marginRight: 12,
            }}>
                {props.icon}
            </View>
        }
        <Text style={BtnPrimaryStyle.btnText}>{props.title}</Text>
        {props.position === "right" && 
            <View style={{
                marginLeft: 12,
            }}>
                {props.icon}
            </View>
        }
    </Pressable>
  )
}

export default BtnIcon
