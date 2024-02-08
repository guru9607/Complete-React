#### What is JSX ?
Ans. 
- JSX is a way to write HTML-like code directly inside JavaScript. It's commonly used in frameworks like React to make building user interfaces easier and more intuitive. 
- Instead of writing separate HTML and JavaScript files, JSX lets you write both in the same file, making your code more organized and easier to understand.
- React.createElement("", {}, "")❌, JSX ✅

#### Role of type attribute in script tag? What options can I use there?
Ans.
    JavaScript (Default):
        <script> without a type attribute defaults to JavaScript. This is the most common scenario and doesn't require explicitly setting the type attribute.
    JavaScript ECMAScript 6 (ES6):
        <script type="text/javascript"> or <script type="module">: Specifies that the script contains JavaScript code, particularly ECMAScript 6 (ES6) code. The module type indicates that the script is a module and should be treated as such.
    JSON:
        <script type="application/json">: Specifies that the content within the <script> tag is JSON (JavaScript Object Notation) data.

#### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
Ans. 
- `{TitleComponent}`: This syntax renders the TitleComponent component without wrapping it in JSX tags or parentheses. It's commonly used when directly embedding a component within JSX or when passing it as a prop to another component.

- `{<TitleComponent/>}`: This syntax explicitly uses self-closing JSX tags to render the TitleComponent. It's functionally equivalent to the first syntax but explicitly indicates that TitleComponent is a self-contained component.

- `{<TitleComponent></TitleComponent>}`: This syntax uses opening and closing JSX tags to wrap the TitleComponent. It's also functionally equivalent to the first two syntaxes and explicitly indicates the start and end of the TitleComponent.

