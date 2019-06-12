import React from 'react';
import './Table.css';

const Table = (props) => {
    return(
        <div className="table">
            <table>
               <tr className="header">
                    <th>Title</th>
                    <th>{props.artistHeader}</th>   
                    <th>{props.albumHeader}</th>
                    <th>{props.releasedHeader}</th>    
                    <th>Duration</th>
                </tr> 
                <tr className="data">
                    <td>{props.title}</td>
                    <td>{props.artist}</td> 
                    <td>{props.album}</td>
                    <td>{props.released}</td>
                    <td>{props.duration}</td>
                </tr>
            </table>
        </div>
    );
}



export default Table;


