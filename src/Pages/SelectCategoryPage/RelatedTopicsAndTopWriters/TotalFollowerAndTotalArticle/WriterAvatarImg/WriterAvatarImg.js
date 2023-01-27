import React, { useEffect, useState } from "react";

const WriterAvatarImg = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);
   useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUserData(data))
   },[userData])
  return (
    <div className="mt-4">
      <div className="avatar-group -space-x-6">
        {
          userData.map(data=>
            <div className="avatar">
            <div className="w-10">
              <img src={data?.picture} alt="people" />
            </div>
          </div>
            )
        }
       
      </div>
    </div>
  );
};

export default WriterAvatarImg;
