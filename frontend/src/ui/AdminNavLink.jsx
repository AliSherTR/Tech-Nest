import { NavLink } from "react-router-dom";

export default function AdminNavLink({ text, path, className, children }) {
    return (
        <NavLink
            className={` ${className} px-3 py-2 font-sans flex items-center gap-2`}
            to={path}
        >
            {children}
            {text}
        </NavLink>
    );
}
