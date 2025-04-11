import React, { useState } from "react";
import "./App.css";

// 1. Hello React Components
const HelloWithoutJSX = () => {
  return React.createElement("h1", null, "Hello, React!");
};

const HelloWithJSX = () => <h1>Hello, React!</h1>;

const HelloWithVariable = () => {
  const message = "Welcome to React!";
  return <h1>{message}</h1>;
};

// 2. Render a List of Fruits
const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

// 3. Styled Message
const StyledMessage = () => {
  const style = { color: "blue", fontSize: "20px", fontWeight: "bold" };
  return <p style={style}>This is a styled message.</p>;
};

// 4. Sum of Squares
const SumOfSquares = ({ num1, num2 }) => {
  const sum = num1 ** 2 + num2 ** 2;
  return <p>Sum of squares: {sum}</p>;
};

// 5. Conditional Greeting
const Greeting = ({ isMorning }) => {
  return <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>;
};

// 6. Display Current Day
const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return <h1>Today is {days[today]}</h1>;
};

// 7. Prime Number Checker
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const PrimeChecker = ({ number }) => {
  return <p>{number} is {isPrime(number) ? "a Prime Number" : "not a Prime Number"}</p>;
};

// 8. Temperature Converter (Class Component)
class TemperatureConverter extends React.Component {
  state = { temp: "", scale: "C" };

  handleChange = (e) => {
    this.setState({ temp: e.target.value });
  };

  convertTemperature = () => {
    const { temp, scale } = this.state;
    if (!temp) return "";
    return scale === "C" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9;
  };

  toggleScale = () => {
    this.setState((prevState) => ({
      scale: prevState.scale === "C" ? "F" : "C",
      temp: this.convertTemperature(),
    }));
  };

  render() {
    return (
      <div>
        <input type="number" value={this.state.temp} onChange={this.handleChange} />
        <button onClick={this.toggleScale}>
          Convert to {this.state.scale === "C" ? "Fahrenheit" : "Celsius"}
        </button>
        <p>Converted Temperature: {this.convertTemperature()}°{this.state.scale === "C" ? "F" : "C"}</p>
      </div>
    );
  }
}

// 9. Reverse String and Check Palindrome
const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();
  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? "It is a palindrome!" : "Not a palindrome."}</p>
    </div>
  );
};

// 10. Random Number Generator
const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(null);

  return (
    <div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>
        Generate Random Number
      </button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
};

// 11. Leap Year Checker
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const LeapYearChecker = ({ year }) => {
  return <p>{year} is {isLeapYear(year) ? "a Leap Year" : "not a Leap Year"}</p>;
};

// 12. User Greeting (Class Component)
class UserGreeting extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h1>Hello, {firstName} {lastName}!</h1>;
  }
}

// Main App Component
function App() {
  return (
    <div>
      <HelloWithoutJSX />
      <HelloWithJSX />
      <HelloWithVariable />
      <FruitList />
      <StyledMessage />
      <SumOfSquares num1={3} num2={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeChecker number={7} />
      <TemperatureConverter />
      <ReverseString text="racecar" />
      <RandomNumberGenerator />
      <LeapYearChecker year={2024} />
      <UserGreeting firstName="John" lastName="Doe" />
    </div>
  );
}

export default App;
