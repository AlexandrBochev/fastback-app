import { ReactNode } from "react"

export interface Navigation {
  navigate: (arg0: string, arg1: { email: string }) => void
}

export interface ButtonProps {
  onPress: () => void
  active?: boolean
  children: ReactNode
}

export interface Site {
  name: string
  url: string
}

export interface WebViewComponentProps {
  url: string
}