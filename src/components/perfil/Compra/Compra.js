import React, { Component } from 'react';
import { Card } from 'antd';
import './Compra.css';




class Compra extends React.Component {

  render() {
    return (
      <div className="compra-actual">
    {/*   <Card title="Compraste"  style={{ width: 300}}>
        <img src="http://alimentosprana.com/img/s02.png" alt=""/>
      <div className="des">
      <a href=""><p>Azúcar saludable:  <br/></p> </a>
      <p id="precio"> $200.00 </p>
        </div>
       </Card>

*/}
<Card title="Compraste">
<p
style={{
 fontSize: 14,
 color: 'rgba(0, 0, 0, 0.85)',
 marginBottom: 16,
 fontWeight: 500,
   width: 550
}}
>

</p>
<Card
type="inner"
title="Semillas mixtas"
extra={<a href="#">Ver</a>}
>
<img src="http://s3.amazonaws.com/daniellelevynutrition/wp-content/uploads/2012/11/DSC_04040-940x625.jpg" alt=""/>


</Card>
<Card
style={{ marginTop: 16 }}
type="inner"
title="Inner Card title"
extra={<a href="#">More</a>}
>
Inner Card content
</Card>
</Card>

</div>




    );
  }
}

export default Compra;
