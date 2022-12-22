import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Quizz from "./pages/Quizz";
import Minijeu from "./pages/Minijeu";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/Portfolio"} exact component={Portfolio}/>
                <Route path={"/Portfolio/:projectName"} component={Project}/>
                <Route path={"/MiniJeu"} exact component={Minijeu}/>
                <Route path={"/MiniJeu/:game"} component={Quizz}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App