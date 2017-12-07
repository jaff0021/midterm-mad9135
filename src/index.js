require("./main.scss");

import React from "react";
import ReactDOM from "react-dom";
import ContactList from "./components/ContactList";
import {contacts} from "./data/contacts";

let state = {
    contacts: contacts,
    displayContact: function (e) {
        location.hash = "#/contact/" + e.target.closest("li").id.split("-")[1];
        setState({currentContact: e.target.closest("li").id.split("-")[1]});
    }
};
function setState(changes) {
    state = Object.assign({}, state, changes);

    ReactDOM.render(React.createElement(ContactList, state), document.getElementById("react-app"));
}

setState({currentContact: ""});
