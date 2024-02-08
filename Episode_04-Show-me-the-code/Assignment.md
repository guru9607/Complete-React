# 1. Is JSX mandatory for React?
No, JSX (JavaScript XML) is not mandatory for building React applications, but it is strongly recommended and widely used. JSX is a syntax extension that allows you to write HTML-like code directly within JavaScript, making it easier to create and visualize the structure of your UI components.

# 2. What is optional chaining?
- Optional chaining in JavaScript, denoted by the ?. operator, allows safe access to properties of an object without causing errors if intermediate properties are null or undefined. 
```
const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } = resData?.info;
```
- This way, you can safely use cloudinaryImageId, name, cuisines, avgRating, costForTwo, and areaName down the line in your code without having to worry about potential errors due to missing properties. If any of these properties are missing or null, their respective variables will simply be undefined, and your code will continue to execute without throwing errors. This enhances readability and maintainability by reducing the need for repetitive null-checks.

# 3. Is ES6 mandatory for React?
ES6 (ECMAScript 2015) features are not strictly mandatory for writing React applications, but they are highly recommended and widely used in React development.

Many features introduced in ES6, such as arrow functions, destructuring assignment, classes, template literals, and the spread operator, significantly improve the readability, conciseness, and expressiveness of JavaScript code. These features make React code cleaner, more maintainable, and easier to understand.

# 4. How can I write comments in JSX?
`{/* */}`

# 5. What is <React.Fragment></React.Fragment> and <></> ?
`<React.Fragment>` is a named component provided by React. It's a wrapper that allows you to group multiple children without adding extra nodes to the DOM. You can use it like any other component, specifying it explicitly with `<React.Fragment>` tags.

# 6. What is Virtual DOM?


# Why we need keys in React? When do we need keys in React?

