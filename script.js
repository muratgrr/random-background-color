const button = document.querySelector("button");
const body = document.querySelector("#body");

// console.log(text.data);
// console.log(p.innerText);
const p = document.createElement("p");
button.appendChild(p);

button.addEventListener("click", function () {
  const rasSayi1 = Math.floor(Math.random() * 256);
  const rasSayi2 = Math.floor(Math.random() * 256);
  const rasSayi3 = Math.floor(Math.random() * 256);
  const rasRenk = `RGB(${rasSayi1}, ${rasSayi2}, ${rasSayi3})`;
  body.style.backgroundColor = rasRenk;
  //   const text = document.createTextNode("RENK : ");
  //   p.appendChild(text);
  p.innerText = "RENK : " + rasRenk;
});
