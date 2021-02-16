import React, { useState } from 'react';
import { MdPlace } from 'react-icons/md';
import ReactMapGL, { Marker } from 'react-map-gl';

const REACT_APP_MAPBOX_TOKEN =
	'pk.eyJ1IjoidGltb3JzYSIsImEiOiJja2w4N2VtZDEwZDNjMm9ydnB0bGdwYzU2In0.qFfyzYYaa4t-9S7YIDIdCw';

const MAP_STYLES = 'mapbox://styles/timorsa/ckl87qp835hev17mrxtep92tm';

//https://www.youtube.com/watch?v=JJatzkPcmoI

const Discover = () => {
	const [viewport, setViewport] = useState({
		latitude: 32.8137832,
		longitude: 35.0019317,
		zoom: 10,
		width: '95%',
		height: '30vh',
	});
	// add token later to .env.local start with REACT_APP_TOKEN_NAME
	return (
		<div className='discover'>
			<div className='head-segment'>
				<MdPlace size={25} />
				<h2> Discover</h2>
			</div>
			<div className='map-section'>
				<div className='map-controller'>handlers</div>
				<div className='map'>
					<ReactMapGL
						{...viewport}
						mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
						mapStyle={MAP_STYLES}
						onViewportChange={(viewport) => setViewport(viewport)}>
						{/*
        how to use marker 
        {
            data.map(place => (
                <Marker
                key={some key}
                latitude={pace.lat}
                longitude={place.long}
                >
                what marker should look like is inner html
                </Marker>
            ))
        }
    */}
					</ReactMapGL>
				</div>
			</div>
			<div className='content'></div>
		</div>
	);
};

export default Discover;
