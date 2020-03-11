import _ from "lodash";
import './style.css';
import Icon from './logo.svg';
import Data from './data.xml';
import printMe,{PrintHim} from './print';

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
    btn.innerHTML = "点我啊";
    element.appendChild(btn);

    var btnHim = document.createElement("button");
    btnHim.onclick = PrintHim;
    btnHim.innerHTML = "Click Him";
    element.appendChild(btnHim);

    console.log(Data);

    return element;
}

let element = component();
document.body.appendChild(element);

if(module.hot){
    module.hot.accept("./print.js",function(){
        console.log("Accepting the updated   printMe module     !");
        printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    });
}