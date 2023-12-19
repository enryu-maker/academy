import React from 'react'
import useMediaQuery from '../components/useMediaQuery';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
export default function Courses() {
    const mobile = useMediaQuery('(max-width: 768px)');
    const [active, setActive] = React.useState(0)
    const navigate = useNavigate()
    const data = [
        {
            id: 0,
            title: "Full Stack Development",
            courses: [
                {
                    title: "MERN Stack Development",
                    duration: "3 Months",
                    fess: "₹ 30000",
                    internship: [
                        {
                            id:0,
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Basic HTML"
                                },
                                {
                                    title: "Week 2",
                                    desc: "Basic CSS"
                                },
                                {
                                    title: "Week 3",
                                    desc: "Grid, Flex"
                                },
                                {
                                    title: "Week 4",
                                    desc: "BootStrap"
                                },
                                {
                                    title: "Week 5",
                                    desc: "Basic JavaScript"
                                },
                                {
                                    title: "Week 6",
                                    desc: "Advance JavaScript"
                                },
                                {
                                    title: "Week 7",
                                    desc: "Basic React"
                                },
                                {
                                    title: "Week 8",
                                    desc: "React Router"
                                },
                                {
                                    title: "Week 9",
                                    desc: "MongoDB"
                                },
                                {
                                    title: "Week 10",
                                    desc: "Node JS ,Express JS"
                                },
                                {
                                    title: "Week 11",
                                    desc: "Express JS,Project"
                                },
                                {
                                    title: "Week 12",
                                    desc: "Project"
                                },
                            ]
                        }
                    ]
                },
                {
                    title: "Frontend Development",
                    duration: "3 Months",
                    fess: "₹ 30000",
                    internship: [
                        {
                            id:0,
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "HTML"
                                },
                                {
                                    title: "Week 2",
                                    desc: "HTML Table and Forms"
                                },
                                {
                                    title: "Week 3",
                                    desc: "Basic CSS "
                                },
                                {
                                    title: "Week 4",
                                    desc: "CSS Positions Display"
                                },
                                {
                                    title: "Week 5",
                                    desc: "Grid and Flex "
                                },
                                {
                                    title: "Week 6",
                                    desc: "BootStarp"
                                },
                                {
                                    title: "Week 7",
                                    desc: "Basic JavaScript"
                                },
                                {
                                    title: "Week 8",
                                    desc: "JavaScript Events"
                                },
                                {
                                    title: "Week 9",
                                    desc: "Basic React"
                                },
                                {
                                    title: "Week 10",
                                    desc: "React Hooks"
                                },
                                {
                                    title: "Week 11",
                                    desc: "React Router"
                                },
                                {
                                    title: "Week 12",
                                    desc: "Project"
                                },
                            ]
                        }
                    ]
                },
                {
                    title: "Python - Django Stack Development",
                    duration: "3 Months",
                    fess: "₹ 30000",
                    internship: [
                        {
                            id:0,
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Introduction to Python"
                                },
                                {
                                    title: "Week 2",
                                    desc: "Python Basics"
                                },
                                {
                                    title: "Week 3",
                                    desc: "Introduction to OOP"
                                },
                                {
                                    title: "Week 4",
                                    desc: "File Handling"
                                },
                                {
                                    title: "Week 5",
                                    desc: "Exception Handling"
                                },
                                {
                                    title: "Week 6",
                                    desc: "Advanced Topics"
                                },
                                {
                                    title: "Week 7",
                                    desc: "Getting Started with Django"
                                },
                                {
                                    title: "Week 8",
                                    desc: "Django Models and Admin"
                                },
                                {
                                    title: "Week 9",
                                    desc: "Django Views"
                                },
                                {
                                    title: "Week 10",
                                    desc: "Django Templates, Django Forms"
                                },
                                {
                                    title: "Week 11",
                                    desc: "Django ORM and Querysets, Django Authentication Authorization"
                                },
                                {
                                    title: "Week 12",
                                    desc: "Project"
                                },
                            ]
                        }
                    ]
                },
            ]
        },
        {
            id: 1,
            title: "Python / Data Science / AI & ML",
            courses: [
                {
                    id:0,
                    title: "Python Programming",
                    duration: "3 Months / 4 weeks",
                    fess: "₹ 30000 /₹ 5000",
                    internship: [
                        {
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: ""
                                },
                                {
                                    title: "Week 2",
                                    desc: ""
                                },
                                {
                                    title: "Week 3",
                                    desc: ""
                                },
                                {
                                    title: "Week 4",
                                    desc: ""
                                },
                                {
                                    title: "Week 5",
                                    desc: ""
                                },
                                {
                                    title: "Week 6",
                                    desc: ""
                                },
                                {
                                    title: "Week 7",
                                    desc: ""
                                },
                                {
                                    title: "Week 8",
                                    desc: ""
                                },
                                {
                                    title: "Week 9",
                                    desc: ""
                                },
                                {
                                    title: "Week 10",
                                    desc: ""
                                },
                                {
                                    title: "Week 11",
                                    desc: ""
                                },
                                {
                                    title: "Week 12",
                                    desc: ""
                                },
                            ]
                        }
                        ,
                        {
                            id:1,
                            title: "4 Weeks",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Introduction to Python"
                                },
                                {
                                    title: "Week 2",
                                    desc: "Data Structures in Python"
                                },
                                {
                                    title: "Week 3",
                                    desc: "Object-Oriented Programming (OOP) in Python"
                                },
                                {
                                    title: "Week 4",
                                    desc: "Advanced Topics and Project"
                                },
                            ]
                        }
                    ]
                },
                {
                    title: "Data Science",
                    duration: "3 Months / 4 weeks",
                    fess: "₹ 30000 /₹ 5000",
                    internship: [
                        {
                            id:0,
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: ""
                                },
                                {
                                    title: "Week 2",
                                    desc: ""
                                },
                                {
                                    title: "Week 3",
                                    desc: ""
                                },
                                {
                                    title: "Week 4",
                                    desc: ""
                                },
                                {
                                    title: "Week 5",
                                    desc: ""
                                },
                                {
                                    title: "Week 6",
                                    desc: ""
                                },
                                {
                                    title: "Week 7",
                                    desc: ""
                                },
                                {
                                    title: "Week 8",
                                    desc: ""
                                },
                                {
                                    title: "Week 9",
                                    desc: ""
                                },
                                {
                                    title: "Week 10",
                                    desc: ""
                                },
                                {
                                    title: "Week 11",
                                    desc: ""
                                },
                                {
                                    title: "Week 12",
                                    desc: ""
                                },
                            ]
                        }
                        ,
                        {
                            id:1,
                            title: "4 Weeks",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Introduction to Data Science and Python Basics"
                                },
                                {
                                    title: "Week 2",
                                    desc: "Data Cleaning and Preprocessing"
                                },
                                {
                                    title: "Week 3",
                                    desc: "Introduction to Machine Learning"
                                },
                                {
                                    title: "Week 4",
                                    desc: "Capstone Project and Review"
                                },
                            ]
                        }
                    ]
                },
                {
                    title: "AI & ML",
                    duration: "3 Months / 4 weeks",
                    fess: "₹ 30000 /₹ 5000",
                    internship: [
                        {
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: ""
                                },
                                {
                                    title: "Week 2",
                                    desc: ""
                                },
                                {
                                    title: "Week 3",
                                    desc: ""
                                },
                                {
                                    title: "Week 4",
                                    desc: ""
                                },
                                {
                                    title: "Week 5",
                                    desc: ""
                                },
                                {
                                    title: "Week 6",
                                    desc: ""
                                },
                                {
                                    title: "Week 7",
                                    desc: ""
                                },
                                {
                                    title: "Week 8",
                                    desc: ""
                                },
                                {
                                    title: "Week 9",
                                    desc: ""
                                },
                                {
                                    title: "Week 10",
                                    desc: ""
                                },
                                {
                                    title: "Week 11",
                                    desc: ""
                                },
                                {
                                    title: "Week 12",
                                    desc: ""
                                },
                            ]
                        }
                        ,
                        {
                            title: "4 Weeks",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Introduction to AI and Python Basics"
                                },
                                {
                                    title: "Week 2",
                                    desc: "Machine Learning Fundamentals"
                                },
                                {
                                    title: "Week 3",
                                    desc: "Machine Learning Fundamentals"
                                },
                                {
                                    title: "Week 4",
                                    desc: "Capstone Project and Review"
                                },
                            ]
                        }
                    ]
                },
            ]
        },
        {
            id: 2,
            title: "Application Development",
            courses: [
                {
                    title: "React-Native",
                    duration: "3 Months / 4 weeks",
                    fess: "₹ 30000 /₹ 5000",
                    internship: [
                        {
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: ""
                                },
                                {
                                    title: "Week 2",
                                    desc: ""
                                },
                                {
                                    title: "Week 3",
                                    desc: ""
                                },
                                {
                                    title: "Week 4",
                                    desc: ""
                                },
                                {
                                    title: "Week 5",
                                    desc: ""
                                },
                                {
                                    title: "Week 6",
                                    desc: ""
                                },
                                {
                                    title: "Week 7",
                                    desc: ""
                                },
                                {
                                    title: "Week 8",
                                    desc: ""
                                },
                                {
                                    title: "Week 9",
                                    desc: ""
                                },
                                {
                                    title: "Week 10",
                                    desc: ""
                                },
                                {
                                    title: "Week 11",
                                    desc: ""
                                },
                                {
                                    title: "Week 12",
                                    desc: ""
                                },
                            ]
                        }
                        ,
                        {
                            title: "4 Weeks",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Introduction to React Native and Setting Up the Environment"
                                },
                                {
                                    title: "Week 2",
                                    desc: "React Native Components and Navigation"
                                },
                                {
                                    title: "Week 3",
                                    desc: "State Management and API Integration"
                                },
                                {
                                    title: "Week 4",
                                    desc: "Building a Functional App and Deployment"
                                },
                            ]
                        }
                    ]
                },
            ]
        },
        {
            id: 3,
            title: "Trending Technology",
            courses: [
                {
                    title: "AWS Devops",
                    duration: "3 Months / 4 weeks",
                    fess: "₹ 30000 /₹ 5000",
                    internship: [
                        {
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: ""
                                },
                                {
                                    title: "Week 2",
                                    desc: ""
                                },
                                {
                                    title: "Week 3",
                                    desc: ""
                                },
                                {
                                    title: "Week 4",
                                    desc: ""
                                },
                                {
                                    title: "Week 5",
                                    desc: ""
                                },
                                {
                                    title: "Week 6",
                                    desc: ""
                                },
                                {
                                    title: "Week 7",
                                    desc: ""
                                },
                                {
                                    title: "Week 8",
                                    desc: ""
                                },
                                {
                                    title: "Week 9",
                                    desc: ""
                                },
                                {
                                    title: "Week 10",
                                    desc: ""
                                },
                                {
                                    title: "Week 11",
                                    desc: ""
                                },
                                {
                                    title: "Week 12",
                                    desc: ""
                                },
                            ]
                        }
                        ,
                        {
                            title: "4 Weeks",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Introduction to AWS and DevOps Fundamentals"
                                },
                                {
                                    title: "Week 2",
                                    desc: "Infrastructure as Code (IaC) with AWS CloudFormation"
                                },
                                {
                                    title: "Week 3",
                                    desc: "CI/CD with AWS CodePipeline and CodeBuild"
                                },
                                {
                                    title: "Week 4",
                                    desc: "Monitoring and Logging with AWS CloudWatch"
                                },
                            ]
                        }
                    ]
                },
                {
                    title: "Digital Marketing",
                    duration: "3 Months / 4 weeks",
                    fess: "₹ 30000 /₹ 5000",
                    internship: [
                        {
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: ""
                                },
                                {
                                    title: "Week 2",
                                    desc: ""
                                },
                                {
                                    title: "Week 3",
                                    desc: ""
                                },
                                {
                                    title: "Week 4",
                                    desc: ""
                                },
                                {
                                    title: "Week 5",
                                    desc: ""
                                },
                                {
                                    title: "Week 6",
                                    desc: ""
                                },
                                {
                                    title: "Week 7",
                                    desc: ""
                                },
                                {
                                    title: "Week 8",
                                    desc: ""
                                },
                                {
                                    title: "Week 9",
                                    desc: ""
                                },
                                {
                                    title: "Week 10",
                                    desc: ""
                                },
                                {
                                    title: "Week 11",
                                    desc: ""
                                },
                                {
                                    title: "Week 12",
                                    desc: ""
                                },
                            ]
                        }
                        ,
                        {
                            title: "4 Weeks",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Introduction to Digital Marketing"
                                },
                                {
                                    title: "Week 2",
                                    desc: "Website and Content Marketing"
                                },
                                {
                                    title: "Week 3",
                                    desc: "Social Media Marketing and Paid Advertising"
                                },
                                {
                                    title: "Week 4",
                                    desc: "Analytics, Email Marketing, and Final Project"
                                },
                            ]
                        }
                    ]
                },
                {
                    title: "UI - UX",
                    duration: "3 Months / 4 weeks",
                    fess: "₹ 30000 /₹ 5000",
                    internship: [
                        {
                            title: "3 Months",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: ""
                                },
                                {
                                    title: "Week 2",
                                    desc: ""
                                },
                                {
                                    title: "Week 3",
                                    desc: ""
                                },
                                {
                                    title: "Week 4",
                                    desc: ""
                                },
                                {
                                    title: "Week 5",
                                    desc: ""
                                },
                                {
                                    title: "Week 6",
                                    desc: ""
                                },
                                {
                                    title: "Week 7",
                                    desc: ""
                                },
                                {
                                    title: "Week 8",
                                    desc: ""
                                },
                                {
                                    title: "Week 9",
                                    desc: ""
                                },
                                {
                                    title: "Week 10",
                                    desc: ""
                                },
                                {
                                    title: "Week 11",
                                    desc: ""
                                },
                                {
                                    title: "Week 12",
                                    desc: ""
                                },
                            ]
                        }
                        ,
                        {
                            title: "4 Weeks",
                            details: [
                                {
                                    title: "Week 1",
                                    desc: "Introduction to UI/UX Design"
                                },
                                {
                                    title: "Week 2",
                                    desc: "UI Design Basics"
                                },
                                {
                                    title: "Week 3",
                                    desc: "UX Design Principles"
                                },
                                {
                                    title: "Week 4",
                                    desc: "Final Projects and Review"
                                },
                            ]
                        }
                    ]
                },
            ]
        },
    ]
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
                            fontSize: mobile ? 23 : 30,
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
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        cursor: "pointer"
                                    }}
                                        onClick={() => {
                                            navigate(`/info/${item?.title}`, {
                                                state: {
                                                    item: item
                                                }
                                            })
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
                                            Duration : {item?.duration}
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
