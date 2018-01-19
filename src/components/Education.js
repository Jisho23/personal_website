import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Image,
  Icon,
  Segment,
  List
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Education extends Component {
  state = {};

  render() {
    return (
      <Container>
        <List as="ul">
          <List.Item as="li">The Flatiron School</List.Item>
          <List.Item as="li">The University of Toronto</List.Item>
          <List.Item as="li">
            The University of Hartford / The Hartt School
          </List.Item>
          <List.Item as="li">The University of Connecticut</List.Item>
        </List>
      </Container>
    );
  }
}
