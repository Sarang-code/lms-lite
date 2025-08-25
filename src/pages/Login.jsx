import { useState } from "react"
import { Link } from "react-router-dom"

import api from "../api/axios"

export function Login() {
    const [inputs, setInputs] = useState({ email: "", password: "" });

    const handleChange = (e) => {
            setInputs({ ...inputs, [e.target.name]: e.target.value });
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const res = await api.post("/users/login", {
                    email: inputs.email,
                    password: inputs.password,
                });
                console.log("Log in success:", res.data);
                alert("Loged in successfully!");
            } catch (err) {
                console.error("Log in error:", err.response?.data || err.message);
                alert("Log in failed!");
            }
        }
        
    return (
        <>
            <div className="p-4 w-full">

                <form onSubmit={handleSubmit}>

                    <fieldset className="border border-gray-400 p-4 rounded-lg w-full">
                        <legend className="px-2 text-lg font-semibold">Log in</legend>

                        <section className="flex flex-col p-4 space-y-5">

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

                            <div className="flex flex-row justify-between">

                                <div className="pl-4 flex flex-row space-x-1">
                                    
                                    <input type="checkbox" />
                                    <span> Remember me</span>
                                
                                </div>

                                <Link  className="pr-4 underline text-blue-500" >Forgot Password?</Link>

                            </div>

                            <button className="p-2 bg-blue-500 rounded-full">Log in</button>

                        </section>

                        <form action="" className="pl-10 pr-10">

                                <section className="p-4 flex flex-col space-y-5">

                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Google</button>
                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Apple</button>
                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with GitHub</button>

                                </section>

                        </form>
                        
                    </fieldset>

                </form>

                <section>

                    <span className="pl-4">Don't have an account? <Link to='../signup' className="underline text-blue-500">Sign up</Link></span>

                </section>

            </div>
        </>
    )
}
