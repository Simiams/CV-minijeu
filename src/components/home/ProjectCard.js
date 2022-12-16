import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class ProjectCard extends Component {
    render() {
        let {name, image} = this.props.sector;
        return (
            <div className={"projectCard"}>
                <NavLink exact to={"/Portfolio/" + name}>
                    <img src={image} alt={name}/>
                    <div className="content">
                        <h2>{name}</h2>
                        <p>En cours...</p>
                    </div>
                </NavLink>
            </div>
        );
    }
}

export default ProjectCard;