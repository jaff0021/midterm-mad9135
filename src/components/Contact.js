import React, {Component} from "react";
import PropTypes from "prop-types";


export default class Contact extends Component {
    render() {

        //classID={"#contact-" + this.prop.contactID}
        // eslint-disable-next-line no-unused-vars
        function displayContact(e){
            // eslint-disable-next-line indent
            // eslint-disable-next-line no-console

        }


        return (
            <li onClick={this.props.onContactClick} key={this.props.contactKey} className={"contact"} id={"contact-" + this.props.contactID}>
                <div className={"row"}>
                    <div className={"column pic"}>
                        <img src={this.props.image}></img>
                    </div>
                    <div className={"column data"}>
                        {this.props.name}<br></br>{this.props.dob}
                    </div>
                </div>
            </li>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    contactID: PropTypes.number.isRequired,
    contactKey: PropTypes.number.isRequired,
    onContactClick: PropTypes.func.isRequired
};