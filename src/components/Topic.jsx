import React from "react";
import { Link } from "react-router-dom";
import Content from "./Content";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Topic() {
  const { subject } = useParams();
  // console.log(subject);
  const navigate = useNavigate();
  const renderContent = (topic, subject) => {
    // console.log(topic);
    navigate("/content/" + subject + "/" + topic);
  }

  const topics = {
    cplusplus: {
        sub : 
        [{ path: "/cplusplus/datatypes", label: "Data Types" },
        { path: "/cplusplus/variables", label: "Variables" },
        { path: "/cplusplus/operators", label: "Operators" },
        { path: "/cplusplus/control_structures", label: "Control Structures" },
        { path: "/cplusplus/functions", label: "Functions" },
        { path: "/cplusplus/arrays", label: "Arrays" },
        { path: "/cplusplus/pointers", label: "Pointers" },
        { path: "/cplusplus/structures", label: "Structures" },
        { path: "/cplusplus/file_handling", label: "File Handling" },
        { path: "/cplusplus/exception_handling", label: "Exception Handling" },
        { path: "/cplusplus/object_oriented_programming", label: "Object Oriented Programming" },
        { path: "/cplusplus/templates", label: "Templates" },
        { path: "/cplusplus/standard_template_library", label: "Standard Template Library" },
        { path: "/cplusplus/exceptions", label: "Exceptions" },
        { path: "/cplusplus/rtti", label: "RTTI" },
        { path: "/cplusplus/multithreading", label: "Multithreading" }
        ],
    },
    java: {
        sub : 
        [{ path: "/java/datatypes", label: "Data Types" },
        { path: "/java/variables", label: "Variables" },
        { path: "/java/operators", label: "Operators" },
        { path: "/java/control_structures", label: "Control Structures" },
        { path: "/java/functions", label: "Functions" },
        { path: "/java/arrays", label: "Arrays" },
        { path: "/java/pointers", label: "Pointers" },
        { path: "/java/structures", label: "Structures" },
        { path: "/java/file_handling", label: "File Handling" },
        { path: "/java/exception_handling", label: "Exception Handling" },
        { path: "/java/classes", label: "Classes" },
        { path: "/java/objects", label: "Objects" },
        { path: "/java/inheritance", label: "Inheritance" },
        { path: "/java/polymorphism", label: "Polymorphism" },
        { path: "/java/encapsulation", label: "Encapsulation" },
        { path: "/java/abstraction", label: "Abstraction" },
        { path: "/java/interface", label: "Interface" },
        { path: "/java/package", label: "Package" },
        { path: "/java/exception", label: "Exception" },
        { path: "/java/multithreading", label: "Multithreading" }],
    },
    c: {
      sub: [
        { path: "/c/datatypes", label: "Data Types" },
        { path: "/c/variables", label: "Variables" },
        { path: "/c/operators", label: "Operators" },
        { path: "/c/control_structures", label: "Control Structures" },
        { path: "/c/functions", label: "Functions" },
        { path: "/c/arrays", label: "Arrays" },
        { path: "/c/pointers", label: "Pointers" },
        { path: "/c/structures", label: "Structures" },
        { path: "/c/file_handling", label: "File Handling" },
        { path: "/c/exception_handling", label: "Exception Handling" },
        { path: "/c/preprocessor", label: "Preprocessor" },
        { path: "/c/memory_management", label: "Memory Management" },
        { path: "/c/recursion", label: "Recursion" },
        { path: "/c/linked_lists", label: "Linked Lists" },
        { path: "/c/stacks", label: "Stacks" },
        { path: "/c/queues", label: "Queues" },
        { path: "/c/sorting", label: "Sorting" },
        { path: "/c/searching", label: "Searching" },
        { path: "/c/multithreading", label: "Multithreading" },
      ],
    },
    csharp: {
      sub: [
        { path: "/csharp/datatypes", label: "Data Types" },
        { path: "/csharp/variables", label: "Variables" },
        { path: "/csharp/operators", label: "Operators" },
        { path: "/csharp/control_structures", label: "Control Structures" },
        { path: "/csharp/functions", label: "Functions" },
        { path: "/csharp/arrays", label: "Arrays" },
        { path: "/csharp/pointers", label: "Pointers" },
        { path: "/csharp/classes", label: "Classes" },
        { path: "/csharp/objects", label: "Objects" },
        { path: "/csharp/inheritance", label: "Inheritance" },
        { path: "/csharp/polymorphism", label: "Polymorphism" },
        { path: "/csharp/interfaces", label: "Interfaces" },
        { path: "/csharp/exceptions", label: "Exception Handling" },
        { path: "/csharp/async_programming", label: "Async Programming" },
        { path: "/csharp/linq", label: "LINQ" },
        { path: "/csharp/delegates", label: "Delegates" },
        { path: "/csharp/events", label: "Events" },
        { path: "/csharp/generics", label: "Generics" },
        { path: "/csharp/multithreading", label: "Multithreading" },
      ],
    },
    go: {
      sub: [
        { path: "/go/datatypes", label: "Data Types" },
        { path: "/go/variables", label: "Variables" },
        { path: "/go/operators", label: "Operators" },
        { path: "/go/control_structures", label: "Control Structures" },
        { path: "/go/functions", label: "Functions" },
        { path: "/go/arrays", label: "Arrays" },
        { path: "/go/pointers", label: "Pointers" },
        { path: "/go/structures", label: "Structures" },
        { path: "/go/interfaces", label: "Interfaces" },
        { path: "/go/goroutines", label: "Goroutines" },
        { path: "/go/channels", label: "Channels" },
        { path: "/go/error_handling", label: "Error Handling" },
        { path: "/go/packages", label: "Packages" },
        { path: "/go/concurrency", label: "Concurrency" },
        { path: "/go/slices", label: "Slices" },
        { path: "/go/maps", label: "Maps" },
        { path: "/go/io_operations", label: "IO Operations" },
        { path: "/go/reflection", label: "Reflection" },
      ],
    },
    javascript: {
      sub: [
        { path: "/javascript/variables", label: "Variables" },
        { path: "/javascript/datatypes", label: "Data Types" },
        { path: "/javascript/functions", label: "Functions" },
        { path: "/javascript/objects", label: "Objects" },
        { path: "/javascript/arrays", label: "Arrays" },
        { path: "/javascript/closures", label: "Closures" },
        { path: "/javascript/promises", label: "Promises" },
        { path: "/javascript/async_await", label: "Async/Await" },
        { path: "/javascript/event_loop", label: "Event Loop" },
        { path: "/javascript/dom_manipulation", label: "DOM Manipulation" },
        { path: "/javascript/prototypes", label: "Prototypes" },
        { path: "/javascript/classes", label: "Classes" },
        { path: "/javascript/modules", label: "Modules" },
        { path: "/javascript/error_handling", label: "Error Handling" },
        { path: "/javascript/event_handling", label: "Event Handling" },
        { path: "/javascript/functional_programming", label: "Functional Programming" },
        { path: "/javascript/es6_features", label: "ES6 Features" },
      ],
    },
    kotlin: {
      sub: [
        { path: "/kotlin/datatypes", label: "Data Types" },
        { path: "/kotlin/variables", label: "Variables" },
        { path: "/kotlin/functions", label: "Functions" },
        { path: "/kotlin/classes", label: "Classes" },
        { path: "/kotlin/objects", label: "Objects" },
        { path: "/kotlin/inheritance", label: "Inheritance" },
        { path: "/kotlin/null_safety", label: "Null Safety" },
        { path: "/kotlin/lambdas", label: "Lambdas" },
        { path: "/kotlin/collections", label: "Collections" },
        { path: "/kotlin/coroutines", label: "Coroutines" },
        { path: "/kotlin/error_handling", label: "Error Handling" },
        { path: "/kotlin/sealed_classes", label: "Sealed Classes" },
        { path: "/kotlin/generics", label: "Generics" },
        { path: "/kotlin/interfaces", label: "Interfaces" },
        { path: "/kotlin/smart_casts", label: "Smart Casts" },
      ],
    },
    php: {
      sub: [
        { path: "/php/datatypes", label: "Data Types" },
        { path: "/php/variables", label: "Variables" },
        { path: "/php/operators", label: "Operators" },
        { path: "/php/functions", label: "Functions" },
        { path: "/php/arrays", label: "Arrays" },
        { path: "/php/strings", label: "Strings" },
        { path: "/php/file_handling", label: "File Handling" },
        { path: "/php/forms", label: "Forms" },
        { path: "/php/sessions", label: "Sessions" },
        { path: "/php/cookies", label: "Cookies" },
        { path: "/php/oop", label: "Object-Oriented Programming (OOP)" },
        { path: "/php/exceptions", label: "Exception Handling" },
        { path: "/php/namespaces", label: "Namespaces" },
        { path: "/php/traits", label: "Traits" },
        { path: "/php/composer", label: "Composer" },
        { path: "/php/databases", label: "Working with Databases" },
      ],
    },
    python: {
      sub: [
        { path: "/python/datatypes", label: "Data Types" },
        { path: "/python/variables", label: "Variables" },
        { path: "/python/operators", label: "Operators" },
        { path: "/python/control_structures", label: "Control Structures" },
        { path: "/python/functions", label: "Functions" },
        { path: "/python/arrays", label: "Arrays" },
        { path: "/python/loops", label: "Loops" },
        { path: "/python/classes", label: "Classes" },
        { path: "/python/modules", label: "Modules" },
        { path: "/python/file_handling", label: "File Handling" },
        { path: "/python/exceptions", label: "Exception Handling" },
        { path: "/python/generators", label: "Generators" },
        { path: "/python/iterators", label: "Iterators" },
        { path: "/python/lambdas", label: "Lambda Functions" },
        { path: "/python/regex", label: "Regular Expressions" },
        { path: "/python/oop", label: "Object-Oriented Programming" },
        { path: "/python/multithreading", label: "Multithreading" },
        { path: "/python/multiprocessing", label: "Multiprocessing" },
        { path: "/python/asyncio", label: "Asyncio" },
        { path: "/python/machine_learning", label: "Machine Learning" },
      ],
    },
    ruby: {
      sub: [
        { path: "/ruby/datatypes", label: "Data Types" },
        { path: "/ruby/variables", label: "Variables" },
        { path: "/ruby/operators", label: "Operators" },
        { path: "/ruby/control_structures", label: "Control Structures" },
        { path: "/ruby/functions", label: "Functions" },
        { path: "/ruby/classes", label: "Classes" },
        { path: "/ruby/modules", label: "Modules" },
        { path: "/ruby/blocks", label: "Blocks" },
        { path: "/ruby/iterators", label: "Iterators" },
        { path: "/ruby/arrays", label: "Arrays" },
        { path: "/ruby/hashes", label: "Hashes" },
        { path: "/ruby/oop", label: "Object-Oriented Programming" },
        { path: "/ruby/exceptions", label: "Exception Handling" },
        { path: "/ruby/metaprogramming", label: "Metaprogramming" },
        { path: "/ruby/file_handling", label: "File Handling" },
      ],
    },
    swift: {
      sub: [
        { path: "/swift/datatypes", label: "Data Types" },
        { path: "/swift/variables", label: "Variables" },
        { path: "/swift/constants", label: "Constants" },
        { path: "/swift/control_structures", label: "Control Structures" },
        { path: "/swift/functions", label: "Functions" },
        { path: "/swift/closures", label: "Closures" },
        { path: "/swift/optionals", label: "Optionals" },
        { path: "/swift/arrays", label: "Arrays" },
        { path: "/swift/dictionaries", label: "Dictionaries" },
        { path: "/swift/loops", label: "Loops" },
        { path: "/swift/structs", label: "Structs" },
        { path: "/swift/classes", label: "Classes" },
        { path: "/swift/protocols", label: "Protocols" },
        { path: "/swift/error_handling", label: "Error Handling" },
        { path: "/swift/extensions", label: "Extensions" },
        { path: "/swift/generics", label: "Generics" },
        { path: "/swift/multithreading", label: "Multithreading" },
      ],
    },
    typescript: {
      sub: [
        { path: "/typescript/datatypes", label: "Data Types" },
        { path: "/typescript/variables", label: "Variables" },
        { path: "/typescript/functions", label: "Functions" },
        { path: "/typescript/interfaces", label: "Interfaces" },
        { path: "/typescript/classes", label: "Classes" },
        { path: "/typescript/generics", label: "Generics" },
        { path: "/typescript/modules", label: "Modules" },
        { path: "/typescript/union_types", label: "Union Types" },
        { path: "/typescript/tuples", label: "Tuples" },
        { path: "/typescript/advanced_types", label: "Advanced Types" },
        { path: "/typescript/error_handling", label: "Error Handling" },
        { path: "/typescript/enums", label: "Enums" },
        { path: "/typescript/decorators", label: "Decorators" },
        { path: "/typescript/multithreading", label: "Multithreading" },
        { path: "/typescript/asynchronous_programming", label: "Asynchronous Programming" },
      ],
    },
    html: {
      sub: [
        { path: "/html/elements", label: "HTML Elements" },
        { path: "/html/attributes", label: "HTML Attributes" },
        { path: "/html/forms", label: "HTML Forms" },
        { path: "/html/tables", label: "HTML Tables" },
        { path: "/html/lists", label: "HTML Lists" },
        { path: "/html/media", label: "Media (Images, Audio, Video)" },
        { path: "/html/semantic_elements", label: "Semantic Elements" },
        { path: "/html/forms_and_validation", label: "Forms and Validation" },
        { path: "/html/html5", label: "HTML5" },
        { path: "/html/meta_tags", label: "Meta Tags" },
      ],
    },
    css: {
      sub: [
        { path: "/css/selectors", label: "CSS Selectors" },
        { path: "/css/box_model", label: "Box Model" },
        { path: "/css/flexbox", label: "Flexbox" },
        { path: "/css/grid", label: "Grid Layout" },
        { path: "/css/media_queries", label: "Media Queries" },
        { path: "/css/pseudo_classes", label: "Pseudo-classes" },
        { path: "/css/pseudo_elements", label: "Pseudo-elements" },
        { path: "/css/animations", label: "Animations" },
        { path: "/css/transitions", label: "Transitions" },
        { path: "/css/variables", label: "CSS Variables" },
        { path: "/css/responsive_design", label: "Responsive Design" },
        { path: "/css/shadows", label: "Box Shadows" },
        { path: "/css/gradients", label: "Gradients" },
        { path: "/css/z-index", label: "z-index" },
      ],
    },
    javascript: {
      sub: [
        { path: "/javascript/variables", label: "Variables" },
        { path: "/javascript/data_types", label: "Data Types" },
        { path: "/javascript/functions", label: "Functions" },
        { path: "/javascript/objects", label: "Objects" },
        { path: "/javascript/arrays", label: "Arrays" },
        { path: "/javascript/es6", label: "ES6 Features" },
        { path: "/javascript/promises", label: "Promises" },
        { path: "/javascript/async_await", label: "Async/Await" },
        { path: "/javascript/event_handling", label: "Event Handling" },
        { path: "/javascript/dom_manipulation", label: "DOM Manipulation" },
        { path: "/javascript/error_handling", label: "Error Handling" },
        { path: "/javascript/json", label: "JSON" },
        { path: "/javascript/closures", label: "Closures" },
        { path: "/javascript/arrow_functions", label: "Arrow Functions" },
        { path: "/javascript/classes", label: "Classes" },
        { path: "/javascript/prototypes", label: "Prototypes" },
      ],
    },
    tailwind: {
      sub: [
        { path: "/tailwind/installation", label: "Installation" },
        { path: "/tailwind/utility_classes", label: "Utility Classes" },
        { path: "/tailwind/responsive_design", label: "Responsive Design" },
        { path: "/tailwind/flexbox", label: "Flexbox" },
        { path: "/tailwind/grid", label: "Grid" },
        { path: "/tailwind/spacing", label: "Spacing" },
        { path: "/tailwind/typography", label: "Typography" },
        { path: "/tailwind/backgrounds", label: "Backgrounds" },
        { path: "/tailwind/colors", label: "Colors" },
        { path: "/tailwind/transforms", label: "Transforms" },
        { path: "/tailwind/transitions", label: "Transitions" },
        { path: "/tailwind/customization", label: "Customization" },
        { path: "/tailwind/plugins", label: "Plugins" },
        { path: "/tailwind/animations", label: "Animations" },
      ],
    },
    "react-js": {
      sub: [
        { path: "/reactjs/components", label: "Components" },
        { path: "/reactjs/jsx", label: "JSX" },
        { path: "/reactjs/props", label: "Props" },
        { path: "/reactjs/state", label: "State" },
        { path: "/reactjs/hooks", label: "Hooks" },
        { path: "/reactjs/lifecycle", label: "Lifecycle Methods" },
        { path: "/reactjs/context_api", label: "Context API" },
        { path: "/reactjs/forms", label: "Forms" },
        { path: "/reactjs/event_handling", label: "Event Handling" },
        { path: "/reactjs/react_router", label: "React Router" },
        { path: "/reactjs/refs", label: "Refs" },
        { path: "/reactjs/hoc", label: "Higher-Order Components (HOC)" },
        { path: "/reactjs/redux", label: "Redux" },
        { path: "/reactjs/styling", label: "Styling Components" },
        { path: "/reactjs/error_boundaries", label: "Error Boundaries" },
        { path: "/reactjs/rendering_performance", label: "Rendering Performance" },
      ],
    },
    "next-js": {
      sub: [
        { path: "/nextjs/getting_started", label: "Getting Started" },
        { path: "/nextjs/pages", label: "Pages and Routing" },
        { path: "/nextjs/static_generation", label: "Static Generation" },
        { path: "/nextjs/server_side_rendering", label: "Server-Side Rendering" },
        { path: "/nextjs/api_routes", label: "API Routes" },
        { path: "/nextjs/styling", label: "Styling Options" },
        { path: "/nextjs/data_fetching", label: "Data Fetching" },
        { path: "/nextjs/optimizing", label: "Optimizing Performance" },
        { path: "/nextjs/environment_variables", label: "Environment Variables" },
        { path: "/nextjs/deployment", label: "Deployment" },
        { path: "/nextjs/middleware", label: "Middleware" },
        { path: "/nextjs/internationalization", label: "Internationalization" },
        { path: "/nextjs/image_optimization", label: "Image Optimization" },
        { path: "/nextjs/advanced_routing", label: "Advanced Routing" },
        { path: "/nextjs/typescript", label: "Using TypeScript with Next.js" },
      ],
    },
    flask: {
      sub: [
        { path: "/flask/getting_started", label: "Getting Started" },
        { path: "/flask/routing", label: "Routing" },
        { path: "/flask/templates", label: "Templates" },
        { path: "/flask/static_files", label: "Static Files" },
        { path: "/flask/forms", label: "Forms" },
        { path: "/flask/database", label: "Database Integration" },
        { path: "/flask/sessions", label: "Sessions" },
        { path: "/flask/authentication", label: "Authentication" },
        { path: "/flask/rest_api", label: "REST API" },
        { path: "/flask/deployment", label: "Deployment" },
        { path: "/flask/middleware", label: "Middleware" },
        { path: "/flask/testing", label: "Testing" },
      ],
    },
    django: {
      sub: [
        { path: "/django/getting_started", label: "Getting Started" },
        { path: "/django/models", label: "Models" },
        { path: "/django/views", label: "Views" },
        { path: "/django/templates", label: "Templates" },
        { path: "/django/urls", label: "URLs and Routing" },
        { path: "/django/forms", label: "Forms" },
        { path: "/django/authentication", label: "Authentication" },
        { path: "/django/admin", label: "Admin Interface" },
        { path: "/django/database", label: "Database Integration" },
        { path: "/django/signals", label: "Signals" },
        { path: "/django/static_and_media", label: "Static and Media Files" },
        { path: "/django/caching", label: "Caching" },
        { path: "/django/testing", label: "Testing" },
        { path: "/django/deployment", label: "Deployment" },
      ],
    },
    "node-js": {
      sub: [
        { path: "/nodejs/getting_started", label: "Getting Started" },
        { path: "/nodejs/modules", label: "Modules" },
        { path: "/nodejs/file_system", label: "File System" },
        { path: "/nodejs/http", label: "HTTP Module" },
        { path: "/nodejs/events", label: "Events" },
        { path: "/nodejs/streams", label: "Streams" },
        { path: "/nodejs/process", label: "Process Module" },
        { path: "/nodejs/error_handling", label: "Error Handling" },
        { path: "/nodejs/promise", label: "Promise and Async/Await" },
        { path: "/nodejs/rest_api", label: "Building REST APIs" },
        { path: "/nodejs/authentication", label: "Authentication" },
        { path: "/nodejs/websockets", label: "WebSockets" },
        { path: "/nodejs/testing", label: "Testing with Node.js" },
        { path: "/nodejs/deployment", label: "Deployment" },
      ],
    },
    "express-js": {
      sub: [
        { path: "/expressjs/getting_started", label: "Getting Started" },
        { path: "/expressjs/routing", label: "Routing" },
        { path: "/expressjs/middleware", label: "Middleware" },
        { path: "/expressjs/static_files", label: "Serving Static Files" },
        { path: "/expressjs/forms", label: "Forms and Body Parsing" },
        { path: "/expressjs/sessions", label: "Sessions and Cookies" },
        { path: "/expressjs/authentication", label: "Authentication" },
        { path: "/expressjs/database", label: "Database Integration" },
        { path: "/expressjs/error_handling", label: "Error Handling" },
        { path: "/expressjs/rest_api", label: "Building REST APIs" },
        { path: "/expressjs/websockets", label: "WebSockets" },
        { path: "/expressjs/deployment", label: "Deployment" },
        { path: "/expressjs/testing", label: "Testing" },
      ],
    },
    springboot: {
      sub: [
        { path: "/springboot/getting_started", label: "Getting Started" },
        { path: "/springboot/mvc", label: "Spring MVC" },
        { path: "/springboot/data_jpa", label: "Spring Data JPA" },
        { path: "/springboot/rest_api", label: "Building REST APIs" },
        { path: "/springboot/thymeleaf", label: "Thymeleaf Integration" },
        { path: "/springboot/security", label: "Spring Security" },
        { path: "/springboot/testing", label: "Testing" },
        { path: "/springboot/deployment", label: "Deployment" },
        { path: "/springboot/logging", label: "Logging" },
        { path: "/springboot/caching", label: "Caching" },
        { path: "/springboot/scheduling", label: "Task Scheduling" },
        { path: "/springboot/websockets", label: "WebSockets" },
        { path: "/springboot/microservices", label: "Microservices" },
        { path: "/springboot/actuator", label: "Spring Boot Actuator" },
      ],
    },
    fastapi: {
      sub: [
        { path: "/fastapi/getting_started", label: "Getting Started" },
        { path: "/fastapi/routing", label: "Routing" },
        { path: "/fastapi/path_parameters", label: "Path and Query Parameters" },
        { path: "/fastapi/validation", label: "Data Validation" },
        { path: "/fastapi/dependencies", label: "Dependencies" },
        { path: "/fastapi/authentication", label: "Authentication" },
        { path: "/fastapi/database", label: "Database Integration" },
        { path: "/fastapi/cookies", label: "Cookies and Sessions" },
        { path: "/fastapi/rest_api", label: "Building REST APIs" },
        { path: "/fastapi/testing", label: "Testing" },
        { path: "/fastapi/deployment", label: "Deployment" },
        { path: "/fastapi/websockets", label: "WebSockets" },
        { path: "/fastapi/background_tasks", label: "Background Tasks" },
      ],
    },
    aptitude: {
        sub : [
          { path: "/problems-on-trains", label: "Problems on Trains" , subject:"Aptitude"},
          { path: "/time-and-distance", label: "Time and Distance", subject:"Aptitude" },
          { path: "/height-and-distance", label: "Height and Distance", subject:"Aptitude" },
          { path: "/time-and-work", label: "Time and Work", subject:"Aptitude" },
          { path: "/simple-interest", label: "Simple Interest", subject:"Aptitude" },
          { path: "/compound-interest", label: "Compound Interest", subject:"Aptitude" },
          { path: "/profit-and-loss", label: "Profit and Loss", subject:"Aptitude" },
          { path: "/partnership", label: "Partnership", subject:"Aptitude" },
          { path: "/percentage", label: "Percentage", subject:"Aptitude" },
          { path: "/problems-on-ages", label: "Problems on Ages", subject:"Aptitude" },
          { path: "/calendar", label: "Calendar", subject:"Aptitude" },
          { path: "/clock", label: "Clock", subject:"Aptitude" },
          { path: "/average", label: "Average", subject:"Aptitude" },
          { path: "/area", label: "Area", subject:"Aptitude" },
          { path: "/volume-and-surface-area", label: "Volume and Surface Area", subject:"Aptitude" },
          { path: "/permutation-and-combination", label: "Permutation and Combination", subject:"Aptitude" },
          { path: "/numbers", label: "Numbers", subject:"Aptitude" },
          { path: "/problems-on-numbers", label: "Problems on Numbers", subject:"Aptitude" },
          { path: "/hcf-and-lcm", label: "Problems on H.C.F and L.C.M", subject:"Aptitude" },
          { path: "/decimal-fraction", label: "Decimal Fraction", subject:"Aptitude" },
          { path: "/simplification", label: "Simplification", subject:"Aptitude" },
          { path: "/square-root-and-cube-root", label: "Square Root and Cube Root", subject:"Aptitude" },
          { path: "/surds-and-indices", label: "Surds and Indices", subject:"Aptitude" },
          { path: "/ratio-and-proportion", label: "Ratio and Proportion", subject:"Aptitude" },
          { path: "/chain-rule", label: "Chain Rule", subject:"Aptitude" },
          { path: "/pipes-and-cistern", label: "Pipes and Cistern", subject:"Aptitude" },
          { path: "/boats-and-streams", label: "Boats and Streams", subject:"Aptitude" },
          { path: "/alligation-or-mixture", label: "Alligation or Mixture", subject:"Aptitude" },
          { path: "/logarithm", label: "Logarithm", subject:"Aptitude" },
          { path: "/races-and-games", label: "Races and Games", subject:"Aptitude" },
          { path: "/stocks-and-shares", label: "Stocks and Shares", subject:"Aptitude" },
          { path: "/probability", label: "Probability", subject:"Aptitude" },
          { path: "/true-discount", label: "True Discount", subject:"Aptitude" },
          { path: "/bankers-discount", label: "Banker's Discount", subject:"Aptitude" }
        ]
    },
    "machine Learning": {
        sub : [
          { path: "/introduction", label: "Introduction to Machine Learning", subject:"Machine Learning" },
          { path: "/data-preprocessing", label: "Data Preprocessing", subject:"Machine Learning" },
          { path: "/supervised-learning", label: "Supervised Learning", subject:"Machine Learning" },
          { path: "/linear-regression", label: "Linear Regression", subject:"Machine Learning" },
          { path: "/logistic-regression", label: "Logistic Regression", subject:"Machine Learning" },
          { path: "/decision-trees", label: "Decision Trees", subject:"Machine Learning" },
          { path: "/random-forest", label: "Random Forest", subject:"Machine Learning" },
          { path: "/svm", label: "Support Vector Machines (SVM)", subject:"Machine Learning" },
          { path: "/naive-bayes", label: "Naive Bayes", subject:"Machine Learning" },
          { path: "/k-nearest-neighbors", label: "K-Nearest Neighbors (KNN)", subject:"Machine Learning" },
          { path: "/unsupervised-learning", label: "Unsupervised Learning", subject:"Machine Learning" },
          { path: "/clustering", label: "Clustering (e.g., K-Means)", subject:"Machine Learning" },
          { path: "/dimensionality-reduction", label: "Dimensionality Reduction (e.g., PCA)", subject:"Machine Learning" },
          { path: "/model-evaluation", label: "Model Evaluation and Validation", subject:"Machine Learning" },
          { path: "/hyperparameter-tuning", label: "Hyperparameter Tuning", subject:"Machine Learning" },
          { path: "/deployment", label: "Model Deployment", subject:"Machine Learning" },
        ]
    }
  };

  return (
    <div className="lg:grid lg:grid-cols-3 gap-10 p-10 flex flex-col">
      <div className="text-center bg-[#ebe7de5b] p-2 rounded-md shadow-lg border">
        <h1 className="bg-[#e4e2e2] text-2xl text-center rounded-md my-2">
          Topics
        </h1>
        <div className="flex flex-col md:space-y-12 space-y-8 my-5 max-h-[60vh] overflow-y-scroll">
          {topics[subject].sub?.map((topic, index) => (
            <p key={index} className="text-xl text-center cursor-pointer" onClick={() => renderContent(topic.label, subject)}>{topic.label}</p>
          ))}
        </div>
      </div>

      <div className="text-center bg-[#ebe7de5b] p-2 rounded-md shadow-lg border col-span-2">
        <h1 className="bg-[#e4e2e2] text-2xl text-center rounded-md my-2" >
          Short Notes
        </h1>
      </div>
    </div>
    // <></>
  );
}

export default Topic;
