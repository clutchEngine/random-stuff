const companyName = "example";

const cnElements = document.querySelectorAll(".cn-element");
cnElements.forEach((cnElement)=>{
  cnElement.innerText = companyName;
});
