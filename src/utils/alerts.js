import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useForLogin = () => {
    
    const navigate = useNavigate();

    const userNotFound = (message) => {

        Swal.fire({
            icon: "error",
            title: "User Not Found",
            text: message,
            showCancelButton: true,
            confirmButtonText: "Go to Signup"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/auth/signup");
            }
        });
    };

    const forgotPassword = () => {

        Swal.fire({
            title: "Forgot Password?",
            text: "We have sent an email at user_email",
            icon: "info"
        });

    }

    return { userNotFound, forgotPassword };

};