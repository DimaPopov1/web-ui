import React from "react";
import s from './Footer.module.css';
const Footer = () => {
    let currentYear =  (new Date).getFullYear();
    return <div className={s.Footer}>{`Copyright © Dimonchik Production ${currentYear}`}</div>;
}
export default Footer;