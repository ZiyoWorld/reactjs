import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './Student';

const students = [
  {id:1, name: "Mirziyod"},
  {id:2, name: "Sirojiddin"},
  {id:3, name: "Sherzod"},
  {id:4, name: "Xolisbek"},
  {id:1, name: "Mirziyod"},
  {id:2, name: "Sirojiddin"},
  {id:3, name: "Sherzod"},
  {id:4, name: "Xolisbek"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      students.map( (value)=>{
        return(
          <Student data={value} />
        )
      })
    }
  </React.StrictMode>
);



