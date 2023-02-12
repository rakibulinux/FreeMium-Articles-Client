import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import {
  FaAudioDescription,
  FaBriefcase,
  FaMapMarkerAlt,
  FaUniversity,
} from "react-icons/fa";
import { APIContext } from "./../../contexts/APIProvider";

const Profile = () => {
  const { isDarkMode, singleUsers } = useContext(APIContext);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const userId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    name: singleUsers.name,
    location: singleUsers.location,
    occupation: singleUsers.occupation,
    education: singleUsers.education,
    bio: singleUsers.bio,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const updateProfile = (formData) => {
    fetch(`${process.env.REACT_APP_API_URL}/update-profile/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Update your state with the updated user data here
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(formData);
    toggleEditMode();
  };

  return (
    <div
      className={
        isDarkMode
          ? "w-full mx-auto mt-10 p-10 bg-black-350 text-white rounded-lg shadow-lg"
          : "w-full mx-auto mt-10 p-10 bg-white text-black-350 rounded-lg shadow-lg"
      }
    >
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="name"
              type="text"
              name="name"
              defaultValue={singleUsers?.name}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="location"
              type="text"
              name="location"
              defaultValue={singleUsers?.location}
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="occupation">
              Occupation
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="occupation"
              type="text"
              name="occupation"
              defaultValue={singleUsers?.occupation}
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="education">
              Education
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="education"
              type="text"
              name="education"
              defaultValue={singleUsers?.education}
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              className="border border-gray-400 p-2 w-full"
              id="bio"
              name="bio"
              defaultValue={singleUsers?.bio}
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 hover:bg-green-600"
            // onClick={toggleEditMode}
          >
            Update Profile
          </button>
        </form>
      ) : (
        <div>
          <div className="flex justify-end">
            <button
              className="bg-green-500 text-white p-2 hover:bg-green-600"
              onClick={toggleEditMode}
            >
              Edit Profile
            </button>
          </div>
          <div className="text-center">
            <div className="flex justify-center gap-3">
              <h3 className="text-4xl font-semibold leading-normal  mb-2">
                {singleUsers?.name}
              </h3>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm leading-normal mt-0 mb-2 font-bold uppercase">
              <FaMapMarkerAlt />
              {singleUsers?.location}
            </div>
            <div className="flex justify-center items-center gap-2 mb-2 mt-10">
              <FaBriefcase />
              {singleUsers?.occupation}
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <FaUniversity />
              {singleUsers?.education}
            </div>
            <div className="mt-10 py-10 border-t border-gray-200 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center gap-2 w-full lg:w-9/12 px-4">
                  <FaAudioDescription />
                  <p className="mb-4 text-lg leading-relaxed ">
                    {singleUsers?.bio}
                  </p>
                </div>
                <a href="#pablo" className="font-normal text-pink-500">
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
