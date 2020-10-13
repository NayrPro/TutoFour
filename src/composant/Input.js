import React, { Component } from 'react'
import {Consumer} from '../context'
import {v1 as uuid} from "uuid";

export default class Input extends Component {

    onSubmit = (dispatch, e) => {
        e.preventDefault()
        const nvContact = {id : uuid(),...this.state}
        dispatch({type : 'ADD_CONTACT', payload: nvContact})
        this.setState({
            nom : "",
            email : "",
            tel: ""
        }) 
        this.props.history.push('/')
    }
    
    state = {
        nom : "",
        email : "",
        tel: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <Consumer>
                {
                    value =>{ return(
                                <div className="card mb-3">

                                <div className="card-header text-center">Ajouter un Contact</div>
                                <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                <div className="form-group d-flex flex-column container">
                                    <label htmlFor="nom">Nom</label>
                                    <input 
                                        type="text" 
                                        name="nom" 
                                        className="form-control mb-3"
                                        value={this.state.nom}
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-control mb-3"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    <label htmlFor="telephone">Telephone</label>
                                    <input 
                                        type="text" 
                                        name="tel" 
                                        className="form-control mb-3"
                                        value={this.state.tel}
                                        onChange={this.handleChange}
                                    />
                                    <input type="submit" value="Ajouter un contact"
                                    className="btn btn-block btn-primary"/>
                                </div>
                                </form>
                                </div>
                                </div>
                            )
                    }
                }
            </Consumer>
        )
    }
}
