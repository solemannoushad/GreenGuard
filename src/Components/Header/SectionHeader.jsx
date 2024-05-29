import { Text, View } from 'react-native'
import { SectionHeaderStyles } from '../../Style/ComponentsStyle'

const SectionHeader = ({title, onPress}) => {
  return (
    <View style={SectionHeaderStyles.main}>
        <Text style={SectionHeaderStyles.title}>{title}</Text>
        <Text style={SectionHeaderStyles.link} onPress={onPress}>See All</Text>
    </View>
  )
}

export default SectionHeader
