import { Outlet } from "react-router-dom"

export default function AuthLayout( ) {
    return (
        <>
    
            <div className="h-screen w-screen flex items-center justify-center ">

                <div className="h-[95%] w-[60%] grid grid-cols-6 p-4 rounded-2xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]">

                    {/* Left side logo, lms-name and tagline section */}
                    <section className="col-span-2 flex flex-col items-center justify-center ">

                        <span>Logo</span>
                        <span>Learnify</span>
                        <span>Tagline</span>

                    </section>

                    {/* Login or Signup Form section */}
                    <section 
                    className="col-span-4 rounded-2xl shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]"
                    >

                        <Outlet />

                    </section>

                </div>

            </div>

        </>
    )
}