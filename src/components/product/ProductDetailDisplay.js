import React from 'react';
import './Product.css';
import Nav  from '../nav/Nav';

export const ProductDetailDisplay = ({name, desc, price,photos, info}) => {

    return (
        <div className="detalle">
            <Nav />
            <div className="box_detail">
                <div className="detail">
                    <div className="img_product">
                        <div className="box_im">
                            <img src={photos} alt=""/>
                        </div>
                        <div className="box_mini_img">
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                            <img src="https://images.pexels.com/photos/9784/honey-makro.jpg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>

                        </div>
                    </div>
                    <div className="descript_product">
                        <h3 className="descript_name">{name}</h3>

                        <p className="descript_etiq">{info}</p>
                        <br/>
                        <p className="descript_data">{desc}</p>
                       <div className="box_price">
                        <p className="descript_price">$ {price} MXN</p>
                       </div>
                        <button className="btn_agregar">Agregar</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
