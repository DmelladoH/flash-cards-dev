import { Card } from "~/types";

export const data: Card[] = [
  {
    question: "Primitive types in JS",
    answer: `
        <span>Primitive types in JS are:</span>
        <br/><br/>
        <ul>
         <li>undefined</li>
         <li>string</li>
         <li>number</li>
         <li>boolean</li>
         <li>Null</li>
         <li>symbol</li>
         <li>bigInt</li>
        </ul>
    `,
    category: "JavaScript",
    name: "primitive-types-in-JS",
  },
  {
    question: "In JavaScript, is everything an object?",
    answer: `
        <span>No</span>, The reason for this misconception is that most of the values in JS can behave as objects.
    `,
    category: "JavaScript",
    name: "in-javaScript-is-everything-an-object",
  },
  {
    question: "Difference between undeclared and undefined",
    answer: `<span>undeclared</span> refers to a variable that has not been created in any scope that we have access to.<br/><br/><span>undefined</span> refers to a variable that has been declared but currently has no assigned value.`,
    category: "JavaScript",
    name: "difference-between-undeclared-vs-undefined",
  },
  {
    question: "What is the type of NaN",
    answer: `NaN is a special value in JS, which stands for <span>Not a Number</span>. But essentially it means “invalid number”, cause its type is still a <span>number</span>.`,
    category: "JavaScript",
    name: "what-is-typeof-NaN",
  },
  {
    question: "What is the DOM?",
    answer: `
        Is the Document Object Model. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text. 
        The DOM provides a way for programs to manipulate the structure, style, and content of web documents.
        When a web page is loaded, the browser creates a DOM representation of the HTML document. This representation is then used by scripts to interact with and manipulate the content of the page dynamically. For example, JavaScript can be used to change the text of an element, add new elements, or respond to user interactions like button clicks.
   `,
    category: "WEB",
    name: "what-is-the-dom",
  },
  {
    question: "What is the DOM?",
    answer: `
        Is the Document Object Model. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text. 
        The DOM provides a way for programs to manipulate the structure, style, and content of web documents.
        When a web page is loaded, the browser creates a DOM representation of the HTML document. This representation is then used by scripts to interact with and manipulate the content of the page dynamically. For example, JavaScript can be used to change the text of an element, add new elements, or respond to user interactions like button clicks.
   `,
    category: "WEB",
    name: "what-is-the-dom",
  },
  {
    question: "How does isNaN works behind the scenes?",
    answer: `
    isNaN coerces values to numbers before it checks for them to be NaN (so if you pass a string for example it will coerce to a number, if the string is not a number then it will be a NaN therefore it will return that that string is a NaN).
    <br/><br/>
    <ul>
      <li>isNaN(‘hello’) → <span>true</span></li>
      <li>isNaN(‘100’) → <span> false</span></li>
      <li>isNaN(false) → <span>false</span></li>
      <li>isNaN(true) → <span>false</span></li>
      <li>isNaN(undefined) → <span>true</span></li>
      <li>isNaN(null) → <span>false</span></li>
      <li>isNaN({}) → <span>true</span></li>
    </ul>
   `,
    category: "JavaScript",
    name: "how-does-isNaN-works",
  },
  {
    question: "what is the difference between +0 and -0?",
    answer: `
    <span>+0</span> and <span>-0</span> are distinct values in JavaScript, but:
    <ul>
      <li> +0 === -0 → true</li>
      <li Object.is(+0, -0) → false (distinguishes them)</li>
    </ul>
    <br/><br/>
    Key differences:
    <ul>
      <li>Division by +0: 1 / +0 → Infinity</li>
      <li>Division by -0: 1 / -0 → -Infinity</li>
    </ul>
    <br/><br/>
    They mainly exist due to the IEEE 754 floating-point standard and are relevant in specific mathematical contexts.
   `,
    category: "JavaScript",
    name: "difference-between-+0-and--0",
  },
  {
    question: "What is lazy loading?",
    answer: `
    Lazy loading is a technique for loading resources only when they are needed. This can be useful for improving the performance of an 
    application by reducing the amount of resources that need to be loaded 
    initially.`,
    category: "Performance",
    name: "what-is-lazy-loading",
    ref: "Building large scale web apps",
  },
  {
    question: "What is the Intersection Observer API?",
    answer: `A JavaScript API that allows us to detect when
an element is visible in the viewport. This can be useful for
implementing on-demand code splitting, where code is loaded when the
user scrolls to a specific section of the page.`,
    category: "Performance",
    name: "what-is-the-intersection-observer-api",
    ref: "Building large scale web apps",
  },
  {
    question: "What is code-splitting?",
    answer: `is a technique for optimizing the performance of large
applications by splitting the application’s code into smaller, more
manageable chunks. These chunks can then be loaded on demand.
<br/><br/>
Is it commonly used when:
  <ul>
    <li>Load page modules as user navigates (router).</li>
    <li>Load large components like graphs and tables.</li>
    <li>Load code when user interacts with a specific part of the page. (button, dropdown,...)</li>
  </ul>
`,
    category: "Performance",
    name: "what-is-code-splitting",
    ref: "Building large scale web apps",
  },
  {
    question: "What is vendor splitting?",
    answer: `Vendor splitting is a technique used to separate out third-party
dependencies from your own code.
  <br/><br/>
  When we use a third-party library
or framework, the code for that library is included in our JavaScript
bundle. This can make the bundle larger and slower to load.
With vendor splitting, we can break out the code for these third-party
dependencies into a separate chunk

`,
    category: "Performance",
    name: "what-is-vendor-splitting",
    ref: "Building large scale web apps",
  },
  {
    question: "What is Dynamic splitting?",
    answer: `Dynamic splitting is a technique used to load JavaScript code on
demand.
  <br/><br/>
  we can load the code for each page or
component only when it's needed. This can reduce the initial load time
for the page and improve performance overall. It can also help to keep
the size of the JavaScript bundle under control, which is important for
large-scale applications.
`,
    category: "Performance",
    name: "what-is-dynamic-splitting",
    ref: "Building large scale web apps",
  },
  {
    question: "What is component splitting?",
    answer: `In component-level code-splitting, each component is lazy-loaded
only when it’s needed.
  <br/><br/>
  the application loads only the
components that are required for the current page. This technique can
lead to more efficient use of bandwidth, but it can sometimes increase
latency due to the need to load components on demand.
  `,
    category: "Performance",
    name: "what-is-component-splitting",
    ref: "Building large scale web apps",
  },
  {
    question: "What is route-based code splitting?",
    answer: `In route-based code-splitting, the application is split into separate
bundles based on routes. When a user navigates to a different route, the
appropriate bundle is loaded on demand, reducing the amount of code
that needs to be downloaded initially.
<br/><br/>
This technique can help reduce the
initial load time of an application, but it may not be as efficient as
component-level code-splitting in terms of bandwidth usage.
`,
    category: "Performance",
    name: "what-is-route-based-code-splitting",
    ref: "Building large scale web apps",
  },
  {
    question: "Trade-offs of code-splitting",
    answer: `
    <ul>
      <li><span>Granularity</span>: we end
up with a large number of smaller chunks of code. This can be
good for caching and de-duplication but bad for compression and
browser performance. Smaller chunks compressed individually get
lower compression rates, and loading performance can be
impacted. </li>
<li><span>Interoperability</span>: Different browsers, servers, and CDNs may
implement code-splitting differently, which can sometimes lead to
compatibility issues. </li>
<li><span>Overhead</span>:it can introduce additional overhead due to the
need to process, fetch, and parse multiple files. This could
sometimes slow down an application, especially on slower devices
or networks.</li>
<li><span>Debugging</span>: it can be
difficult to debug the code and identify issues as the code is spread
across multiple files.</li>
<li><span>Build complexity</span>: can make the build
process more complex and time-consuming, as the codebase is
broken down into multiple smaller chunks that need to be
managed and sometimes built separately.</li>
    </ul>
    `,
    category: "Performance",
    name: "trade-offs-of-code-splitting",
    ref: "Building large scale web apps",
  },
];
