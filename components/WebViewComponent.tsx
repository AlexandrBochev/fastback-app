import React, { useState } from 'react'
import { Text, View } from 'react-native'
import WebView, { WebViewMessageEvent } from 'react-native-webview'
import { WebViewComponentProps } from '../models/models'
import { Spinner } from './Spinner'
import { INJECTED_JS } from '../constants/constants'

const WebViewComponent = ({ url }: WebViewComponentProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [textContent, setTextContent] = useState<string>('')

  const handleMessage = (e: WebViewMessageEvent) => {
    const { data } = e.nativeEvent
    setTextContent(data)
  }

  return (
    <>
      <View className='relative flex-1 w-full border border-blue-500 rounded overflow-hidden my-4'>
        { isLoading && <Spinner /> }
        
        <WebView
          originWhitelist={['*']}
          source={{ uri: url }}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onMessage={handleMessage}
          injectedJavaScript={INJECTED_JS}
        />
      </View>
      <Text>{ textContent }</Text>
    </>
  )
}

export { WebViewComponent }