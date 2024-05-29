import { StyleSheet } from "react-native";
import { black, brainBg, primaryClr, textFieldBorder, textGray } from "./Global";

export const SplashStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryClr,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 26,
        fontFamily: 'Poppins-Bold',
        textTransform: 'uppercase'
    }
});


export const LoginStyles = StyleSheet.create({
    loginIllustration: {
        resizeMode: 'contain',
        width: '100%',
    },
    contentMain: {
        flex: 0.7,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 30,
        fontFamily: 'Poppins-Bold',
        color: 'black'
    },
    imgMain: {
        alignItems: 'center'
    },
    loginTxt: {
        color: textGray,
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        textAlign: 'center'
    },
    passField: {
        position: 'relative'
    },
    forgetTxt: {
        position: 'absolute',
        bottom: 15,
        right: 21,
        color: primaryClr,
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        textDecorationLine: 'underline'
    }

})

export const PlanStyles = StyleSheet.create({
    mainBox: {
        padding: 20,
        borderWidth: 1,
        borderColor: primaryClr,
        borderRadius: 8
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    txt: {
        color: '#000000',
        fontFamily: 'Poppins-Bold',
        fontSize: 22
    },
    pointTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'black'
    },
    point: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2
    }
});

export const HomeStyles = StyleSheet.create({
    featuresMain: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
    },
    chartMain: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    classesMain: {
        marginLeft: 20
    },
    clrMain: {
        width: 15,
        height: 15,
        borderRadius: 5,
        marginRight: 10
    },
    class: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    classTxt: {
        color: black
    },

    progressBarMain: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10
    }
    
});

export const PatientsStyles = StyleSheet.create({
    filterMain: {
        width: 44,
        height: 48,
        backgroundColor: primaryClr,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    searchMain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    }
});

export const DetailsStyles = StyleSheet.create({
    topView: {
        alignItems: 'center'
    },
    btnView: {
        alignItems: 'center'
    },
    brainMain: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: brainBg,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    fieldsMain: {
        flexDirection: 'row',
    },
    mriImgMain: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mriMainView: {
        alignItems: 'center'
    },
    biomarker: {
        color: 'black',
        fontSize: 16,
        marginVertical: 4
    },
    detailsMain: {
        marginVertical: 20
    }
})

export const InsightsStyles = StyleSheet.create({
    titleTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        color: 'black'
    },
    pointsMain: {
        marginVertical: 20
    },
    point: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7
    },
    pointTxt: {
        fontFamily: 'Poppins-Regular',
        color: 'black',
        fontSize: 15
    },
    pointNum: {
        width: 25,
        height: 25,
        backgroundColor: primaryClr,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    num: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 17
    }
})

export const ProfileStyles = StyleSheet.create({
    menuMain: {
        marginVertical: 40,
        marginHorizontal: 10
    },
    menu: {
        flexDirection: 'row',
        backgroundColor: 'rgb(243, 243, 243)',
        padding: 15,
        borderRadius: 15,
        marginVertical: 5
    },
    menuTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        marginLeft: 30,
        color: 'black'
    },
    logoutModal: {
        padding: 20,
        backgroundColor: 'white',
        width: 250,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 22
    },
    logoutModalMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        backgroundColor: 'transparent'
    },
    logoutModalTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: 'black',
        textAlign: 'center'
    },
    logoutTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: 'red',
        textAlign: 'center'
    }
})