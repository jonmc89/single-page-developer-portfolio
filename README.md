# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   Receive an error message when the `form` is submitted if:
    -   Any field is empty
    -   The email address is not formatted correctly
-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page
-   **Bonus**: Add your own details (image, skills, projects) to replace the ones in the design

### Screenshot

![](./assets/images/solutionScreenhot.png)

### Links

-   Solution URL: [Github Repo](https://github.com/jonmc89/single-page-developer-portfolio)
-   Live Site URL: [Live Solution](https://jonmc89.github.io/single-page-developer-portfolio/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   JavaScript
-   Mobile-first workflow

### What I learned

Client-side Form Validation, using regrex for email validation and non entered fields.

```js
const isRequired = (value) => (value === "" ? false : true);

const isEmailValid = (email) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
```

### Useful resources

-   [JavaScript Tutorial](https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/) - This helped me with learning how to handle Client-Side form validation.

## Author

-   Frontend Mentor - [@jonmc89](https://www.frontendmentor.io/profile/jonmc89)
