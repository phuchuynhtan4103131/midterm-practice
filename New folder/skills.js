

const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "ReactJS",
  "NodeJS",
  "UI Design",
  "Python",
  "Java",
  "MongoDB",
  "Responsive Web Design"
];

const input = document.getElementById("item-input");
const btn = document.getElementById("add-btn");
const list = document.getElementById("skills")

function enterSkills(skill){
    const newLi = document.createElement("li");
    newLi.className = "ability"
    newLi.innerHTML = `<span>${skill}</span> <button class="remove" title="Remove">🗑️</button>`;
    return newLi;
}

function renderSkill(){
    list.innerHTML = "";
    skills.forEach( s =>{
        list.appendChild(enterSkills(s));
    })
}

function addSkil(){
    const text = input.value.trim();
    if(text === ""){
        return;
    }
    skills.push(text)
    list.appendChild(enterSkills(text))


    input.value = "";
    input.focus();


}

list.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove")){
        const li = e.target.closest("li");
        const skillName = li.querySelector("span").textContent; 

        const idx = skills.indexOf(skillName);
        if(idx > -1 ) skills.splice(idx, 1);
            li.remove();
    }
})

btn.addEventListener("click", addSkil)
input.addEventListener("keydown", e => {
    if (e.key === "Enter") addSkil();
})
renderSkill();