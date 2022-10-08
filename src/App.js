import React, {Component} from "react";
import {data} from './data';


class App extends Component {
  
  state = {  
     modalBtn: false,
     data: data,
     id: '',
     name: '',
     type: '',
     address: '',
     phone: '',
     email: '',
     active: null,

  }
  render() { 
      const {name, address, phone, type,  data, email, modalBtn} = this.state;
      const onChange = (e)=>{
        
          this.setState({
            [e.target.name]: e.target.value,
          });
        
      };

      const onOpenBtn = ()=>{
        this.setState({
          modalBtn: true,
        })
      }
      const onCloseBtn = (id)=>{
        let res = this.state.data.filter( value => value.id !== id);
        console.log(res);
          if(res){
            this.setState({
              modalBtn: false,
            })
          }else{
            this.setState({
              modalBtn: true,
            })
          }
          
        
      };

      const onNewCard = ()=>{
        
        let user = {
          id: Date.now(),
          name: this.state.name,
          address: this.state.address,
          type: this.state.type,
          phone: this.state.phone,
          email: this.state.email,
        }
        
        console.log(user);
        if(name.length > 0 && type.length > 0 && address.length > 0 && phone.length > 0 && email.length > 0){
          this.setState({
            data: [...data, user],
            id: "",
            name: "",
            type: '',
            address: '',
            phone: '',
            email: '',
          });
        }else{
          this.setState({
            data: this.state.data,
          })
        }
          
      };

      const onCloseModal = ()=>{
        this.setState({
          id: '',
          name: '',
          type: '',
          address: '',
          phone: '',
          email: '',
        })
      };

      const onDeleteBtn = (id)=>{
        let res = data.filter( (value)=> value.id !== id);
        this.setState({
          data: res
        })
      }
   
    
    return ( 
        <div className="container">
            <h1>Sizning do'konlariz</h1>
            <div className="shoppings">
              {
                data.map( (value)=>{
                  return(
                    <div className="card" key={value.id}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt_i-1uZdBIPkdVegkSj9HAJbp7wx2usc3VLhXUFcwQ&s" alt="" />
                      <h2>TexnoMart</h2>
                      <p>Owner</p>
                      <button onClick={onOpenBtn}>Open</button>
                      {
                       modalBtn ? (<div className="modaldata">
                          <h2>About Company</h2>
                        <h5>Company name: {value.name}</h5>
                        <h5>Address: {value.address}</h5>
                        <h5>Type: {value.type}</h5>
                        <h5>Phone:{value.phone}</h5>
                        <h5>Email:{value.email}</h5>
                        <button onClick={()=>onCloseBtn(value.id)}>Close</button>
                        <button onClick={()=>onDeleteBtn(value.id)}>Delete</button>
                       </div>) : ("")
                      }
                    </div>
                  )
                })
              }
              <div className="add">
                <a href="#modal">+</a>
                <p>Add new shop</p>
              </div>
            </div>
            

           <h1>Sotvchi sifatida ro'yxatdan o'tish </h1>
             <div className="modalbox">

                <div  className="modal" id="modal">
                  <label htmlFor="name">Kompaniya nomi</label>
                  <input type="text"  id="name" name="name" value={name} onChange={onChange} />
                  <label htmlFor="address">Kompaniya manzili</label>
                  <input type="text"  id="address" name="address" value={address} onChange={onChange} />
                  <label htmlFor="type">Faoliyat turi</label>
                  <select onChange={onChange} name="type" id="type">
                    <option value="">Tanlang:</option>
                    <option value="savdo">Online Savdo</option>
                    <option value="mobile" >Mobile</option>
                    <option value="auto" >Auto</option>
                  </select>
                  <label htmlFor="phone">Telefon raqam</label>
                  <input type="text"  name="phone" id="phone" value={phone} onChange={onChange} />
                  <label htmlFor="email">Email manzilni yuboring</label>
                  <input type="text"  name="email" id="email" value={email} onChange={onChange} />
                  <div className="buttons">
                  <button type="submit" onClick={()=> onNewCard( name, address, type,phone, email) }>Confirm</button>
                  <button onClick={onCloseModal}>Close</button>
                </div>
              </div>



            </div>
        </div>
     );
  }
}
 
export default App;