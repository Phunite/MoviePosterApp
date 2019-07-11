import React, { Component } from 'react';
import Header from './components/Header'
import PosterContainer from "./components/PosterContainer"
import './app.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from './components/SearchBar';


class App extends Component {
//backdrop_path
//
state = {  
  items:[],
  page:1,
  apiUrl:"https://api.themoviedb.org/3/",
  apiKey:"fabfadfecd6dcd34f26a4142545c1a29",
  query:"https://api.themoviedb.org/3/discover/movie?api_key=fabfadfecd6dcd34f26a4142545c1a29&page=3",
  language:"language=en-US",
  searchMode:"search/movie",
  searchText:"",
}


 // fetch("http://api.themoviedb.org/3/discover/movie?api_key=fabfadfecd6dcd34f26a4142545c1a29&page=2")
  //https://api.themoviedb.org/3/search/movie?api_key=fabfadfecd6dcd34f26a4142545c1a29&language=en-US&query=spider   
  //Search

componentDidMount(){

  //const discoverMovie=this.state.apiUrl+this.state.searchMode+"?api_key="+this.state.apiKey+"&"+this.state.language+"&page="+this.state.page+"&query="+this.state.Term;
  //console.log(discoverMovie);

  //fetch(discoverMovie)
  fetch(this.state.query)
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      items:json.results,
    })
  }) 
}

getSearchText=(text)=>{

const query=this.state.apiUrl+this.state.searchMode+"?api_key="+this.state.apiKey+"&"+this.state.language+"&page="+this.state.page+"&query="+text;
console.log(query);
fetch(query)
  .then(res=>res.json())
  .then(json=>{
    this.setState({
      items:json.results,
    })
  }) 
}
  render() {

  //deconstruring the array to get the properties I need.
  const {items}=this.state; 
  const posters=items.map(({id, poster_path,title})=>({id,poster_path,title}));

    return (  
      <MuiThemeProvider>
        <div>
            <Header page={this.state.Page}/> 
            <div className="searchBar"> <SearchBar getSearchText={this.getSearchText}/>
            </div>

            <PosterContainer posters={posters}/> 
        </div> 
    </MuiThemeProvider>);
  }
}
 
export default App;
