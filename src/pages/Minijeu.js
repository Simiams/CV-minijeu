import React, {Component} from 'react';
import Navbar from "../components/minijeu/all/Navbar";
import MiniJeuCard from "../components/home/MiniJeuCard";
import Footer from "../components/minijeu/all/Footer";
import {minijeuData} from "../data/minijeux/minijeu.data";

class Home extends Component {
    render() {
        return (
            <div className={"minijeu_home"}>
                <Navbar />
                <h1>MiniJeu</h1>
                <div className="minijeux">
                    {
                        Object.entries(minijeuData).map((minijeu) => {
                            console.log(minijeu)
                            return (
                                <MiniJeuCard minijeu={minijeu}/>
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;