import React from "react";
import "./style.css"
import SearchResult from "../../components/SearchResult"
require('dotenv').config();

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        value:""
      };
      this.handleChange = this.handleChange.bind(this);

    }
    getApi(query){
      fetch("https://api.unsplash.com/search/collections/?client_id="+process.env.REACT_APP_API_ID+"&page=1&query="+query)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            
            isLoaded: true,
            items: result.results
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    
    handleChange(event) {
      this.setState({value: event.target.value});
      this.getApi(event.target.value)
    }
  
  
    render() {
      const { error, isLoaded } = this.state;
      
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div> <h1 className="search_title">Search</h1>
        <input placeholder="Type here to search" type="text" className="search_bar"value={this.state.value} onChange={this.handleChange}/></div>;
      } else {
        return (
          <div>
            <h1 className="search_title">Search</h1>
            <input type="text" className="search_bar"value={this.state.value} onChange={this.handleChange}/>
            <ul id="img_ul">
          {this.state.items.map((item, i )=> (
            <li key={i} id="img_li">
              {console.log(item)}
                {<SearchResult src={item.cover_photo.urls.raw} alt={item.title}/> }
            </li>
          ))}
          </ul>
          </div>
        );
      }
    }
  }
export default Search;