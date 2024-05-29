
export const primaryClr = "#325A3E"
export const secondaryClr = "#686DD9"
export const txtClr = "#ffffff"
export const backgroundColor = "#ffffff"
export const placeholderGray = "#7D7D7D"
export const textFieldBorder = "#ECECEC"
export const separatorLine = "#E9E9E9"
export const textGray = "#646464"
export const disableClr = "#908DE6"
export const notificationBg = "#EDEDED"
export const featureBg = "#F1F1F1"
export const black = "#000000"
export const iconGray = "#9C9C9C"
export const imgBg = "#B7B7B7"
export const brainBg = "#E6E6F0"
export const bellIcon = "#5C5C5C"

// LoginWith Button Colors
export const loginWith = "#FAFAFA"
export const loginWithBorder = "#EAEAEA"
export const loginWithTxtClr = "#878787"

import { StyleSheet } from "react-native"


export const BtnGlobalStyles =  StyleSheet.create({
    btnMain: {
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 50
    }
})

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    heading: {
        fontSize: 28,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    }
})