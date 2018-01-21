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
  Grid
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Submenu from "./Submenu.js";

export default class Portfolio extends Component {
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
              {" "}
              <Submenu />
              <Header as="h2">Women Composers Database Project</Header>
              <Header as="h4">January 2018 - </Header>
              <p>
                In conjunction with the{" "}
                <a href="https://docs.google.com/spreadsheets/d/18wEOsqlPl-Chi4JqIW9oDMQCxXt7PLklBotAjOn5Ix8/edit#gid=11073339">
                  'Women Composers Database'
                </a>
                I am building an alpha build of the front end. Will interperate
                the Google Sheet as a prototype database and build it into
                React components for easy sorting and parsing.
              </p>
            </Container>
            <Divider />
            <Container text>
              <Header as="h2">Adventu-Resume (Text Adventure Engine)</Header>
              <Header as="h4">January 2018 - </Header>
              <p>
                A JavaScript text adventure recycling design patterns from
                Novel.js. Works with an express server and a complex text parser
                to interperate the user's input. The current adventure is an
                interactive resume based upon my office. (Note: as this is a
                free Heroku app, if it has not been actively used in a while it may
                take a minute to boot.)
              </p>
              <Button
                as={Link}
                to="https://jdenenberg-adventure.herokuapp.com/"
              >
                Heroku App
              </Button>
              <Button
                as={Link}
                to="https://github.com/Jisho23/Joshua-Denenberg---Adventure-Resume"
              >
                GitHub
              </Button>
            </Container>
            <Divider />
            <Container text>
              <Header as="h2">LFG (Looking for Group)</Header>
              <Header as="h4">December 2017 - January 2018</Header>
              <iframe
                width="280"
                height="157"
                src="https://www.youtube.com/embed/gWCxbW47ueU"
                frameborder="0"
                allow="autoplay; encrypted-media"
                align="right"
                allowfullscreen
              />
              <p>
                A social media esq app that allows gamers to add games to their
                library, flag themselves as 'LFG', and then search the database
                for gamers looking to play those games and are actively LFG.
                Other features include an honoring system (by which favorably
                rated users filter to the top) and a WebSocket chat feature that
                has a unique room for each created group.
              </p>
              <Button as={Link} to="https://github.com/Jisho23/lfg_client">
                Github
              </Button>
            </Container>
            <Divider />
            <Container text>
              <Header as="h2">HOTSDraft</Header>
              <Header as="h4">October 2017 - January 2018</Header>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <iframe
                      width="280"
                      height="157"
                      src="https://www.youtube.com/embed/ST_8jGjAxY0"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      allowfullscreen
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <p>
                      An app based on the fan run HOTSApi that parses through a
                      database of replays and helps the user simulate a draft
                      based on percentage win rates of characters. Uses a Rails
                      and PostgreSQL backend to build frontend statistics that
                      sort and recalculate every time a selection has been made
                      to account for a new character present in the draft.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Button as={Link} to="https://github.com/Jisho23/lfg_client">
                Github
              </Button>
            </Container>
            <Divider />
            <Container text>
              <Header as="h2">Steam Buddy</Header>
              <Header as="h4">December 2017</Header>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <p>
                      A simple app that using the Steam API finds matching games
                      between two libraries and suggests a game based upon it
                      being a common game and having the highest average
                      play-time between the two users.
                    </p>
                  </Grid.Column>
                  <Grid.Column>
                    <iframe
                      width="280"
                      height="157"
                      src="https://www.youtube.com/embed/EbiXXSAPOnY"
                      frameborder="0"
                      allow="autoplay; encrypted-media"
                      align="right"
                      allowfullscreen
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Button as={Link} to="https://github.com/Jisho23/steam-buddy">
                Github
              </Button>
            </Container>
            <Divider />
          </Container>
        )}
      </Transition.Group>
    );
  }
}
