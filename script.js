const correctPassword = "083279"; // change your password here

const noteText = `hey... i hope you’re doing fine out there.
Honestly, i’m really glad i got to know you, 
even if it didn’t last long.
sometimes, it feels like the universe just... 
wasn’t on our side.
we couldn’t hold on, no matter how much if wanted to.
maybe... someday, we’ll meet 
again — as better versions of ourselves?
and if our paths never cross again, 
may the world still be kind to you.`;

// Check password
function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    // Switch screens
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("note-screen").classList.remove("hidden");

    // Reset typing each time
    document.getElementById("typed-text").innerHTML = "";
    i = 0;

    // Start typewriter + thunder
    typeWriter();
    playThunder();
  } else {
    alert("Wrong password!");
  }
}

// Typewriter effect
let i = 0;
function typeWriter() {
  if (i < noteText.length) {
    document.getElementById("typed-text").innerHTML += noteText.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // typing speed
  } else {
    showNextButton(); // show button when typing finishes
  }
}

// Show Minecraft-style button after typing
function showNextButton() {
  const note = document.querySelector(".note");
  const btn = document.createElement("button");
  btn.textContent = "remember, i love you.";
  btn.classList.add("mc-button");
  btn.onclick = () => {
    document.getElementById("popup-modal").classList.remove("hidden");
  };
  note.appendChild(btn);
}

// Close modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("popup-modal");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.onclick = () => modal.classList.add("hidden");

  window.onclick = (event) => {
    if (event.target === modal) modal.classList.add("hidden");
  };
});

// Play thunder after delay
function playThunder() {
  const thunder = document.getElementById("thunder-sound");
  setTimeout(() => thunder.play(), 3000); // thunder after 3 sec
}

// Allow pressing Enter key to submit password
document.getElementById("password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});