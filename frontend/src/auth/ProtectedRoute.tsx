import { useGetMyUser } from "@/api/MyUserApi";
import { UserRole } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  allowedRoles?: UserRole[];
};

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { currentUser, isLoading: isLoadingCurrentUser } = useGetMyUser();

  if (isLoading || isLoadingCurrentUser) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (
    allowedRoles &&
    currentUser &&
    !allowedRoles.includes(currentUser.role)
  ) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
