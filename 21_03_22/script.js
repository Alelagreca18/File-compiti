const personList =[
    {
     name: "Marco",
     surname: "Polo",
     number: "3827192837",
    },
    
    {
     name: "Luca",
     surname: "Bando",
     number: "3281749271",
    },
    
    {
     name: "Flavio",
     surname: "Rossi",
     number: "3293476892",
    },
    
    {
     name: "Antonio",
     surname: "Belli",
     number: "392810174",
    },
    
   {
     name: "Alessandro",
     surname: "Magno",
     number: "3918382615",
    }, 
];    






function addContact() {
    const personObj = {
      name: prompt("Inserisci il nome:"),
      cognome: prompt("Inserisci il cognome:"),
      tel: parseInt(prompt("Inserisci il numero di tel:")),
    };
  
  personList.push(personObj);
  console.log("La lista è stata aggiornata:");
  console.log(personList);
}
  
function delContact() {
  const index = parseInt(prompt("Inserisci l'indice"));
  personList.splice(index - 1, 1);
  console.log(personList);
}






function updateContact() {
    const contactsListEl = document.querySelector('.contactsList');
    contactsListEl.textContent = "";

    for (index in personList) {
       const contactEl = document.createElement("li");

        contactEl.textContent = personList[index].name; 

        contactsListEl.appendChild(contactEl);
    }
     
}



 



