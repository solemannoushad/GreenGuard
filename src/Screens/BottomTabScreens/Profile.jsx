import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { GlobalStyles, placeholderGray, primaryClr } from '../../Style/Global'
import Header from '../../Components/Header/Header'
import KeyboardAvoidingContainer from '../../Components/KeyboardAvoidingContainer'
import ImageCircle from '../../Components/ImageCircle'
import { ProfileStyles } from '../../Style/ScreenStyles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import ModalComponent from '../../Components/Modal/ModalComponent'
import BtnPrimary from '../../Components/Buttons/BtnPrimary'




const Profile = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);

  const logoutClick = ()=>{
    setModalVisible(true);
  }

  return (
    <View style={GlobalStyles.container}>
      <Header title="Account" back={false}/>
      <KeyboardAvoidingContainer>


        <View style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <ImageCircle edit={false}/>
          <View style={{
            marginLeft: 5
          }}>
            <Text style={{
              fontFamily: 'Poppins-Bold',
              fontSize:20,
              color: '#000000',
              textAlign: 'center'
            }}>
              Soleman Noushad
            </Text>
            <Text style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: placeholderGray,
              textAlign: 'center'
            }}>
              solemannoushad31@gmail.com
            </Text>
          </View>
        </View>

        <View style={ProfileStyles.menuMain}>
          
            <TouchableOpacity style={ProfileStyles.menu}>
              <View>
                <FontAwesome name={"user"} color={placeholderGray} size={22} />
              </View>
              <Text style={ProfileStyles.menuTxt}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ProfileStyles.menu}>
              <View>
                <FontAwesome name={"lock"} color={placeholderGray} size={22} />
              </View>
              <Text style={ProfileStyles.menuTxt}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ProfileStyles.menu}>
              <View>
                <FontAwesome name={"exclamation-circle"} color={placeholderGray} size={22} />
              </View>
              <Text style={ProfileStyles.menuTxt}>Legal and Policies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ProfileStyles.menu}>
              <View>
                <FontAwesome6 name={"arrow-up-from-bracket"} color={primaryClr} size={22} />
              </View>
              <Text style={[ProfileStyles.menuTxt , {color: primaryClr}]}>Upgrade to Pro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ProfileStyles.menu} onPress={logoutClick}>
              <View>
                <FontAwesome name={"external-link"} color={'red'} size={22} />
              </View>
              <Text style={[ProfileStyles.menuTxt , {color: 'red'}]}>Logout</Text>
            </TouchableOpacity>

        </View>

        <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible}>
          <View style={{flex: 1, position: 'absolute', top: 0, left: 0, backgroundColor: placeholderGray, opacity: 0.5, zIndex: 1, height: '100%', width: '100%'}}></View>
          <View style={ProfileStyles.logoutModalMain}>
              <View style={ProfileStyles.logoutModal}>
                <Text style={ProfileStyles.logoutModalTxt}>Are you sure you want to logout?</Text>
                <BtnPrimary
                  title="Cancel"
                  onPress={()=>setModalVisible(false)}
                />
                <Text style={ProfileStyles.logoutTxt} onPress={()=>navigation.navigate("Login")}>Logout</Text>
              </View>
          </View>
        </ModalComponent>
      </KeyboardAvoidingContainer>
    </View>

  )
}

export default Profile
