import { POST_URL } from "../constants/constants"

export const postEmail = async (email: string) => {
  await fetch(POST_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
  .then(response => response.text())
  .then(data => console.log(data, email))
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