import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useMediaQuery from '../components/useMediaQuery';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdOutlineExpandMore } from 'react-icons/md'
import { helper } from '../components/helper';
export default function Info() {
    const { state } = useLocation()
    const mobile = useMediaQuery('(max-width: 768px)');
    const [active, setActive] = React.useState(0)
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [number, setNumber] = React.useState("")
    const [domain, setDomain] = React.useState(state?.item?.title)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "auto",
                backgroundColor: "black",
                transition: " all 1s ease"
            }}>
                <div style={{
                    width: "88%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    color: "darkgray",
                    fontFamily: "Nothing",
                    fontSize: mobile ? 12 : 16
                }}>
                    <Link
                        to="/courses"
                        style={{
                            textDecoration: "none",
                            color: "darkgray",
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "darkgray";
                        }}
                    >
                        Courses
                    </Link>
                    <p style={{
                        marginInline: 5
                    }}>/</p>
                    <p>{state?.item?.title}</p>
                </div>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: 40,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "left",
                    width: mobile ? "90%" : "88%",
                    marginBlock: 0
                }}>
                    {state?.item?.title}
                </p>
                <div style={{
                    display: "flex",
                    flexDirection: mobile ? "column" : "row",
                    justifyContent: "space-between",
                    alignItems: mobile ? "center" : "flex-start",
                    width: mobile ? "90%" : "88%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: mobile ? "center" : "flex-start",
                        width: mobile ? "88%" : "40%"
                    }}>
                        {
                            state?.item?.internship?.map((item, index) =>
                            (
                                <p style={{
                                    fontFamily: index === active ? "Nothing" : "Bold",
                                    color: index === active ? "#000" : "#fff",
                                    borderColor: "#fff",
                                    backgroundColor: index === active ? "white" : "transparent",
                                    borderWidth: 2,
                                    borderStyle: "solid",
                                    padding: 10,
                                    // fontSize:20,
                                    marginBlock: 10,
                                    borderRadius: 10,
                                    width: mobile ? "100%" : "50%",
                                    cursor: "pointer",
                                    transition: " all 1s ease"
                                }}
                                    onClick={() => {
                                        setActive(index)
                                    }}
                                >
                                    {item?.title}
                                </p>
                            )
                            )
                        }
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: mobile ? "center" : "center",
                        width: mobile ? "95%" : "50%",
                        marginBlockEnd: 50
                    }}>
                        {
                            state?.item?.internship[active]?.details?.map((item) => (
                                <Accordion
                                    style={{
                                        width: "100%",
                                        borderColor: 10,
                                        backgroundColor: "#ffffff"
                                    }}
                                    TransitionProps={{ unmountOnExit: true }}
                                >
                                    <AccordionSummary
                                        expandIcon={<MdOutlineExpandMore size={30} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{
                                            color: "black",
                                            fontSize: 20,
                                            textAlign: 'center',
                                            fontFamily: "Nothing",
                                            marginBlock: 0
                                        }}>
                                            {item?.title}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails style={{ backgroundColor: "#ffffff" }}>
                                        <Typography style={{
                                            color: "black",
                                            fontSize: 20,
                                            textAlign: 'left',
                                            fontFamily: "Regular",
                                        }}>
                                            {item?.desc}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: mobile ? "column-reverse" : "row-reverse",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "88%",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: mobile ? "100%" : "60%",
                        alignSelf: "center"
                    }}>
                        <p style={{
                            fontFamily: "Nothing",
                            fontSize: 25,
                            color: "#ffffff",
                            textAlign: "center",
                        }}>
                            CodeCraft Academy: Building Dreams, One Line at a Time .
                        </p>
                        <p style={{
                            fontFamily: "Nothing",
                            fontSize: 16,
                            color: "#ffffff",
                            marginBlock:mobile?20:0,
                            textAlign: "center",
                        }}>
                            Empower Your Future with the ABCs of Coding:
                            Mastering Algorithms, Breaking Bugs, and Crafting Solutions for Tomorrow's World.
                        </p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: mobile ? "center" : "flex-start",
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
                                helper({
                                    "Name":name,
                                    "Email":email,
                                    "Number":number,
                                    "Domain":domain
                                })
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
