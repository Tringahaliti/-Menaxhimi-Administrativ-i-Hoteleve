import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { Link } from "react-router-dom";

const NewRoom = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false)


  const { data, loading } = useFetch("/Hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault()
    // const roomNumbers = rooms.split(',').map((room) => ({ number: room }))
    try {
      await axios.post(`/Rooms`, { ...info })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new Room</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>

              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleChange} />
                </div>
              ))}

              <div className="formInput">
                <label>Room</label>
                <textarea onChange={(e) => setRooms(e.target.value)} />
              </div>

              <div className="formInput" >
                <label>Choose Hotel</label>
                <select id={hotelId} onChange={(e) => setHotelId(e.target.value)}>
                  {loading ? "loading" : data && data.map(hotel => (
                    <option value={hotel.id} key={hotel.id}>{hotel.name}</option>
                  ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
              {error && "Something went wrong!"}
              <Link to="/rooms">See all Rooms</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
