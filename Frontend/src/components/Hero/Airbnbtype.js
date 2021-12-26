import React from 'react'
import './hero.css';
import Luxury from './luxury.jpeg';
import Economy from './economy.jpg';
import Silver from './silver.jpg';
import Platinum from './platinum.jpg';
import Standard from './standard.jpeg';

function Airbnb() {
	const carsimages=[Luxury,Economy,Silver,Standard,Platinum];
    return (
        <div>
            <div class="airbnb" style={{display: "flex"}}>
			<div class="max-width">
			<h2>Our suites to choose from</h2>
			<h1>These <span>popular suites</span> have the best facility</h1>
                <h3>Browse by type</h3>
			<div class="airbnbcontent" >
				<div class="card">
					<div class="box">
						<img src= {carsimages[0]} />
							<div class="text"><a href="#">Luxury</a></div>
							
					</div>
				</div>
				<div class="card">
					<div class="box">
						<img src={carsimages[1]} />
                        <div class="text"><a href="#">Economy</a></div>
					</div>
				</div>
				<div class="card">
					<div class="box">
							<img src={carsimages[2]}/>
							<div class="text"><a href="#">Silver</a></div>
						</div>
					</div>
					<div class="card">
						<div class="box">
							<img src={carsimages[3]}/>
                            <div class="text"><a href="#">Standard</a></div>
						</div>
					</div>
					<div class="card">
						<div class="box">
							<img src={carsimages[4]}/>
                            <div class="text"><a href="#">Platinum</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
export default Airbnb;