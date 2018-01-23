import React, { Component } from 'react';
import Tables from './Tables.js';
import './Tables.css';



class TableHome extends React.Component {




  render() {
    return (
<div>


<Tables/>



<div className="table-total">
<table>
  <tr>
    <th>Total : </th>
<th> <input type="text" value="$123"/></th>
  </tr>
</table>
</div>



        </div>




    );
  }
}


export default TableHome;
