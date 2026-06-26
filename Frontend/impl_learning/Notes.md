# Frontend Notes (Modules 1–5)

## Module 1 - Browser Rendering Pipeline

### Browser Workflow

```
HTML
 ↓
DOM

CSS
 ↓
CSSOM

DOM + CSSOM
 ↓
Render Tree
 ↓
Layout (Reflow)
 ↓
Paint
 ↓
Composite
 ↓
Visible Webpage
```

### Key Concepts

* **HTML** → Structure
* **CSS** → Styling
* **TypeScript** → Compiled to JavaScript
* **DOM** → Object representation of HTML
* **CSSOM** → Object representation of CSS
* **Render Tree** → Only visible elements
* **Layout** → Calculates size & position
* **Paint** → Draws pixels
* **Composite** → Combines layers efficiently

### Performance

Fast animations:

* `transform`
* `opacity`

Slow animations:

* `width`
* `height`
* `margin`
* `top`
* `left`

---

# Module 2 - DOM

## What is DOM?

DOM (Document Object Model) is the browser's object representation of HTML.

```
HTML
 ↓
Browser
 ↓
DOM Tree
```

Example

```
document
└── html
    └── body
        ├── h1
        └── button
```

## Important Objects

```ts
window
document
document.body
document.head
document.documentElement
```

Useful properties

```ts
document.title
document.URL
document.body.children
```

---

# Module 3 - Selecting Elements

## Most Used ⭐

### Single element

```ts
const title = document.querySelector("#title");
```

### Multiple elements

```ts
const items = document.querySelectorAll(".item");
```

## Other Methods

```ts
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("p");
```

## TypeScript

```ts
const btn = document.querySelector("#btn");
// Element | null
```

Always handle `null`.

```ts
if (btn) {
    // safe
}
```

## HTMLCollection vs NodeList

| HTMLCollection | NodeList             |
| -------------- | -------------------- |
| Live           | Static               |
| No `forEach()` | Supports `forEach()` |

---

# Module 4 - Reading & Modifying Elements

## Text

```ts
element.textContent
element.innerHTML
```

Use:

* `textContent` → Plain text (preferred)
* `innerHTML` → HTML content

Never use `innerHTML` with untrusted user input.

---

## Form Value

```ts
input.value
```

---

## Classes

```ts
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");
```

Prefer `classList` over `className`.

---

## Styles

```ts
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

CSS uses camelCase in JavaScript.

---

## Attributes

```ts
element.getAttribute("src");
element.setAttribute("src", "image.png");
element.removeAttribute("src");
element.hasAttribute("src");
```

---

# Module 5 - Events

## Event Flow

```
User Action
 ↓
Browser detects event
 ↓
Creates Event Object
 ↓
Runs event listeners
 ↓
DOM updates
```

---

## Event Listener

```ts
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

## Event Object

```ts
button.addEventListener("click", (event) => {
    console.log(event);
});
```

Useful properties

```ts
event.target
event.currentTarget
```

---

## Common Events

```ts
click
input
change
keydown
keyup
focus
blur
submit
mouseenter
mouseleave
```

---

## Keyboard

```ts
input.addEventListener("keydown", (e) => {
    console.log(e.key);
});
```

---

## Input Event

```ts
input.addEventListener("input", () => {
    console.log(input.value);
});
```

Runs on every keystroke.

---

## Change Event

```ts
input.addEventListener("change", () => {
    console.log(input.value);
});
```

Runs after editing is complete (typically when the input loses focus).

---

# Most Important APIs ⭐⭐⭐⭐⭐

## Selection

```ts
querySelector()
querySelectorAll()
```

## Content

```ts
textContent
value
```

## Styling

```ts
classList
style
```

## Attributes

```ts
getAttribute()
setAttribute()
```

## Events

```ts
addEventListener()
```

---

# Important TypeScript Types

```ts
Document
Element
HTMLElement
HTMLInputElement
HTMLButtonElement
HTMLHeadingElement
```

---

# Golden Rules

* Prefer `querySelector()` over older selection methods.
* Prefer `textContent` over `innerHTML`.
* Prefer `classList` over `className`.
* Always check for `null`.
* Use `addEventListener()` instead of inline HTML events.
* Use `transform` and `opacity` for smooth animations.
* Avoid `innerHTML` with user input (XSS risk).

---

# Quick Revision

### Rendering Pipeline

```
HTML → DOM
CSS → CSSOM
DOM + CSSOM → Render Tree
→ Layout → Paint → Composite
```

### DOM Workflow

```
Select
 ↓
Read
 ↓
Modify
 ↓
Browser updates UI
```

### Event Workflow

```
User
 ↓
Event
 ↓
Listener
 ↓
Callback
 ↓
DOM Update
```
