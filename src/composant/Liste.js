import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../context'

export default class Liste extends Component {

    render() {
        return(
            <Consumer>
                {value => 
                    <React.Fragment>
                        <h4 className="display-4 text-center my-4">Nos Contacts:</h4>
                        {value.contacts.map(contact => 
                            <Contact key={contact.id}
                            id ={contact.id}
                            nom={contact.nom}
                            email={contact.email}
                            tel={contact.tel}
                            display= {contact.display}
                            />
                        )}
                    </React.Fragment>
                    
                }
            </Consumer>
        )
    }
}
