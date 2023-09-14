import React, { useEffect } from 'react';
export default function MapContainer(props) {
  const { address } = props;
  const apiKey = 'AIzaSyAu7FFgTCzemPaY7DPVUMX6eez1x0TDHKc';
  // Function to fetch latitude and longitude for the given address
  const fetchLatLong = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      if (data.length > 0) {
        // Use the first result's latitude and longitude
        const lat = data[0].lat;
        const lon = data[0].lon;
        // Construct the Google Maps URL with latitude and longitude
        const embedUrl = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${lat},${lon}&zoom=15&maptype=roadmap`;

        // Set the iframe source to the Google Maps URL
        document.querySelector('#map-iframe').src = embedUrl;
      } else {
        const defaultURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220448.7617498865!2d-97.92055247669278!3d30.30795405596934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1694719513400!5m2!1sen!2sus'
        document.querySelector('#map-iframe').src = defaultURL;
      }
    } catch (error) {
      console.error('Error fetching latitude and longitude:', error);
    }
  };

  // Fetch latitude and longitude when the component mounts
  useEffect(() => {
    fetchLatLong();
  }, [address]);

  return (
    <iframe
      id="map-iframe"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

