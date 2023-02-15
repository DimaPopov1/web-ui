import React from "react";
const Footer = () => {
    let currentYear =  (new Date).getFullYear();
    return (
        <footer className="border-top footer text-muted">
            <div className="container">
                &copy; {currentYear} - Car rental
            </div>
        </footer>
    );
}
export default Footer;