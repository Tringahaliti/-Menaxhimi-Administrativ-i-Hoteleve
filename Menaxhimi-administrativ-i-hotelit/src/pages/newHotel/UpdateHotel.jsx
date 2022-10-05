import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./updateHotel.scss";

const UpdateHotel = () => {
    const [hotel, setHotel] = useState({
        name: "",
        type: "",
        title: "",
        city: "",
    });
    const [error, setError] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const hotelId = location.pathname.split("/")[3];

    const handleChange = (e) => {
        setHotel((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.put("https://hotels-api-testtt.herokuapp.com/api/Hotels/" + hotelId, hotel);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="form">
            <h1>Update the Hotel</h1>
            <input
                type="text"
                placeholder="Hotel name"
                name="name"
                onChange={handleChange}
            />
            <textarea
                rows={5}
                type="text"
                placeholder="Hotel type"
                name="type"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Hotel title"
                name="title"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Hotel City"
                name="city"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Update</button>
            {error && "Something went wrong!"}
            <Link to="/hotels">See all Hotels</Link>
        </div>
    );
};

export default UpdateHotel;