import React, { useState } from "react";
import { CiMail, CiGlobe, CiHeart, CiTrash } from "react-icons/ci";
import { FaPhone, FaPencilAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserData from "./UserData";
const ProfileCards = ({ fetchData }) => {

   console.log(fetchData)
  function deleteItem(id){
    const del=fetchData.filter((item)=>item.id!==id)
  
  }
  return (
    <div className="container mt-4">
      <div className="row">
        {fetchData.map((data) => {
          // Independent like state for each card
          const [isLiked, setIsLiked] = useState(false);

          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={data.id}>
              <div className="card shadow-sm p-3">
                <img
                  src={`https://api.dicebear.com/9.x/pixel-art/svg?seed=${data.username}`}
                  alt={data.username}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{data.name}</h5>
                  <p className="d-flex align-items-center gap-2 text-muted">
                    <CiMail className="text-primary" /> {data.email}
                  </p>
                  <p className="d-flex align-items-center gap-2 text-muted">
                    <FaPhone className="text-danger" /> {data.phone}
                  </p>
                  <p className="d-flex align-items-center gap-2 text-muted">
                    <CiGlobe className="text-success" /> {data.website}
                  </p>

                  {/* Footer icons */}
                  <div className="d-flex justify-content-around mt-3">
                    <span
                      style={{ cursor: "pointer", color: isLiked ? "red" : "black" }}
                      onClick={() => setIsLiked(!isLiked)}
                    >
                      {isLiked ? <FaHeart size={20} /> : <CiHeart size={20} />}
                    </span>
                    <Link to={"/Form"}>
                    <span className="text-warning" style={{ cursor: "pointer" }} >
                      <FaPencilAlt size={18} />
                    </span>
                    </Link>
                    <span className="text-danger" style={{ cursor: "pointer" }}onClick={deleteItem(data.id)} >
                      <CiTrash size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCards;

               



