import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./updateUser.scss";

const UpdateHotel = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        country: "",
        city: "",
    });

    const [error, setError] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const userId = location.pathname.split("/")[3];

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.put("https://hotels-api-testtt.herokuapp.com/api/Users/" + userId, user);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="form">
            <h1>Update the User</h1>
            <input
                type="text"
                placeholder="User name"
                name="userName"
                onChange={handleChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Country"
                name="country"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="City"
                name="city"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Update</button>
            {error && "Something went wrong!"}
            <Link to="/users">See all Users</Link>
        </div>
    );
};

export default UpdateHotel;