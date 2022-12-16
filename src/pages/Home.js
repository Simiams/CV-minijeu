import React, {Component} from 'react';
import Card from "../components/home/Card";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";
import {experiences} from "../data/experiences.data";
import TitleLine from "../components/all/TitleLine";
import ProjectCard from "../components/home/ProjectCard";
import axios from "axios";

class Home extends Component {
    state = {
        user: {name: "Simon", lastName: "Convert", ddn: "26/11/2003", mail: "Simon.Convert@gmail.com", phone: "+33763329647", city: "Nantes"},
        sectors: [
            {id: 1, name: "Web", image: "../media/sectors/Pweb.png"},
            {id: 2, name: "Prog", image: "../media/sectors/Pprog.png"},
            {id: 3, name: "Cyber", image: "../media/sectors/Pcyber.png"},
            {id: 4, name: "Res", image: "../media/sectors/Pres.png"}
        ],
        selectedRadio: "javascript"
    }

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
                    user: {name, lastName, ddn, mail, phone, city}
                })
                console.log(name, lastName, ddn, mail, phone, city);
                console.log(this.state.user)
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err);
        }
    }



    render() {
        let {sectors} = this.state;
        let {user} = this.state;

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
                                <h2>[ Web; Infrastructure réseau; Cybersecurité; Programation ]</h2>
                                <h3 className={"subtitle"}>Cherche</h3>
                                <p> ==> Un stage de 5 semaines pour la periode du 02 janv. au 06 fev. 2022 </p>
                                <h3 className={"subtitle"}>Profil</h3>
                                <p>Bonjour, je m'appelle {user.name}. Je suis actuelemnt en 2eme années de bachelor à l'EPSI
                                    (Ecole Privée des Science Informatique) en double cursus BTS SIO (Service Informatique aux
                                    organisations) sur {user.city}. </p>
                                <p> Ce n'est que ma deuxiéme années et pourtant je commence a acquérir de solides bases
                                    dans le monde du numérique. Aussi bien en; Devellopement Web avec php, NodeJS, JS, et
                                    "html", qu'en Programmation Python, C# et C++ mais aussi en Infrastructure réseau. Passionné, je
                                    me forme de mon côté à la cybersécurité et les differents outils que nous offre
                                    Kali-Linux. </p>
                                <p> Ayant effectué mon précédent stage en tant que développeur C#, je vise, cette année,
                                    l'univers du web et de la cybersécurité. </p>

                                <h3 className={"subtitle"}>Experiences</h3>
                                <div className="experiences">

                                    {
                                        experiences.map((exp) => {
                                            return (
                                                <Experience
                                                    key={exp.id}
                                                    exp={exp}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio">
                    <TitleLine
                        title={"Portfolio"}
                    />
                    <div className="projects">
                        {
                            sectors.map((sector) => {
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
            </div>
        );
    }
}

export default Home;
