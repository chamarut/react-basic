import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import HelloComponent from './Components/Hellocomponent';
const data=(
  <h1>hello 22</h1>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App />);
//reactdom
//root.render(<h1>hello</h1>,document.getElementById('root'));
//root.render(data,document.getElementById('root'))

/*
class HelloComponent extends React.Component{
  render(){
    return<h1>hello react</h1>;
  }
}
root.render(<HelloComponent/>,document.getElementById('root'))
*/
/*
function HelloComponent(){
  return <h1>Hi</h1>
}*/
//root.render(<HelloComponent/>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
