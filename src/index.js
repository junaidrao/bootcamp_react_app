import React, {useState} from 'react';
import ReactDom from 'react-dom';
import './index.css'
import App from './App';

/*function MediaCard({title,body,imageUrl}) {
  return <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img alt="test" src={imageUrl} />
  </div>
}

function Hi(props){
return <div>Hello World! This is <strong>{props.name}</strong>
    <uL>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li className="yolo">{2+2}</li>
    </uL>
    <div className="yolo"><p>p inside div inside div</p></div>
  </div>
}*/

/*function Room(){
  const [isLit,setLit] = useState(false);
  var [temp,setTemp]=useState(22);
  const brightness = isLit ? "lit" : "dark";
  return <div className={`room ${brightness}`}>the room is {isLit?'lit':'dark'}
  <br/>
  <span>Temparature : {temp}</span>
  <br/>
  <button onClick={()=>setLit(!isLit)}>
    flip
  </button>
  <button onClick={()=>setLit(true)}>
    ON
  </button>
  <button onClick={()=>setLit(false)}>`
    OFF
  </button>
  <button onClick={()=>setTemp(temp++)}>
    + Temparature
  </button>
  <button onClick={()=>setTemp(temp--)}>
    - Temparature    
  </button>
  </div>
}*/

//ReactDom.render(<Room />, document.querySelector('#root'));

ReactDom.render(
  // Actual react rendering
  //React.createElement('div',null,"Hello World with createElement"),
  //child elemtn inside element
  //React.createElement('div',null,React.createElement('span',null,"test span")),
//easy way
//{25} actual number
//"25" string 
  <App name="Junaid Iqbal" age={20*2}/>, 
document.querySelector('#root'));