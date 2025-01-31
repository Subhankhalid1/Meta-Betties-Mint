import { RiDiscordLine } from 'react-icons/ri';
import { FiYoutube } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { IoLogoInstagram } from 'react-icons/io5';

export const HostedBy = ({ event }) => {
  return (
    <>
      <div>
        <img src={event?.image} alt="eventImg..." className="rounded-3xl" />
        <p className="text-[12px] text-[#A1A1A1] py-3">Hosted By</p>
        <hr />

        <div className="flex justify-between flex-wrap my-3">
          <div className="flex items-center flex-wrap gap-x-1">
            <img
              src={
                event?.createdBy?.avatarImage ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgUa1qJoOIVP3tc9e22eWrxDSb2SwIQBUPA&s'
              }
              alt="mail...."
              className="h-10 w-10 rounded-full"
            />
            <p className="text-[12.23px]">{event?.createdBy?.userName}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a href="">
              <RiDiscordLine size={20} />
            </a>
            <a href="">
              <FiYoutube size={20} />
            </a>
            <a href="">
              <FiTwitter size={20} />
            </a>
            <a href="">
              <IoLogoInstagram size={20} />
            </a>
          </div>
        </div>

        <p className="text-[12px] text-gray-400" style={{ lineHeight: '19px' }}>
          Contact the Host <br />
          Report Event
        </p>
        <div className="flex my-3 items-center">
          <div className="flex -space-x-1 overflow-hidden">
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <p className="text-[12px] px-2 text-gray-400" style={{ lineHeight: '20px' }}>
            50K+ Participants
          </p>
        </div>
      </div>
    </>
  );
};
