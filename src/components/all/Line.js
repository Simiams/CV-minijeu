import React, {Component} from 'react';

class Line extends Component {
    render() {
        let {background, height} = this.props;
        return (
            <div className={"line"} style={{
                background: background ? background : "#f3f3f3",
                width: "35%",
                height:  height ? height : "10px",
                margin: "auto",
                borderRadius: "0 20px"
            }}>
            </div>
        );
    }
}

export default Line;