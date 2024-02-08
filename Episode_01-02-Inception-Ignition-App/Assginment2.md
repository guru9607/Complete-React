## 1. appendChild():

`appendChild()` is a method in JavaScript that is used to add a new child element to an existing parent element in the Document Object Model (DOM). It is commonly used to dynamically manipulate web pages by adding or inserting new content.
Example:
```
const heading = document.createElement('h1');
heading.innerHTML = "Hello World from Javascript!"
const root = document.getElementById('root');
root.appendChild(heading);
```

## 2. CDN:

CDN stands for Content Delivery Network. It is a distributed network of servers located in different geographical locations that work together to deliver internet content, such as web pages, images, videos, and other resources, to users in a faster and more efficient manner.

- Improved Performance
- Load Distribution
- Security
- Bandwidth Savings
- Scalability
- Improved User Experience

## 3. Crossorigin:

The `crossorigin` attribute is used in HTML to specify how the browser should handle requests made to load external resources such as scripts, stylesheets, images, etc.
Cross-origin resource sharing (CORS) is a security feature that allows web pages to request resources from another domain only if the server hosting those resources explicitly allows it through special headers.
For example, if your React application is hosted at www.example.com, but you're loading some JavaScript libraries or images from a CDN like cdn.examplecdn.com, this would be considered a cross-origin request.

## 4. What is a React?

React is a JavaScript library to build user interfaces. It is written by Facebook developers and is an open-source library.

## 5. What do these 2 CDN links mean?

<!-- CDN Links React -->
<!--
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
-->

The first link means that this is the core of the React framework algorithm (`react.development.js`). The second link means that it is the React DOM, which is useful for DOM operations (Document Object Model).

## 6. HTML code snippet, the script tags are placed at the end of the body element rather than in the head element because

Of page load performance, allowing the rest of the HTML content to load before the scripts are executed. This means that the user can start seeing and interacting with the content of the page sooner even if the scripts are still loading or processing.

## 7. What is an Emmet?

Emmet is a plugin or toolkit that provides shortcuts and abbreviations for writing HTML, CSS, and other web-related code.

## 8. Difference between library and framework?

a library is a collection of reusable code that you can use to perform specific tasks, while a framework is a comprehensive structure that provides guidelines and tools for building an entire application. Libraries give you more flexibility and control over your code, while frameworks provide a structured approach to application development.

## 9. Why is React known as React?

React, also known as React.js, is a JavaScript library for building user interfaces. The name 'React' was chosen because the library is designed to be highly reactive to changes in program state.

## 10. What is the difference between React and ReactDOM?

React is the core library for building user interfaces, while ReactDOM is the package responsible for rendering React components into the DOM. They work together to create dynamic and interactive web applications.

## 11. What is the difference between react-development.js and react-production.js via CDN files?

When using React via a CDN, you choose between `react-development.js` for development environments, which provides extra debugging tools and is larger in file size, and `react-production.js` for production environments, which is optimized for performance and has a smaller file size.