import React, {Component} from "react";

export default class Calculator extends Component{
    constructor(){
        super();

        this.state = {
            text : "",
            displayText : "",
        }
    }

    

    screentext = (e) => this.setState({
        displayText : this.state.displayText + e.target.value
    });

    cleartext = (e) => this.setState({
        displayText:""
    });

    evaluate = (e) => this.setState({
        displayText : eval(this.state.displayText)
    })

    render(){
        return(
            <div>
                <p>_________________________</p>
                <p>The Calculator</p>
                <input value={this.state.displayText} ></input>
                <p>
                <p>_________________________</p>
                <button type="button"  onClick = {this.screentext.bind(this)}value="+">+</button>
                <button type="button"  onClick = {this.screentext.bind(this)}value="-">-</button>
                <button type="button"  onClick = {this.screentext.bind(this)}value="*">&times;</button>
                <button type="button"  onClick = {this.screentext.bind(this)}value="/">&divide;</button>
                </p>

                <p>
                <button type="button" onClick = {this.screentext.bind(this)} value="7">7</button>
                <button type="button" onClick = {this.screentext.bind(this)} value="8">8</button>
                <button type="button" onClick = {this.screentext.bind(this)} value="9">9</button>
                </p>

                <p>
                <button type="button" onClick = {this.screentext.bind(this)} value="4">4</button>
                <button type="button" onClick = {this.screentext.bind(this)}value="5">5</button>
                <button type="button" onClick = {this.screentext.bind(this)}value="6">6</button>
                </p>

                <p>
                <button type="button" onClick = {this.screentext.bind(this)}value="1">1</button>
                <button type="button" onClick = {this.screentext.bind(this)}value="2">2</button>
                <button type="button" onClick = {this.screentext.bind(this)}value="3">3</button>
                </p>

                <button type="button" onClick = {this.screentext.bind(this)}value="0">0</button>
                <button type="button" onClick = {this.screentext.bind(this)}value=".">.</button>
                <button type="button" onClick = {this.cleartext.bind(this)}>AC</button>

                <button type="button" onClick = {this.evaluate.bind(this)}>=</button>
                <p>_________________________</p>
                

            </div>
        )
    }
}

