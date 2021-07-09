import React, { useState } from 'react';
import data from '../data';
import Search from './Search'

const HomePage = () => {
    const [cakeDisplay, setCakeDisplay] = useState(data);

    const searchForCake = (searchText) => {
        console.log(searchText);
        setCakeDisplay(data.filter(item => item.name.toLowerCase().includes(searchText)))
    }
    console.log(cakeDisplay)

    return <div>
        <Search searchForCake={searchForCake} />
        <ul className="items">
            {cakeDisplay.map((item) => {
                return (
                    <main className="main">
                        <div className="cake-group">
                            <li>
                                <div className="item">
                                    <img
                                        className="cake-image"
                                        src={item.image} alt="variety of cakes"
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