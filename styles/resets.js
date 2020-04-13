import colours from './colours';

export default `
html {
  -webkit-tap-highlight-color: transparent;
}

*,
::before,
::after {
  box-sizing: border-box;  
}

.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}

body {   
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica,
    sans-serif;
  background-color: ${colours.dark};
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}

p {
  margin: 0 0 10px 0;  
  -webkit-margin-before: 0;
  -webkit-margin-after: 10px;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
}

input {
  -webkit-appearance: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='checkbox']:checked {
  background: #ffffff;
}

input::placeholder {
  color: ${colours.grey};
}

input[type='text'], input[type='tel'] {  
  padding: 10px 10px;
  width: 100%;
  height: 50px;
}

textarea:required {
    box-shadow:none;
}

button {  
  background: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
}

div:focus {outline:0;}

strong,
b {
}

sup {
  font-size: 10px;
  line-height: 1.8;
  letter-spacing: normal;
}

ul {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  margin: 0;
  padding-left: 20px;
}

ol {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  margin: 0;
  padding-left: 20px;
}

a {
  text-decoration: none;
  color: ${colours.orange};
  cursor: pointer;
}

input,
textarea,
select,
button {
  font-size: 16px;
  padding: 0; 
  border: none;
}

select {
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
}

/* For IE10 */
select::-ms-expand {
  display: none;
}

article,
aside,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

.slick-dots li button:before {
  color: white;
}

.slick-dots .slick-active button:before {
  color: orange !important;
}
`;
