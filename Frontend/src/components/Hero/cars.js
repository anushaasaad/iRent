import React from 'react'
import City from './city.jpeg';
import Civic from './civic.jpeg';
import Corolla from './corolla.jpg';
import Honda from './hondabrv.jpg';
import Jeep from './jeep.png';
import Mercedes from './mercedes.jpg';
import Sportage from './sportage.jpg';
import './hero.css';

function cars() {
	const carsimages=[City, Civic, Corolla, Sportage, Honda, Jeep, Mercedes];
    return (
        <div>
            <div class="Cars" style={{display: "flex"}}>
			<div class="max-width">
				<h2>Our Rental Fleets</h2>
				<h1>Excellent Experience Both<span> Dropping off</span> and <span>Picking up</span></h1>
			<div class="carscontent" >
				<div class="card">
					<div class="box">
						<img src= {carsimages[0]} />
							<div class="text"><a href="#">City</a></div>
							
					</div>
				</div>
				<div class="card">
					<div class="box">
						<img src={carsimages[1]} />
                        <div class="text"><a href="#">Civic</a></div>
					</div>
				</div>
				<div class="card">
					<div class="box">
							<img src={carsimages[2]}/>
							<div class="text"><a href="#">Corolla</a></div>
						</div>
					</div>
					<div class="card">
						<div class="box">
							<img src={carsimages[3]}/>
                            <div class="text"><a href="#">Sportage</a></div>
						</div>
					</div>
					<div class="card">
						<div class="box">
							<img src={carsimages[4]}/>
                            <div class="text"><a href="#">Honda</a></div>
						</div>
					</div>
					<div class="card">
						<div class="box">
							<img src={carsimages[5]}/>
                            <div class="text"><a href="#">Jeep</a></div>
						</div>
					</div>
					<div class="card">
						<div class="box">
							<img src={carsimages[6]}/>
                            <div class="text"><a href="#">Mercedes</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
export default cars;