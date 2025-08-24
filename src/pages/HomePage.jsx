export default function HomePage( { navbar } ) {
    return (
        <>
            <div id="landingPage" className="h-screen flex flex-col">

                {/* Header section */}
                <section id="headerSection" className="h-[10%] w-full p-1">

                    {/* Here comes LMS name and logo plus user info */}
                    <header id="homeHeader" className="h-full w-full">

                        {/* Navbar */}
                        <nav id="homeNavbar" className="h-full w-full">

                            { navbar }

                        </nav>

                    </header>

                </section>

                {/* Main content section */}
                <section id="HMCSection" className="h-[90%]">

                    {/* Main Content Area */}
                    <main id="HomeMainContentArea" className="h-[90%] p-1">

                    </main>

                </section>
            </div>
        </>
    )
}