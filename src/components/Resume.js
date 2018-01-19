import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Image,
  Icon,
  Segment,
  List,
  Divider,
  Transition,
  Breadcrumb
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Submenu from "../components/Submenu.js";

export default class Resume extends Component {
  state = { visible: false };
  componentDidMount() {
    this.setState({ visible: true });
  }

  render() {
    return (
      <Transition.Group animation={"fade down"} duration={2300}>
        {this.state.visible && (
          <Container>
            <Divider />
            <Container text>
              <Header textAlign="center" as="h2">
                Joshua Denenberg
              </Header>
              <Container center>
                <Breadcrumb textAlign="center">
                  <Breadcrumb.Section>914-500-7331</Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section
                    as="a"
                    href="mailto:j.denenberg42@gmail.com&quot;"
                  >
                    J.denenberg42@gmail.com
                  </Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section as="a" href="https://github.com/Jisho23">
                    Github: Jisho23
                  </Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section
                    as="a"
                    href="https://www.linkedin.com/in/joshua-denenberg-809b5273/"
                  >
                    LinkedIn
                  </Breadcrumb.Section>
                  <Breadcrumb.Divider />
                  <Breadcrumb.Section
                    as="a"
                    href="https://medium.com/@j.denenberg42"
                  >
                    Medium Blog
                  </Breadcrumb.Section>
                </Breadcrumb>
              </Container>
              <Divider />
              <Container>
                <p>
                  Full stack web developer with a passion for coding, web
                  design, and music. With experience developing with Ruby on
                  Rails and JavaScript based frameworks (specifically React,
                  React-Redux) and a background in audio (earning the degree
                  level of Doctorate of Musical Arts), I discovered a passion
                  for programming through audio software such as Max/MSP, a
                  visual coding language for audio production.
                </p>
                <Divider />
                <Header as="h3">Technical Experience</Header>
                <p>
                  <strong>Programming: </strong>Javascript (ES6), Ruby, React,
                  Rails, Activerecord, Redux, SQL, Sinatra, CSS, MobX, HTML5 and
                  Semantic UI (with and without React).
                </p>
                <p>
                  {" "}
                  <strong>Database experience:</strong> MySql, Sqlite,
                  PostgreSQL.{" "}
                </p>
                <p>
                  <strong>Audio Software:</strong> Ableton Live, Cubase 5, Logic
                  Pro, Finale, Sibelius, Max MSP, and Audacity. .{" "}
                </p>
              </Container>
              <Divider />
              <Container>
                <Header as="h3">Work Experience</Header>

                <List as="ul">
                  <List.Item>
                    <strong>University of Toronto Libraries</strong> Toronto,
                    Ontario
                    <br />
                    <em>Student Library Assistant, 9/2016 - 8/2017</em>
                    <List.List as="ul">
                      <List.Item as="li">
                        Update and process library materials for the low
                        circulation catalog.
                      </List.Item>
                      <List.Item as="li">
                        Daily tasks included scanning and cross referencing
                        books against the entire system catalog and updating as
                        needed.
                      </List.Item>
                      <List.Item as="li">
                        Database built on Sirsi Workflows.
                      </List.Item>
                    </List.List>
                  </List.Item>
                  <br /> <br />
                  <List.Item>
                    <strong>University of Toronto Faculty of Music</strong>{" "}
                    Toronto, Ontario
                    <br />
                    <em>Teaching Assistant, 9/2013 - 5/2017</em>
                    <List.List as="ul">
                      <List.Item as="li">
                        Aid teachers in preparing weekly lectures.
                      </List.Item>
                      <List.Item as="li">
                        Regular tasks included grading, substitute lecturing,
                        scheduling and correspondence between students and
                        teachers, regular technical support, and tutoring
                        students.
                      </List.Item>
                      <List.Item as="li">
                        Topics included music technology (Digital Audio
                        Workstations), music composition, and music theory.
                      </List.Item>
                    </List.List>
                  </List.Item>
                </List>
              </Container>
            </Container>
            <Divider />
            <Button
              as="a"
              href="https://drive.google.com/open?id=1wi04Q6B5EPlWuj_Fc5EiXaG7IysTM0VW"
            >
              {" "}
              PDF Full Resume{" "}
            </Button>
            <Button
              as="a"
              href="https://drive.google.com/open?id=1r76ZLoGfQxE_3IwMl3Vi4gQJjUq0Ep9m"
            >
              {" "}
              PDF Academic/Artistic CV{" "}
            </Button>
          </Container>
        )}
      </Transition.Group>
    );
  }
}
