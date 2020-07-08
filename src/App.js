import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pdf from "./files/resume.pdf";
import Github from "./files/github.png";
import Insta from "./files/instagram.png";
import LinkedIn from "./files/linkedin.png";

function NavigationBar() {
  return (
    <Navbar fixed="top" className="color-nav" variant="light">
      <Navbar.Brand href="#home">
        <Navbar.Text className="text-white">CR</Navbar.Text>
      </Navbar.Brand>
      <Navbar.Collapse>
        <a className="a" href="mailto:regan.col@northeastern.edu">
          | regan.col@northeastern.edu
        </a>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <header className="list-center">
          <ul align="center" class="list-inline">
            <li class="list-inline-item">
              <a href="https://github.com/odelo" target="_blank">
                <img border="0" src={Github} width="29" height="29"></img>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/regan-col/" target="_blank">
                <img border="0" src={LinkedIn} width="30" height="30"></img>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://instagram.com/ss.regan" target="_blank">
                <img border="0" src={Insta} width="30" height="30"></img>
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
    </Navbar>
  );
}

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <div>
          <p class="section-title">Welcome, my name is </p>
          <p class="name">Colin Regan.</p>
          <div class="section-body">
            <p>
              This is my pet project—a website I built as an excuse to learn
              some new things and show off what I like to do. Feel free to take
              a look.
            </p>
          </div>
        </div>
        <Figure>
          <Figure.Image
            width={100}
            height={100}
            alt="100x100"
            src="headshot.jpg/100x100"
          ></Figure.Image>
        </Figure>
      </header>
    </div>
  );
}

export default App;
