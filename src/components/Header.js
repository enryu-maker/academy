import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useMediaQuery from './useMediaQuery';
import { AiOutlineMenu } from "react-icons/ai";
export default function Header() {
    const path = useLocation()
    const mobile = useMediaQuery('(max-width: 768px)');
    const [show, setShow] = React.useState(false)
    return (
        <>
            <div
                style={{
                    display: "flex",
                    height: mobile ? 100 : 80,
                    width: "100vw",
                    backgroundColor: "#000000",
                    position: "sticky",
                    zIndex: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    top: 0
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "88%",
                        alignSelf: "center",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <p style={{
                        fontFamily: "Nothing",
                        fontSize: 30,
                        color: "#ffffff",
                        marginBlock: mobile ? 10 : 0,
                        letterSpacing: 2
                    }}>
                        NERDTECH(R) <span style={{
                            fontFamily: "Bold",
                        }}> ACADEMY </span>
                    </p>
                    {
                        mobile ?
                            <AiOutlineMenu onClick={() => {
                                setShow(!show)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            }} size={40} color='#ffffff' />
                            :
                            <div style={{
                                display: 'flex',
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "40%",
                            }}>
                                <Link
                                    to={"/"}
                                    style={{
                                        fontFamily: "Nothing",
                                        fontSize: 20,
                                        color: path.pathname === "/" ? "darkgray" : "#ffffff",
                                        marginBlock: 0,
                                        letterSpacing: 2,
                                        textDecoration: "none",
                                    }}>
                                    Home
                                </Link>
                                <Link
                                    to={"/courses"}
                                    style={{
                                        fontFamily: "Nothing",
                                        fontSize: 20,
                                        color: path.pathname === "/courses" ? "darkgray" : "#ffffff",
                                        marginBlock: 0,
                                        letterSpacing: 2,
                                        textDecoration: "none",

                                    }}>
                                    Courses
                                </Link>
                                <Link
                                    to={"/about"}
                                    style={{
                                        fontFamily: "Nothing",
                                        fontSize: 20,
                                        color: path.pathname === "/about" ? "darkgray" : "#ffffff",
                                        marginBlock: 0,
                                        letterSpacing: 2,
                                        textDecoration: "none",
                                    }}>
                                    About
                                </Link>
                                <Link
                                    to={"/contact"}
                                    style={{
                                        fontFamily: "Nothing",
                                        fontSize: 20,
                                        color: path.pathname === "/contact" ? "darkgray" : "#ffffff",
                                        marginBlock: 0,
                                        letterSpacing: 2,
                                        textDecoration: "none",
                                    }}>
                                    Contact
                                </Link>
                            </div>
                    }
                </div>
            </div>
            {
                mobile && show ?
                    <div style={{
                        width: "100vh",
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        paddingInline: 10,
                        // transform: `translateY(10%)`,
                        transition: "all 3s ease",
                    }}>
                        <Link
                            onClick={() => {
                                setShow(false)
                            }}
                            to={"/"}
                            style={{
                                fontFamily: "Nothing",
                                fontSize: 20,
                                color: path.pathname === "/" ? "black" : "darkgray",
                                marginBlock: 10,
                                letterSpacing: 2,
                                textDecoration: "none",
                            }}>
                            Home
                        </Link>
                        <Link
                            onClick={() => {
                                setShow(false)
                            }}
                            to={"/courses"}
                            style={{
                                fontFamily: "Nothing",
                                fontSize: 20,
                                color: path.pathname === "/courses" ? "black" : "darkgray",
                                marginBlock: 10,
                                letterSpacing: 2,
                                textDecoration: "none",
                            }}>
                            Courses
                        </Link>
                        <Link
                            onClick={() => {
                                setShow(false)
                            }}
                            to={"/about"}
                            style={{
                                fontFamily: "Nothing",
                                fontSize: 20,
                                color: path.pathname === "/about" ? "black" : "darkgray",
                                marginBlock: 10,
                                letterSpacing: 2,
                                textDecoration: "none",
                            }}>
                            About
                        </Link>
                        <Link
                            onClick={() => {
                                setShow(false)
                            }}
                            to={"/contact"}
                            style={{
                                fontFamily: "Nothing",
                                fontSize: 20,
                                color: path.pathname === "/contact" ? "black" : "darkgray",
                                marginBlock: 10,
                                letterSpacing: 2,
                                textDecoration: "none",
                            }}>
                            Contact
                        </Link>
                    </div>
                    :
                    null
            }
        </>
    )
}
