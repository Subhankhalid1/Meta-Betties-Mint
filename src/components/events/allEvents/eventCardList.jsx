import { useContext, useLayoutEffect, useState } from 'react';
import { EventsCard } from './eventCard';
import { api } from '../../../services/api';
import { OverlayLoaderContext } from '../../../contexts/overlayLoaderContext';

export const EventsCardList = () => {
  const [events, setEvents] = useState([]);
  const { setLoading } = useContext(OverlayLoaderContext);

  useLayoutEffect(() => {
    getLatestEvents();
  }, []);

  const getLatestEvents = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/api/event/latest');
      setEvents(data.data.events.docs);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {events?.map((item, idx) => (
        <EventsCard item={item} key={idx} />
      ))}
    </>
  );
};
