import React, { useEffect, useState } from "react";
import Axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import { Button } from "antd";

import Loading from "./utilities/Loading";
import { Container } from "./Styles";

function RandomSearch() {
   const [loading, setLoading] = useState(false);

   const [search, setSearch] = useState("");

   const [songs, setSongs] = useState([]);

   console.log(songs);

   //calling data from rest api
   useEffect(() => {
      const getData = async () => {
         try {
            setLoading(true);
            const response = await Axios.get("https://itunes.apple.com/search?term=" + search);
            setSongs(response.data.results);
            setLoading(false);
         } catch (error) {
            setLoading(false);
         }
      };
      getData();
   }, [search]);

   return (
      <>
         <div className="d-flex justify-content-center my-3">
            <div className="w-50">
               <input
                  className="form-control"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by artist name"
               />
            </div>

            <Button style={{ width: "15%", height: "6%" }}>Search</Button>
         </div>

         {loading ? (
            <Loading />
         ) : (
            <div>
               {songs.map((song) => (
                  <Container key={Math.random()}>
                     <h1>
                        {song.artistName}
                        <span>
                           (<a href={song.artistViewUrl}>About Artist</a>)
                        </span>
                     </h1>
                     <h4>
                        <span>Collection Name:</span> {song.collectionName}
                     </h4>
                     <h4>
                        <span>Collection Price:</span> {song.collectionPrice}
                     </h4>
                     <h4>
                        <span>Country:</span> {song.country}
                     </h4>
                     <h4>
                        <span>Genre:</span> {song.primaryGenreName}
                     </h4>
                     <h4>
                        <span>Release Date:</span> {song.releaseDate}
                     </h4>
                     <h4>
                        <span>Description:</span> {song.description}
                     </h4>
                     <h4>
                        <span>Preview:</span>{" "}
                     </h4>
                     <ReactAudioPlayer src={song.previewUrl} controls />
                  </Container>
               ))}
            </div>
         )}
      </>
   );
}

export default RandomSearch;
