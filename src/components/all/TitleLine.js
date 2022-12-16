import React, {Component} from 'react';
import Line from "./Line";

class TitleLine extends Component {
    render() {
        let {title, height, background} = this.props
        return (
            <div className={"titleLine"}>
                <Line
                    height={height}
                    background={background}
                />
                    <h2>{title}</h2>
                <Line
                    height={height}
                    background={background}
                />
            </div>
        );
    }
}

export default TitleLine;