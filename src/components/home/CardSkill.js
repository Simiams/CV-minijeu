import React, {Component} from 'react';

class CardSkill extends Component {



    render() {
        let {name, ddn, image} = this.props.skill;
        let date = ddn + "/01";
        let one_day = 1000 * 60 * 60 * 24
        let present_date = new Date();
        let start_date = new Date(date);
        let Result = Math.round(present_date.getTime() - start_date.getTime()) / (one_day);
        let period = Result.toFixed(0);



        return (
            <div className={"cardSkill"}>
                <img src={image} alt={name + " logo"}/>
                <span>{name}</span>
                <span>{period} jours</span>


            </div>
        );
    }
}

export default CardSkill;