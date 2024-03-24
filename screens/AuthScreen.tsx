import React from "react"
import { StatusBar } from "expo-status-bar"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { useState } from "react"
import { EMAIL_REGEX } from "../constants/constants"
import { Navigation } from "../models/models"
import { postEmail } from "../utils/utils"
import { Button } from "../components/Button"

const AuthScreen = () => {
  const [email, setEmail] = useState<string>('')
  const navigation = useNavigation<Navigation>()

  const handlePress = () => {
    if (!EMAIL_REGEX.test(email)) {
      alert('Invalid email')
      return
    }
    postEmail(email)
    navigation.navigate('Main', { email })
  }

  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Image source={ require('../assets/fastback_logo.png') } width={149} height={31} className='mb-8 -mt-20' />

      <View className='w-full px-10'>
        <TextInput
          onChange={ (e) => setEmail(e.nativeEvent.text) }
          className='w-full bg-gray-100 border border-gray-200 p-2 rounded my-4 '
          placeholder='Enter your email'
          keyboardType='email-address'
          autoCapitalize="none"
        />

        <Button onPress={ handlePress }>
          <Text className="text-white font font-semibold">Login</Text>
        </Button>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

export { AuthScreen }