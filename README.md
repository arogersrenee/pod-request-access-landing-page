# Podcast request access landing page

## Table of contents

- [Overview](#overview)
  - [The objective](#the-objective)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.  

### The objective

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://arogersrenee.github.io/pod-request-access-landing-page/

## My process

### Built with

- HTML, CSS, & JavaScript
- Semantic HTML5 markup
- CSS custom properties (variables)
- Flexbox
- Mobile-first workflow
- Git command line


### What I learned

This was my first project styling a form in CSS and using JavaScript to create the error messages. This was quite the challenge. Naturally JavaScript was the hardest part. A couple of things I learned:
- HTML: how to load responsive images using the <picture> tag
- CSS: Reordering elements with Flex
- JS: how to perform a function based on the size of the user's device (if statement below)
- JS: Adding nodes between siblings (see function below)

One challenge I had to overcome was removing the built-in validation messages. I didn't want these messages to overlap with the custom message I added with JS. I ultimately decided to change the input type to "text" to get around the built-in "email" validation. I'm not confident this is the best practice, but it does what I wanted it to do for now.

I also learned that the onsubmit event handler needed to be a boolean value. The purpose of a form validation script is to return a boolean value (true or false) to the onsubmit event handler. A value of true means that the form will be submitted while a false value will block the form from being subm

Here's a bit of JavaScript I learned along the way:

```js
// allows you to perform a function if the browser is at least 768px.
if (window.matchMedia("(min-width: 768px)").matches) { 
    //code to perform
} else {
    // if smaller than 768px this code to will run.
}

//this function allows you to place a node after an existing node. 
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
```

### Continued development

Areas I'd like to improve with future projects include: styling more complex forms, client-side form validation with JavaScript and DOM manipulation. 


### Useful resources

- [w3resource](https://www.w3resource.com/javascript/form/email-validation.php#:~:text=To%20get%20a%20valid%20email,%5D%2B) - This helped me with validating the email using the mention RegEp.


## Author

- Frontend Developer - [Ashley Rogers](https://www.finalfinalv1.com)
- Design - [Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG)


