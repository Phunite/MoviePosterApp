import React, { Component } from 'react';


class Poster extends Component {

    render() { 
        const onClick=()=>console.log(this.props.poster.id)
        return (  
            <div>
              <img key={this.props.poster.id}src={"https://image.tmdb.org/t/p/w300"+this.props.poster.poster_path} alt={this.props.poster.title}></img>
            </div>
            
        );
    }
}
 
export default Poster;