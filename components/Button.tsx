import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { ButtonProps } from '../models/models'

const Button = ({ onPress, active, children }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      className={`
        w-full flex items-center p-3 rounded mb-2
        ${ active ? 'bg-blue-700' : 'bg-blue-500' }
      `}
    >
      <View className='w-full flex-row items-center justify-center'>{ children }</View>
    </TouchableOpacity>
  )
}

export { Button }