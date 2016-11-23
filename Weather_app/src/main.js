var React = require('react');
var ReactDOM = require('react-dom');
var xhr = require('xhr');
var $ = require('jquery');


var ReactComponent = React.createClass({
      componentDidMount: function() {
     $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=cce2d2dc12fd50164aff353ad4e09ea2&cnt=5', 
      dataType: 'json',  
      success: function(data) {
          this.setState({temp: data});
          console.log(this.state.temp.city.name);
    }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },
   getInitialState: function () {
        return {
            temp: {}
        };
    },
    render: function(state) {
      
      var weatherData = this.state.temp.list.map( (list, index) => {
            return (
            <div class="temp">
            <div class="day">
              <div>
                  <span></span>
                  <h3>{this.state.temp.list[index].dt_txt}</h3>
                  <p>{this.state.temp.list[index].main.temp}</p>
              </div>
            </div>
            </div>
            );
    });
    return (
      <div class="content"><div class="place">
            <div class="city">
             <p>{this.state.temp.city.name}</p>
             <div>{weatherData}</div>
            </div>
            </div>
            </div>
       
      );
  }
});

ReactDOM.render(<ReactComponent>Event Demo</ReactComponent>,
    document.getElementById('mycontainer'));
