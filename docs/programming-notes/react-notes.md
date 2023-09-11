---
outline: deep
---

## Quick React notes

> This note contains some simple things to remember when learning React (personal notes for React).

#

### Structure

Make a `src` folder with the following contents:

```sh
src
├── main.tsx
├── App.tsx # Main App(.tsx) file, will run on startup (unless configured otherwise)
├── assets # Folder with images, videos, etc
│   └── react.svg # Default image for Tauri apps such as Arc
├── components # This is important, see #compontents
│   └── Navbar.tsx # An example Navbar.tsx component
├── context8
├── stores
├── types
```

#

### Using Tailwind CSS

> Tailwind is a framework for writing CSS using utility classes

You can just add Tailwind using Yarn and it'll automatically be used.

#

### Components

> Everything that's big enough (should be/) in React should be done with components.

**Components are very cool, because:**

- You can add them from any other file,
- They keep your codebase structured

**Components are** somewhat like requiring a global file in PHP, except that in React, I like them a bit more.

**This means that** components are basically huge code blocks that are very easy to require on the top of the document, and easily called with `<Component />` where `Component` is the name of the component.

**Passing variables to the component:**
You can easily pass variables to a component, I am yet to learn how, though.

#

### Include a component

```tsx
import Navbar from "./components/Navbar.tsx";
```

And then inside `./components/Navbar.tsx` add:

```tsx
export default function Navbar() {
  // Code
}
```

#

### Throw a return inside a component(.tsx)

You can (almost) always throw a

```tsx
return <div></div>;
```

This means that you can add anything after the `return` and React will render it as HTML.

You usually **use** this inside a `default function`, for example:

```tsx
export default function Navbar() {
  return (
    <div className="flex">
      <h1>Hello!</h1>
    </div>
  );
}
```

You can also add variables, like so:

```tsx
export default function Navbar() {
  const user = "testuser";
  return (
    <div className="flex">
      <h1>Hello {user}!</h1>
    </div>
  );
}
```

#

### Using a function written in another TSX file in your file

```tsx
export default function myFunction() {
  const blue = "blue";
  console.log(blue);
}
```
