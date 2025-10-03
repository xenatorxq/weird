const correctPassword = "tayan ko"; // change your password here

const noteText = `happy bf’s day 🤍 almost 3 weeks pa lang tayong 
magkausap pero parang ang dami ko nang na-feel at 
natutunan dahil sayo. hindi ko talaga in-expect na 
magiging ganito ka ka-special sa life ko in such a
short time. ang gaan ng bawat usap natin, and sobrang 
grateful ako kasi dumating ka at pinili mong mag-stay 
kahit na minsan feeling ko pabigat ako. thank you 
kasi you always remind me na hindi ako gano’n 
in your eyes, and that means so much to me.

gusto ko lang din sabihin na sobrang na-appreciate ko
yung patience at understanding mo. kahit na may times 
na hindi ako okay, hindi mo ako tinatrato as less, 
kundi pinaparamdam mo pa lalo na safe ako sayo. 
and kahit hindi pa tayo officially anything, promise, 
I’ll keep choosing you kasi ikaw yung naging reason kung 
bakit mas gusto kong mag-heal, magpahinga, at maging 
better version ng sarili ko. so ayan, happy bf’s 
day ulit. thank you for making me feel cared for 
and seen, love. kahit simple lang ‘to, 
sana maramdaman mo how much you mean to me already.`;

// check password
function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    // switch screens
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("note-screen").classList.remove("hidden");

    // reset typing each time
    document.getElementById("typed-text").innerHTML = "";
    i = 0;

    // start typewriter
    typeWriter();
    playThunder();
  } else {
    alert("Wrong password!");
  }
}

// typewriter effect
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

// show button after typing
function showNextButton() {
  const note = document.querySelector(".note");
  const btn = document.createElement("button");
  btn.textContent = "i like you so much, click this btw";
  btn.classList.add("mc-button");
  btn.onclick = () => {
    document.getElementById("popup-modal").classList.remove("hidden");
  };
  note.appendChild(btn);
}

// close modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("popup-modal");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.onclick = () => modal.classList.add("hidden");

  window.onclick = (event) => {
    if (event.target === modal) modal.classList.add("hidden");
  };
});

// play audio after delay
function playThunder() {
  const thunder = document.getElementById("thunder-sound");
  setTimeout(() => thunder.play(), 1000); // thunder after 3 sec
}

// allow pressing enter key to submit password
document.getElementById("password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});