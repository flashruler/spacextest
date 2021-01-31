import logo from './logo.svg';
import './App.css';
import React from "react";
const axios = require('axios');


class App extends React.Component {
  state = {
    launches: []
  }
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)

  }
  componentDidMount() {
    this.getData()
  }
  getData() {
    let that = this
    axios.get('https://api.spacexdata.com/v4/launches/upcoming')
      .then(function (response) {
        console.log(response.data);
        that.setState({ launches: response.data })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  render() {
    return (
      <div className='page'>
        <table className= "table">
          <thead>
            <tr>
              <th>Flight#</th>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.launches && this.state.launches.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.flight_number}</td>
                  <td>{value.name}</td>
                  <td>{value.date_local}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }


}

export default App;
