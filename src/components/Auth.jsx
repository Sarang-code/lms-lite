import { Link } from "react-router-dom"

export function Login() {
    return (
        <>
            <div className="p-4 w-full">

                <form>

                    <fieldset className="border border-gray-400 p-4 rounded-lg w-full">
                        <legend className="px-2 text-lg font-semibold">Log in</legend>

                        <section className="flex flex-col p-4 space-y-5">

                            <input type="email"
                            placeholder="Email"
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <input type="password"
                            placeholder="Password"
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <div className="flex flex-row justify-between">

                                <div className="flex flex-row space-x-1">
                                    
                                    <input type="checkbox" />
                                    <span> Remember me</span>
                                
                                </div>

                                <Link to=""  className="underline text-blue-500" >Forgot Password?</Link>

                            </div>

                            <button className="p-2 bg-blue-500 rounded-full">Log in</button>

                        </section>
                        
                        <section>

                            <fieldset className="border border-gray-400 rounded-lg p-4 w-full max-w-md">
                                <section className="flex flex-col space-y-5">

                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Google</button>
                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Apple</button>

                                </section>

                            </fieldset>

                        </section>

                    </fieldset>

                    <section>

                        <span className="pl-4">Don't have an account? <Link to='../signup' className="underline text-blue-500">Sign up</Link></span>

                    </section>

                </form>

            </div>
        </>
    )
}

export function Signup() {
     return (
        <>
            <div className="p-4 w-full">

                <form>

                    <fieldset className="border border-gray-400 p-4 rounded-lg w-full">
                        <legend className="px-2 text-lg font-semibold">Sign up</legend>

                        <section className="flex flex-col p-4 space-y-5">

                            <input type="text"
                            placeholder="Name"
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <input type="email"
                            placeholder="Email"
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <input type="password"
                            placeholder="Password"
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            <input type="password"
                            placeholder="Confirm Password"
                            className="p-2 outline-none focus:outline-none border border-gray-400 bg-transparent rounded-full"
                            />

                            {/* <select id="userRole" name="role">
                                <option value="student">Student</option>
                                <option value="Teacher">Teacher</option>
                            </select> */}

                            <button className="p-2 bg-blue-500 rounded-full">Sign up</button>

                        </section>
                        
                        <section>

                            <fieldset className="border border-gray-400 rounded-lg p-4 w-full max-w-md">
                                <section className="flex flex-col space-y-5">

                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Google</button>
                                    <button className="p-2 border border-gray-400 bg-transparent rounded-full">Continue with Apple</button>

                                </section>

                            </fieldset>

                        </section>

                    </fieldset>

                    <section>

                        <span className="pl-4">Already have an account? <Link to='../login' className="underline text-blue-500">Log in</Link></span>

                    </section>

                </form>

            </div>
        </>
    )
}

