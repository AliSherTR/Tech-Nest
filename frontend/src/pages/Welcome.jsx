import { Link } from "react-router-dom";
export default function Welcome() {
    return (
        <>
            <Link to="/login-or-signup/login">login</Link>
            <Link to="/login-or-signup/signup">signup</Link>
        </>
    );
}
