export default function DashboardLayout(props) {
    return (
        <>
            <div id="mainLayout" className="h-screen grid grid-cols-5">

                {/* Sidebar section */}
                <section id="sidebarSection" className="h-full col-span-1">

                    {/* Here comes LMS name and logo plus user info */}
                    <header id="DashboardHeader" className="h-[15%] flex flex-col justify-evenly p-1">

                        { props.mainHeader }

                    </header>

                    {/* Sidebar */}
                    <aside id="sidebar" className="h-[85%] p-1">
                        
                        { props.sidebar}

                    </aside>

                </section>

                {/* Navbar and main content section */}
                <section id="MCNSection" className="h-full col-span-4">

                    {/* Navbar */}
                    <nav id="navbar" className="h-[10%] flex flex-row p-1">

                        { props.navbar }

                    </nav>

                    {/* Main Content Area */}
                    <main id="mainContentArea" className="h-[90%] p-1">

                    </main>

                </section>
            </div>
        </>
    )
}