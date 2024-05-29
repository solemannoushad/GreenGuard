import { Image, Pressable, Text, View } from 'react-native'
import { PatientBoxStyles } from '../Style/ComponentsStyle'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from './Icons/FontAwesome';
import { iconGray } from '../Style/Global';


const TestBox = ({testList, imgSrc}) => {

  const navigation = useNavigation();

  const func = ()=>{
    navigation.navigate("TestDetail")
  }

  return (
    <>
      { testList.map((patient)=>{
        return <Pressable key={patient.id} style={PatientBoxStyles.mainBox} onPress={func}>
        <View style={PatientBoxStyles.imgMain}>
          <Image
            source={require('../../assets/images/leaf.png')}
            style={{width: 100, resizeMode: 'contain'}}
          />
        </View>
        <View style={PatientBoxStyles.detailsMain}>
          <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 20, color: 'black'}}>{patient.id}</Text>
          <Text style={PatientBoxStyles.txt1}>Status: <Text style={PatientBoxStyles.txt2}>{patient.status}</Text></Text>
          <Text style={PatientBoxStyles.txt1}>Last Updated: <Text style={PatientBoxStyles.txt2}>{patient.latestUpdate}</Text></Text>
        </View>
        <View style={PatientBoxStyles.btnMain}>
          <Pressable>
            <Image
              source={require('../../assets/icons/backBtn.png')}
              style={{
                transform: [{rotate: '180deg'}],
              }}
            />
          </Pressable>
        </View>
    </Pressable>
      }) }
    </>
  )
}

export default TestBox
