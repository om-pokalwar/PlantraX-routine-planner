import { Box, Avatar, Typography } from "@mui/material";
import { UserAuth } from "../../context/AuthContext";

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const auth = UserAuth();

  return role === "assistant" ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        p: 1.5,
        bgcolor: "#159A9C",
        color: "#fff",
        gap: 2,
        borderRadius: 5,
        my: 1.5,
        ml: 3,
        width: "fit-content",
        maxWidth: "92%",
      }}
    >
      <Avatar sx={{ bgcolor: "#000", color: "#fff" }}>
        <img src="XAIgrok.jpg" alt="XAIgrok" width={"30px"} />
      </Avatar>
      <Box>
        <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row", 
        justifyContent: "flex-start",
        p: 1.5,
        bgcolor: "transparent",
        color: "#fff",
        gap: 2,
        borderRadius: 5,
        border: "2px solid #DEEFE7",
        my: 1.5,
        ml: 4,
        width: "fit-content",
        maxWidth: "95%",
      }}
    >
      <Avatar sx={{ bgcolor: "#DEEFE7", color: "#002333" }}>
        {auth?.user?.name[0]}
        {auth?.user?.name.split(" ")[1][0]}
      </Avatar>
      <Box>
        <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
      </Box>
    </Box>
  );
};  

export default ChatItem;