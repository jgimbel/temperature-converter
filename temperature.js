const Temperature = {
  toFahrenheit(celsius) {
    return celsius * 9/5 + 32
  },
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
  }
}

let tempToday = 82
const tempInCelsius = Math.round(Temperature.toCelsius(tempToday))
const message = `Today’s temperature is ${tempToday}°F, which is ${tempInCelsius}°C.` 
console.log(message)

const Form = React.createClass({
  getInitialState() {
    return { temp: '' }
  },
  calculate(data) {
    console.log(data)
  },
  render() {
    return (
      <main>
        <form onFormSubmit={this.calculate}>
          <label>
            Tempature
            <input type='number' name='temp'></input>
          </label>
          <label>
            Farenheit
            <input type='radio' name='type' value='fahrenheit'/>
          </label>
          <label>
            Celsuis
            <input type='radio' name='type' value='celsius'/>
          </label>
        </form>
        <div>
          {this.state.temp}
        </div>
      </main>
    )
  }
})
React.render(<Form />, document.body)