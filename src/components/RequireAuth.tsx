import {useLocation, Navigate, Outlet} from "react-router-dom";

import  useAuth from "../hooks/useAuth";

const RequireAuth = ({AllowedRole}:{AllowedRole:string}) => {
    const { auth } = useAuth();
    const location = useLocation();

    return(
        auth?.role?.includes(AllowedRole)
            ? <Outlet />
            : <Navigate to="/login" state = {{from:location }} replace />
    )
}

export default RequireAuth;