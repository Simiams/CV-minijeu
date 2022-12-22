import React, {Component} from 'react';
import CardSkill from "./CardSkill";
import axios from "axios";
import {cardInfoData} from "../../data/CV/cardInfo.data";


class Card extends Component {
    state = cardInfoData

    changePdp = () => {
        let pokemonIndex = Math.floor(Math.random() * (905 - 1 + 1)) + 1;
        try {
            axios({
                method: "get",
                url: `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`,
            }).then((res) => {
                console.log(res.data.sprites.front_default);
                this.setState({
                    profilePic: res.data.sprites.front_default
                })
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err);
        }
    }


    changeBgPdp = () => {
        let year = Math.floor(Math.random() * (2021 - 2003 + 1)) + 2003;
        let month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        let day = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
        try {
            axios({
                method: "get",
                url: `https://api.nasa.gov/planetary/apod?api_key=SsZaFG5yOgcngUkkuQdQ67lpl5AyKUcnv5c8wJai&date=${year + "-" + month + "-" + day}`,
            }).then((res) => {
                let {date, explanation, title, url} = res.data;
                this.setState({
                    profileBgPic: {url}.url,
                    infoNasa: {date, explanation, title}
                })
                console.log(this.state.profileBgPic)
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err);
        }
    }

    displayInfos = () => {
        let info = document.getElementById('info')
        let skills = document.getElementById('skills')
        info.style.display = "block";
        skills.style.display = "none";
    }

    hiddeInfos = () => {
        let info = document.getElementById('info')
        let skills = document.getElementById('skills')
        info.style.display = "none";
        skills.style.display = "block";
    }

    render() {
        let {profileBgPic, profilePic, infoNasa, skills} = this.state;

        let {user} = this.props;

        return (
            <div className={"card"}>
                <div className="id">
                    <div className="idContent">
                        <div className="head">
                            <h3>{user.name} {user.lastName}</h3>
                            <h3>{user.ddn}</h3>
                        </div>
                        <div onMouseOut={this.hiddeInfos} onMouseOver={this.displayInfos} className="image" onClick={this.changeBgPdp} style={{
                            background: `url(${profileBgPic}) repeat scroll center`
                        }}>
                            <img src={profilePic} alt="profil pic" onClick={this.changePdp}/>
                        </div>
                    </div>
                </div>

                <div onMouseOut={this.hiddeInfos} onMouseOver={this.displayInfos} id={"info"} className="popup" style={{
                    display: "none"
                }}>
                    <h2>{infoNasa.title}</h2>
                    <p>{infoNasa.date}</p>
                    <p>{infoNasa.explanation}</p>
                    <a target="_blank" rel="noopener noreferrer" href={profileBgPic}>View Full Image</a>
                </div>

                <div className="skills" id={"skills"}>
                    <ul>
                        {
                            skills.map((skill) => {
                                return (
                                    <li>
                                        <CardSkill
                                            key={skill.id}
                                            skill={skill}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="signature">
                    <p>From SimonConvert</p>
                </div>

            </div>
        );
    }
}

export default Card;
