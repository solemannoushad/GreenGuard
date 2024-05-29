import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';


const Entypo = ({name, color, size}) => {
  return (
    <Icon name={name} color={color || 'white'} size={size || 15} />
  )
}

export default Entypo