import React, {Component} from 'react';
import CardSkill from "./CardSkill";
import axios from "axios";

class Card extends Component {
    state = {
        profilePic: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
        profileBgPic: "https://apod.nasa.gov/apod/image/1605/M42_HaGB_Spitzer_PortraitR600h.jpg",
        infoNasa: {date: "12-07-2018", 
        explanation: "The Great Nebula in Orion is a colorful place. Visible to the unaided eye, it appears as a small fuzzy patch in the constellation of Orion. Long exposure, multi-wavelength images like this, however, show the Orion Nebula to be a busy neighborhood of young stars, hot gas, and dark dust. This digital composite features not only three colors of visible light but four colors of infrared light taken by NASA's orbiting Spitzer Space Telescope as well. The power behind much of the Orion Nebula (M42) is the Trapezium - four of the brightest stars in the nebula. Many of the filamentary structures visible are actually shock waves - fronts where fast moving material encounters slow moving gas. The Orion Nebula spans about 40 light years and is located about 1500 light years away in the same spiral arm of our Galaxy as the Sun. Follow APOD on: Facebook, Google Plus, Instagram, or Twitter", 
        title: "The Orion Nebula in Visible and Infrared"},
        skills: [
            {id: 1, name: "php", ddn: "2021/11", image: "./media/languages/php.png"},
            {id: 2, name: "javascript", ddn: "2022/06", image: "./media/languages/js.png"},
            {id: 3, name: "react", ddn: "2022/12", image: "./media/languages/react.png"},
            {id: 4, name: "nodejs", ddn: "2022/08", image: "./media/languages/nodejs.png"},
            {id: 5, name: "python", ddn: "2020/07", image: "./media/languages/python.png"},
            {id: 6, name: "C#", ddn: "2022/03", image: "./media/languages/c-sharp.png"},
            {id: 7, name: "C++", ddn: "2021/12", image: "./media/languages/c++.png"},
            {id: 8, name: "cybersecurite", ddn: "2022/08", image: "./media/cyber-attack.png"},
        ]
    }


    /*test = () => {
        const options = {
              method: 'GET',
              url: 'https://weed-strain1.p.rapidapi.com/',
              params: {ordering: '-strain'},
              headers: {
                'X-RapidAPI-Key': '48c64b0754msh2a3b6de6550e4a3p16a12bjsn3a51f630d98c',
                'X-RapidAPI-Host': 'weed-strain1.p.rapidapi.com'
              }
            };
        try {
            axios.request(options).then((res) => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err);
        }
    }*/


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
