import React, {Component} from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import Title from "./Title";
import ContactDetails from "./ContactDetails";
export default class ContactList extends Component {

    render() {
        let contactItems = [];
        let contacts = this.props.contacts;
        for(var i = 0; i < contacts.length; i++) {
            contactItems.push(<Contact onContactClick = {this.props.displayContact} name = {contacts[i].name.first +  " " + contacts[i].name.last}
                dob = {contacts[i].dob} image={contacts[i].picture.thumbnail}
                contactID = {contacts[i].id} contactKey={i}/>);

            if(contacts[i].id == this.props.currentContact){
                var contactDetail = <ContactDetails contactName={contacts[i].name.first +  " " + contacts[i].name.last}
                    dob={contacts[i].dob} image={contacts[i].picture.large}
                    gender={contacts[i].gender} street={contacts[i].location.street}
                    city={contacts[i].location.city} state={contacts[i].location.state}
                    postcode={contacts[i].location.postcode} phone={contacts[i].phone} email={contacts[i].email}/>;
            }
        }



        //console.log(contactItems);
        return(
            <div className={"row"}>
                <Title/>
                <div>
                    <div className={"column list"}>
                        <ul>
                            {contactItems}
                        </ul>
                    </div>
                    {contactDetail}
                </div>
            </div>
        );
    }
}

ContactList.propType = {
    currentContact: PropTypes.number.isRequired
};
