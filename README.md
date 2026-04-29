# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dge9bD1LSZ).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Download](#download)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
 

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date.
- Receive validation errors if:
  - Any field is empty.
  - The day is not between 1-31.
  - The month is not between 1-12.
  - The year is in the future.
  - The date is invalid (e.g., 31/04/1991).
- View the optimal layout depending on their device's screen size.
- See hover and focus states for all interactive elements.

### Screenshot

<img width="340" height="386" alt="Age Calculator App" src="https://github.com/user-attachments/assets/83b1ff30-8a90-48c7-8e65-4153143df806" />

### Live-Demo

Check out the live version here: [Age Calculator App](https://sykes6ix.github.io/Age-Calculator-App/)

### Download

You can download the Age Calculator as a desktop app for Windows!

1. Go to the [Releases](https://github.com/Sykes6ix/Age-Calculator-App/releases) page
2. Download the latest **Age Calculator App Setup 1.0.0.exe**
3. Run the installer and launch the app

> Built with Electron — works on Windows.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Electron (desktop app)

### What I learned

This project was a great way to practice **Error Handling** and **JavaScript Scope**.

**Error Handling:**
I focused on creating a smooth user experience by validating inputs before running the calculation. I learned how to toggle error states and display helpful messages when a user enters an impossible date.

**Scope:**
By working with functions to handle the calculations and error states, I practiced keeping my variables local to where they are needed. This helped me avoid global variable conflicts and made my code more modular.

```javascript
// Example of scoped logic for validation
const validateDate = (day, month, year) => {
  let isValid = true;
  // logic stays inside this block
  return isValid;
};
