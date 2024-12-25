import { Fragment } from "react";
import { UserAuth } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import Header from "./components/header/index";

function App() {
  const auth = UserAuth();

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element ={<Homepage />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/signup" element ={<Signup />} />
        {auth?.isLoggedIn && auth.user && 
          (<Route path="/chat" element ={<Chat />} />)}
        <Route path="*" element ={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;