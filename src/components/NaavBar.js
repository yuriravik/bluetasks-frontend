import React, { Component } from 'react';
import { APP_NAME } from '../constants';
import NavBarIten from './NavBarIten';

class NaavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itens: [
                { name: "Listar Tarefas", href: "/", active:true},
                { name: "Nova Tarefa", href: "/form", active:false}
            ]
        }

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(itemCliked) {
        const itens = [...this.state.itens];

        itens.forEach(item =>{
            if (item.name === itemCliked.name){
                item.active = true;
            } else{
                item.active= false;
            }
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">{APP_NAME}</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav mr-auto">
                            {this.state.itens.map(
                                i => <NavBarIten
                                    key={i.name}
                                    item={i}
                                    onClick={this.onClickHandler} />)}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NaavBar;