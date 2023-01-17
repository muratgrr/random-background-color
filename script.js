const button = document.querySelector("button");
const body = document.querySelector("#body");

// console.log(text.data);
// console.log(p.innerText);
const p = document.createElement("p");
button.appendChild(p);

button.addEventListener("click", function () {
  const randomNum1 = Math.floor(Math.random() * 256);
  const randomNum2 = Math.floor(Math.random() * 256);
  const randomNum3 = Math.floor(Math.random() * 256);
  const rasRenk = `RGB(${randomNum1}, ${randomNum2}, ${randomNum3})`;
  body.style.backgroundColor = rasRenk;
  //   const text = document.createTextNode("RENK : ");
  //   p.appendChild(text);
  p.innerText = "COLOR : " + rasRenk;
});
