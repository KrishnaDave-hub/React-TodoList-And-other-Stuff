import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Email.js";
import "./components/Password.js";
import "./components/Text.js";

const ContactUs = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Email labelTitle="Enter Your Email"/>
                    <InputText />
                    <Password />
                </div>
            </div>
        </div>
    )
}
export default ContactUs