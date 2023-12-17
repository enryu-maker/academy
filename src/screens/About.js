import React from 'react'
import useMediaQuery from '../components/useMediaQuery';
import { IMAGES } from '../Assets/Images';
import { Helmet } from 'react-helmet';
export default function About() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const data = [
        {
            id: 1,
            name: "Akif",
            image: IMAGES.akif
        },
        {
            id: 2,
            name: "Ved",
            image: IMAGES.ved
        },
        {
            id: 3,
            name: "Abhi",
            image: IMAGES.abhi
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>About NerdTech Academy - Our Vision, Commitment, and Team</title>
                <description>
                    Discover the story behind NerdTech Academy. Learn about our vision, commitment to excellence, and meet our team of dedicated educators and industry professionals.
                </description>
            </Helmet>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "auto",
                backgroundColor: "black",
                transition: " all 1s ease"
            }}>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: 40,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "left",
                    width: mobile ? "90%" : "88%",
                    marginBlockEnd: 0
                }}>
                    About Us .
                </p>
                <p
                    style={{
                        fontFamily: "Nothing",
                        color: "#fff",
                        width: mobile ? "90%" : "88%",
                        textAlign: "left",
                        marginBlock: 0
                    }}
                >Empowering Minds, Shaping Futures</p>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: 30,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "left",
                    width: mobile ? "90%" : "88%",
                    marginBlockEnd: 0
                }}>
                    Our Story .
                </p>
                <p style={{
                    fontFamily: "Regular",
                    fontSize: mobile ? 14 : 18,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "justify",
                    width: mobile ? "90%" : "88%",
                    // marginBlockEnd: 0
                }}>
                    - Founded with a passion for innovation and a commitment to education, <span style={{ fontFamily: "Nothing" }}><span style={{ fontFamily: "Nothing" }}>NerdTech</span></span>  Academy began its journey
                    with a simple yet powerful vision – to empower minds and shape futures in the ever-evolving world of technology.
                    <br />- The story of <span style={{ fontFamily: "Nothing" }}>NerdTech</span> Academy is one of relentless dedication to providing a dynamic and forward-thinking
                    learning environment. From our humble beginnings, we set out to create more than just an educational institution;
                    we aimed to build a community where aspiring minds could thrive, innovate, and contribute to the tech landscape.
                    <br />- As we continue to evolve, our commitment to excellence remains steadfast. Our courses are designed to reflect the latest
                    industry trends, and our faculty comprises not just educators but mentors who bring real-world insights to the classroom.
                    Together, we strive to create an atmosphere where curiosity is nurtured, challenges are embraced, and success becomes a shared journey.
                    <br />- Join us at <span style={{ fontFamily: "Nothing" }}><span style={{ fontFamily: "Nothing" }}>NerdTech</span></span> Academy, where every page of our story is written with the ink of ambition, curiosity, and the relentless
                    pursuit of knowledge. Together, let's shape a future where innovation knows no bounds.
                </p>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: 30,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "left",
                    width: mobile ? "90%" : "88%",
                    marginBlockEnd: 0
                }}>
                    Our Team .
                </p>
                <p style={{
                    fontFamily: "Regular",
                    fontSize: mobile ? 14 : 18,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "justify",
                    width: mobile ? "90%" : "88%",
                    // marginBlockEnd: 0
                }}>
                    - Meet the passionate minds behind <span style={{ fontFamily: "Nothing" }}><span style={{ fontFamily: "Nothing" }}>NerdTech</span></span> Academy. Our team comprises experienced educators,
                    industry professionals, and technology enthusiasts. Together, we are dedicated to shaping the
                    future of education and empowering our students for success.
                </p>
                <div style={{
                    width: "88%",
                    display: "flex",
                    flexDirection: mobile ? "column" : "row",
                    justifyContent: "space-evenly"
                }}>
                    <img
                        alt='team'
                        style={{
                            filter: "grayscale(1)",
                            width: mobile ? "100%" : "35%",
                            objectFit: "contain",
                            marginBlockEnd: 20,
                        }}
                        src={IMAGES.Team}
                    />
                    <div style={{
                        display: "flex",
                        width: mobile ? "100%" : "70%",
                        justifyContent: "space-evenly"
                    }}>
                        {
                            data?.map((item) => (
                                <div>
                                    <img
                                        alt='team'
                                        style={{
                                            filter: "grayscale(1)",
                                            width: mobile ? 80 : 100,
                                            height: mobile ? 80 : 100,
                                            objectFit: "cover",
                                            borderRadius: "50%"
                                        }}
                                        src={item?.image}
                                    />
                                    <p style={{
                                        fontFamily: "Nothing",
                                        fontSize: mobile ? 16 : 20,
                                        color: "#ffffff",
                                        textAlign: "center",
                                        marginBlock: 0
                                    }}>
                                        {item?.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <p style={{
                    fontFamily: "Nothing",
                    fontSize: mobile ? 28 : 30,
                    color: "#ffffff",
                    letterSpacing: 2,
                    textAlign: "left",
                    width: mobile ? "90%" : "88%",
                }}>
                    From the CEO's Desk .
                </p>
                <div style={{
                    width: "88%",
                    display: "flex",
                    flexDirection: mobile ? "column" : "row",
                    justifyContent: "space-between",
                    marginBlockEnd: 50
                }}>
                    <img
                        alt='ceo'
                        style={{
                            filter: "grayscale(1)",
                            width: mobile ? "100%" : 300,
                            height: 250,
                            objectFit: "cover",
                        }}
                        src={IMAGES.ceo}
                    />
                    <p style={{
                        fontFamily: "Regular",
                        color: "#fff",
                        width: mobile ? "100%" : "70%",
                        textAlign: "justify",
                        marginBlockStart: mobile ? 20 : 0
                    }}>
                        Welcome to <span style={{ fontFamily: "Nothing" }}>NerdTech</span> Academy, where education meets innovation! It is my pleasure to personally welcome you to our
                        dynamic learning community. At <span style={{ fontFamily: "Nothing" }}>NerdTech</span>, we believe in the transformative power of knowledge. Our commitment is not just to provide courses but
                        to foster an environment where each student can unlock their full potential. Our journey is built on the idea that
                        learning is a lifelong adventure, and we are here to guide you every step of the way.As technology continues to redefine our world, <span style={{ fontFamily: "Nothing" }}>NerdTech</span> Academy is dedicated to staying at the forefront. Our courses
                        are meticulously crafted to equip you with the skills and insights needed to thrive in the rapidly evolving tech landscape. Our team of educators and mentors is passionate about your success. We are here to inspire, challenge, and support you
                        as you embark on your educational journey. Together, let's turn your aspirations into achievements.
                        Thank you for choosing <span style={{ fontFamily: "Nothing" }}>NerdTech</span> Academy. I am excited about the possibilities that lie ahead and look forward to seeing
                        you excel, innovate, and shape the future.
                        <br />
                        <br />
                        <span style={{ fontFamily: "Bold" }}>Best Regards,</span>
                        <br />
                        <span style={{ fontFamily: "Nothing" }}>Akif Khan</span>
                    </p>
                </div>
            </div>
        </div >
    )
}
