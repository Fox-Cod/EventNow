// pages/index.js
import { useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function Home() {
  const [location, setLocation] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async (userLocation) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/fetch-events', {
        location: userLocation,
        radius: 5, // Радиус поиска событий (в километрах)
      });
      setEvents(response.data.events || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(userLocation);
          await fetchEvents(userLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!location ? (
        <button
          onClick={handleButtonClick}
          className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        >
          {loading ? 'Loading...' : 'Find Events Near Me'}
        </button>
      ) : (
        <div className="w-full h-screen">
          <Map location={location} events={events} />
        </div>
      )}
    </div>
  );
}
