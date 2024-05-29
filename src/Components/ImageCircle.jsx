import { Image, View } from 'react-native'
import { imgBg, primaryClr, textFieldBorder } from '../Style/Global'
import FontAwesome from './Icons/FontAwesome'

const ImageCircle = ({imgSource, edit}) => {
  return (
    <View style={{
        width: 130,
        height: 130,
        borderColor: textFieldBorder,
        borderRadius: 100,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    }}>
        { edit !== false && <View style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: textFieldBorder,
            top: 5,
            right: 5,
            width: 26,
            height: 26,
            borderRadius: 100
        }}>
            <Image
                source={require('../../assets/icons/camera.png')}
                style={{
                    tintColor: primaryClr,
                    position: 'relative'
                }}
            />
        </View>}
        <FontAwesome name="user" color={imgBg} size={70} />
    </View>
  )
}

export default ImageCircle
