import React, { Component } from 'react'
import './style.css';
import Products from './Products'


class Body extends Component {
    render() {
        return (
            <div >
                
                <div className="container">
                    <div className="box1">
                        <i className="fas fa-clock fa-4x" ></i>
                        <h3>Shop Anytime</h3>
                        <p>We are open 24/7</p>
                    </div>
                    <div className="box2">
                    <i className="fas fa-phone fa-4x" ></i>
                        <h3>Got a Query? Call Us</h3>
                        <p>02012545632</p>
                    </div>
                    <div className="box3">
                    <i className="fas fa-location-arrow fa-4x" ></i>
                        <h3>Planning a Visit?</h3>
                        <p>81 Hoe Street, E17 4SA</p>
                    </div>

                    <div className="box4">
                        <div className="box1">
                    <i className="fas fa-pound-sign fa-4x" ></i>
                        <h3>Save...</h3>
                        <p>Special Offers Every Week</p>
                        </div>
                        <div className="box2">
                    <i className="fab fa-bitcoin fa-4x" ></i>
                        <h3>Bitcoin</h3>
                        <p>Bitcoin Terminal Live 24/7</p>
                        </div>
                        <div className="box3">
                    <i className="fas fa-carrot fa-4x" ></i>
                        <h3>Fruits/Vegtable</h3>
                        <p>Available 24/7</p>
                        </div>
                    </div>
                </div>
               

                <Products/>



                <div className="grid">
                    <div className="grid1">
                    <p><span>social distancing</span> - Please do not forget to follow the government guidlines on social distancing.
                    </p>
                    </div>
                    <div className="grid2">
<p><span>Face Masks</span> - You must wear a face mask by law when shopping in Sambros Int.</p>
                    </div>
                    <div className="grid3">
                <p><span>family members</span> -If possible, please do not come inside with any members of your household.</p>
                    </div>
                    <div className="grid4">
                    <p><span>Wash hands</span> - Please do not forget to wash your hands regularly, for your safety and others around you.</p>
                    </div>


                </div>
            </div>
        )
    }
}

export default  Body;
