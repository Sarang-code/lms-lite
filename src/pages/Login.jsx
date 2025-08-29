import { useState } from "react"
import { useEffect } from "react"; 
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

// custom hooks
import { useForLogin } from "../utils/alerts";

import api from "../api/axios"


export function Login() {

    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ error: "", emailError: "", passwordError: "" });

    const { userNotFound, forgotPassword } = useForLogin();
    
    useEffect(() => {

        if (errors.emailError === "Invalid Email") {
            let message = `"${inputs.email}" is not registered`;
            userNotFound(message);
        }

    }, [errors.emailError, userNotFound]);

    const navigate = useNavigate();

    const handleChange = (e) => {

        const { name, value } = e.target;

        setInputs((prev) => ({ ...prev, [name]: value }));
        
        // Clear error when typing...
        setErrors({ emailError: "", passwordError: "" });
        
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if ( inputs.email && inputs.password ) {
            try {

                const res = await api.post("/users/login", {
                    email: inputs.email,
                    password: inputs.password,
                });

                if (res.data.success) {

                    // clear errors object
                    setErrors({ error: "", emailError: "", passwordError: "" });

                    // store auth info
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userRole", res.data.role);

                    if (res.data.role === "admin") {
                        navigate("./Dashboards/Admin.jsx"); // Navigate to the admin dashboard
                    } else if (res.data.role === "teacher") {
                        navigate("./Dashboards/Teacher.jsx"); // Navigate to the teacher dashboard
                    } else if (res.data.role === "student") {
                        navigate("./Dashboards/Student.jsx"); // Navigate to the student dashboard
                    } else {
                        navigate("/"); // Navigate to the homepage/landingpage
                    }
                
                }

            } catch (err) {

                const msg = err.response?.data?.message || err.message;

                if (msg === "User Not Found") {
                    setErrors((prev) => ({ ...prev, emailError: "Invalid Email" }));
                } else if (msg === "Invalid Password") {
                    setErrors((prev) => ({ ...prev, passwordError: "Invalid Password"})); 
                } else {
                    setErrors((prev) => ({ ...prev, error: "Something Went Wrong" }));
                }

            }

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
                            className={`p-2 outline-none focus:outline-none rounded-full 
                                border ${errors.emailError ? "border-red-500 placeholder-red-500" : "border-gray-400"} 
                                bg-transparent`}
                            />

                            <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            className={`p-2 outline-none focus:outline-none rounded-full 
                                border ${errors.passwordError ? "border-red-500 placeholder-red-500" : "border-gray-400"} 
                                bg-transparent`}
                            />


                            <div className="flex flex-row justify-evenly">

                                <div className="flex flex-row space-x-1">
                                    
                                    <input type="checkbox" />
                                    <span> Remember me</span>
                                
                                </div>

                                {/* Show errors */}
                                <section>
                                    {errors.emailError && <p className="text-red-500">{errors.emailError}</p>}
                                    {errors.passwordError && <p className="text-red-500">{errors.passwordError}</p>}
                                    {errors.error && <p className="text-red-500">{errors.error}</p>}
                                </section>

                                <button type="button" onClick={forgotPassword} className="underline text-blue-500" >Forgot Password?</button>

                            </div>

                            <button type="submit" disabled={!inputs.email || !inputs.password} className="p-2 bg-blue-500 rounded-full">Log in</button>

                        </section>

                        <section className="pl-8 pr-8 flex flex-col space-y-5">

                            <button type="button" className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Google</button>
                            <button type="button" className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Apple</button>
                            <button type="button" className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with GitHub</button>

                        </section>
                        
                    </fieldset>

                </form>

                <section>

                    <span className="pl-4">Don't have an account? <Link to='../signup' className="underline text-blue-500">Sign up</Link></span>

                </section>

            </div>
        </>
    )
}
