const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = " 🌙 Dark Mode "; 
  } else {
    toggleBtn.textContent = " 🌞 Light Mode "; 
  }
});
const skills = {
    "C": 80,
    "C++": 75,
    "Python": 70,
    "HTML": 90,
    "CSS": 85,
    "MySQL": 65
};

window.onload = () => {
    let skillsDiv = document.getElementById("skills-progress");
    for (let skill in skills) {
        let bar = document.createElement("div");
        bar.innerHTML = `<strong>${skill}</strong>
            <div class="bar"><div class="fill" style="width:0%"></div></div>`;
        skillsDiv.appendChild(bar);

        setTimeout(() => {
            bar.querySelector(".fill").style.width = skills[skill] + "%";
        }, 500);
    }
};

function calculateAge(birthYear, birthMonth, birthDay) {
    let today = new Date();
    let birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
document.getElementById("age").innerText = calculateAge(2001, 5, 15); // Example DOB

function typeEffect(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
const title = document.querySelector("h3");
title.innerHTML = "";
typeEffect(title, "Aspiring Full-Stack Developer", 100);

document.getElementById("downloadBtn").addEventListener("click", () => {
  const cvElement = document.getElementById("cv");

  const options = {
    margin:       [0 , 0 , 0 , 0],
    filename:     'My_CV.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'px', format: [1500 , 1800] , orientation: 'portrait' }
  };

  html2pdf().set(options).from(cvElement).save();
});

function copyText(id) {
    let text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert(text + " copied to clipboard!");
}