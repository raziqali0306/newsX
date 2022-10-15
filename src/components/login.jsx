import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

    const handleLogin = async (event) => {
        event.preventDefault();
        const user = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        axios.post('https://ra-newsx-app.herokuapp.com/auth/login', user)
        .then((res) => {
            if(res.status === 200) {
                localStorage.setItem('newsx-details', JSON.stringify({
                    name: res.data.name,
                    username: res.data.username,
                    email: res.data.email,
                    accesstoken: res.data.accesstoken,
                }));
                window.location.href = '/';
            }
            else {
                alert("Something went wrong.! Please check your credentials and try again.!")
                return;
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="flex justify-center mt-16">
            <div className="px-12 pt-8 pb-20 bg-white rounded-lg shadow mx-auto text-center">
                <p className="text-xl">Good to see you again</p>
                <form className="mt-12 grid" onSubmit={handleLogin}>
                    <label className='relative cursor-pointer'>
                        <input type="text" placeholder="Username" name="username"  className='w-96 py-2 px-2 border-opacity-50 outline-none border-b focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' required />
                        <span className='text-opacity-80 absolute left-1 top-1.5 px-1 transition duration-200 input-text'>Username</span>
                    </label>
                    <label className='relative cursor-pointer mt-10'>
                        <input type="text" placeholder="Password" name="password" className='w-96 py-2 px-2 border-opacity-50 outline-none border-b focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' required />
                        <span className='text-opacity-80 absolute left-1 top-1.5 px-1 transition duration-200 input-text'>Password</span>
                    </label>
                    <input type={"submit"} value={"Login"} className="mt-14 px-4 py-2 rounded-full tracking-wider w-full bg-primaryBlue text-white text-center cursor-pointer"/>
                </form>
                <div className="mt-16">
                    <p className="mb-4">Don't have an account ?</p>
                    <Link to="/register" className="text-primaryBlue underline underline-offset-2 decoration-primaryBlue">Create one</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;