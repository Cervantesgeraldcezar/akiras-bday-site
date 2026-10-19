function showGreeting() {
  const name = document.getElementById('name').value;
  const birthday = document.getElementById('birthday').value;
  const age = document.getElementById('age').value;

  if(name && birthday && age) {
    document.body.innerHTML = `
      <div class="birthday-bg">
        🎉 Happy ${age}th Birthday, ${name}! 🎉
      </div>
    `;
  } else {
    document.getElementById('greeting').innerText = "Please fill in all fields!";
  }
}
function showGreeting() {
  const name = document.getElementById('name').value;
  const birthday = document.getElementById('birthday').value;
  const age = document.getElementById('age').value;

  if(name && birthday && age) {
    document.body.innerHTML = `
      <div class="birthday-bg">
        🌹 Happy ${age}th Birthday, ${name}! 🌹
      </div>
    `;

    // Add roses
    for(let i=0; i<15; i++) {
      let rose = document.createElement("div");
      rose.className = "rose";
      rose.style.left = Math.random() * window.innerWidth + "px";
      rose.style.top = Math.random() * window.innerHeight + "px";
      rose.style.animationDuration = (4 + Math.random()*4) + "s";
      document.body.appendChild(rose);
    }

    // Add confetti
    for(let i=0; i<50; i++) {
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
      confetti.style.animationDuration = (2 + Math.random()*3) + "s";
      document.body.appendChild(confetti);
    }

  } else {
    document.getElementById('greeting').innerText = "Please fill in all fields!";
  }
}
function showGreeting() {
  const name = document.getElementById('name').value;
  const birthday = document.getElementById('birthday').value;
  const age = document.getElementById('age').value;

  if(name && birthday && age) {
    document.body.innerHTML = `
      <div class="birthday-bg">
        🌹 Happy ${age}th Birthday, ${name}! 🌹
      </div>
    `;

    // Add roses
    for(let i=0; i<15; i++) {
      let rose = document.createElement("div");
      rose.className = "rose";
      rose.style.left = Math.random() * window.innerWidth + "px";
      rose.style.top = Math.random() * window.innerHeight + "px";
      rose.style.animationDuration = (4 + Math.random()*4) + "s";
      document.body.appendChild(rose);
    }

    // Add confetti
    for(let i=0; i<50; i++) {
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
      confetti.style.animationDuration = (2 + Math.random()*3) + "s";
      document.body.appendChild(confetti);
    }

  } else {
    document.getElementById('greeting').innerText = "Please fill in all fields!";
  }
}
function showGreeting() {
  const name = document.getElementById('name').value;
  const birthday = document.getElementById('birthday').value;
  const age = document.getElementById('age').value;

  if(name && birthday && age) {
    document.body.innerHTML = `
      <div class="birthday-bg">
        🌹 Happy ${age}th Birthday, ${name}! 🌹
      </div>
    `;

    // Add roses
    for(let i=0; i<15; i++) {
      let rose = document.createElement("div");
      rose.className = "rose";

      // Add extra petals
      let petal1 = document.createElement("span");
      let petal2 = document.createElement("span");
      rose.appendChild(petal1);
      rose.appendChild(petal2);

      rose.style.left = Math.random() * window.innerWidth + "px";
      rose.style.top = Math.random() * window.innerHeight + "px";
      rose.style.animationDuration = (4 + Math.random()*4) + "s";
      document.body.appendChild(rose);
    }

    // Add confetti
    for(let i=0; i<50; i++) {
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
      confetti.style.animationDuration = (2 + Math.random()*3) + "s";
      document.body.appendChild(confetti);
    }

  } else {
    document.getElementById('greeting').innerText = "Please fill in all fields!";
  }
}
function showGreeting() {
  const name = document.getElementById('name').value;
  const birthday = document.getElementById('birthday').value;
  const age = document.getElementById('age').value;

  if(name && birthday && age) {
    document.body.innerHTML = `
      <div class="birthday-bg">
        🌹 Happy ${age}th Birthday, ${name}! 🌹
      </div>
    `;

    // Add roses with stems and leaves
    for(let i=0; i<15; i++) {
      let rose = document.createElement("div");
      rose.className = "rose";

      // Stem
      let stem = document.createElement("div");
      stem.className = "stem";
      rose.appendChild(stem);

      // Leaves
      let leafLeft = document.createElement("div");
      leafLeft.className = "leaf left";
      let leafRight = document.createElement("div");
      leafRight.className = "leaf right";
      rose.appendChild(leafLeft);
      rose.appendChild(leafRight);

      rose.style.left = Math.random() * window.innerWidth + "px";
      rose.style.top = Math.random() * window.innerHeight + "px";
      rose.style.animationDuration = (4 + Math.random()*4) + "s";
      document.body.appendChild(rose);
    }

    // Confetti
    for(let i=0; i<50; i++) {
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
      confetti.style.animationDuration = (2 + Math.random()*3) + "s";
      document.body.appendChild(confetti);
    }

  } else {
    document.getElementById('greeting').innerText = "Please fill in all fields!";
  }
}
function login() {
  const name = document.getElementById('name').value;
  const birthday = document.getElementById('birthday').value;
  const age = document.getElementById('age').value;

  if(name && birthday && age) {
    // Save details to localStorage so we can use them on the next page
    localStorage.setItem("username", name);
    localStorage.setItem("age", age);
    localStorage.setItem("birthday", birthday);

    // Redirect to letters page
    window.location.href = "letters.html";
  } else {
    document.getElementById('greeting').innerText = "Please fill in all fields!";
  }
}
