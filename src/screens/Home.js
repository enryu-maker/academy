import React from 'react'
import { IMAGES } from '../Assets/Images'
import useMediaQuery from '../components/useMediaQuery'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Home() {
    const navigate = useNavigate()
    const mobile = useMediaQuery('(max-width: 768px)');
    const data = [
        {
            icon: IMAGES.innovation,
            title: "Innovation"
        },
        {
            icon: IMAGES.people,
            title: "Expert Guidance"
        },
        {
            icon: IMAGES.service,
            title: "Personalized Excellence"
        },
    ]
    const data2 = [
        {
            title: "🚀 Explore the Future of Learning",
            desc: "At NerdTech Academy, we're not just an institution; we're a catalyst for innovation and success. Our homepage is your gateway to a world where education meets cutting-edge technology, tailored for your unique journey."
        },
        {
            title: "🌐 Discover Our Courses",
            desc: "Embark on a learning journey that aligns with the latest industry trends. From AI to cybersecurity, our courses are designed to equip you with the skills that matter. Dive into our diverse offerings and shape your future in tech."
        },
        {
            title: "👩‍🏫 Meet Our Expert Mentors",
            desc: "Connect with industry leaders and seasoned professionals who are passionate about your success. Our faculty brings real-world insights to the classroom, providing mentorship that goes beyond textbooks."
        },
        {
            title: "🌟 Personalized Path to Excellence",
            desc: "We understand that each learner is unique. That's why our programs are tailored to your individual learning style. Unleash your potential with an education that adapts to you, ensuring success on your terms."
        },
    ]
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: " all 1s ease"
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Expert Mentorship at NerdTech Academy - Real-World Insights, Real-World Success</title>
                <description>
                    Experience expert mentorship at NerdTech Academy. Our faculty, comprised of industry professionals, provides real-world insights to guide you towards success in the tech industry.
                </description>
            </Helmet>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: mobile ? "center" : "flex-end",
                alignItems: "center",
                height: mobile ? "auto" : "75vh",
                backgroundColor: "black"
            }}>
                <p style={{
                    fontFamily: "Black",
                    fontSize: 40,
                    color: "#ffffff",
                    marginBlock: 0,
                    letterSpacing: 2,
                    textAlign: "center"
                }}>
                    Welcome to <span style={{
                        fontFamily: "Nothing",
                    }}>&nbsp;NERDTECH(R)</span> Academy
                </p>
                <p style={{
                    fontFamily: "Regular",
                    fontSize: 16,
                    color: "#ffffff",
                    marginBlock: 0,
                    width: "88%",
                    alignSelf: "center",
                    textAlign: "center"
                }}>
                    Unleashing Brilliance, Crafting Careers: NerdTech Academy - Elevate Your Education with Cutting-Edge Courses and Tailored Mastery Programs.
                </p>
                <button
                    onClick={() => {
                        navigate("/courses")
                    }}
                    style={{
                        width: mobile ? 200 : 250,
                        height: 50,
                        backgroundColor: "white",
                        color: "black",
                        fontFamily: "Nothing",
                        fontSize: mobile ? 20 : 25,
                        alignSelf: "center",
                        marginBlock: 30,
                        borderRadius: 10
                    }}>
                    Explore Courses
                </button>
                <img alt='header' src={IMAGES.Header}
                    style={{
                        width: "100%",
                        objectFit: "contain"
                    }}
                />
            </div>
            <div style={{
                display: "flex",
                justifyContent: mobile ? "flex-start" : "space-evenly",
                alignItems: mobile ? "flex-start" : "center",
                height: mobile ? "auto" : "10vh",
                flexWrap: "wrap",
                backgroundColor: "lightgray",

            }}>
                {
                    data.map((item) => (
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginInline: mobile ? 10 : 0,
                            marginBlock: mobile ? 10 : 0
                        }}>
                            <img alt={item?.title} src={item?.icon} style={{
                                height: 50,
                                width: 50
                            }} />
                            <p style={{
                                fontFamily: "Nothing",
                                fontSize: 22,
                                fontWeight: "bolder",
                                color: "black",
                                marginBlock: 0,
                                marginInline: 10,
                                letterSpacing: 2
                            }}>
                                {item?.title}
                            </p>
                        </div>
                    ))
                }
            </div>
            <p style={{
                fontFamily: "Nothing",
                fontSize: 22,
                fontWeight: "bolder",
                color: "black",
                marginInline: 10,
                letterSpacing: 2,
                width: mobile ? "90%" : "88%",
                alignSelf: "center",
                textAlign: 'center'
            }}>
                NerdTech Academy - Igniting Minds, Powering Futures
            </p>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
                backgroundColor: "white"
            }}>
                {
                    data2.map((item) => (
                        <div style={{
                            display: "flex",
                            width: mobile ? "95%" : "45%",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            backgroundColor: "black",
                            borderRadius: 10,
                            marginBlockEnd: 15
                        }}>
                            <p style={{
                                fontFamily: "Nothing",
                                fontSize: mobile ? 16 : 22,
                                fontWeight: "bolder",
                                color: "white",
                                marginBlockEnd: 0,
                                marginInline: 15,
                                letterSpacing: 2
                            }}>
                                {item?.title}
                            </p>
                            <p style={{
                                fontFamily: "Regular",
                                fontSize: mobile ? 12 : 16,
                                color: "white",
                                marginInline: 10,
                                letterSpacing: 2,
                                textAlign: "justify"
                            }}>
                                {item?.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                height: "30vh"
            }}>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: mobile ? 16 : 25,
                    fontWeight: "bolder",
                    color: "white",
                    marginBlockEnd: 0,
                    marginInline: 15,
                    letterSpacing: 2
                }}>
                    Ready to Shape Your Future?
                </p>
                <p style={{
                    fontFamily: "Regular",
                    fontSize: mobile ? 12 : 16,
                    color: "white",
                    marginInline: 10,
                    letterSpacing: 2,
                    textAlign: "justify",
                    width: "90%"
                }}>
                    Explore our courses and take the first step toward a tech-powered future with NerdTech Academy. Your journey begins here. 🚀🌐✨
                </p>
                <button
                    onClick={() => {
                        navigate("/contact")
                    }}
                    style={{
                        width: 200,
                        height: 50,
                        backgroundColor: "white",
                        color: "black",
                        fontFamily: "Nothing",
                        fontSize: mobile ? 20 : 25,
                        alignSelf: "center",
                        marginBlockEnd: 30,
                        borderRadius: 10
                    }}>
                    Contact Now
                </button>
            </div>
        </div>
    )
}
