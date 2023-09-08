import React, { Fragment} from "react";
import { Route, Routes } from "react-router";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import ForgotPassword from "../Auth/ForgotPassword";
import Profile from "../Pages/Profile";
const PageRoutes =({loggedIn})=>{
return(
    <Fragment>
        <Routes>
        {loggedIn && (
            <Fragment>
              <Route path="/*" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/profile" element={<Profile />} />
            </Fragment>
          )}
  
          {/* Pages which should render when the user is not logged in */}
          {!loggedIn && (
            <Fragment>
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Login />} />
              <Route path='/forgotPassword' element={<ForgotPassword />} />
            </Fragment>
          )}
        </Routes>
    </Fragment>
);
}

export default PageRoutes;