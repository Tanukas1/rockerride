// // YourComponent.js

// import React, { useState, useEffect } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const mapContainerStyle = {
//   width: '100%',
//   height: '500px',
// };

// const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco coordinates

// const YourComponent = () => {
//   const [pickupLocation, setPickupLocation] = useState(null);
//   const [dropLocation, setDropLocation] = useState(null);

//   useEffect(() => {
//     // Use pickupLocation and dropLocation in your application logic
//     console.log('Pickup Location:', pickupLocation);
//     console.log('Drop Location:', dropLocation);
//   }, [pickupLocation, dropLocation]);

//   const handleMapClick = (event) => {
//     // Handle the click event to set pickup or drop location
//     // For example, you can set the state with the clicked coordinates.
//     const clickedLocation = {
//       lat: event.latLng.lat(),
//       lng: event.latLng.lng(),
//     };

//     // Use some logic to determine if it's pickup or drop
//     // For example, you might have separate buttons for pickup and drop.
//     // Set the state accordingly.
//     // This example assumes you have separate buttons for pickup and drop.
//     // You can adapt it based on your specific use case.
//     const isPickup = window.confirm('Set as Pickup location?');

//     if (isPickup) {
//       setPickupLocation(clickedLocation);
//     } else {
//       setDropLocation(clickedLocation);
//     }
//   };

//   return (
//     <>
//     <LoadScript googleMapsApiKey="AIzaSyDDWaQiY036Y7eos-Kb4t63-zROXKqSlog">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={defaultCenter}
//         zoom={12}
//         onClick={handleMapClick}
//       >
        
//         {/* Marker for Pickup Location */}
//         {pickupLocation && <Marker position={pickupLocation} label="P" />}
//         <input
//           type=""
//           className="form-control mb-3"
//           placeholder="PickUp Location"
//         />

//         {/* Marker for Drop Location */}
//         {dropLocation && <Marker position={dropLocation} label="D" />}
//          <input
//           type=""
//           className="form-control"
//           placeholder="Drop Location"
//         />
//       </GoogleMap>
//     </LoadScript>

//     <form>
//       <div className="card-img-overlay" style={{position: "relative",top: "-28rem"}}>
//         <input
//           type=""
//           className="form-control mb-3"
//           placeholder="PickUp Location"
//         />
//         <input
//           type=""
//           className="form-control"
//           placeholder="Drop Location"
//         />
//       </div>
//     </form>
//     </>
//   );
// };

// export default YourComponent;
