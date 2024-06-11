import { Button } from "./ui/button";

const MainNav = () => {
  return(
    <Button 
      variant="ghost" 
      className="font-bold hover:text-purple-900 hover:bg-white"
    >
        Log In
    </Button>
  );
};

export default MainNav;