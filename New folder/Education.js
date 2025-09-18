const educations = [
  {
    degree: "Bachelor of Information Technology",
    institution: "RMIT Vietnam",
    duration: "2024 - 2027 (expected)",
    description: "Major in Information Technology. GPA: 3.5/4.0. Have some great achievements in programming contests."
  },
  {
    degree: "High School Diploma",
    institution: "High School of Programming",
    duration: "Jun 2021 - Nov 2024",
    description: "Graduated with a GPA of 8.5/10. Best years of my life."
  }
];

const degree = document.getElementById("degree")
const insitution = document.getElementById("institution")
const duration = document.getElementById("duration")
const description = document.getElementById("description")
const edu = document.getElementById("education")
const button = document.getElementById("btn")


function enterEdu(education, index){
    const li = document.createElement("li")
    li.className = "edu-card";
    li.dataset.index = index;
    li.innerHTML = `<strong>${education.degree}</strong><br>
                    ${education.institution}<br>
                    ${education.duration}
                    <p>${education.description}</p>
                    <button class="remove" title="REMOVE">🗑️</button>`;
    return li;
}
function renderAll(){
    edu.innerHTML = "";
    educations.forEach((education, index) =>{
        edu.appendChild(enterEdu(education, index));
    });
}


function addEdu(){
    const degreeInput = degree.value.trim();
    const InsitutionInput = insitution.value.trim();
    const DurationInput = duration.value.trim();
    const descriptionInput = description.value.trim();

    if(degreeInput === "" || InsitutionInput === "" || DurationInput === "" || descriptionInput === ""){
        return;
    }
        
    const newEdu = {
        degree:degreeInput,
        insitution: InsitutionInput,
        duration:DurationInput,
        description:descriptionInput
    };
    educations.push(newEdu);
    renderAll();
    
    degree.value = "";
    insitution.value = "";
    duration.value = "";
    description.value = "";
}
edu.addEventListener("click", e => {
    if (e.target.classList.contains("remove")){
        const li = e.target.closest("li");
        const index = Number(li.dataset.index);

        educations.splice(index,1);
        renderAll();
    }
});

button.addEventListener("click", addEdu);
[degree, insitution, duration, description].forEach(input =>
    input.addEventListener("keydown", e =>{
        if(e.key === "Enter") addEdu();
    })
);

renderAll();
