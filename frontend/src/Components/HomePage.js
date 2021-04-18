import React from 'react';
import data from '../data';

const HomePage = (props) => {
    return <div>
        <ul className="items">
            {data.map((item) => {
                return (
                    <main className="main">
                        <div className="cake-group">
                            <li>
                                <div className="item">
                                    <img
                                        className="cake-image"
                                        src={item.image} alt="cake-image"
                                    />
                                    <div href="cake1.html"> {item.name} </div>
                                    <div className="cake-price"> Price: £{item.price} </div>
                                </div>
                            </li>
                        </div>
                    </main>
                )
            })}
        </ul>
    </div>
}

export default HomePage;