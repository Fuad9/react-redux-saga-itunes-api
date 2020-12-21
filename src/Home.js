import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ReactAudioPlayer from "react-audio-player";
import { Link } from "react-router-dom";

import { requestApiData } from "./actions";

import { Container } from "./Styles.js";

class Home extends React.Component {
   componentDidMount() {
      this.props.requestApiData();
   }

   person = (x, i) => (
      <>
         <Container key={Math.random()}>
            <h1>
               {x.artistName}
               <span>
                  (<a href={x.artistViewUrl}>About Artist</a>)
               </span>
            </h1>
            <h4>
               <span>Collection Name:</span> {x.collectionName}
            </h4>
            <h4>
               <span>Collection Price:</span> {x.collectionPrice}
            </h4>
            <h4>
               <span>Country:</span> {x.country}
            </h4>
            <h4>
               <span>Genre:</span> {x.primaryGenreName}
            </h4>
            <h4>
               <span>Release Date:</span> {x.releaseDate}
            </h4>
            <h4>
               <span>Track Name:</span> {x.trackName}
            </h4>
            <h4>
               <span>Preview:</span>{" "}
            </h4>
            <ReactAudioPlayer src={x.previewUrl} controls />
         </Container>
      </>
   );

   render() {
      const { results = [] } = this.props.data;
      return results.length ? (
         <div>
            <h2>
               Wanna search by artist name?
               <br />
               <Link to="/search">
                  <button className="btn btn-warning">Go Here</button>
               </Link>
            </h2>
            <div>{results.map(this.person)}</div>
         </div>
      ) : (
         <h1 style={{ textAlign: "center" }}>loading...</h1>
      );
   }
}

const mapStateToProps = (state) => ({ data: state.data });

const mapDispatchToProps = (dispatch) => bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
