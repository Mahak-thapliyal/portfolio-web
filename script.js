
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

function handleChat(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chat-input");
    const msg = input.value.trim();
    if (!msg) return;

    addMessage("You", msg);
    generateResponse(msg.toLowerCase());
    input.value = "";
  }
}

function addMessage(sender, text) {
  const chat = document.getElementById("chat-messages");
  const message = document.createElement("div");
 message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function generateResponse(msg) {
  let response = "Hmm, I’m still learning 😅";

  if (msg.includes("name")) response = "I'm Mahak, a Data Science enthusiast!";
  else if (msg.includes("skills")) response = "Python, C++, HTML, CSS, JavaScript, ML";
  else if (msg.includes("college")) response = "CGC Landran – Computer Science Engineering!";
  else if (msg.includes("resume")) response = "Click the 'Download Resume' button above!";
  else if (msg.includes("projects")) response = "Made three major projects, Hr and job recruitment web app, scam detection and voice assistant you can read about them!";

  setTimeout(() => addMessage("MahakBot", response), 500);
}
