"use client";
import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    displayName: "",
    userName: "",
    bio: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(profile);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="w-2/6 h-full flex flex-col py-8 items-center gap-5">
        <div className="w-full items-center">
          <div className="flex flex-row w-full gap-10">
            <img
              className="w-24 h-24 mb-3 rounded-full object-cover shadow-lg"
              src="/profile.jpg"
              alt="Bonnie image"
            />
            <div className="flex flex-col justify-center gap-2">
              <button className="text-center w-32 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <p>+ New Photo</p>
              </button>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Must be JPEG, PNG, or GIF and cannot exceed 10MB.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              name="userName"
              value={profile.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Display Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              name="displayName"
              value={profile.displayName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Bio
            </label>
            <textarea
              id="message"
              rows={4}
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            />
          </div>
        </div>
        <div className="flex w-full">
          <button
            onClick={handleSubmit}
            className="text-center w-32 items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
