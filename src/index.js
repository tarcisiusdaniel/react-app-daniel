import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

//const example
const currDate = () => {
    const date = new Date();
    return date.toDateString();
}


//making classes exercises
class Car {
    constructor(name){
        this.brand = name;
    }

    show(){
        return 'I have a ' + this.brand;
    }    
}

class CarType extends Car{
    constructor(name, spec){
        super(name);
        this.type = spec;
    }

    tell(){
        return this.show() + ', the specific type is ' + this.type;
    }
}
const myCar = new CarType('Toyota', 'Innova');

// const starter = <h1>
//     Hello Tarcisius
//     <br/>
//     Current Date: {currDate()}
//     <br/>
//     {myCar.tell()}
//     </h1>;

ReactDOM.render(
    <BrowserRouter><App name = "Tarcisius Daniel Hartanto"/></BrowserRouter>, 
    document.getElementById('root')
    );

//ReactDOM.render(starter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
