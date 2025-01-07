import { useEffect, useRef } from 'react';

const Map = ({ location, events }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const { google } = window;
    const map = new google.maps.Map(mapRef.current, {
      center: location,
      zoom: 12,
    });

    new google.maps.Marker({
      position: location,
      map,
      title: 'You are here!',
    });

    events.forEach((event) => {
      new google.maps.Marker({
        position: { lat: event.lat, lng: event.lng },
        map,
        title: event.title,
      });
    });
  }, [location, events]);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default Map;
