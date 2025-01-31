import { useLayoutEffect, useState } from 'react';
import { Detail } from './detail/detail';
import { HostedBy } from './hostedBy/hostedBy';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';

const index = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useLayoutEffect(() => {
    getEventDetails();
  }, []);

  const getEventDetails = async () => {
    try {
      const { data } = await api.get(`/api/event/${id}`);
      setEvent(data.data.event);
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <>
      <div className="grid 2xl:grid-cols-12 xl:grid-cols-12 md:grid-cols-4 grid-cols-1 gap-10 lg:p-0 md:p-0 px-5">
        <div className="col-span-10 2xl:col-span-3 xl:col-span-4  lg:col-span-4 md:col-span-12 sm:col-span-12  text-white">
          <HostedBy event={event} />
        </div>

        <div className="col-span-10 2xl:col-span-7 xl:col-span-7 lg:col-span-7 md:col-span-11 md:px-3   text-white ">
          <Detail event={event} />
        </div>
      </div>
    </>
  );
};

export default index;
