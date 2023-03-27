import { Providers } from "@/store/provider"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import HamburgerMenu from "@/components/hamburger/hamburgerMenu"

import "@/styles/styles.css"

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <main>
            <Header />
            {children}
            <Footer />
            <HamburgerMenu />
          </main>
        </Providers>
      </body>
    </html>
  )
}