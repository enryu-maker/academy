import React from 'react'
import Header from './components/Header'
import Index from './navigation/Index'
import useMediaQuery from './components/useMediaQuery';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  const mobile = useMediaQuery('(max-width: 768px)');
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>NerdTech Academy - Empowering Minds, Shaping Futures in Technology Education</title>
        <description>
          Unlock your potential with NerdTech Academy. Explore cutting-edge technology courses, personalized learning, and mentorship. Join our vibrant community and shape your future in the world of tech innovation.
        </description>
      </Helmet>
      
      <Header />
      <Index />
      <p style={{
        fontFamily: "Nothing",
        fontSize: mobile ? 16 : 25,
        fontWeight: "bolder",
        color: "black",
        textAlign: "center",
        marginBlockEnd: 0,
        marginInline: 15,
        letterSpacing: 2
      }}>
        Follow us Now!
      </p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white",
        height: "10vh",
        width: mobile ? "70%" : "20%",
        alignSelf: "center"
      }}>
        <FaFacebookSquare
          style={{
            cursor: "pointer"
          }}
          onClick={() => {
            window.open("https://www.facebook.com/nerdtech.in/")
          }}
          size={35} />
        <FaSquareInstagram
          style={{
            cursor: "pointer"
          }}
          onClick={() => {
            window.open("https://www.instagram.com/_nerdtech.in_/?hl=en")
          }} size={35} />
        <FaLinkedin
          style={{
            cursor: "pointer"
          }}
          onClick={() => {
            window.open("https://www.linkedin.com/company/nerdtech/about/")
          }} size={35} />
        <FaYoutube
          style={{
            cursor: "pointer"
          }} onClick={() => {
          }} size={35} />
      </div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        height: "10vh",
        width: "100vw",
        alignSelf: "center"
      }}>
        <p style={{
          fontFamily: "Nothing",
          fontSize: mobile ? 16 : 22,
          fontWeight: "bolder",
          color: "white",
          textAlign: "center",
          marginBlock: 0,
          letterSpacing: 2
        }}
          onClick={() => {
            window.open("https://nerdtech.in")
          }}
        >
          Made with ❤️ from NERDTECH(R)
        </p>
      </div>
      <ToastContainer />
    </div>
  )
}
