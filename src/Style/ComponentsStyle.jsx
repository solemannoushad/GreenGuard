import { StyleSheet } from "react-native";
import { black, featureBg, iconGray, loginWith, loginWithBorder, loginWithTxtClr, notificationBg, placeholderGray, primaryClr, secondaryClr, separatorLine, textFieldBorder, txtClr } from "./Global";


export const BtnPrimaryStyle = StyleSheet.create({
    btnMain: {
        backgroundColor: primaryClr,
        marginVertical: 32
    },
    btnText: {
        color: txtClr,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17
    }
});

export const LoginWithStyles = StyleSheet.create({
    btnMain: {
        backgroundColor: loginWith,
        borderWidth: 2,
        borderColor: loginWithBorder,
        marginVertical: 10
    },
    btnTxt: {
        color: loginWithTxtClr,
        fontSize: 15,
        fontFamily: 'Poppins-Medium'
    },
    txtView: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export const TextFieldStyles = StyleSheet.create({
    textFieldMain: {
        borderWidth: 1,
        paddingVertical: 12,
        fontSize: 14,
        borderRadius: 8,
        position: 'relative',
        color: 'black',
        width: '100%'
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginBottom: 15,
        color: 'black',
        marginTop: 17
    },
    icon: {
        width: 18,
        position: 'absolute',
        top: 12,
        left: 15,
        resizeMode: 'contain'
    }
});

export const BtnIconStyles = StyleSheet.create({
    btnMain: {
        backgroundColor: primaryClr,
        flexDirection: 'row',
    }
});

export const OtpFieldStyles = StyleSheet.create({
    textFieldMain: {
        borderWidth: 1,
        paddingVertical: 12,
        fontSize: 23,
        borderRadius: 8,
        position: 'relative',
        color: 'black',
        width: 56,
        height: 56,
        textAlign: 'center',
        marginHorizontal: 8
    },
});


export const HeaderStyles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: separatorLine,
        // paddingTop: 30
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-SemiBold',
        color: 'black',
    }
});

export const SeparatorStyle = StyleSheet.create({
    main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: separatorLine
    },
    text: {
        color: loginWithTxtClr,
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        marginHorizontal: 3
    }
});

export const DeciderBoxStyles = StyleSheet.create({
    main: {
        marginTop: 70
    },
    box: {
        width: 169,
        height: 169,
        borderWidth: 1,
        // borderColor: textFieldBorder,
        borderRadius: 8,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'flex-end',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: 'white'
    },
    img: {
        resizeMode: 'contain',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        marginTop: 14,
        fontSize: 17,
        color: 'black',
        marginLeft: 10,
        // textAlign: 'center'
    }
});

export const PlanComponentStyles = StyleSheet.create({
    mainBox: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: primaryClr,
        borderRadius: 8,
        marginVertical: 10,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    txt: {
        fontFamily: 'Poppins-Bold',
        fontSize: 19
    },
    pointTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
    },
    point: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2
    }
});

export const HomeHeaderStyles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 10
    },
    titleTxt: {
        fontFamily: 'Poppins-Bold',
        fontSize: 21,
        color: 'black',
    },
    txt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: placeholderGray,
    },
    notificationMain: {
        width: 40,
        height: 40,
        backgroundColor: notificationBg,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    dot: {
        width: 10,
        height: 10,
        position: 'absolute',
        backgroundColor: primaryClr,
        borderRadius: 50,
        top: 8,
        right: 8
    }
});

export const HomeBoxStyles = StyleSheet.create({
    main: {
        width: '100%',
        position: 'relative',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        backgroundColor: primaryClr,
        borderRadius: 15,
        width: '100%',
        position: 'relative',
        zIndex: 3,
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center',
        height: 150
    },
    txt: {
        fontFamily: 'Poppins-Regular',
        color: 'white',
        fontSize: 18,
        flex: 0.5,
    }
});

export const FeaturesBoxStyles = StyleSheet.create({
    box: {
        width: 52,
        height: 52,
        borderRadius: 9,
        backgroundColor: featureBg,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 10,
        color: placeholderGray,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        marginTop: 4
    },
    main: {
        // width: SCREEN_WIDTH/5,
        marginHorizontal: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export const SectionHeaderStyles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 12,
    },
    title: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: black
    },
    link: {
        fontFamily: 'Poppins-Regular',
        color: primaryClr,
        fontSize: 12,
        textDecorationLine: 'underline',
        textDecorationColor: primaryClr
    }
});

export const PatientBoxStyles = StyleSheet.create({
    mainBox: {
        flexDirection: 'row',
        padding: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: separatorLine,
        borderBottomWidth: 1,
        borderTopColor: separatorLine,
        borderTopWidth: 1
    },
    imgMain: {
        width: 52,
        height: 52,
        borderRadius: 50,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsMain: {
        flex: 1,
        marginLeft: 20
    },
    btnMain: {
        ransform: [{rotate: '90deg'}],
    },
    txt1: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: 'black'
    },
    txt2: {
        fontFamily: 'Poppins-Bold',
        color: primaryClr
    }
});