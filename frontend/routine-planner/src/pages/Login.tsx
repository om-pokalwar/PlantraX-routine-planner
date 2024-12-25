import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserAuth } from "../context/AuthContext";
import CustomisedInput from "../components/shared/CustomizedInput";
import { useEffect } from "react";

const Login = () => {
    const auth = UserAuth();
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        try {
            toast.loading("Signing In", { id: "login" });
            await auth?.login(email, password);
            toast.success("Signed In Successfully!", { id: "login" });
        } catch (error) {
            console.log(error);
            toast.error ("Failed to Sign In", { id: "login" });
        }
    };
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        navigate("/signup");
    };
    useEffect(() => {
        if (auth?.user) {
            navigate("/chat");
        }
    }, [auth]);

    return (
        <Box width={'100%'} height={'100%'} display="flex" flex={"1"}>
            <Box 
                padding={15} 
                marginInlineStart={20} mt={15} 
                display={{ md: "flex", sm: "none", xs: "none" }}
                sx={{ marginTop: "-10px", marginBottom: "80px"}}  
                >
                <div className="scene">
                <div className="forest">
                    <div className="tree tree1">
                    <div className="branch branch-top"></div>
                    <div className="branch branch-middle"></div>
                    </div>

                    <div className="tree tree2">
                    <div className="branch branch-top"></div>
                    <div className="branch branch-middle"></div>
                    <div className="branch branch-bottom"></div>
                    </div>

                    <div className="tree tree3">
                    <div className="branch branch-top"></div>
                    <div className="branch branch-middle"></div>
                    <div className="branch branch-bottom"></div>
                    </div>

                    <div className="tree tree4">
                    <div className="branch branch-top"></div>
                    <div className="branch branch-middle"></div>
                    <div className="branch branch-bottom"></div>
                    </div>

                    <div className="tree tree5">
                    <div className="branch branch-top"></div>
                    <div className="branch branch-middle"></div>
                    <div className="branch branch-bottom"></div>
                    </div>

                    <div className="tree tree6">
                    <div className="branch branch-top"></div>
                    <div className="branch branch-middle"></div>
                    <div className="branch branch-bottom"></div>
                    </div>

                    <div className="tree tree7">
                    <div className="branch branch-top"></div>
                    <div className="branch branch-middle"></div>
                    <div className="branch branch-bottom"></div>
                    </div>
                </div>
                
                <div className="tent">
                    <div className="roof"></div>
                    <div className="roof-border-left">
                        <div className="roof-border roof-border1"></div>
                        <div className="roof-border roof-border2"></div>
                        <div className="roof-border roof-border3"></div>
                    </div>
                    <div className="entrance">
                        <div className="door left-door">
                        <div className="left-door-inner"></div>
                        </div>
                        <div className="door right-door">
                        <div className="right-door-inner"></div>
                        </div>
                    </div>
                    </div>

                <div className="floor">
                    <div className="ground ground1"></div>
                    <div className="ground ground2"></div>
                    </div>
                
                <div className="fireplace">
                    <div className="support"></div>
                    <div className="support"></div>
                    <div className="bar"></div>
                    <div className="hanger"></div>
                    <div className="smoke"></div>
                    <div className="pan"></div>
                    <div className="fire">
                    <div className="line line1">
                        <div className="particle particle1"></div>
                        <div className="particle particle2"></div>
                        <div className="particle particle3"></div>
                        <div className="particle particle4"></div>
                    </div>
                    <div className="line line2">
                        <div className="particle particle1"></div>
                        <div className="particle particle2"></div>
                        <div className="particle particle3"></div>
                        <div className="particle particle4"></div>
                    </div>
                    <div className="line line3">
                        <div className="particle particle1"></div>
                        <div className="particle particle2"></div>
                        <div className="particle particle3"></div>
                        <div className="particle particle4"></div>
                    </div>
                    </div>
                </div>
                
                <div className="time-wrapper">
                    <div className="time">
                    <div className="day"></div>
                    <div className="night">
                        <div className="moon"></div>
                        <div className="star star1 star-big"></div>
                        <div className="star star2 star-big"></div>
                        <div className="star star3 star-big"></div>
                        <div className="star star4"></div>
                        <div className="star star5"></div>
                        <div className="star star6"></div>
                        <div className="star star7"></div>
                    </div>
                    </div>
                </div>
                </div>
            </Box>
            <Box
                padding={3} 
                marginInlineStart={15}
                display={{ md: "flex", sm: "none", xs: "none" }}
                sx={{ marginTop: "-10px", marginBottom: "80px"}}  
            ><Typography>
                <form className="form" onSubmit={(handleSubmit)}>
                <Typography
                    id="heading"
                    variant="h5"
                    component="p"
                    align="center"
                    sx={{
                    margin: "2.4em",
                    color: "#001119",
                    fontSize: "2.4em",
                    fontWeight: "bold",
                    }}
                >
                    Login
                </Typography>
                
                <div className="field">
                    <CustomisedInput
                    type="email"
                    name="email"
                    label="Email"
                    sx={{
                        color: "#001119",
                        "& .MuiInputBase-root": {
                        borderRadius: "10px",
                        backgroundColor: "#159A9C",
                        boxShadow: "inset 2.4px 6px 12px #002333",
                        },
                        "& .MuiInputLabel-root": {
                        color: "#DEEFE7",
                        },
                        "& .MuiInputBase-input": {
                        color: "#DEEFE7",
                        },
                    }}
                    />
                </div>
                
                <div className="field">
                    <CustomisedInput
                    type="password"
                    name="password"
                    label="Password"
                    sx={{
                        color: "#001119",
                        "& .MuiInputBase-root": {
                        borderRadius: "2px",
                        backgroundColor: "#159A9C",
                        boxShadow: "inset 2.4px 6px 12px #002333",
                        },
                        "& .MuiInputLabel-root": {
                        color: "#DEEFE7",
                        },
                        "& .MuiInputBase-input": {
                        color: "#DEEFE7",
                        },
                    }}
                    />
                </div>
                
                <div className="btn">
                    <button type="submit" className="button1">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                    <button type="button" className="button2" onClick={handleSignUpClick}>Sign Up</button>
                </div>
                
                <button type="reset" className="button3">
                    Forgot Password
                </button>
                </form>
            </Typography></Box>
        </Box>
    );
};

export default Login;