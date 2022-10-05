import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { hotelInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, userColumns, roomColumns, employesColumns } from "./datatablesource";
import UpdateHotel from './pages/newHotel/UpdateHotel'
import UpdateRoom from './pages/newRoom/UpdateRoom'
import UpdateUser from './pages/new/UpdateUser'
import NewEmployes from "./pages/newEmployes/NewEmployes";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const Protected = ({children}) => {
    const {user} = useContext(AuthContext)

    if(!user) {
      return <Navigate to='/login' />
    }

    return children;
  }


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="/login" element={<Login /> } />

            <Route index element={<Protected><Home /></Protected>} />
            <Route path="/users">
              <Route index element={<Protected><List columns={userColumns} /></Protected>  } />
              <Route path="/users/test/:id" element={<Protected><Single /></Protected> } />
              <Route path='update/:id' element={<UpdateUser />} />

              <Route
                path="new"
                element={<Protected><New inputs={userInputs} title="Add New User" /></Protected> }
              />
            </Route>
            <Route path="/hotels">
              <Route index element={<Protected><List columns={hotelColumns} /></Protected> } />
              <Route path='update/:id' element={<UpdateHotel />} />
              <Route
                path="new"
                element={ <Protected><NewHotel /></Protected> }
              />
            </Route>
            <Route path="/rooms">
              <Route index element={<Protected><List columns={roomColumns} /></Protected> } />
              <Route path='update/:id' element={<UpdateRoom />} />
              <Route
                path="new"
                element={<Protected><NewRoom /></Protected> }
              />
            </Route>
            <Route path="/employes">
              <Route index element={<Protected><List columns={employesColumns} /></Protected> } />
              <Route path='update/:id' element={<UpdateHotel />} />
              <Route
                path="new"
                element={ <Protected><NewEmployes /></Protected> }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
