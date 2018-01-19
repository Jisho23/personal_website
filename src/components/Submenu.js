import _ from "lodash";
import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import "../App.css";
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
  left: "40px",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

const overlayStyle = {
  float: "left",
  margin: "0em 3em 1em 0em"
};

const fixedOverlayStyle = {
  ...overlayStyle,
  position: "fixed",
  top: "40px",
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

export default class Submenu extends Component {
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
    const { menuFixed, overlayFixed, overlayRect } = this.state;
    return (
      <div>
        <Visibility
          offset={10}
          once={false}
          onBottomPassed={this.stickOverlay}
          onTopVisible={this.unStickOverlay}
          style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
        />
        <div
          ref={this.handleOverlayRef}
          style={overlayFixed ? fixedOverlayStyle : overlayStyle}
        >
          <Menu
            icon="labeled"
            vertical
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
      </div>
    );
  }
}
