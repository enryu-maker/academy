import React from 'react'
import useMediaQuery from '../components/useMediaQuery';
import { Helmet } from 'react-helmet';
export default function Contact() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [number, setNumber] = React.useState("")
    const [domain, setDomain] = React.useState("")
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Join the NerdTech Community - Connect, Collaborate, and Innovate Together</title>
                <description>
                    Be part of the vibrant NerdTech community. Connect with like-minded learners, collaborate on projects, and innovate together in a supportive and engaging environment.
                </description>
            </Helmet>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                height: mobile ? "auto" : "82vh",
                backgroundColor: "black",
                transition: " all 1s ease"
            }}>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: 40,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "left",
                    width: mobile ? "90%" : "88%"
                }}>
                    Contact Us .
                </p>
                <div style={{
                    display: "flex",
                    flexDirection: mobile ? "column-reverse" : "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "88%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "flex-start",
                        width: mobile ? "88%" : "45%"
                    }}>
                        <p style={{
                            fontFamily: "Nothing",
                            fontSize: 25,
                            color: "#ffffff",
                            letterSpacing: 2,
                            textAlign: "left",
                        }}>
                            Contact Info .
                        </p>
                        <p style={{
                            fontFamily: "Regular",
                            fontSize: 16,
                            color: "#ffffff",
                            letterSpacing: 2,
                            textAlign: "justify",
                        }}>
                            <span style={{
                                fontFamily: "Nothing",
                                fontSize: 20,
                            }}>Location :</span><br />
                            NerdTech, Office No.8, Jagdish Sankul, KBT Circle, Thatte Nagar, Gangapur Raod, Nashik, Maharashtra, 422005
                        </p>
                        <p style={{
                            fontFamily: "Regular",
                            fontSize: 16,
                            color: "#ffffff",
                            letterSpacing: 2,
                            textAlign: "justify",
                        }}>
                            <span style={{
                                fontFamily: "Nothing",
                                fontSize: 20,
                            }}>Number :</span><br />
                            <a style={{
                                color: "#fff",
                                textDecoration: "none"
                            }} href='tel:9405649047'>
                                +91 9405649047
                            </a>
                        </p>
                        <p style={{
                            fontFamily: "Regular",
                            fontSize: 16,
                            color: "#ffffff",
                            letterSpacing: 2,
                            textAlign: "justify",
                        }}>
                            <span style={{
                                fontFamily: "Nothing",
                                fontSize: 20,
                            }}>Email :</span><br />
                            <a style={{
                                color: "#fff",
                                textDecoration: "none"
                            }} href='mailto:contact@nerdtech.in'>
                                contact@nerdtech.in
                            </a>
                        </p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: mobile ? "center" : "flex-end",
                        width: mobile ? "100%" : "45%"
                    }}>
                        <p style={{
                            fontFamily: "Nothing",
                            fontSize: 25,
                            color: "#ffffff",
                            letterSpacing: 2,
                            textAlign: "left",
                        }}>
                            Contact Form .
                        </p>
                        <input
                            style={{
                                backgroundColor: "transparent",
                                height: 40,
                                width: mobile ? "100%" : "70%",
                                color: "white",
                                fontFamily: "Bold",
                                borderWidth: 0,
                                borderBlockEndColor: "white",
                                borderBlockEndWidth: 2,
                                outline: "none",
                                borderRadius: 0
                            }}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            type="text"
                            placeholder='Full Name*'
                        />
                        <input
                            style={{
                                backgroundColor: "transparent",
                                height: 40,
                                width: mobile ? "100%" : "70%",
                                color: "white",
                                fontFamily: "Bold",
                                borderWidth: 0,
                                borderBlockEndColor: "white",
                                borderBlockEndWidth: 2,
                                marginBlock: 10,
                                outline: "none",
                                borderRadius: 0
                            }}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            type="email"
                            placeholder='Email Address*'
                        />
                        <input
                            style={{
                                backgroundColor: "transparent",
                                height: 40,
                                width: mobile ? "100%" : "70%",
                                color: "white",
                                fontFamily: "Bold",
                                borderWidth: 0,
                                borderBlockEndColor: "white",
                                borderBlockEndWidth: 2,
                                marginBlock: 10,
                                outline: "none",
                                borderRadius: 0
                            }}
                            value={number}
                            onChange={(e) => {
                                setNumber(e.target.value)
                            }}
                            type="number"
                            placeholder='Phone Number*'
                        />
                        <input
                            style={{
                                backgroundColor: "transparent",
                                height: 40,
                                width: mobile ? "100%" : "70%",
                                color: "white",
                                fontFamily: "Bold",
                                borderWidth: 0,
                                borderBlockEndColor: "white",
                                borderBlockEndWidth: 2,
                                marginBlock: 10,
                                outline: "none",
                                borderRadius: 0
                            }}
                            value={domain}
                            onChange={(e) => {
                                setDomain(e.target.value)
                            }}
                            type="Domain"
                            placeholder='Intrested Domain*'
                        />
                        <button
                            onClick={() => {
                            }}
                            style={{
                                width: 200,
                                height: 50,
                                backgroundColor: "white",
                                color: "black",
                                fontFamily: "Nothing",
                                fontSize: mobile ? 20 : 25,
                                marginBlock: 30,
                                borderRadius: 10,
                            }}>
                            Submit Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
