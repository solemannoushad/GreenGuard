import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GlobalStyles } from '../../Style/Global'
import KeyboardAvoidingContainer from '../../Components/KeyboardAvoidingContainer'
import HomeHeader from '../../Components/Header/HomeHeader'
import HomeBox from '../../Components/HomeBox'
import SectionHeader from '../../Components/Header/SectionHeader'
import TestBox from '../../Components/TestBox'

export default function Home({navigation}) {

  const [tests, setTests] = useState([
    {
      id: "Apple Leaf Test",
      age: 23,
      latestUpdate: '12/12/2023',
      status: "Negative"
    },
    {
      id: "Grape Leaf Test",
      age: 23,
      latestUpdate: '12/12/2023',
      status: "Negative"
    },
  ]);

  return (
    <View style={GlobalStyles.container}>
      <KeyboardAvoidingContainer>
        <HomeHeader />

        <HomeBox
          imgSource={require('../../../assets/images/leaf.png')}
        />

        <SectionHeader
          title="Recent Tests"
          onPress={()=> navigation.navigate("Tests")}
        />

        <TestBox testList={tests} />

        

      </KeyboardAvoidingContainer>
    </View>
  )
}