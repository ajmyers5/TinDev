import React from "react";
import UserLogin from "../components/UserLogin";
import UserLoginNavbar from "../components/UserLoginNavbar";

function LoginPage() {
    return(
        <div>
            <UserLoginNavbar />
            <UserLogin />
        </div>
    )
}
export default LoginPage