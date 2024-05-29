import { KeyboardAvoidingView, Platform, ScrollView } from "react-native"

const KeyboardAvoidingContainer = ({children}) => {
  return (
    <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
    >
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                padding: 20
            }}
            bounces={false}
        >
            {children}
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingContainer
