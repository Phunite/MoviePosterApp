import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
    state = { 
     searchText:"",
     page:1,
    apiUrl:"https://api.themoviedb.org/3/",
    apiKey:"fabfadfecd6dcd34f26a4142545c1a29",
    query:"https://api.themoviedb.org/3/discover/movie?api_key=fabfadfecd6dcd34f26a4142545c1a29&page=1",
    language:"language=en-US",
  searchMode:"search/movie",
 
    };


    onTextChange = e => {
        this.setState({[e.target.name]:e.target.value});
    }
    onEnterPress = (e) => {
        if (e.key === 'Enter') {
            console.log(this.props.SearchTerm);
        }
      }
    render() { 

        return ( 
            <div>
            <TextField name="searchText" value={this.state.searchText} onChange={this.onTextChange} onKeyDown={this.onEnterPress} floatingLabelText="Search for Movies And Press Enter" fullWidth={true} autoComplete="true"/>
            </div>
);
    }
}
 
export default SearchBar;