// <div>
{
  /* <div id=parent> 
  <div id=child>
  <h1>this is h1</h1>
  <h2>this is h2</h2>
  <div>

</div> */
}

{
  /* <div id="heading">
  <h1>Hello world new to react</h1>
</div> */
}

// const heading= React.createElement("h1", {}, "Hello world to react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }),
  [
  React.createElement("h1",{},"i am an h1 tag"),
  React.createElement("h2",{},"i am an h2 tag")
  ]
);
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
