import {Component} from 'react';

class Contact extends Component {
    render() {
        let {user} = this.props;

        return (
            <div className={"contact"}>
                <ul>
                    <li>
                        <a href={"mailto:" + user.mail} target="_blank" rel="noopener noreferrer">
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a href={"tel:" + user.phone} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-mobile-alt"></i>
                        </a>
                    </li>
                    <li>
                        <a href="../assets/Simon_Convert.pdf" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-download"></i>
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.linkedin.com/in/" + user.name + "/" + user.lastName} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Contact;
