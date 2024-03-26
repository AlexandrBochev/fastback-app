import { EMAIL_REGEX, POST_URL, SITES_URL } from "../constants/constants"
import { Navigation } from "../models/models"

export const handleLogIn = (email:string, navigation:Navigation) => {
  if (!EMAIL_REGEX.test(email)) {
    alert('Invalid email')
    return
  }
  postEmail(email)
  navigation.navigate('Main', { email })
}

export const postEmail = async (email: string) => {
  try {
    await fetch(SITES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => response.text())
    .then(data => console.log(data, email))
  } catch (error) {
    console.error(error)
  }
}

export const getSites = async (setIsLoading: (arg0: boolean) => void, setSites: (arg0: any) => void) => {
  try {
    setIsLoading(true)
    const response = await fetch(SITES_URL)
    const data = await response.json()
    setSites(data)
    setIsLoading(false)
  } catch (error) {
    console.error(error)
  }
}

export const findLogo = (siteName: string) => {
  if (siteName === 'Nike US') {
    return require('../assets/sites/nike.png')
  } else if (siteName === 'Adidas US') {
    return require('../assets/sites/adidas.png')
  } else if (siteName === 'Puma US') {
    return require('../assets/sites/puma.png')
  }
}