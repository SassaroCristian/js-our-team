const pageOutput = document.getElementById("pageOutput")

const teamMembers = [
    {
        firstName: "Wayne",
        surname: "Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        firstName: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        firstName: "Walter",
        surname: "Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg" 
    },
    {
        firstName: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        firstName: "Scott",
        surname: "Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        firstName: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]

OutputText = [""]

for (let i = 0; i < teamMembers.length; i++) {
    // console.log(`firstName: ${teamMembers[i].firstName} - surname: ${teamMembers[i].surname} - role: ${teamMembers[i].role} - photo: ${teamMembers[i].photo}`);
    OutputText += `firstName: ${teamMembers[i].firstName} - surname: ${teamMembers[i].surname} - role: ${teamMembers[i].role} - photo: ${teamMembers[i].photo}<br>`
}


pageOutput.innerHTML = OutputText;