import { Text, View } from 'react-native'
import BackBtn from '../Buttons/BackBtn'
import { HeaderStyles } from '../../Style/ComponentsStyle'

const Header = (props) => {
  return (
    <View style={HeaderStyles.main}>
        { props.back === undefined && <View style={{left: 20, position: 'absolute'}}>
            <BackBtn/>
        </View>}
        <Text style={HeaderStyles.title}>{props.title}</Text>
    </View>
  )
}

export default Header
