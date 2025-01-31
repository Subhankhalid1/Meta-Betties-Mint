import React, { useState, useRef } from 'react';

export const EditUserProfile = () => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  const [avatarSelected, setAvatarSelected] = useState(false);
  const [coverSelected, setCoverSelected] = useState(false);
  const avatarInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setAvatarPreview(file);
      setAvatarSelected(true);
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setCoverPreview(file);
      setCoverSelected(true);
    }
  };

  const handleAvatarReset = () => {
    setAvatarPreview(null);
    setAvatarSelected(false);
    avatarInputRef.current.value = null;
  };

  const handleCoverReset = () => {
    setCoverPreview(null);
    setCoverSelected(false);
    coverInputRef.current.value = null;
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 md:grid-cols-1 grid-cols-1 2xl:gap-12 xl:gap-7 pr-5 gap-8 justify-between my-5 ">
          {/* Column No 1 */}
          <div className="2xl:col-span-5 2xl:h-3/4 xl:h-3/4   xl:col-span-5 lg:col-span-11 md:col-span-12 sm:col-span-12 col-span-8 text-white rounded-xl lg:p-5 p-2 bg-[#121318]">
            <p className="text-[16px] font-semibold pb-5">Avatar</p>
            <div className="relative w-full h-96 flex flex-col justify-center items-center">
              <label
                htmlFor="uploadAvatar"
                className="absolute inset-0 w-full h-full bg-[#121318] text-white text-base rounded flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]"
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
                  id="uploadAvatar"
                  className="hidden"
                  onChange={handleAvatarChange}
                  ref={avatarInputRef}
                />
              </label>
              <button
                type="button"
                className="absolute bottom-28 flex justify-center items-center w-40 h-12  border border-yellow-500  hover:bg-yellow-500 text-white font-bold rounded"
                onClick={() => avatarInputRef.current.click()}
              >
                {avatarSelected ? 'Change' : 'Choose File'}
              </button>
            </div>

            <p className="text-[16px] pb-5 pt-5">Cover Image</p>
            <div className="relative w-full h-52 flex justify-center items-center">
              <label
                htmlFor="uploadCover"
                className="absolute inset-0 w-full h-full bg-[#121318] text-white text-base rounded flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]"
              >
                {coverPreview ? (
                  <img
                    src={`${URL.createObjectURL(coverPreview)}`}
                    alt="Cover Preview"
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
                  id="uploadCover"
                  className="hidden"
                  onChange={handleCoverChange}
                  ref={coverInputRef}
                />
              </label>
              <button
                type="button"
                className="absolute bottom-5 flex justify-center items-center w-40 h-12 border border-yellow-500  hover:bg-yellow-500 text-white font-bold rounded"
                onClick={() => coverInputRef.current.click()}
              >
                {coverSelected ? 'Change' : 'Choose File'}
              </button>
            </div>
          </div>

          {/* Column No 2 */}
          <div className="2xl:col-span-7 xl:col-span-6 lg:col-span-11 md:col-span-12 sm:col-span-12 col-span-8 lg:p-7 p-4 rounded-xl  bg-[#121318] text-white">
            <p className="text-[16px] font-semibold pb-5">Basic Information</p>
            <p>
              You can choose an NFT from{' '}
              <a href="" className="text-cyan-300 font-semibold">
                My NFT's
              </a>{' '}
              as your avatar, and your username will be{' '}
              <a href="" className="text-cyan-300 font-semibold">
                Rainbowised
              </a>{' '}
              when used
            </p>

            <form action="">
              <div className="max-w-4xl mx-auto my-5 mt-10">
                <label
                  htmlFor="email"
                  className="block text-gray-800 dark:text-gray-100 text-lg font-bold leading-tight tracking-normal mb-2"
                >
                  Username
                </label>
                <input
                  id="email"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                  placeholder="Your username"
                />
              </div>

              <div className="max-w-4xl mx-auto">
                <label
                  htmlFor="message"
                  className="block  dark:text-gray-100 text-lg font-bold leading-tight tracking-normal mb-2"
                >
                  Intro
                </label>
                <textarea
                  id="message"
                  className="w-full h-40 py-2 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow resize-none"
                  placeholder="Placeholder"
                ></textarea>
              </div>
            </form>

            <p className="text-[16px] font-semibold mt-5">Social Links</p>
            <p>
              You can choose an NFT from{' '}
              <a href="" className="text-cyan-300 font-semibold">
                My NFT's
              </a>{' '}
              as your avatar, and your username will be{' '}
              <a href="" className="text-cyan-300 font-semibold">
                Rainbowised
              </a>{' '}
              when used
            </p>

            <form action="">
              <div className="max-w-4xl mx-auto my-5 ">
                <label
                  htmlFor="email"
                  className="block text-gray-800 dark:text-gray-100 text-lg font-bold leading-tight tracking-normal mb-2"
                >
                  Twitter
                </label>
                <input
                  id="email"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white-600 dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                  placeholder="https://twitter.com/"
                />
              </div>

              <div className="max-w-4xl mx-auto my-5 ">
                <label
                  htmlFor="email"
                  className="block text-gray-800 dark:text-gray-100 text-lg font-bold leading-tight tracking-normal mb-2"
                >
                  Youtube
                </label>
                <input
                  id="email"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white-600 dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                  placeholder="https://www.youtube.com/"
                />
              </div>

              <div className="max-w-4xl mx-auto my-5 ">
                <label
                  htmlFor="email"
                  className="block text-gray-800 dark:text-gray-100 text-lg font-bold leading-tight tracking-normal mb-2"
                >
                  Intagram
                </label>
                <input
                  id="email"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                  placeholder="https://www.intagram.com/"
                />
              </div>

              <div className="max-w-4xl mx-auto my-5">
                <label
                  htmlFor="email"
                  className="block text-gray-800 dark:text-gray-100 text-lg font-bold leading-tight tracking-normal mb-2"
                >
                  Homepage
                </label>
                <input
                  id="email"
                  autoComplete="off"
                  className="w-full py-3 px-3 text-white dark:text-white-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-800 dark:bg-gray-800 bg-white font-normal border border-gray-300 rounded shadow"
                  placeholder="https://..."
                />
              </div>

              <div className="flex justify-end mt-10">
                <button className="text-center bg-[#E0D026] w-40 py-3 rounded-lg">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
