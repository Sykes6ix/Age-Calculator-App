# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dge9bD1LSZ). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

![Design preview for the Age calculator app]([project_screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

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
