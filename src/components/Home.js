import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Image,
  Icon,
  Segment,
  Transition,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Submenu from "../components/Submenu.js";

const RightImage = () => (
  <Image
    floated="right"
    size="medium"
    circular
    src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAQDGAAwAAQAAAAAAAAxqAAAAJDVhYWU4YmQ4LTk1YWQtNDRkYy1iNTFhLTZhODc0Y2JiMjQ1NQ.jpg"
    style={{ margin: "2em -4em 2em 2em" }}
  />
);

const Content = () => {
  return ``;
};

export default class Home extends Component {
  state = { visible: false };
  componentDidMount() {
    this.setState({ visible: true });
  }
  render() {
    return (
      <Transition.Group animation={"fade down"} duration={2300}>
        <Divider />
        <Submenu />
        {this.state.visible && (
          <Container>
            <div className="landing-image">
              <br />
              Hi there! Welcome to my homepage. My name is Joshua and I am a web
              developer, designer and software engineer. Josh expertise is in
              JavaScript, React, Rails and Express. In addition to backend and
              front-end coding, I style using Semantic-UI (with and without
              react), Bootstrap, and Bulma.<br /> <RightImage /> <br />{" "}
              Languages that I know are Ruby, JavaScript, Python, and C#. My
              database experience includes PostgreSQL, MySQL, SQLite, and
              MongoDB. State managers I use are MobX and Redux. <br />
              <br />
              I am also an avid game designer and enthusiast, familiar with
              several game engines including Unity and GameMaker Studio and have
              also built his own JavaScript engines for text adventures and
              turn-based rpgs. I have also actively written for gaming including
              contributing articles to HardcoreGaming 101.<br /> <br />In
              addition to my coding experience, I am a classically trained
              bassoonist and composer holding a BA from the University of
              Connectic, MM from the Hartt School, and a DMA from the University
              of Toronto. As a producer and electro-acoustic musician I most
              often use Ableton Live and Cubase but is familiar with Logic Pro
              and ProTools. For notation, I use Sibelius.
              <br />
              <br />
              Thank you for dropping by! Feel free to drop me a line.
              <br />
              <br />
            </div>
          </Container>
        )}
      </Transition.Group>
    );
  }
}
