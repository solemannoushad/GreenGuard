import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { GlobalStyles } from '../../Style/Global';
import KeyboardAvoidingContainer from '../../Components/KeyboardAvoidingContainer';
import HomeHeader from '../../Components/Header/HomeHeader';
import HomeBox from '../../Components/HomeBox';
import SectionHeader from '../../Components/Header/SectionHeader';
import TestBox from '../../Components/TestBox';
import * as FileSystem from 'expo-file-system';

export default function Home({ navigation }) {
  const [image, setImage] = useState('');

  const [tests, setTests] = useState([
    {
      id: 'Apple Leaf Test',
      age: 23,
      latestUpdate: '12/12/2023',
      status: 'Negative',
    },
    {
      id: 'Grape Leaf Test',
      age: 23,
      latestUpdate: '12/12/2023',
      status: 'Negative',
    },
  ]);

  // pick image function
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const { assets } = result;
      const imageUri = assets[0].uri;

      const localDirectory = `${FileSystem.documentDirectory}images/`;
      const localFilePath = `${localDirectory}leaf.png`;

      try {
        // Check if the directory exists, if not, create it
        const directoryExists = await FileSystem.getInfoAsync(localDirectory);
        if (!directoryExists.exists) {
          await FileSystem.makeDirectoryAsync(localDirectory, { intermediates: true });
        }

        // Copy the image from the URI to the local file path
        await FileSystem.copyAsync({ from: imageUri, to: localFilePath });

        // Set the image path to state
        setImage(localFilePath);
        console.log('Image saved to', localFilePath);
      } catch (error) {
        console.error('Error saving image:', error);
      }

    }
  };

  return (
    <View style={GlobalStyles.container}>
      <KeyboardAvoidingContainer>
        <HomeHeader />

        <HomeBox imgSource={image ? { uri: image } : require('../../../assets/images/leaf.png')} />

        <SectionHeader title="Recent Tests" onPress={() => navigation.navigate('Tests')} />

        <TestBox testList={tests} />

        <View
          style={{
            width: 367,
            height: 104,
            borderWidth: 3,
            borderColor: '#325A3E',
            borderRadius: 14,
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 16.57, width: '50%' }}>
            Start testing your plant just by uploading its picture.
          </Text>

          <TouchableOpacity
            style={{
              width: 126,
              height: 38,
              borderRadius: 12,
              backgroundColor: '#325A3E',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
            onPress={pickImage}
          >
            <Image source={require('../../../assets/icons/camera1.png')} style={{ width: 20, height: 20, color: 'white' }} />
            <Text style={{ color: 'white', fontSize: 18 }}>Upload</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingContainer>
    </View>
  );
}
