// import React from 'react'
// import GoogleMapReact from 'google-map-react'
// import './css/Map.css'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'

// const location = {
//     address: '7500A Beach Road #05-319 The Plaza',
//     lat: 1.302030,
//     lng: 103.862991,
// }

// const LocationPin = ({ text }) => (
//     <div className="pin">
//         <Icon icon={locationIcon} className="pin-icon" />
//         <p className="pin-text">{text}</p>
//     </div>
// )

// const Map = ({ location, zoomLevel }) => (
//     <div className="map">
//         <h2 className="map-h2">Come Visit Us At Our Campus</h2>

//         <div className="google-map">
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: 'AIzaSyAnVYPkIHNeC1XrMZwbm3i1skl8hU0UJpQ' }}
//                 defaultCenter={location}
//                 defaultZoom={zoomLevel}
//             >
//                 <LocationPin
//                     lat={location.lat}
//                     lng={location.lng}
//                     text={location.address}
//                 />
//             </GoogleMapReact>
//         </div>
//     </div>
// )

// export default Map

import React, { useEffect } from 'react'

const YOUR_API_KEY = 'AIzaSyAnVYPkIHNeC1XrMZwbm3i1skl8hU0UJpQ' // Replace with your actual API key

function Map () {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${YOUR_API_KEY}&libraries=maps,marker&v=beta`
        script.async = true
        script.onload = () => {
            // Initialize the map and marker once the script is loaded
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 1.2999106645584106, lng: 103.86062622070312 },
                zoom: 14
            })

            new window.google.maps.Marker({
                position: { lat: 1.2999106645584106, lng: 103.86062622070312 },
                map,
                title: 'My location'
            })
        }
        document.body.appendChild(script)

        return () => {
            // Cleanup function to remove the script when the component unmounts
            document.body.removeChild(script)
        }
    }, [])

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>
}

export default Map;

