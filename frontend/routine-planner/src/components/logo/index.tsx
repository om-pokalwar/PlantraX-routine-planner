import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", mr: "none", alignItems: "center" }}>
      <Link to="/"
        style={{ textDecoration: "none" }} >
      <Typography variant="h6" component="div" 
        sx={{ 
            mr:"auto", 
            fontWeight:"700", 
            textShadow:"2px 2px 4px #000",
            display: "flex",
            alignItems: "center",
            }}>
          <span style={{
            fontFamily: "Edu AU VIC WA NT Arrows, Roboto Condensed",
            fontSize: "40px",
            fontWeight:"700", 
            color: "#fff",
            }}> PlantraX </span> 
        </Typography>
            <span style={{
                color: "#fff",
                marginLeft:"60px",  
                }}>Powered by </span>
        <Box
          component="img"
          src="/grok_ai_logo.png"
          alt="XAI Grok"
          sx={{ width: "50px" }}
        />
      </Link>
    </Box>
  );
};

export default Logo;