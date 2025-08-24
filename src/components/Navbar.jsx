import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
        <>
            <div className="w-full h-full flex flex-row">

                {/* Show current user info */}
                <section className="flex basis-[20%] items-center justify-start px-3 gap-2 bg-red-500">

                        <div>{ props.dP }</div>
                        <div>{ props.name }</div>

                </section>

                {/* Search box */}
                <section className="flex basis-[65%] items-center justify-evenly bg-red-300">

                    <div className="w-[90%] h-full">

                        <form action="search" className="w-full h-full flex items-center justify-center border border-solid border-black rounded-full">

                            <input type="search" placeholder="Search" 
                            className="h-full flex basis-[90%] px-4 outline-none focus:outline-none border-r-0 rounded-full"
                            />

                            <button type="submit"
                            className="h-full flex basis-[10%] items-center justify-center"
                            >Icon
                            </button>

                        </form>

                    </div>

                </section>

                {/* Log in, Sign up, Log out */}
                <section className="flex basis-[15%] items-center justify-end justify-evenly bg-red-100">

                    <Link to='/auth/login'>Log in</Link>

                    <Link to='/auth/signup'>Sign up</Link>

                    {props.showLogout && <Link to="/logout">Log Out</Link>}

                </section>

            </div>

        </>
    )
}