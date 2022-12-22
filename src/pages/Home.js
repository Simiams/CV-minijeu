import React, {Component} from 'react';
import Card from "../components/home/Card";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";
import TitleLine from "../components/all/TitleLine";
import ProjectCard from "../components/home/ProjectCard";
import axios from "axios";
import {userData} from "../data/CV/user.data";
import {minijeuData} from "../data/minijeux/minijeu.data";
import MiniJeuCard from "../components/home/MiniJeuCard";

class Home extends Component {

    state = userData;

    getNewId = () => {
        try {
            axios({
                method: "get",
                url: `https://randomuser.me/api/`,
            }).then((res) => {
                let name = res.data.results[0].name.first;
                let lastName = res.data.results[0].name.last;
                let city = res.data.results[0].location.city;
                let ddn = res.data.results[0].dob.date.split("T")[0];
                let mail = res.data.results[0].email;
                let phone = res.data.results[0].phone;
                this.setState({
                    name: name,
                    lastName: lastName,
                    ddn: ddn,
                    mail: mail,
                    phone: phone,
                    city: city
                })
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        let user = this.state;
        return (
            <div className={"home"}>
                <div className="top">
                    <div className="left">
                        <Card user={user}/>
                        <Contact user={user}/>
                    </div>
                    <div className="right">
                        <div className="homeContent">
                            <div className="content">
                                <h1 onClick={this.getNewId}>{user.name} {user.lastName}</h1>
                                <h2>[ {user.domainsActivity.join("; ")} ]</h2>
                                <h3 className={"subtitle"}>Cherche</h3>
                                <p> Une <strong>{user.searchFor.postTitle}</strong> pour <strong>la {user.searchFor.startDate}</strong></p>
                                <h3 className={"subtitle"}>Profil</h3>


                                <p>Bonjour, je m'appelle {user.name}. Je suis actuelemnt en {user.school.grade} à l'{user.school.name} ({user.school.fullname}) en double cursus BTS SIO (Service Informatique aux
                                    organisations) sur {user.city}. </p>
                                <p> {user.description} </p>
                                <p> Ayant effectué mon précédent stage en tant que développeur C#, je vise, cette année,
                                    l'univers du web et de la cybersécurité. </p>

                                <h3 className={"subtitle"}>Experiences</h3>
                                <div className="experiences">

                                    {
                                        user.experiences.map((exp) => {
                                            return (
                                                <Experience key={exp.id} exp={exp}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <TitleLine
                        title={"Portfolio"}
                    />
                    <div className="contain">
                        {
                            user.sectors.map((sector) => {
                                return (
                                    <ProjectCard
                                        key={sector.id}
                                        sector={sector}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <TitleLine
                        title={"MiniJeu"}
                    />
                    <div className="contain">
                        {
                            Object.entries(minijeuData).map((minijeu) => {
                                console.log(minijeu)
                                return (
                                    <MiniJeuCard minijeu={minijeu}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
