import React from "react";
import "../HomeSlide2/HomeSlide2.scss"
import { LeftArw, RightArw } from "../../icons";

const HomeSlide2 = () => {
    return <div className="mainHS2">
        <h2>What</h2>
        <h1>Our constomer says</h1>
        <div className="area">
            <LeftArw />
            <p className="para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null”</p>
            <RightArw />
        </div>
        <p className="name">Mr. sachin Rathor </p>
    </div>;
};

export default HomeSlide2;
