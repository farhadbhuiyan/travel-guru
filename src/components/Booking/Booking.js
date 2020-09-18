import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { places } from '../../tripDatabase/tripDatabase';
import './Booking.css';
const Booking = () => {
	const { id } = useParams();
	const newPlaces = [...places];
	const selectedPlaces = newPlaces[id];
	return (
		<div className="booking background">
			<div className="row">
				<div className="col-md-5">
					<div className="place-details">
						<h1>{selectedPlaces.name}</h1>
						<h5>{selectedPlaces.info}</h5>
					</div>
				</div>
				<div className="col-md-7">
					<div className="booking-form">
						<div className="container">
							<div className="row">
								<div className="booking-form">
									<form>
										<div className="form-group">
											<span className="form-label">Origin</span>
											<input className="form-control" type="text" value="Dhaka" />
										</div>
										<div className="form-group">
											<span className="form-label">Destination</span>
											<input className="form-control" type="text" value={selectedPlaces.name} />
										</div>
										<div className="row">
											<div className="col-sm-6">
												<div className="form-group">
													<span className="form-label">From</span>
													<input className="form-control" type="date" required />
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<span className="form-label">To</span>
													<input className="form-control" type="date" required />
												</div>
											</div>
										</div>
										<div className="form-btn">
											<Link to={"/hotels"}><input className="submit-btn" type="submit" value="Start Booking" /></Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;