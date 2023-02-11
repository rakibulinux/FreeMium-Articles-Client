import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import {
  FaAudioDescription,
  FaBriefcase,
  FaMapMarkerAlt,
  FaUniversity,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { APIContext } from "./../../contexts/APIProvider";
import { IoLocationSharp } from "react-icons/io5";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(APIContext);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const [users, setUsers] = useState({});
  const userId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    name: users.name,
    location: users.location,
    occupation: users.occupation,
    education: users.education,
    bio: users.bio,
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

  console.log(userId);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [user?.email]);
  console.log(users);

  return (
    <div className="w-full mx-auto mt-10 p-10 bg-white rounded-lg shadow-lg">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="name"
              type="text"
              name="name"
              defaultValue={users?.name}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="location"
              type="text"
              name="location"
              defaultValue={users?.location}
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="occupation"
            >
              Occupation
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="occupation"
              type="text"
              name="occupation"
              defaultValue={users?.occupation}
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="education"
            >
              Education
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="education"
              type="text"
              name="education"
              defaultValue={users?.education}
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="bio"
            >
              Bio
            </label>
            <textarea
              className="border border-gray-400 p-2 w-full"
              id="bio"
              name="bio"
              defaultValue={users?.bio}
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
              <h3 className="text-4xl font-semibold leading-normal text-gray-700 mb-2">
                {users?.name}
              </h3>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
              <FaMapMarkerAlt />
              {users?.location}
            </div>
            <div className="flex justify-center items-center gap-2 mb-2 text-gray-600 mt-10">
              <FaBriefcase />
              {users?.occupation}
            </div>
            <div className="flex justify-center items-center gap-2 mb-2 text-gray-600">
              <FaUniversity />
              {users?.education}
            </div>
            <div className="mt-10 py-10 border-t border-gray-200 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center gap-2 w-full lg:w-9/12 px-4">
                  <FaAudioDescription />
                  <p className="mb-4 text-lg leading-relaxed text-gray-700">
                    {users?.bio}
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
