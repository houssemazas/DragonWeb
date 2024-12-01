import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../App.css";
import  pic1 from "../../Assets/pic1.jpg";
import  pic2 from "../../Assets/pic2.jpg";
import  pic3 from "../../Assets/pic3.jpg";

function ResumeNew() {
  const [openCardId, setOpenCardId] = useState(null); // Track which card is open

  const boxes = [
    { id: 1, title: "Houssem Azaza", 
      content: "As a security specialist in a tech-driven organization, I played a critical role in safeguarding systems and data by implementing robust security measures and ensuring compliance with industry standards.",
       img: pic1 },
    {
      id: 2,
      title: "Amine Ryehi",
      content:
        "As a designer in a web development organization, I, Mohamed Amine Benali, played a key role in creating visually engaging and user-friendly designs that align with project goals and user needs. My responsibilities included collaborating with developers to ensure the seamless integration of design elements and maintaining brand consistency throughout the digital experience. By leveraging my skills in visual design and understanding of web development, I helped create cohesive, responsive layouts that contribute to both aesthetic appeal and functional performance. This experience enhanced my ability to blend creativity with technical knowledge to produce impactful, user-centric web solutions.",
      img: pic2,
    },
    {
      id: 3,
      title: "Firas Garraoui",
      content:
        "As a Front-End and Back-End Developer, you will handle both client-side and server-side development tasks. On the front-end, you’ll create responsive, user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like React or Angular. On the back-end, you’ll develop server-side logic, manage databases, and ensure application performance and security with technologies like Node.js, PHP, or Python. You’ll work closely with designers and other developers to ensure smooth integration, troubleshoot issues, and optimize overall performance.",
      img: pic3,
    },
  ];

  return (
    <Container fluid className="animated-boxes-section" style={{ padding: "50px" }}>
      <Row className="g-4 justify-content-center">
        {boxes.map((box) => (
          <Col key={box.id} md={4}>
            <motion.div
              className="card"
              layout
              transition={{ layout: { duration: 1, type: "spring" } }}
              onClick={() => setOpenCardId(openCardId === box.id ? null : box.id)}
              style={{
                background: "rgba(26, 26, 26, 0.8)",
                borderRadius: "10px",
                padding: "20px",
                color: "#fff",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <motion.div layout="position" style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <img
                  src={box.img}
                  alt="Profile"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                />
                <h2 style={{ margin: 0 }}>{box.title}</h2>
              </motion.div>
              {openCardId === box.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ marginTop: "10px" }}
                >
                  <p>{box.content}</p>
                </motion.div>
              )}
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ResumeNew;
