import _ from "lodash";
import './style.css';
import Icon from './logo.svg';
import Data from './data.xml';
import printMe from './print';

function component(){
    var element = document.createElement("div");
    element.innerHTML = _.join(["Hello","webpack"]," ");
    element.classList.add('hello');
    
    //assets management
    var icon = new Image();
    icon.src = Icon;
    element.appendChild(icon);

    //output management
    var btn = document.createElement('button');
    btn.onclick = printMe;
    btn.innerHTML = "Click me and check the console!";
    element.appendChild(btn);

    console.log(Data);

    return element;
}

document.body.appendChild(component());