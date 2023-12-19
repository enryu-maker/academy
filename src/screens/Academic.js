import React from 'react'
import useMediaQuery from '../components/useMediaQuery';
import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom';
export default function Academic() {
    const mobile = useMediaQuery('(max-width: 768px)');
    // const navigate = useNavigate()
    const data = [
        {
            id: 0,
            title: "Diploma MSBTE",
            Duration: "Semester / Crash Course",
            batch: "All Department & all Subjects"
        },
        {
            id: 1,
            title: "Engineering BE/B.Tech",
            Duration: "Semester / Crash Course",
            batch: "All Department & all Subjects"
        },
    ]
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
                    Academic .
                </p>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: mobile ? 26 : 40,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "center",
                    marginBlock: 0,
                    width: mobile ? "90%" : "88%"
                }}>
                    Nerdtech(R) <span style={{ fontFamily: "Regular" }}>X</span> Samruddhi <span style={{ fontFamily: "Black" }}>Academy</span>
                </p>
                <p style={{
                    fontFamily: "Nothing",
                    color: "#ffffff",
                    textAlign: mobile ? "justify" : "center",
                    width: mobile ? "90%" : "88%",
                    fontSize: mobile ? 14 : 16
                }}>
                    Empowering Minds Together: NerdTech Academy in Collaboration with Samruddhi Academy – Where Academic Excellence Meets Technological Ingenuity.
                </p>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: 20,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "center",
                    width: mobile ? "90%" : "88%"
                }}>
                    Available Academic Programs .
                </p>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: mobile ? "center" : "center",
                    width: mobile ? "88%" : "100%",
                    flexWrap: "wrap"
                }}>
                    {
                        data.map((item) => (
                            <div style={{
                                backgroundColor: "#fff",
                                marginBlock: 10,
                                padding: 10,
                                borderRadius: 10,
                                width: mobile ? "88%" : 300,
                                height:mobile?"auto" : 100,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                cursor: "pointer"
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
                                    marginBlock: 0,
                                }}>
                                    Duration : {item?.Duration}
                                </p>
                                <p style={{
                                    fontFamily: "Bold",
                                    letterSpacing: 2,
                                    fontSize: 14,
                                    textAlign: "center",
                                    marginBlock: 0,
                                }}>
                                    {item?.batch}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
