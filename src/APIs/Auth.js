export const setAuthToken = (user, role) => {
  const currentUser = {
    name: user?.displayName,
    picture: user?.photoURL,
    email: user?.email,
    verify: false,
    role,
  };
  console.log(user);
  // Save user is DB
  fetch(`${process.env.REACT_APP_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("freeMiumToken")}`,
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("freeMiumToken", data.token);
    });
};
