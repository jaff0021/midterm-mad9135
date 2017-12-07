import React, {Component} from "react";
import PropTypes from "prop-types";


export default class ContactDetails extends Component {
    render() {

        return (
            <div className={"details"}>
                <h1>{this.props.contactName}</h1>
                <p>
                    <div>Gender: {this.props.gender}</div>
                    <div>DOB: {this.props.dob}</div>
                </p>
                <hr></hr>
                <address>
                    {this.props.street}
                    <br></br>
                    {this.props.city}, {this.props.state}
                    <br></br>
                    {this.props.postcode}
                </address>
                <hr></hr>
                <p>
                    <div>
                        Email: <a href={this.props.email}>{this.props.email}</a>
                    </div>
                    <div>
                        Phone: {this.props.phone}
                    </div>
                </p>
                <img src={this.props.image} />
            </div>
        );
    }
}

ContactDetails.propTypes = {
    contactName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    postcode: PropTypes.number.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};
/**
 * Name: First Last
 *
 * Gender: gender
 * DOB: Date (age)
 * HL
 *
 * Street
 * city, state
 * postcode
 * HL
 *
 * Email:email
 * Phone:Cell
 *
 *
 */

// "gender": "male",
//     "name": {"title": "mr", "first": "daniel", "last": "williams"},
// "location": {"street": "6366 duke st", "city": "kingston", "state": "northwest territories", "postcode": 90447},
// "email": "daniel.williams@example.com",
//     "dob": "1957-03-13 04:24:26",
//     "phone": "955-142-0585",
//     "cell": "689-368-5264",
//     "id": 1001,
//     "picture": {
//     "large": "https://randomuser.me/api/portraits/men/82.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
// },
// "key": 1
// },