import React, { useState, useRef } from 'react';
import { IoMdAdd } from 'react-icons/io';
import {  FaArrowLeft, FaInstagram } from 'react-icons/fa';
import { RiDiscordLine } from 'react-icons/ri';
import { FiYoutube, FiTwitter } from 'react-icons/fi';
import { FaLink } from 'react-icons/fa6';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarSelected, setAvatarSelected] = useState(false);
  const [isAM, setIsAm] = useState('AM');
  const avatarInputRef = useRef(null);
  const [data, setData] = useState({ title: '', description: '', address: '' });

  const navigate = useNavigate();
  console.log(data);
  const handleAmToPm = (btnName) => {
    if (btnName !== isAM) {
      setIsAm(btnName);
    }
  };
  const btnStyle = (btnName) => ({
    backgroundColor: isAM === btnName ? '#E0D026' : 'gray',
    color: isAM === btnName ? 'black' : 'white',
  });
  const handleGetData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setAvatarPreview(file);
      setAvatarSelected(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('title', data.title);
    formData.append('type', 'Virtual');
    formData.append('description', data.description);
    formData.append('startDate', `${new Date(data.year, data.month - 1, data.date, data.hour, data.minute)}`);
    formData.append('address', 'Address');
    formData.append('links[instagram]', data.instagram);
    formData.append('links[website]', data.website);
    formData.append('links[discord]', data.discord);
    formData.append('links[youtube]', data.youtube);
    formData.append('links[twitter]', data.twitter);
    formData.append('xp', '300');
    formData.append('image', avatarPreview);
    // formData.append('price', '300');
    // formData.append('endDate', '4-8-2021');
    // formData.append('registrationStartDate', '7-9-2022');
    // formData.append('registrationEndDate', '11-8-2024');
    // formData.append('location[coordinates]', '42.48');
    // formData.append('location[coordinates]', '-71.48');
    try {
      const response = await api.post('/api/event', formData);
      if (response) {
        toast.success('Event created successfully.');
        setData({ title: '', description: '' });
        setAvatarPreview(null);
        setAvatarSelected(null);
      }
    } catch (err) {
      toast.error(err.response.data.message || err.response.data.data.message || `"Event creation failed."`);
    }
  };

  return (
    <>
      <div className=" p-3 bg-[#212325] w-10 mb-5 rounded-full text-center text-white">
        <FaArrowLeft
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="grid lg:grid-cols-12 md:grid-cols-1 grid-cols-1 2xl:gap-12 xl:gap-7 pr-5 gap-8 justify-between my-5 ">
        {/* Column No 1 */}
        <div className="2xl:col-span-5  xl:col-span-5 lg:col-span-5 md:col-span-12 sm:col-span-12 col-span-8 text-white rounded-xl lg:p-5 p-2 bg-[#121318]">
          <p className="text-[16px] pb-5">Header Image</p>
          <div className="relative w-full h-96 flex flex-col justify-center items-center">
            <label
              htmlFor="uploadAvatar"
              className="absolute inset-0 w-full h-full bg-gray-900 text-white text-base rounded flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]"
            >
              {avatarPreview ? (
                <img
                  src={`${URL.createObjectURL(avatarPreview)}`}
                  alt="Avatar Preview"
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <>
                  <p className="text-sm text-gray-700">Drag and drop an image</p>
                  <p className="text-xs text-gray-400 mt-2">PNG, JPG, SVG, WEBP, and GIF are Allowed.</p>
                </>
              )}
              <input
                type="file"
                name="image"
                id="uploadAvatar"
                className="hidden"
                onChange={handleAvatarChange}
                ref={avatarInputRef}
              />
            </label>
            <button
              type="button"
              className="absolute bottom-28 flex justify-center items-center w-40 h-12  border border-[#E0D026]  hover:bg-yellow-500 text-white font-bold rounded"
              onClick={() => avatarInputRef.current.click()}
            >
              {avatarSelected ? 'Change' : 'Choose File'}
            </button>
          </div>

          <form action="" className="mt-5">
            <div className="max-w-4xl mx-auto my-5 ">
              <label
                htmlFor="email"
                className="block text-[#596983] text-[12px] leading-tight tracking-normal mb-2"
                style={{ lineHeight: '20.63px', fontWeight: 400 }}
              >
                Enter Website-Hosted By
              </label>
              <div className="flex items-center bg-gray-800">
                <div className="p-3 bg-gray-800">
                  <FaLink size={20} />
                </div>
                <input
                  id="websiteHostedBy"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white-600 dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                  placeholder="https://website.com/"
                  name="website"
                  onChange={handleGetData}
                  value={data?.website || ''}
                />
              </div>
            </div>

            <div className="max-w-4xl  mx-auto my-5">
              <label
                htmlFor="email"
                className="block text-[12px] text-[#596983] leading-tight tracking-normal mb-2"
                style={{ lineHeight: '20.63px', fontWeight: 400 }}
              >
                Discord
              </label>
              <div className="flex items-center bg-gray-800">
                <div className="p-3 bg-gray-800">
                  <RiDiscordLine size={20} />
                </div>
                <input
                  id="websiteHostedBy"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 shadow"
                  placeholder="https://discord.com/"
                  name="discord"
                  onChange={handleGetData}
                  value={data?.discord || ''}
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto my-5 ">
              <label
                htmlFor="email"
                className="block text-[12px] text-[#596983] leading-tight tracking-normal mb-2"
                style={{ lineHeight: '20.63px', fontWeight: 400 }}
              >
                Youtube
              </label>
              <div className="flex items-center bg-gray-800">
                <div className="p-3 bg-gray-800">
                  <FiYoutube size={20} />
                </div>
                <input
                  id="websiteHostedBy"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                  placeholder=" https://youtube.com/"
                  name="youtube"
                  value={data?.youtube || ''}
                  onChange={handleGetData}
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto my-5 ">
              <label
                htmlFor="email"
                className="block text-[12px] text-[#596983] leading-tight tracking-normal mb-2"
                style={{ lineHeight: '20.63px', fontWeight: 400 }}
              >
                Twitter
              </label>
              <div className="flex items-center bg-gray-800">
                <div className="p-3 bg-gray-800">
                  <FiTwitter size={20} />
                </div>
                <input
                  id="websiteHostedBy"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                  placeholder="https://twitter.com/"
                  name="twitter"
                  onChange={handleGetData}
                  value={data?.twitter || ''}
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto my-5 ">
              <label
                htmlFor="email"
                className="block text-[12px] text-[#596983] leading-tight tracking-normal mb-2"
                style={{ lineHeight: '20.63px', fontWeight: 400 }}
              >
                Instagram
              </label>
              <div className="flex items-center  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white">
                <div className="p-3 bg-gray-800">
                  <FaInstagram size={20} />
                </div>
                <input
                  id="websiteHostedBy"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal rounded shadow"
                  placeholder="https://instagram.com/"
                  name="instagram"
                  onChange={handleGetData}
                  value={data?.instagram || ''}
                />
              </div>
            </div>
          </form>
        </div>

        {/* Column No 2 */}
        <div className="2xl:col-span-7  xl:col-span-7 lg:col-span-7 md:col-span-12 sm:col-span-12 col-span-8 lg:p-7 p-4 rounded-xl bg-[#121318] text-white">
          <p className="text-[16px] font-semibold pb-5">Enter Event Details</p>
          <p className="text-gray-600">
            Make sure to complete the event details to let users know the proper data about the event
          </p>

          <form>
            <div className="max-w-4xl mx-auto my-5 mt-10">
              <label
                htmlFor="eventName"
                className="block text-[#596983] text-[12px] leading-tight tracking-normal mb-2"
                style={{ lineHeight: '20.63px', fontWeight: 400 }}
              >
                Enter Name
              </label>

              <input
                onChange={handleGetData}
                type="text"
                id="eventName"
                name="title"
                autoComplete="off"
                className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                placeholder="Event Name"
                value={data.title}
              />
            </div>

            <div className="max-w-4xl mx-auto">
              <label
                htmlFor="eventDescription"
                className="block text-[#596983] text-[12px] leading-tight tracking-normal mb-2"
                style={{ lineHeight: '20.63px', fontWeight: 400 }}
              >
                Description
              </label>
              <textarea
                onChange={handleGetData}
                name="description"
                id="eventDescription"
                value={data.description}
                className="w-full h-40 py-2 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow resize-none"
                placeholder="Description"
              ></textarea>
            </div>

            {/* Date and Time picker */}
            <div className="flex flex-wrap  2xl:gap-x-28 xl:gap-x-7 lg:gap-x-12 md:gap-x-10 gap-8 ">
              <div>
                <p className="text-[#596983] text-[12px] my-5" style={{ lineHeight: '20.63px', fontWeight: 400 }}>
                  Date
                </p>
                <div className="flex space-x-2 w-52">
                  <div className="max-w-4xl  mx-auto">
                    <input
                      autoComplete="off"
                      className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 shadow rounded-xl"
                      placeholder="01"
                      id="date"
                      name="date"
                      value={data.date}
                      onChange={handleGetData}
                    />
                  </div>

                  <div className="max-w-4xl  mx-auto">
                    <input
                      autoComplete="off"
                      className="w-full py-3 px-3  text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 shadow rounded-xl"
                      placeholder="01"
                      id="month"
                      name="month"
                      value={data.month}
                      onChange={handleGetData}
                    />
                  </div>

                  <div className="max-w-4xl  mx-auto">
                    <input
                      autoComplete="off"
                      className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 shadow rounded-xl"
                      placeholder="2024"
                      id="year"
                      name="year"
                      value={data.year}
                      onChange={handleGetData}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#596983] text-[12px] my-5" style={{ lineHeight: '20.63px', fontWeight: 400 }}>
                  Time
                </p>
                <div className="flex gap-2">
                  <div className="flex space-x-2 w-40">
                    {/* Hour */}

                    <div className="max-w-4xl  mx-auto">
                      <input
                        autoComplete="off"
                        className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 shadow rounded-xl text-center"
                        placeholder="00"
                        id="hour"
                        name="hour"
                        value={data.hour}
                        onChange={handleGetData}
                      />
                    </div>

                    <div className="max-w-4xl  mx-auto">
                      <input
                        autoComplete="off"
                        className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 shadow rounded-xl text-center"
                        placeholder="00"
                        id="minute"
                        name="minute"
                        value={data.minute}
                        onChange={handleGetData}
                      />
                    </div>
                    {/* Minute */}
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => handleAmToPm('AM')}
                      style={btnStyle('AM')}
                      className="items-center w-10 h-5 mb-2  border border-[#E0D026] text-white rounded-xl"
                    >
                      <p className=" text-[12px]" style={{ lineHeight: '20.63px', fontWeight: 400 }}>
                        AM
                      </p>
                    </button>
                    <br />
                    <button
                      type="button"
                      onClick={() => handleAmToPm('PM')}
                      style={btnStyle('PM')}
                      className="items-center w-10 h-5 border border-[#E0D026] text-white rounded-xl"
                    >
                      <p className="text-[12px]" style={{ lineHeight: '20.63px', fontWeight: 400 }}>
                        PM
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Picker */}
            <div className="max-w-4xl mx-auto my-8 relative">
              <label
                htmlFor="email"
                className="block text-[#596983] text-[12px] leading-tight tracking-normal mb-2"
                style={{ lineHeight: '20.63px', fontWeight: 400 }}
              >
                Enter Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="address"
                  onChange={handleGetData}
                  value={data.address}
                  id="address"
                  autoComplete="off"
                  className="w-full py-5 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow" // Keep the button to the right
                  placeholder="Enter Address here e.g City, Street, Block No."
                />

                {/* <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 py-3 px-4 bg-[#E0D026] flex items-center gap-2 text-black font-semibold rounded-md shadow  focus:outline-none focus:ring-2  focus:ring-offset-2   " // Adjust button styles and positioning

                                >
                                    <FaRegMap size={20} />
                                    <p className='text-[16px]'>Pick from Map</p>
                                </button> */}
              </div>
            </div>
            {/* Submit button */}
            <div className="flex justify-end mt-52">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e)}
                className="bg-[#E0D026] text-[16px] text-black py-3 px-6 rounded-3xl flex items-center text-center "
              >
                <IoMdAdd size={20} />
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
