import logo from './logo.svg';
import './App.css';
import Conversor from "./components/Conversor";
import {Component} from "react";
import {render} from "react-dom";


class App extends Component {
    render(){
        return (
            <div className={App}>
                <Conversor moedaA="Usd" moedaB="BRL"></Conversor>
            </div>
        )
    }
}

export default App;
