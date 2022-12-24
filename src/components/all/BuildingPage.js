import React, {Component} from 'react';

class BuildingPage extends Component {
    render() {
        let urlLibraryApi = "http://188.166.133.51:5000/api/media/";
        let idVideo = [
            "63a71c85d4e17bbf42242d72",
            "63a71c68d4e17bbf42242d6c",
            "63a71c56d4e17bbf42242d6a",
            "63a71c48d4e17bbf42242d68",
            "63a713fad4e17bbf42242d1b",
            "63a71411d4e17bbf42242d1f",
            "63a7141ed4e17bbf42242d21",
            "63a71427d4e17bbf42242d23",
            "63a71431d4e17bbf42242d25",
            "63a7144ad4e17bbf42242d2c"
        ]

        return (
            <div className={"buildingPage"}>
                <h3>Please wait and watch this fucking vid from <strong><u><a target={"_blank"} rel={"noreferrer"} href="https://www.youtube.com/c/Fireship?app=desktop">fireship</a></u></strong></h3>
                <iframe allowFullScreen width="420" height="315"
                        src={urlLibraryApi + idVideo[Math.floor(Math.random() * (idVideo.length))]}>
                </iframe>
            </div>
        );
    }
}

export default BuildingPage;