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

