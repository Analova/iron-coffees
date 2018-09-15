// src/components/pages/Home.js
import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        coffees: []
      };
    }
  
    render(){
        return(
            <div>
                <h1>See all coffees</h1>
                <ul>
                    {this.state.coffees.map(c=>(
                        <li key={c._id}>{c.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/api/coffees`)
          .then(response=> {
            console.log(response.data)
            this.setState({
                coffees:response.data
            })
          })
      }
  }
  export default Home