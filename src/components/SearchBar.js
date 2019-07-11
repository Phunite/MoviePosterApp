import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
    state = { 
     searchText:"",
    };
    
    onEnterPress = (e) => {
        //on Enter Update the query in the state to with the new searchtext
        if (e.key === 'Enter') {
        this.props.getSearchText(this.state.searchText);
        this.setState({searchText:""})
        }
      }
      onTextChange = e => {
        this.setState({[e.target.name]:e.target.value});

    }
    render() { 
        return ( 
            <div>
            <TextField name="searchText" 
            value={this.state.searchText} 
            onChange={this.onTextChange}
            onKeyDown={this.onEnterPress} 
            floatingLabelText="Search for Movies And Press Enter" 
            fullWidth={true} autoComplete="true"/>
            </div>
);
    }
}
 
export default SearchBar;