


const button = document.getElementById('button');
const form = document.getElementById('form');






// This is the main function that runs when you click the button, I still have issues with scope
function getAge() {
    // Get today's date
    const now = new Date();

    // Value to numbers... I prefer Number coz it's easy but gpt said parset is also valid so I used it
    const birthDay = parseInt(document.getElementById('day').value);
    const birthMonth = parseInt(document.getElementById('month').value);
    const birthYear = parseInt(document.getElementById('year').value);

    // Get the input elements
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const dayError = document.querySelector('#day + .error');
    const monthError = document.querySelector('#month + .error');
    const yearError = document.querySelector('#year + .error');

    // Remove red borders and hide all errors first (start fresh)
    dayInput.classList.remove('input-error');
    monthInput.classList.remove('input-error');
    yearInput.classList.remove('input-error');
    dayError.style.visibility = 'hidden';
    monthError.style.visibility = 'hidden';
    yearError.style.visibility = 'hidden';

    // Assume it's okay until we check
    let isValid = true;

    // Check day: If empty or wrong, show error, this logic fried my brain, gpt helped but i get the concept. better than else if
    if (!birthDay || birthDay < 1 || birthDay > 31) {
        dayInput.classList.add('input-error');
        dayError.textContent = 'Must be a valid day';
        dayError.style.visibility = 'visible';
        isValid = false;  
    }

    if (!birthMonth || birthMonth < 1 || birthMonth > 12) {
        monthInput.classList.add('input-error');
        monthError.textContent = 'Must be a valid month';
        monthError.style.visibility = 'visible';
        isValid = false;
    }

    // Check year: Empty = "This field is required", Future = "Must be in the past"
    if (!birthYear) {
        yearInput.classList.add('input-error');
        yearError.textContent = 'This field is required';
        yearError.style.visibility = 'visible';
        isValid = false;
    } else if (birthYear > now.getFullYear()) {
        yearInput.classList.add('input-error');
        yearError.textContent = 'Must be in the past';
        yearError.style.visibility = 'visible';
        isValid = false;
    }

    // if something was wrong, stop here and don't calculate age
    if (!isValid) return;

    // if all good, calculate age
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);  // Make a date object
    const diff = now - birthDate;  // Time difference in milliseconds

    const ageYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const ageMonths = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const ageDays = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

    // answers on the screen
    document.querySelector('.year-result').textContent = ageYears;
    document.querySelector('.month-result').textContent = ageMonths;
    document.querySelector('.date-result').textContent = ageDays;
};

    


        

        
        

        

        
        
        



