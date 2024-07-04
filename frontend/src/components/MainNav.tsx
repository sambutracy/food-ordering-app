import UsernameMenu from "./UsernameMenu";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return(
    <span className="flex space-x-4 items-center">
      <Link to="/HomePage" className="font-bold hover:text-purple-700">
        Home
      </Link>
      <Link to="/AboutUs" className="font-bold hover:text-purple-700">
        About
      </Link>
      <Link to="/contact" className="font-bold hover:text-purple-700">
        Contact Us
      </Link>
      {isAuthenticated ? (
        <>
        <Link to="/order-status" className="font-bold hover:text-purple-700">
          Order Status
        </Link>
        <UsernameMenu />
      </> 
      ) : (
        <Button 
          variant="ghost" 
          className="font-bold hover:text-purple-900 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
           Log In
        </Button>
      )}
    </span>
   );
};

export default MainNav;