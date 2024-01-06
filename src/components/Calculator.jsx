import React from "react";
import TemperatureInput from "./TemperatureInput.jsx";
import {converter, tocelsius, tofahrenheit} from '../libs/converter.js'
import { BoilingVerdict } from "./BoilingVerdict.jsx";
export default class Calculator extends React.Component{
    state={
        temperature:'', scale:'c'
    }
    handleChange = (e,scale)=>{
        this.setState({
            temperature: e.target.value,
            scale: scale
        });
    }
    render(){
        const {temperature, scale} = this.state
        const celsius = scale === 'f' ? converter(temperature,tocelsius) : temperature;
        const fahrenheit = scale === 'c' ? converter(temperature,tofahrenheit) : temperature;
       return(
       <div>
            <TemperatureInput
            scale='c'
            temperature={celsius}
            onTemperatureChange={this.handleChange}
            />
            <br/>
            <TemperatureInput
            scale='f'
            temperature={fahrenheit}
            onTemperatureChange={this.handleChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)}/>
       </div>
       )
}}