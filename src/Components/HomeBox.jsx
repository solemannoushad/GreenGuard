import { Image, Text, View } from "react-native";
import { HomeBoxStyles } from "../Style/ComponentsStyle";

const HomeBox = ({ imgSource }) => {
  return (
    <View style={HomeBoxStyles.main}>
      <View style={HomeBoxStyles.box}>
        <Image
          source={imgSource}
          style={{
            resizeMode: "contain",
            // top: -11,
            transform: [{ scale: 1 }],
            position: "absolute",
            flex: 0.3,
          }}
        />
        <View style={{ flex: 0.5 }}></View>
        <Text style={HomeBoxStyles.txt}>
          Find out any kind of plant disease and make your life healthier.
        </Text>
      </View>
      <View
        style={[
          HomeBoxStyles.box,
          {
            backgroundColor: "rgba(50, 90, 62, 0.35)",
            width: "95%",
            bottom: -8,
            zIndex: 2,
            position: "absolute",
          },
        ]}
      ></View>
      <View
        style={[
          HomeBoxStyles.box,
          {
            backgroundColor: "rgba(50, 90, 62, 0.15)",
            width: "85%",
            bottom: -15,
            zIndex: 1,
            position: "absolute",
          },
        ]}
      ></View>
    </View>
  );
};

export default HomeBox;
