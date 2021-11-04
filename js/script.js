
// 1.Creiamo il nostro array di oggetti che rappresentano ciascun membro del team => arrey bidimensionale => ok
// 2. prendo ogni singolo oggetto dell'arrey e li inserisco dentro a delle variabili => for => for in => ok
// 3.  Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team => innerHTML => ok
const stamp = document.getElementById("cont");
const addBtn = document.getElementById("addMemberButton");


let members = [
    {
        "imgMember" : "img/angela-caroll-chief-editor.jpg",
        "nameMember" : "Angela Carroll",
        "roleMember" : "Chief Editor"
    },
    {
        "imgMember" : "img/angela-lopez-social-media-manager.jpg",
        "nameMember" : "Angela Lopez",
        "roleMember" : "Media Manager"
    },
    {
        "imgMember" : "img/barbara-ramos-graphic-designer.jpg",
        "nameMember" : "Barbara Ramos",
        "roleMember" : "Graphic Designer"
    },
    {
        "imgMember" : "img/scott-estrada-developer.jpg",
        "nameMember" : "Scott Estrada",
        "roleMember" : "Developer"
    },
    {
        "imgMember" : "img/walter-gordon-office-manager.jpg",
        "nameMember" : "Walter Gordon",
        "roleMember" : "Office Manager"
    },
    {
        "imgMember" : "img/wayne-barnett-founder-ceo.jpg",
        "nameMember" : "Wayne Barnett",
        "roleMember" : "Founder CEO"
    }
];

let newMember;

for (let i = 0; i < members.length; i++){

    let nameEmpl = '';
    let titleEmpl = '';
    let photoEmpl = '';


    for(let key in members){
        photoEmpl = members[i].imgMember;
        nameEmpl = members[i].nameMember;
        titleEmpl = members[i].roleMember;
        
    }

    stamp.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img
                src="${photoEmpl}"
                alt="${nameEmpl}"
                />
            </div>
            <div class="card-text">
                <h3>${nameEmpl}</h3>
                <p>${titleEmpl}</p>
            </div>
        </div>
    
    `

}

addBtn.addEventListener("click",
        function(){
            addMember (newMember, members);
        }
    );


//funzione 
//al click aggiungere un membro

function addMember (newCard, pushArrey){

    //salvo i dati che mi da il form
    let newName = document.getElementById("name").value;
    let newRole = document.getElementById("role").value;
    let newPhoto = document.getElementById("image").value;

    //al click creo la nuova carta
    newCard = {
        "nameMember" : newName,
        "roleMemeber" : newRole,
        "imgMember" : newPhoto

    };

    console.log(newCard);
    pushArrey.push(newCard);

        stamp.innerHTML += `
            <div class="team-card">
                <div class="card-image">
                    <img
                    src="${newCard.imgMember}"
                    alt="${newCard.nameMember}"
                    />
                </div>
                <div class="card-text">
                    <h3>${newCard.nameMember}</h3>
                    <p>${newCard.roleMemeber}</p>
                </div>
            </div>

            `





}


