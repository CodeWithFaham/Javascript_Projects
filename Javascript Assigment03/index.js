01
const mainContent = document.getElementById("main-content");

02
const childElements = mainContent.children;
console.log(childElements);  // Displays all child elements in the console.

03
const renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML); // Displays innerHTML in the console.
}

04
const firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Alex";

05
const lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Bank";

const emailInput = document.getElementById("email");
emailInput.value = "alexbank@example.com";


