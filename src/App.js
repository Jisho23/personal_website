import _ from "lodash";
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
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
  Visibility
} from "semantic-ui-react";

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

const Paragraph = () => (
  <p>
    {[
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ",
      "tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ",
      "semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ",
      "ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ",
      "fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ",
      "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ",
      "neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ",
      "accumsan porttitor, facilisis luctus, metus"
    ].join("")}
  </p>
);

export default class App extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    activeItem: "home"
  };

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
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}

        <style>{`
          html, body {
            background: #fff;
          }
        `}</style>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            <Container>
              <Menu inverted borderless fixed={menuFixed && "top"}>
                <Menu.Item
                  name="home"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="portfolio/projects"
                  active={activeItem === "portfolio/projects"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="education"
                  active={activeItem === "education"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="resume/cv"
                  active={activeItem === "resume/cv"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Container>

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
          <div
            ref={this.handleOverlayRef}
            style={overlayFixed ? fixedOverlayStyle : overlayStyle}
          >
            <Menu
              icon="labeled"
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
            >
              <Menu.Item>
                <Icon name="linkedin" />
                LinkedIn
              </Menu.Item>

              <Menu.Item>
                <Icon name="github" />
                GitHub
              </Menu.Item>

              <Menu.Item>
                <Icon name="mail" />
                Email
              </Menu.Item>
            </Menu>
          </div>
          {_.times(3, i => <Paragraph key={i} />)}

          {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.
              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}

          {_.times(3, i => <Paragraph key={i} />)}
          <LeftImage />

          <Paragraph />
          <RightImage />

          {_.times(4, i => <Paragraph key={i} />)}
          <LeftImage />

          <Paragraph />
          <RightImage />

          {_.times(2, i => <Paragraph key={i} />)}
        </Container>
      </div>
    );
  }
}
