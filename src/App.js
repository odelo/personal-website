import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Tooltip from "react-bootstrap/Tooltip";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import Pdf from "./files/resume.pdf";
import Github from "./files/github.png";
import Insta from "./files/instagram.png";
import LinkedIn from "./files/linkedin.png";
import Headshot from "./files/headshot.jpg";
import Twitch from "./files/twitch.png";

function renderTooltip(props, name) {
  return <Tooltip id="button-tooltip">{name}</Tooltip>;
}
function NavigationBar() {
  return (
    <Navbar fixed="top" className="color-nav" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <Navbar.Text className="text-white">CR</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Collapse container="fluid">
          <a className="a" href="mailto:regan.col@northeastern.edu">
            | regan.col@northeastern.edu
          </a>
        </Navbar.Collapse>
      </Container>
      <Container>
        <Navbar.Collapse className="justify-content-center">
          <header className="list-center">
            <ul align="center" class="list-inline">
              <li class="list-inline-item">ABOUT ME.</li>
              <li class="list-inline-item">MY WORK.</li>
              <li class="list-inline-item">REVIEWS.</li>
              <li class="list-inline-item">ART.</li>
              <li class="list-inline-item">CONTACT ME.</li>
            </ul>
          </header>
        </Navbar.Collapse>
      </Container>
      <Container>
        <Navbar.Collapse className="justify-content-end" container="fluid">
          <header className="list-center">
            <ul align="center" class="list-inline">
              <li class="list-inline-item">
                <a href="https://github.com/odelo" target="_blank">
                  <img
                    class="invert"
                    border="0"
                    src={Github}
                    width="29"
                    height="29"
                  ></img>
                </a>
              </li>

              <li class="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/regan-col/"
                  target="_blank"
                >
                  <img
                    class="invert"
                    border="0"
                    src={LinkedIn}
                    width="30"
                    height="30"
                  ></img>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://instagram.com/ss.regan" target="_blank">
                  <img
                    class="invert"
                    border="0"
                    src={Insta}
                    width="30"
                    height="30"
                  ></img>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.twitch.tv/itsodelo" target="_blank">
                  <img
                    class="invert"
                    border="0"
                    src={Twitch}
                    width="30"
                    height="30"
                  ></img>
                </a>
              </li>
              <li class="list-inline-item">
                <Button variant="outline-light" href={Pdf} target="_blank">
                  Resume
                </Button>
              </li>
            </ul>
          </header>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <Container fluid>
          <Row>
            <Col xs={8}>
              <p class="intro">Welcome, my name is</p>
              <p class="name">Colin Regan</p>
              <Row>
                <Col>
                  <div className="rectangle"></div>
                </Col>
              </Row>
              <div class="section-body">
                <p>
                  This is my pet project—a website I built as an excuse to learn
                  some new things and show off what I like to do. Feel free to
                  take a look.
                </p>
              </div>
            </Col>
            <Col xs={3}>
              <div className="header-image">
                <Image
                  style={{ height: "auto", width: 500 }}
                  src={Headshot}
                  roundedCircle
                ></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <main className="App-main">
        <Container>
          <Row className="justify-content-md-center section-title">
            About Me
          </Row>
          <Row>
            <Col sm={10} className="keep-inline">
              <p>
                I am currently a fourth year Computer Engineering student at
                <a href="https://coe.northeastern.edu/" target="_blank">
                  Northeastern University.
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
