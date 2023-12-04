import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between p-2">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        {/* <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link"  to="/about">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link"  to="/charts">Chart Example</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contactUs">Contact Us</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navigation