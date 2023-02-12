import React, { useRef, useState } from "react";
export const SimpleLogin = () => {
    const [userLogin,setuserLogin] = useState(false);
    const [userDetails,setuserDetails] = useState({username: "", password: ""});
    const refUsername = useRef();
    const refPassword = useRef();
    const onSubmitLogin = event => {
        event.preventDefault();
        console.log(event.target);
        const userCredentials = {
            username: "diazphi",
            password: "password"
        }
        if(userCredentials.username === userDetails.username && userCredentials.password === userDetails.password) {
            setuserLogin(true);
        } else {
            if(userCredentials.username !== userDetails.username && userCredentials.password === userDetails.password) {
                refUsername.current.focus();
            } 
            if(userCredentials.username === userDetails.username && userCredentials.password !== userDetails.password) {
                refPassword.current.focus();
            }
            if(userCredentials.username !== userDetails.username && userCredentials.password !== userDetails.password) {
                refUsername.current.focus();
            }
            setuserLogin(false);
        }
    }
    const onLogout = () => {
        setuserDetails({...userDetails, username: "", password: ""});
        setuserLogin(false);
    }
    return (
        <div className="login-form block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {(userLogin) ? (
                <div className="welcome">
                    <h1>Welcome!</h1>
                    <input type="button" value="Logout" onClick={onLogout} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                </div>
            ) :
            (   
                <div className="login">
                    <h2 className="py-8">Login</h2>
                   <form onSubmit={onSubmitLogin} className="login-form">
                        <label htmlFor="user" className="py-8">Username:</label>
                        <input ref={refUsername} type="text" name="user" id="user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={event => setuserDetails({...userDetails, username: event.target.value})} />
                        <label htmlFor="password">Password:</label>
                        <input ref={refPassword} type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" required onChange={event => setuserDetails({...userDetails, password: event.target.value})} />
                        <input type="submit" value="Signin" className="py-2.5 px-5 mr-2 mb-2 mt-8 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" />
                    </form>
                </div>
            )}
        </div>
    )
}