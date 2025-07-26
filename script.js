
const menu=document.querySelector("#menu")
const nav=document.querySelector(".links")
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("OTV_tV3v8AL24PPb-"); // Replace with your actual public key

  const form = document.querySelector("form");
  const submitBtn = document.getElementById("submitBtn");
  const responseBox = document.getElementById("form-response");

  submitBtn.addEventListener("click", function () {
    // Optional: Basic validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      responseBox.textContent = "⚠️ Please fill out all fields.";
      responseBox.style.color = "orange";
      return;
    }

    emailjs.sendForm("service_rsq9sqc", "template_78hgxvn", form)
      .then(() => {
        responseBox.textContent = "✅ Message sent successfully!";
        responseBox.style.color = "lightgreen";
        form.reset();
      })
      .catch((error) => {
        responseBox.textContent = "❌ Message failed. Please try again.";
        responseBox.style.color = "red";
        console.error("EmailJS Error:", error);
      });
  });
});