import React, { Component } from 'react';
import Poster from "./Poster";

class PosterContainer extends Component {
    render() { 

     //const imageUrl="https://image.tmdb.org/t/p/w500"; 
   // const posters=items.map(item=>"https://image.tmdb.org/t/p/w300"+item.poster_path);
        return (
        <div className="PostContainer">
            {this.props.posters.map(poster => <Poster key={poster.id} poster={poster}/> )}  
        </div>
        );
    }
}
 
export default PosterContainer;
