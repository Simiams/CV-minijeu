import React from 'react';
import BuildingPage from "../components/all/BuildingPage";
import Contact from "../components/home/Contact";
import {userData} from "../data/CV/user.data";
import Navbar from "../components/minijeu/all/Navbar";

const Project = () => {
    return (
        <div className={"project"}>
            <Navbar />
            <h2>This page is in building</h2>
            <BuildingPage />
            <Contact user={userData} />
        </div>
    );
};

export default Project;
