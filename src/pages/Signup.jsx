import { useState } from "react"
import { Link } from "react-router-dom"

import api from "../api/axios"

export function Signup() {
    const [inputs, setInputs] = useState({ name: "", email: "", password: "", confirmPassword: "" });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // To check if Passwords match or not
        if(inputs.password !== inputs.confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            const res = await api.post("/users/register", {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
            });
            console.log("Signup success:", res.data);
            alert("User registered successfully!");
        } catch (err) {
            console.error("Signup error:", err.response?.data || err.message);
            alert("Signup failed!");
        }
    }
    
    return (
        <>
            <div className="p-4 w-full">

                <form onSubmit={handleSubmit}>

                    <fieldset className="border border-gray-400 p-4 rounded-lg w-full">
                        <legend className="px-2 text-lg font-semibold">Sign up</legend>

                        <section className="flex flex-col p-4 space-y-3">

                            <input type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <input type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <input type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <input type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <div className="flex justify-around">
                                <div className="flex flex-row space-x-1">
                                    <input type="radio" id="student" name="role" value="Student"/>
                                    <label for="student">Student</label>
                                </div>
                                <div className="flex flex-row space-x-1">
                                    <input type="radio" id="teacher" name="role" value="Teacher"/>
                                    <label for="teacher">Teacher</label>
                                </div>
                            </div>

                            <button type="submit" className="p-2 bg-blue-500 rounded-full">Sign up</button>

                        </section>
                        
                        <form action="" className="pl-10 pr-10">

                                <section className="p-4 flex flex-col space-y-3">

                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Google</button>
                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Apple</button>
                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with GitHub</button>

                                </section>

                        </form>

                    </fieldset>

                </form>

                <section>

                    <span className="pl-4">Already have an account? <Link to='../login' className="underline text-blue-500">Log in</Link></span>

                </section>

            </div>
        </>
    )
}
