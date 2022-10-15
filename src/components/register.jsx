import { Link } from "react-router-dom";
import axios from "axios";

function Register() {

    const register = async (event) => {
        event.preventDefault();
        console.log("Hello")
        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            username: event.target.username.value,
            password: event.target.password.value,
        }
        await axios.post('https://ra-newsx-app.herokuapp.com/auth/register', user)
        .then((res) => {
            window.location.href = '/login'

        })
        .catch((err) => {
            alert("Username already exist!");
        })
    }

    return (
        <div className="flex justify-center mt-16">
            <div className="px-12 pt-8 pb-20 bg-white rounded-lg shadow mx-auto text-center">
                <p className="text-xl">Welcome!</p>
                <form className="mt-12 grid" onSubmit={(event) => register(event)}>
                    <label className='relative cursor-pointer'>
                        <input type="text" name="name" placeholder="Full name" className='w-96 py-2 px-2 border-opacity-50 outline-none border-b focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' required />
                        <span className='text-opacity-80 absolute left-1 top-1.5 px-1 transition duration-200 input-text'>Full name</span>
                    </label>
                    <label className='relative cursor-pointer mt-10'>
                        <input type="text" name="email" placeholder="Email" className='w-96 py-2 px-2 border-opacity-50 outline-none border-b focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' required />
                        <span className='text-opacity-80 absolute left-1 top-1.5 px-1 transition duration-200 input-text'>Email</span>
                    </label>
                    <label className='relative cursor-pointer mt-10'>
                        <input type="text" name="username" placeholder="Username" className='w-96 py-2 px-2 border-opacity-50 outline-none border-b focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' required />
                        <span className='text-opacity-80 absolute left-1 top-1.5 px-1 transition duration-200 input-text'>Username</span>
                    </label>
                    <label className='relative cursor-pointer mt-10'>
                        <input type="text" name="password" placeholder="Password" className='w-96 py-2 px-2 border-opacity-50 outline-none border-b focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' required />
                        <span className='text-opacity-80 absolute left-1 top-1.5 px-1 transition duration-200 input-text'>Password</span>
                    </label>
                    <input type={'submit'} value={'Register'} className="mt-14 px-4 py-2 rounded-full tracking-wider w-full bg-primaryBlue text-white text-center cursor-pointer" />
                </form>
                <div className="mt-16">
                    <p className="mb-4">Don't have an account ?</p>
                    <Link to="/register" className="text-primaryBlue underline underline-offset-2 decoration-primaryBlue">Create one</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;