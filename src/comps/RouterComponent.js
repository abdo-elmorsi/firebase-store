import React, { useContext } from "react";
import Home from "../pages";
import Login from "../pages/login";
import Signin from "../pages/signin";
import {
    BrowserRouter as Router,
    Navigate,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";

import { User } from "../App";
export default function RouterComponent() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<RequireAuth />}>
                        <Route element={<Home />} path="/"></Route>
                    </Route>
                    <Route element={<Login />} path="/login"></Route>
                    <Route element={<Signin />} path="/signin"></Route>
                </Routes>
            </Router>
        </div>
    );
}
const RequireAuth = () => {
    const [user] = useContext(User);
    if (!user) {
        return <Navigate to="/login" />;
    } else {
        return <Outlet />;
    }
};

