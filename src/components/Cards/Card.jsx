import React from 'react'
import './Card.css'
import Lio from './download.jpg';

const Card = (props) => {
  return (
    <div className="container">
    <div className="card">
        <div className="lines"></div>
        <div className="imgBx">
            <img src={Lio} alt="img"/>
        </div>
        <div className="content">
            <div className="details">
                <h2>{props.name}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsa debitis velit corporis sapiente veritatis repellat, aut labore quidem quod nisi, maxime voluptatum reprehenderit enim tempora mollitia dolore error ullam.
                </p>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>
</div>
  )
}


export default Card;
