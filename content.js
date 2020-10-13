if (window.location.href === "https://www.google.com/"){
  document.body.style.backgroundColor = "#FF8A65";
  const h1 = document.createElement("h1");
  h1.style.textAlign = "center";
  const text = document.createTextNode("Hello World");
  h1.appendChild(text);
  document.getElementById("body").appendChild(h1);
}
