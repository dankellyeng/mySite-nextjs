import '../styles/global.css'
import { Metadata } from 'next'
import Footer from './Components/Common/Footer/Footer'
import CustomNavbar from './Components/Common/CustomNavBar/CustomNavBar'
 
export const metadata: Metadata = {
  title: 'Dan Kelly',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <CustomNavbar />
      {children}
      <Footer />  
      </body>
    </html>
  )
}