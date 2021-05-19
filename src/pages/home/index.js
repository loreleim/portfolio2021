import React from "react";
import {Helmet} from 'react-helmet';
import Hero from "../../components/hero";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Lorelei Miyamura</title>
          <meta name="description" content="Aloha! Lorelei Miyamura is an Interaction Designer from Hawai'i. Currently working out of Portland, OR."/>
        </Helmet>
        <Hero/>
      </div>
    );
  }
}

export default Home;
