// src/components/snippet/snippet.stories.js
import "./snippet.js";

export default { title: "Components/Snippet" };

export const Basic = () => {
  const el = document.createElement("tt-snippet");
  el.language = "javascript";
  el.copy = true;
  el.innerText = `const hello = 'world';\nconsole.log(hello);`;
  return el;
};

export const WithFilenameAndCopy = () => {
  const el = document.createElement("tt-snippet");
  el.language = "javascript";
  el.filename = "example.js";
  el.copy = true;
  el.innerText = `export function greet(name) {\n  return \`Hello, \${name}\`;\n}`;
  return el;
};

export const Highlighted = async () => {
  const el = document.createElement("tt-snippet");
  el.language = "javascript";
  el.innerText = `function add(a,b){return a+b}\nconsole.log(add(1,2));`;
  requestAnimationFrame(async () => {
    await el._ensureHighlight();
  });
  return el;
};
