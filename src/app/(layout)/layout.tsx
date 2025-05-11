
import Header from "@/components/Header"
import Contact from '@/components/Contact'
import { FC, ReactNode } from "react"


const MainLayout:FC<{children:ReactNode}>  = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Contact />
    </>
  )
}

export default MainLayout