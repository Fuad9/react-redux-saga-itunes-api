import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

import { requestApiData } from "./actions";

import { Container } from "./Styles.js";

class Home extends React.Component {
   componentDidMount() {
      this.props.requestApiData();
   }

   person = (x, i) => (
      <Container key={Math.random()}>
         <h3>
            {x.artistName}
            <span>
               (<a href={x.artistViewUrl}>About Artist</a>)
            </span>
         </h3>
         <h4>Collection Name: {x.collectionName}</h4>
         <h4>Collection Price: {x.collectionPrice}</h4>
         <h4>Country: {x.country}</h4>
         <h4>Genre: {x.primaryGenreName}</h4>
         <h4>Release Date: {x.releaseDate}</h4>
         <h4>Track Name: {x.trackName}</h4>
         <h4>Preview:</h4>
         <ReactAudioPlayer src={x.previewUrl} controls />
      </Container>
   );

   render() {
      const { results = [] } = this.props.data;
      return results.length ? <div>{results.map(this.person)}</div> : <h1>loading...</h1>;
   }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
