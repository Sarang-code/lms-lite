export default function Sidebar() {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center p-4 bg-red-600">

                {/* For student */}
                <ul id="studentSidebar" className="flex flex-col items-center gap-2">
                    <li>Dashboard</li>
                    {/* <li>Profile</li> */}
                    <li>My Courses</li>
                    {/* <li>Assignments</li> */}
                    {/* <li>Quizzes & Exams</li> */}
                    {/* <li>Progress Report</li> */}
                    {/* <li>Certificates</li> */}
                </ul>

                {/* For admin or teacher */}
                <ul id="adminSidebar" className="flex flex-col items-center gap-2">
                    <li>Dashboard</li>
                    {/* <li>Course Management</li> */}
                    <li>Student Management</li>
                    {/* <li>Reports & Analytics</li> */}
                    {/* <li>Announcements</li> */}
                </ul>

            </div>
        </>
    )
}