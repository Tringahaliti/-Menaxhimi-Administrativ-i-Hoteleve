import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./updateRoom.scss";

const UpdateHotel = () => {
    const [room, setRoom] = useState({
        title: "",
        desc: "",
        price: null,
        maxPeople: null,

    });
    const [error, setError] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const roomId = location.pathname.split("/")[3];

    const handleChange = (e) => {
        setRoom((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`https://hotels-api-testtt.herokuapp.com/api/Rooms/${roomId}`, room);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="form">
            <h1>Update the Room</h1>
            <input
                type="text"
                placeholder="Room title"
                name="title"
                onChange={handleChange}
            />
            <textarea
                rows={5}
                type="text"
                placeholder="Room description"
                name="desc"
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Max People"
                name="maxPeople"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Update</button>
            {error && "Something went wrong!"}
            <Link to="/rooms">See all Rooms</Link>
        </div>
    );
};

export default UpdateHotel;