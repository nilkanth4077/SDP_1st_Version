// import img1 from '../images/stath.jpg';
// import Header from './Header';
import Footer from './Footer';
// import css from '../images/patientreg.css';
// import { Component } from 'react';
// import useNavigate from "react-router-dom";
import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useState, useEffect } from "react";
// import axios, { isCancel, AxiosError } from 'axios';
import { Link } from "react-router-dom";

function Admindash() {
    
    return (
        <div>
            <section>
            <Link style={{ textDecoration: "none" }} to="/adminreg">Add Admin</Link><br/><br/>
            <Link style={{ textDecoration: "none" }} to="/verifierreg">Add Verifier</Link>
            </section >
            <Footer />
        </div >
 )
}
export default Admindash
