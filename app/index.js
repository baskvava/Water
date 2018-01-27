import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getR: []      
    }
    
  }
  componentDidMount(){

    // $.ajax({
    //   url: 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=190796c8-7c56-42e0-8068-39242b8ec927',
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     console.log(data)
    //     // this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });

     // axios.request(config)
     //  .then(response => { console.log('response: ', response) })
    let _this = this
    axios.get('http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=190796c8-7c56-42e0-8068-39242b8ec927')
    .then(function (response) {
      console.log(response.data.result);
      _this.setState({getR: response.data.result})
      
    })
    .catch(function (error) {
      console.log(error);
    })

  }
  // http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=190796c8-7c56-42e0-8068-39242b8ec927


  render() {
    return (
      <div>
        <h1>Vava</h1>
        <h1>{this.state.getR.limit}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
