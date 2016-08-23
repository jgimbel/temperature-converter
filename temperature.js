const Temperature = {
  toFahrenheit(celsius) {
    return celsius * 9/5 + 32
  },
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
  }
}

const tempToday = 82
const tempInCelsius = Math.round(Temperature.toCelsius(tempToday))
const message = `Today’s temperature is ${tempToday}°F, which is ${tempInCelsius}°C.` 
console.log(message)

const Form = React.createClass({
  getInitialState() {
    return { temp: '' }
  },
  calculate(event) {
    event.preventDefault()
    const func = Temperature[event.target.type.value]
    this.setState({ 
      temp: Math.round(func(~~event.target.temp.value)) 
    })
  },
  render() {
    return (
      <main>
        <form onSubmit={this.calculate}>
          <label>
            Tempature
            <input type='number' name='temp'></input>
          </label>
          <label>
            Farenheit
            <input type='radio' name='type' checked value='toCelsius'/>
          </label>
          <label>
            Celsuis
            <input type='radio' name='type' value='toFahrenheit'/>
          </label>
          <input type="submit" value="Calculate"/>
        </form>
        <div>
          {this.state.temp}
        </div>
      </main>
    )
  }
})
React.render(<Form />, document.body)