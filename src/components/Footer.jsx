import React from "react";
let currentYear=new Date().getFullYear();
function Footer(){
    return(
        <footer style={{ bottom: "-2px",
            height: "50px",
            left: "0",
            position: "absolute",
            right: "0",
            textAlign:"center"}}>
            <p>Copyright &copy; {currentYear}</p>
    </footer>
    )
}
export  default Footer;