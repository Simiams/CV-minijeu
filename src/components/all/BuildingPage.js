import React, {Component} from 'react';

class BuildingPage extends Component {
    render() {
        let urlsVideo = [
            {url: "https://embed.api.video/vod/vi4lRp0XD0srflEwvAUO3Mvd", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=zBZgdTb-dns", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=lkIFF4maKMU", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=DVWu2b7mvFg", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=aXOChLn5ZdQ", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=WHyOHQ_GkNo", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=2pfcynxODJc", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=HleppfVh8jc", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=QKgTZWbwD1U", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=INUHCQST7CU", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"},
            {url: "https://www.youtube.com/watch?v=rrB13utjYV4", channelName: "FireShip", channelLink: "https://www.youtube.com/@Fireship"}
        ]

        return (
            <div>
                <h2>This page is in building</h2>
                <iframe width="420" height="315"
                        src={urlsVideo[Math.floor(Math.random() * (urlsVideo.length))].url}>
                </iframe>
            </div>
        );
    }
}

export default BuildingPage;