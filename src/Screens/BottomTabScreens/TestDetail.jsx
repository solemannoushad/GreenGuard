import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { GlobalStyles, primaryClr } from "../../Style/Global";
import KeyboardAvoidingContainer from "../../Components/KeyboardAvoidingContainer";
import { DetailsStyles } from "../../Style/ScreenStyles";
import { PatientBoxStyles } from "../../Style/ComponentsStyle";
import TextField from "../../Components/TextField/TextField";
import Header from "../../Components/Header/Header";
import FontAwesome from "../../Components/Icons/FontAwesome";

const TestDetail = () => {
  const [credentials, setCredentials] = useState({
    patientId: "",
    name: "",
    age: "",
    gender: "",
    phone: "",
  });

  const handleChange = (name, value) => {
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <View style={GlobalStyles.container}>
      <Header title="Details" />
      <KeyboardAvoidingContainer>
        <View style={DetailsStyles.mriMainView}>
          <View style={DetailsStyles.mriImgMain}>
            <Image source={require("../../../assets/images/leaf.png")} />
          </View>
          <Text style={PatientBoxStyles.txt1}>
            Last Updated: <Text style={PatientBoxStyles.txt2}>12/12/2023</Text>
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 20, fontWeight: 600, marginVertical: 10}}>Apple Leaf Test</Text>
          <View>
            <Text
              style={{
                color: "black",
                fontFamily: "Poppins-SemiBold",
                fontSize: 15,
              }}
            >
              Status: <Text style={{ color: primaryClr }}>Negative</Text>
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "black",
                fontFamily: "Poppins-SemiBold",
                fontSize: 15,
              }}
            >
              Description: <Text style={{ color: primaryClr }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel gravida risus. Donec tristique mauris id urna laoreet dignissim. Duis posuere scelerisque placerat. Proin finibus enim eget orci dapibus, in tempor velit consectetur. Morbi iaculis orci at tellus tempus luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat vel lacus non cursus. Donec porttitor magna quis purus lobortis ornare. Donec viverra justo justo, et porta ipsum gravida vulputate. In hac habitasse platea dictumst. Suspendisse fringilla dapibus sem, at pretium odio posuere eu.</Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingContainer>
    </View>
  );
};

export default TestDetail;
