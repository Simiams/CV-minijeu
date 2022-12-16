import React, {Component} from 'react';
import {experiences} from "../../data/experiences.data";

class Experience extends Component {
    render() {
        let {post, period, desc, competences, link} = this.props.exp;
        return (
            <div className={"experience"}>
                <a href={link} target="_blank" rel="noopener noreferrer" >
                    <div className="head">
                        <h3>{post}</h3>
                        <h3>{period}</h3>
                    </div>
                    <span className={"content"}>{desc}</span>
                    <br/>
                    <br/>
                    <span className={"cac"}>Compétences travaillées: </span>
                    {
                        competences.map((competence, index) => {
                            let str;
                           if (index < competences.length - 1) {
                               str = competence + ", ";
                           }else{
                               str = competence + ".";
                           }
                            return (
                                <span key={index}>{str}</span>
                            )
                        })
                    }
                </a>
            </div>
        );
    }
}

export default Experience;