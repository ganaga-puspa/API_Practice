// import React from 'react';

// class myComponent extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://127.0.0.1:8000/api/staff/';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('Data', data));
//   }
//   render() {
//     return <h1>Hello </h1>;
//   }
// }
// export default myComponent;


import React,{useState, useEffect} from 'react';
import './App.css';

const App = () => {

    const [staff, setstaff] = useState([]);

    useEffect(() => {

        fetch('http://127.0.0.1:8000/api/staff/')
          .then(res => res.json())
          .then(res =>{
              setstaff(res);
          } )
          .catch(e =>{
              console.log(e);
                       
          } )

    } );
   
    return (
        <div>
            Total_staffs:{staff.length}
             <table>
             <thead> 
             <tr>
             <th>ID </th>
             <th>Name </th>
             <th>Department </th>
             <th>Mobile No </th>
                  </tr>
             </thead>

             <tbody>
                 {staff.map((p , index) =>{
                     return <Tr key={index} staff={p}   />
                 })}
             </tbody>

             </table>
        </div>
    )
}

const Tr = ({staff}) => {
    return (
        <tr>
            <td>{staff.staff_id} </td>
            <td>{staff.staff_name} </td>
            <td>{staff.staff_dep} </td>
            <td>{staff.staff_mobileno} </td>
        </tr>
    );
}

export default App
