import React from 'react'
import useMediaQuery from '../components/useMediaQuery';
import { Helmet } from 'react-helmet';
export default function Courses() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [active, setActive] = React.useState(0)
    const data = [
        {
            id: 0,
            title: "Full Stack Development",
            courses: [
                {
                    title: "MERN Stack Development",
                    duration: "3 Months",
                    fess: "₹ 30000"
                },
                {
                    title: "Frontend Development",
                    duration: "3 Months",
                    fess: "₹ 30000"
                },
                {
                    title: "Python / Django Stack Development",
                    duration: "3 Months",
                    fess: "₹ 30000"
                },
            ]
        },
        {
            id: 1,
            title: "Python / Data Science / AI & ML",
            courses: [
                {
                    title: "Python Programming",
                    duration: "3 Months / 6 weeks",
                    fess: "₹ 30000 /₹ 5000"
                },
                {
                    title: "Data Science",
                    duration: "3 Months / 6 weeks",
                    fess: "₹ 30000 /₹ 5000"
                },
                {
                    title: "AI & ML",
                    duration: "3 Months / 6 weeks",
                    fess: "₹ 30000 /₹ 5000"
                },
            ]
        },
        {
            id: 2,
            title: "Application Development",
            courses: [
                {
                    title: "React-Native",
                    duration: "3 Months / 6 weeks",
                    fess: "₹ 30000 /₹ 5000"
                },
            ]
        },
        {
            id: 3,
            title: "Trending Technology",
            courses: [
                {
                    title: "AWS Devops",
                    duration: "3 Months / 6 weeks",
                    fess: "₹ 30000 /₹ 5000"
                },
                {
                    title: "Digital Marketing",
                    duration: "3 Months / 6 weeks",
                    fess: "₹ 30000 /₹ 5000"
                },
                {
                    title: "UI / UX",
                    duration: "3 Months / 6 weeks",
                    fess: "₹ 30000 /₹ 5000"
                },
            ]
        },
    ]
    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])
    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                height: mobile ? "auto" : "82vh",
                backgroundColor: "black"
            }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Technology Courses at NerdTech Academy - Stay Ahead in Tech Innovation</title>
                    <description>
                        Explore our comprehensive range of technology courses at NerdTech Academy. Stay ahead in the rapidly evolving tech landscape with our cutting-edge programs.
                    </description>
                </Helmet>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: 40,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "left",
                    width: mobile ? "90%" : "88%"
                }}>
                    Explore Our Courses .
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
                            data.map((item, index) => (
                                <p style={{
                                    fontFamily: index === active ? "Nothing" : "Bold",
                                    color: index === active ? "#000" : "#fff",
                                    borderColor: "#fff",
                                    backgroundColor: index === active ? "white" : "transparent",
                                    borderWidth: 2,
                                    borderStyle: "solid",
                                    padding: 10,
                                    marginBlock: 5,
                                    borderRadius: 10,
                                    width: mobile ? "100%" : "50%",
                                    cursor: "pointer",
                                    transition: " all 1s ease"
                                }}
                                    onClick={() => {
                                        setActive(item?.id)
                                    }}
                                >
                                    {item?.title}
                                </p>
                            ))
                        }
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: mobile ? "100%" : "55%",
                        transition: " all 1s ease"
                    }}>
                        <p style={{
                            fontFamily: "Nothing",
                            fontSize: mobile ? 25 : 30,
                            color: "#ffffff",
                            letterSpacing: 2,
                            textAlign: mobile ? "center" : "left",
                            marginBlock: mobile ? 20 : 0,
                        }}>
                            {data[active]?.title} .
                        </p>
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            width: "100%",
                            justifyContent: "space-evenly"
                        }}>
                            {
                                data[active]?.courses?.map((item, index) => (
                                    <div style={{
                                        backgroundColor: "#fff",
                                        marginBlock: 10,
                                        padding: 10,
                                        borderRadius: 10,
                                        width: mobile ? "88%" : 280,
                                    }}
                                        onClick={() => {

                                        }}
                                    >
                                        <p style={{
                                            fontFamily: "Nothing",
                                            letterSpacing: 2,
                                            textAlign: "center",
                                            marginBlock: 0,
                                            fontSize: mobile ? 20 : 25,
                                            fontWeight: "bolder"
                                        }}>
                                            {item?.title}
                                        </p>
                                        <p style={{
                                            fontFamily: "Bold",
                                            letterSpacing: 2,
                                            fontSize: 14,
                                            textAlign: "center",
                                        }}>
                                            Duration : {item?.duration}
                                        </p>
                                        <p style={{
                                            fontFamily: "Bold",
                                            letterSpacing: 2,
                                            textAlign: "center",
                                            marginBlock: 0,
                                        }}>
                                            Fees : {item?.fess}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
