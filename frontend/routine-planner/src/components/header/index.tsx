import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../logo/index";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

// NavigationLink Component
const NavigationLink = ({ to, bg, text }: { to: string; bg: string; text: string; onClick?: () => Promise<void>;}) => {
  return (
    <Link
      className="navlink"
      to={to}
      style={{
        background: "transparent", 
        color: bg,
        textDecoration: "none",
        textAlign: "center",
        padding: "8px 24px",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "1.2rem",
        border: `2px solid ${bg}`, 
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.background = bg;
        (e.target as HTMLElement).style.color = "#001119";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.background = "transparent";
        (e.target as HTMLElement).style.color = bg;
      }}
      onClick={(e) => {
        (e.target as HTMLElement).style.background = "#fff";
        (e.target as HTMLElement).style.color = "#001119"; 
      }}
    >
      {text}
    </Link>
  );
};

// Header Component
const Header = () => {
  const auth = UserAuth();

  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        position: "static",
        boxShadow: "none",
        borderBottom: "1px solid #000",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        {auth?.isLoggedIn ? (<>
            <Box sx={{ display: "flex", gap: "20px" }}>
            <NavigationLink bg="#159A9C" to="/chat" text="Chat" />
            <NavigationLink bg="#DEEFE7" to="/" text="Logout" onClick = {auth.logout} />
            </Box>
        </>):(<>
            <Box sx={{ display: "flex", gap: "20px" }}>
            <NavigationLink bg="#159A9C" to="/login" text="Login" />
            <NavigationLink bg="#DEEFE7" to="/signup" text="Sign Up" />
            </Box>   
        </>)}
      </Toolbar>
    </AppBar>
  );
};

export default Header;