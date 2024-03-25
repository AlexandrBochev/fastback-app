import React from 'react'
import { Image, View } from 'react-native'

const Spinner = () => {
  return (
    <View className='absolute inset-0 w-full h-full items-center justify-center z-50'>
      <Image source={ require('../assets/loading.gif') } alt='Spinner' className='w-16 h-16' />
    </View>
  )
}

export { Spinner }