import { View, Text, Pressable } from 'react-native'
import { HomeHeaderStyles } from '../../Style/ComponentsStyle'
import Fontisto from '../Icons/Fontisto'
import { bellIcon } from '../../Style/Global'

const HomeHeader = () => {
  return (
    <View style={HomeHeaderStyles.main}>
        <View>
            <Text style={HomeHeaderStyles.titleTxt}>Hi, Soleman</Text>
            <Text style={HomeHeaderStyles.txt}>How are you feeling today?</Text>
        </View>
        <View>
            <Pressable style={HomeHeaderStyles.notificationMain}>
                <View style={HomeHeaderStyles.dot}></View>
                <Fontisto name="bell" color={bellIcon} size={25} />
            </Pressable>
        </View>
    </View>
  )
}

export default HomeHeader
