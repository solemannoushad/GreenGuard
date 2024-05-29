import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { GlobalStyles } from '../../Style/Global'
import Header from '../../Components/Header/Header'
import KeyboardAvoidingContainer from '../../Components/KeyboardAvoidingContainer'
import TestBox from '../../Components/TestBox'

const Tests = () => {

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
        <Header title="Tests" back={false} />
        <KeyboardAvoidingContainer>
          <TestBox testList={tests}/>
        </KeyboardAvoidingContainer>
    </View>
  )
}

export default Tests
