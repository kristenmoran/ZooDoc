import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewList from './ReviewList'

import { APIURL } from '../config';
// function Doctor(props) {
// 	console.log(props.doctors);
// 	const doctors = props.doctors;
// 	console.log(doctors);
// 	if (doctors.length === 0) {
// 		return <h2>No doctors Found!</h2>;
// 	}
// 	let doctor;
// 	for (let i = 0; i < doctors.length; i++) {
// 		console.log(props);
// 		if (props.match.params.id === doctors[i].id) {
// 			doctor = doctors[i];
// 		}
// 	}
const Doctor = ({ match }) => {
	const [doctor, setDoctor] = useState({});
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/doctors/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setDoctor(response);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='container justify-content-center align-items-center position-absolute'>
			<h1 className='my-4'>
				{doctor.first_name} {doctor.last_name} {doctor.id}
			</h1>
			{/* <ul>
				{doctor.specialization.map((special, index) => {
					return <li key={index}>{special}</li>;
				})}
			</ul> */}
			<h3>{doctor.specialization}</h3>
			<div className='row'>
				<div className='col-md-8'>
					<img className='img-fluid' src={doctor.image_url} alt='' />
				</div>
				<div className='col-md-4'>
					<h3 className='my-3'>{doctor.office_name}</h3>
					<p>{doctor.about}</p>
					<h3 className='my-3'>Contact Info:</h3>
					<p>{doctor.street_address}</p>
					<p>
						{doctor.city}, {doctor.state} {doctor.zip_code}
					</p>
					<p>{doctor.phone_number}</p>
					<a href={doctor.website} target='_blank' rel='noopenner noreferrer'>
						Please click here to visit their website
					</a>
					<Link to='/review'>
						<button>write review</button>
					</Link>
				<ReviewList doctorId={doctor.id}/>
				</div>
				
			
			</div>
		</div>
	);
};
export default Doctor;
