import React, { Fragment} from "react";
import { Route, Routes } from "react-router";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
import ForgotPassword from "../Auth/ForgotPassword";
import Profile from "../Pages/Profile";
const PageRoutes =()=>{
return(
    <Fragment>
        <Routes>
            <Route  path="/home" element={<HomePage/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route  path="/profile" element={<Profile/>}/>
        </Routes>
    </Fragment>
);
}

export default PageRoutes;