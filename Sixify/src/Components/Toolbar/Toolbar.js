import React from 'react'
import Search from '../Search/Search'
import './Toolbar.css'

const Toolbar = props => (
    
    <div className="flex-container">
    <i className="fas fa-angle-left arrowleft"> </i> 
    <i className="fas fa-angle-right arrowright"> </i>
    <Search />
    </div>
      
)  






export default Toolbar;