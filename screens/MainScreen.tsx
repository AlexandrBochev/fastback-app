import React, { useEffect, useLayoutEffect, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Image, Text, View } from "react-native"
import { Site } from "../models/models"
import { Button } from "../components/Button"
import { findLogo, getSites } from "../utils/utils"
import { WebViewComponent } from "../components/WebViewComponent"
import { Spinner } from "../components/Spinner"

const MainScreen = () => {
  const [sites, setSites] = useState<Site[]>()
  const [url, setUrl] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { params: { email } } = useRoute() as { params: { email: string } }
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `👋 Hello, ${ email }`,
    })
  }, [])

  useEffect(() => {
    getSites(setIsLoading, setSites)
  }, [])

  return (
    <View className='flex-1 bg-white items-center justify-center py-6 px-4'>
      { isLoading && <Spinner /> }

      {sites?.map((site: Site) =>
        <Button key={site.name} onPress={ () => setUrl(site.url) } active={ url === site.url && true }>
          <View className='relative w-full'>
            <Image source={ findLogo(site.name) } alt={`Logo ${ site.name }`} className='absolute inset-0' />
            <Text className="text-white text-center font font-semibold">
              { site.name }
            </Text>
          </View>
        </Button>
      )}

      { url && <WebViewComponent url={ url } /> }
    </View>
  )
}

export { MainScreen }