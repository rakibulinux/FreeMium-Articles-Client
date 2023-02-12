import React, { useContext, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import {
  FaAudioDescription,
  FaBriefcase,
  FaMapMarkerAlt,
  FaUniversity,
  FaUser,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Spinner from "../../components/Spinner/Spinner";
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
    username: singleUsers.username,
    location: singleUsers.location,
    occupation: singleUsers.occupation,
    education: singleUsers.education,
    bio: singleUsers.bio,
  });
  if (!singleUsers) {
    return <Spinner />;
  }
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const updateProfile = (formData) => {
    // Check if the username is already set, and if it's not, set it and update the last updated time
    if (!singleUsers?.username) {
      singleUsers.username = formData.username;
      singleUsers.usernameLastUpdated = Date.now();
    } else if (
      singleUsers?.username &&
      Date.now() - singleUsers?.usernameLastUpdated > 30 * 24 * 60 * 60 * 1000
    ) {
      // If the username is already set and the last updated time is more than 30 days, update the username and the last updated time
      singleUsers.username = formData.username;
      singleUsers.usernameLastUpdated = Date.now();
    }

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
            <label className="block font-medium mb-2" htmlFor="name">
              Username
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="username"
              type="text"
              name="username"
              defaultValue={singleUsers?.username}
              value={formData.username}
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
          <div class="h-full">
            <div class="border-b-2 block md:flex">
              <div class="w-full md:w-3/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white p-2 hover:bg-green-600"
                    onClick={toggleEditMode}
                  >
                    Edit Profile
                  </button>
                </div>

                <div class="w-full p-8 mx-2 flex justify-center">
                  <img
                    id="showImage"
                    class="max-w-xs w-32 items-center border"
                    src={singleUsers?.picture}
                    alt=""
                  />
                </div>
                <div class="pb-4">
                  <label
                    for="occupation"
                    class="font-semibold text-gray-700 block pb-1"
                  >
                    Occupation
                  </label>
                  <input
                    disabled
                    id="occupation"
                    class="border-1  rounded-r pr-4 py-2 w-full"
                    type="occupation"
                    value={singleUsers?.occupation}
                  />
                </div>
                <p className="mb-4 text-lg leading-relaxed">
                  <span class="text-gray-600">{singleUsers?.bio}</span>
                </p>
              </div>

              <div class="w-full md:w-2/5 p-8 bg-white lg:ml-4 shadow-md">
                <div class="rounded  shadow p-6">
                  <div class="pb-6">
                    <label
                      for="name"
                      class="font-semibold text-gray-700 block pb-1"
                    >
                      Name
                    </label>
                    <div className="flex items-center gap-2">
                      <BiUserCircle />
                      <input
                        disabled
                        id="name"
                        class="border-1  rounded-r pr-4 py-2 w-full"
                        type="text"
                        value={singleUsers?.name}
                      />
                    </div>
                  </div>
                  <div class="pb-6">
                    <label
                      for="username"
                      class="font-semibold text-gray-700 block pb-1"
                    >
                      Username
                    </label>
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <input
                        disabled
                        id="username"
                        class="border-1  rounded-r pr-4 py-2 w-full"
                        type="text"
                        value={singleUsers?.username}
                      />
                    </div>
                  </div>
                  <div class="pb-4">
                    <label
                      for="email"
                      class="font-semibold text-gray-700 block pb-1"
                    >
                      Email
                    </label>
                    <div className="flex items-center gap-2">
                      <MdEmail />
                      <input
                        disabled
                        id="email"
                        class="border-1  rounded-r pr-4 py-2 w-full"
                        type="email"
                        value={singleUsers?.email}
                      />
                    </div>
                  </div>
                  <div class="pb-4">
                    <label
                      for="education"
                      class="font-semibold text-gray-700 block pb-1"
                    >
                      Education
                    </label>
                    <div className="flex items-center gap-2">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                      <input
                        disabled
                        id="education"
                        class="border-1  rounded-r pr-4 py-2 w-full"
                        type="education"
                        value={singleUsers?.education}
                      />
                    </div>
                  </div>
                  <div class="pb-4">
                    <label
                      for="location"
                      class="font-semibold text-gray-700 block pb-1"
                    >
                      Location
                    </label>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <input
                        disabled
                        id="location"
                        class="border-1  rounded-r pr-4 py-2 w-full"
                        type="location"
                        value={singleUsers?.location}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
