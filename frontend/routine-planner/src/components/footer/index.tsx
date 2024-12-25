import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div style = {{
                width: "100%",
                padding: 2,
                minHeight: "10vh",
                marginTop: 70,
            }}>
                <p style={{ fontSize: "20px", textAlign: "center", color: "#888"}}><i>
                    Made with Love❤️ by MITAoE Students🎓 Special Thanks to Team 
                    <span><Link style={{ color: "#159A9C", textDecoration: "none" }}
                    to={"https://techsaksham.org/"}> 'Tech Sakasham'</Link></span>✌️</i></p>
            </div>
        </footer>
    )
}
export default Footer;