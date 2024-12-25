import toast from "react-hot-toast";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/ChatItem";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import { deleteUserChats, getUserChats, sendChatRequest } from "../helpers/api-communicator";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const auth = UserAuth();
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: Message = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessages([...chatData.chats]);
    //
  };
/*
  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("Loading Chats", { id: "loadchats" });
      getUserChats()
        .then((data) => {
          setChatMessages([...data.chats]);
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Loading Failed", { id: "loadchats" });
        });
    }
  }, [auth]);
  */
  useEffect(() => {
    if (!auth?.user) {
      navigate("/login");
    }
  }, [auth?.user, navigate]);

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting Chats", { id: "deletechats" });
      await deleteUserChats();
      setChatMessages([]);
      toast.success("Deleted Chats Successfully", { id: "deletechats" });
    } catch (error) {
      console.log(error);
      toast.error("Deleting chats failed", { id: "deletechats" });
    }
  };

    return (
        <Box sx={{
            display:'flex', 
            flex:"1", 
            width:"100%", 
            height:"100%", 
            mt:3, gap:3
            }}>
            <Box
                sx={{
                display: { md: "flex", xs: "none", sm: "none" },
                flex: 0.2,
                flexDirection: "column",
                }}
                >
                <Box
                    sx={{
                    display: "flex",
                    width: "100%",
                    height: "82vh",
                    bgcolor: "#002333",
                    borderRadius: 3,
                    alignItems: "flex-start",
                    flexDirection: "column",
                    mx: 3,
                    }}>
                    <Avatar
                        sx={{
                        mx: "auto",
                        my: 2,
                        bgcolor: "#DEEFE7",
                        color: "#002333",
                        fontWeight: 700,
                    }}>
                        {auth?.user?.name[0]}
                        {auth?.user?.name.split(" ")[1][0]}
                    </Avatar>
                    <Typography sx={{ mx: "auto", fontSize:20, color: "#fff", my: 0.4, p: 2 }}>
                    Welcome to <b> PlantraX</b>—your personal productivity companion! 🎉  
                    <b> PlantraX</b> is the perfect tool to help you plan tasks, organize schedules, and save time effectively.
                    </Typography>
                    <Typography sx={{ ml: "3", fontSize:30, color: "#fff", my: 0.4, p: 2 }}>
                    Let’s Get Started!
                    </Typography>    
                    <Typography sx={{ mx: "auto", fontSize:20, color: "#fff", my: 0.4, p: 2 }}>
                    Start small by adding a few tasks or scheduling your week. 
                    Here’s to a more organized & productive you!🚀
                    </Typography>
                    <Button
                        onClick={handleDeleteChats}
                        sx={{
                            width: "290px",
                            my: "auto",
                            color: "red",
                            fontSize: 20,
                            fontWeight: 700,
                            borderRadius: 3,
                            mx: "auto",
                            background: "transparent",
                            border: "2px solid red", 
                            textDecoration: "none",
                            textAlign: "center",
                            transition: "all 0.3s ease",
                            ":hover": {
                            backgroundColor: "red", 
                            color: "#fff", 
                            },
                            ":active": {
                            backgroundColor: "#fff", 
                            color: "#002333", 
                            },
                        }}
                        >
                        Clear History
                        </Button>
                </Box>
            </Box>
            <Box
                sx={{
                display: "flex",
                flex: { md: 0.8, xs: 1, sm: 1 },
                flexDirection: "column",
                px: 3,
            }}>
                <Typography
                    sx={{
                    fontSize: "40px",
                    color: "#fff",
                    mb: 2,
                    mx: "auto",
                    fontWeight: "600",
                    }}
                    >
                    Your Personal Task Planner and Routine Organiser
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        height: "61.5vh",
                        borderRadius: 3,
                        backgroundColor: "#002333",
                        display: "flex",
                        flexDirection: "column",
                        overflowY: "auto",
                        scrollBehavior: "smooth",
                        px: 2,
                        pr: -1,
                        "&::-webkit-scrollbar": {
                        width: "8px",
                        },
                        "&::-webkit-scrollbar-track": {
                        background: "transparent",
                        borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                        background: "#DEEFE7",
                        borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                        background: "#0e7176",
                        },
                    }}
                    > {chatMessages.map((chat, index) => (
                        //@ts-ignore
                        <ChatItem content = {chat.content} role={chat.role} key={index} />
                    ))}
                </Box>
                <div style = {{ 
                  width: "101%", 
                  borderRadius: 13, 
                  backgroundColor: "transparent", 
                  border: "2px solid #DEEFE7",
                  display: "flex", 
                  marginTop: "10px" 
                  }} >
                    <input type = "text" ref = {inputRef}
                      style = {{
                      width: "100%",
                      backgroundColor: "transparent",
                      border: "2px",
                      borderRadius: "none",
                      outline: "none",
                      padding: "20px",
                      color: "white",
                      fontSize: "20px",
                    }}>
                    </input>
                  <IconButton onClick={handleSubmit}
                    sx = {{
                    color: "#DEEFE7",
                    borderRadius: "10px",
                    ":hover": {
                      bgcolor: "#DEEFE7",
                      color: "#001119",
                    }
                  }}>
                  &nbsp;&nbsp; < IoMdSend /> &nbsp;
                  </IconButton>
                </div>
            </Box>
        </Box>
    )
};

export default Chat;
