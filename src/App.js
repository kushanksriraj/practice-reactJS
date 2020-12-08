import React, { useState } from "react";
import "./styles.css";

function checkPrimeNumber(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function checkLeapYear(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

//----------------------------------------

export default function App() {
  const [leapBool, setLeapBool] = useState("");
  const [primeBool, setPrimeBool] = useState("");

  function leapClick(event) {
    var year = parseInt(event.target.value);

    if (isNaN(year)) {
      setLeapBool("");
    } else {
      if (checkLeapYear(year)) {
        setLeapBool("Leap year!");
      } else {
        setLeapBool("Not a leap year!");
      }
    }
  }

  function primeClick(event) {
    var number = parseInt(event.target.value);

    if (isNaN(number)) {
      setPrimeBool("");
    } else {
      if (checkPrimeNumber(number)) {
        setPrimeBool("Prime number!");
      } else {
        setPrimeBool("Not a prime number!");
      }
    }
  }

  return (
    <div className="App">
      <nav>
        <h1>Practice</h1>
      </nav>

      <main>
        <header>Enter a year to check if it's a leap year:</header>
        <input type="number" onChange={leapClick} />
        <div>{leapBool}</div>

        <header>Enter a number to check if it's prime:</header>
        <input type="number" onChange={primeClick} />
        <div>{primeBool}</div>
      </main>
    </div>
  );
}
