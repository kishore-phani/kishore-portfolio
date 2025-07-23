import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../Assets/Ecommerce.png";
import photoflix from "../../Assets/photoflix.jpeg"
import Slackmockapi from "../../Assets/Slackmockapi.png"
import TaskManager from "../../Assets/TaskManager.png"
import Hotel from "../../Assets/Hotel.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          

          <Col md={4} className="project-card">          
            <ProjectCard
              imgPath={Hotel}
              isBlog={false}
              title="Hotel Management System"
              description="This Online Hotel Booking System is a full-stack web application that streamlines the hotel booking process. It connects customers with hotels, providing an intuitive interface for room booking and management. The system features secure payment processing, user profile management, booking history tracking, and a powerful dashboard for hotel managers.FeaturesCustomer FeaturesUser registration and authenticationSearch for hotels with filtering options View detailed hotel and room information Make reservations with secure payment processing Receive booking confirmation with reference number."
              ghLink="https://github.com/Sandy-babu/Online-Hotel-Booking-System"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">          
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce Project"
              description="An ecommerce store built with MERN stack, and utilizes third party API's. This ecommerce store enable three main different flows or implementations Buyers browse the store categories, products and brands Sellers or Merchants manage their own brand component Admins manage and control the entire store componentsNode provides the backend environment for this applicationExpress middleware is used to handle requests, routes"
              ghLink="https://github.com/kishore-phani/ECOMMERCE.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">          
            <ProjectCard
              imgPath={TaskManager}
              isBlog={false}
              title="Student Management System"
              description="A powerful Login and Authentication System - Role based authentication and authorization.Student Details – Displays the details of all the students, and provides following services: a. Adding a new student. b. Editing / Modifying the data of an existing student. c. Deleting / Removing the data of an existing student.Course Details – Lis the details of all the courses available in the institution, and provides following services: a. Adding a new course. b. Editing an existing course. c. Deleting a course.Fee Details.Marks and Grades.Attendance."
              ghLink="https://github.com/kishore-phani/studentmanagement.git"
              demoLink=""
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
