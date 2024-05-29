import { Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function BackBtn() {

    const navigation = useNavigation();
    const backClick = () => {
        const canGoBack = navigation.canGoBack();
    
        if (canGoBack) {
          navigation.goBack();
        }
      };

  return (
    <Pressable style={{display: 'inline'}} onPress={backClick}>
        <Image
            source={require('../../../assets/icons/backBtn.png')}
        />
    </Pressable>
  )
}