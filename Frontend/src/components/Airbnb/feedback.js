import React from 'react'
import comma from './comma.png';
export default function feedback() {
    return (
        <div class="Clients">
			<div class="max-width">
				<h1><span >Travellors</span> Feedback</h1>
				<div class="clients-content">
					<div class="card">
						<div class="box">
							<p>Now that's how you make life easy.<br/>Loved it!<br/> Thankyou for the great service.<br/>I might just make it a regular thing.</p>
							<div class="text">Hermain Qadir</div>
							from Karachi<br/>
							<img src={comma}/>
							</div>
						</div>
						<div class="card">
						<div class="box">
							<p>I used there full day service and I must say that the workers were extremely professional and made my house shine from top to bottom.</p>
							<div class="text">Saman Khan</div>
							from Islamabad<br/>
							<img src={comma}/>
							</div>
						</div>
						<div class="card">
							<div class="box">
								<p>I used there full day service and I must say that the workers were extremely professional and made my house shine from top to bottom.</p>
								<div class="text">Anusha Saad</div>
								from Lahore<br/>
								<img src={comma}/>
								</div>
							</div>
					</div>
				</div>
			</div>
    )
}
