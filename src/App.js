import _ from "lodash";
import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Button,
  Segment,
  Visibility,
  Transition
} from "semantic-ui-react";

import Home from "./components/Home.js";
import Education from "./components/Education.js";
import Resume from "./components/Resume.js";
import Portfolio from "./components/Portfolio.js";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "4em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease"
};

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

const overlayStyle = {
  float: "left",
  margin: "0em 3em 1em 0em"
};

const fixedOverlayStyle = {
  ...overlayStyle,
  position: "fixed",
  top: "80px",
  zIndex: 10
};

const overlayMenuStyle = {
  position: "relative",
  left: 0,
  transition: "left 0.5s ease"
};

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: "800px"
};

const LeftImage = () => (
  <Image
    floated="left"
    size="medium"
    src="/assets/images/wireframe/square-image.png"
    style={{ margin: "2em 2em 2em -4em" }}
  />
);

const RightImage = () => (
  <Image
    floated="right"
    size="medium"
    src="/assets/images/wireframe/square-image.png"
    style={{ margin: "2em -4em 2em 2em" }}
  />
);

export default class App extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    activeItem: "home",
    visible: false
  };

  componentDidMount() {
    this.setState({ visible: true });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleOverlayRef = c => {
    const { overlayRect } = this.state;

    if (!overlayRect)
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), "height", "width")
      });
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { activeItem } = this.state;
    const { menuFixed, overlayFixed, overlayRect } = this.state;

    return (
      <div>
        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 600, padding: "1em 0em" }}
          vertical
        >
          <Visibility
            onTopPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            <Container>
              <Menu inverted borderless fixed={menuFixed && "top"}>
                <Link to="/">
                  <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/portfolio">
                  <Menu.Item
                    name="portfolio/projects"
                    active={activeItem === "portfolio/projects"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/education">
                  <Menu.Item
                    name="education"
                    active={activeItem === "education"}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to="/resume">
                  <Menu.Item
                    name="resume/cv"
                    active={activeItem === "resume/cv"}
                    onClick={this.handleItemClick}
                  />
                </Link>
              </Menu>
            </Container>
            <Transition.Group animation={"fade up"} duration={2500}>
              {this.state.visible && (
                <Container text>
                  <Header
                    as="h1"
                    content="Joshua Denenberg"
                    inverted
                    style={{
                      fontSize: "4em",
                      fontWeight: "normal",
                      marginBottom: 0,
                      marginTop: "3em"
                    }}
                  />

                  <Header
                    as="h2"
                    content="Programmer, Web Developer, Designer"
                    inverted
                    style={{ fontSize: "1.7em", fontWeight: "normal" }}
                  />
                </Container>
              )}
            </Transition.Group>
          </Visibility>
        </Segment>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop add add another styles if it has
            gone beyond the scope of visibility
          */}

        <Visibility
          offset={80}
          once={false}
          onTopPassed={this.stickOverlay}
          onTopVisible={this.unStickOverlay}
          style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
        />

        <Container text>
          {this.state.activeItem == "home" ? (
            <div
              ref={this.handleOverlayRef}
              style={overlayFixed ? fixedOverlayStyle : overlayStyle}
            >
              <Menu
                icon="labeled"
                style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              >
                <a href="https://www.linkedin.com/in/joshua-denenberg-809b5273/">
                  <Menu.Item>
                    <Icon name="linkedin" />
                    LinkedIn
                  </Menu.Item>
                </a>
                <a href="https://github.com/Jisho23">
                  <Menu.Item>
                    <Icon name="github" />
                    GitHub
                  </Menu.Item>
                </a>
                <a href="mailto:j.denenberg42@gmail.com">
                  <Menu.Item>
                    <Icon name="mail" />
                    Email
                  </Menu.Item>
                </a>
              </Menu>
            </div>
          ) : null}
          <Container>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/education" render={() => <Education />} />
            <Route exact path="/portfolio" render={() => <Portfolio />} />
            <Route exact path="/resume" render={() => <Resume />} />
          </Container>
        </Container>

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Divider inverted section />

            <List horizontal inverted divided link>
              <List.Item
                as="a"
                href="https://www.linkedin.com/in/joshua-denenberg-809b5273/"
              >
                LinkedIn
              </List.Item>

              <List.Item as="a" href="https://github.com/Jisho23">
                Github
              </List.Item>

              <List.Item as="a" href="mailto:j.denenberg42@gmail.com">
                Email
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
