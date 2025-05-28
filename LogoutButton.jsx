import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
