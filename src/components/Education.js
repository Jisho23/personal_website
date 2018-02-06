import React, { Component } from "react";
import { Container, Header, Divider, Transition } from "semantic-ui-react";

import Submenu from "../components/Submenu.js";

export default class Education extends Component {
  state = { visible: false };
  componentDidMount() {
    this.setState({ visible: true });
  }

  render() {
    return (
      <Transition.Group animation={"fade down"} duration={2300}>
        {this.state.visible && (
          <Container>
            <Submenu />
            <Divider />
            <Container text>
              <Header as="h2">The Flatiron School</Header>
              <Header as="h4">September 2017 - January 2018</Header>
              <p>
                The Flatiron School, one of the top coding programs in the
                country, is based on teaching the fundamentals of programming,
                web design, and database construction. The core curriculum
                focuses on the languages JavaScript and Ruby, the frameworks
                Rails and React, and the database language SQL. In addition to
                this curriculum, Flatiron puts community first, emphasizing work
                and learning as part of small teams.
              </p>
            </Container>
            <Divider />
            <Container text>
              <Header as="h2">The University of Toronto</Header>
              <Header as="h4">September 2013 - May 2017</Header>
              <p>
                DMA (Doctorate of Musical Arts) with an emphasis in composition.
                Josh's degree focused primarily on classical composition. While
                attending, he was the winner if the 2016 wind ensemble
                composition prize and wrote music for the University of Toronto
                Opera division. As a teaching assistant, he was the TA for the
                course on Composing for film, focusing on the study and creation
                of film scores, and Topics in Composition, a survey course
                focusing on the techniques and history of music composition.
                Josh's primary teachers included Norbert Palej, Christos Hatzis,
                and Alexander Rapoport.
              </p>
            </Container>
            <Divider />
            <Container text>
              <Header as="h2">The Hartt School of Music</Header>
              <Header as="h4">September 2011 - May 2013</Header>
              <p>
                MM (Master of Musical Arts) with an emphasis in composition.
                Josh's degree focused on classical composition and music
                technology. He was the recipient of the 2012 Burton Family
                Scholarship, awarded to a single composition student annually,
                and contributed music for the University of Hartford Theater
                department's production of 'The King Stag' (2013). His primary
                composition teachers included Stephen Gryc and Robert Carl.
              </p>
            </Container>
            <Divider />
            <Container text>
              <Header as="h2">The University of Connecticut</Header>
              <Header as="h4">September 2006 - May 2010</Header>
              <p>
                BA (Bachelor of Arts) in music with a music history
                concentration. Josh's degree focused on music performance with
                an primary instrument, the bassoon. In addition, Josh's history
                concentration put emphasis on historic research and analysis.
                Alongside this, Josh pursued an English minor with a emphasis on
                literature. While studying, he was also an active writer and
                contributor to the 'Daily Campus' and the treasurer for the
                Unconn Anime Society. Josh's primary teachers included Kenneth
                Fuchs (composition) and Ronald Haroutunian (bassoon).
              </p>
            </Container>
          </Container>
        )}
      </Transition.Group>
    );
  }
}
