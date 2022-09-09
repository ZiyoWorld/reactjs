import React from "react";

class State extends React.Component{
  // constructor(props){
  //   super(props);
  // }
  render(){
    const {data} = this.props;
    return(
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Age</td>
              <td>Address</td>
              <td>Status</td>
              <td>NickName</td>
              <td>Univ</td>
              <td>Job</td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map( (value)=>{
                return(
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.address}</td>
                    <td>{value.status}</td>
                    <td>{value.nickname}</td>
                    <td>{value.univ}</td>
                    <td>{value.job}</td>
                    <td>{value.edit}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default State;