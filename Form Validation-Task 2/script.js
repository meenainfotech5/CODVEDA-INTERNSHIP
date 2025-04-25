document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    if (!nameInput) {
      console.error("Name input field not found!");
      return;
    }

    const name = nameInput.value.trim();
    successMsg.style.display = "none"; // reset message

    if (name === "") {
      alert("Please Enter Your Name");
      return;
    }

    successMsg.style.display = "block";
    successMsg.innerText = "Registration Successful!";
 
 });
  
 form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numberInput = document.getElementById("number");
    if (!numberInput) {
      console.error("Number input field not found!");
      return;
    }

    const name = numberInput.value.trim();
    successMsg.style.display = "none"; // reset message

    if (name === "") {
      alert("Please Enter Your Contact number");
      return;
    }

    successMsg.style.display = "block";
    successMsg.innerText = "Registration Successful!";
 
 });





























});
