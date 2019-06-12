import React, { Component } from 'react'
import './Search.css'



class Search extends Component {
state = {
  query: '',
}

 render() {
   return ( 
    <div>
     <form>
       <div className="flex-container"></div>
       <input className="Search"
         placeholder="Search for..."
         ref={input => this.Search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
     </div>
   
   )
 }
}

 
  

export default Search