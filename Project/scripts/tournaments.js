const tournamentSelect = document.querySelector("#tournament");
const cardsElement = document.getElementById("cards");
const eventList = document.querySelector("#eventlist");
const fieldList = document.querySelector("#fieldlist");

const tournaments = [
    {
      id: "st-1234",
      name: "Thunderball Cup",
      datestart: "February 28 2025",
      dateend: "April 28 2025",
      numteams: 8
    },
    {
      id: "st-1235",
      name: "The Golden Boot Championship",
      datestart: "February 28 2025",
      dateend: "April 28 2025",
      numteams: 6
    },
    {
      id: "st-1236",
      name: "Kickin’ It Classic",
      datestart: "February 28 2025",
      dateend: "May 14 2025",
      numteams: 12
    },
    {
      id: "st-1237",
      name: "Soccermania",
      datestart: "May 31 2025",
      dateend: "June 12 2025",
      numteams: 4
    },
    {
      id: "st-1238",
      name: "Goal Rush Tournament",
      datestart: "June 28 2025",
      dateend: "August 14 2024",
      numteams: 8
    }
  ];

  const fields = [
    {
      name: "Koumassi",
      openhours: "Mon - Fri 15:00 - 23:30",
      adress: "Rue H46, Abidjan, Abidjan",
      phone: "+225 0500553656",
      averagerating: 4.8,
      ages: "all ages",
      imgurl: "images/field1.webp"
    },
    {
      name: "Yopougon",
      openhours: "Mon - Fri 10:00 - 21:30",
      adress: "Boulevard Principale de Yopougon, Abidjan, Abidjan",
      phone: "+225 0759412322",
      averagerating: 4.9,
      ages: "all ages",
      imgurl: "images/field1.webp"
    },
    {
      name: "Cocody",
      openhours: "Mon - Fri 09:00 - 20:30",
      adress: "2 Plateaux , Rue Des Jardins. Zone 4 Rue Pierre Et Marie Currie, Abidjan, Abidjan 13127",
      phone: "+225 0125969825",
      averagerating: 4.5,
      ages: "all ages",
      imgurl: "images/field1.webp"
    },
    {
      name: "Abobo",
      openhours: "Mon - Fri 08:00 - 20:30",
      adress: "Rue L129, Abidjan, AB",
      phone: "+225 0158742365",
      averagerating: 4.5,
      ages: "all ages",
      imgurl: "images/field1.webp"
    },
    {
      name: "Treichville",
      openhours: "Mon - Fri 10:00 - 23:30",
      adress: "Treichville, Abidjan, Abidjan, Lagunes",
      phone: "+225 0789654123",
      averagerating: 5.0,
      ages: "all ages",
      imgurl: "images/field1.webp"
    }
];

function createTournamentSelectList() {
  tournaments.forEach(t => {
    optElement = document.createElement("option");
    optElement.setAttribute("value", t.id);
    optElement.innerText = t.name

    tournamentSelect?.appendChild(optElement);
  });
}

createTournamentSelectList();

function createFieldCards() {
  fields.forEach(f => {
    if (f.averagerating > 4.3){
      const card = document.createElement("section");
      card.classList.add("card");
      const title = document.createElement("h3");
      title.innerText = f.name;
      card.appendChild(title);

      const img = document.createElement("img");
      img.setAttribute("src", f.imgurl);
      img.setAttribute("alt", "A soccer field");
      card.appendChild(img);
      
      const desc = document.createElement("div");
      desc.innerHTML = `
      <p>🕒${f.openhours}</p>
      <p>📍${f.adress}</p>
      <p>📞${f.phone}</p>
      <p>${f.averagerating}⭐</p>
      <p>${f.ages}</p>`
      card.appendChild(desc);

      cardsElement?.appendChild(card)
    }
  });
}

createFieldCards();

function createEventsTable() {
  tournaments.forEach(t => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    const code = document.createElement("td");
    const datestart = document.createElement("td");
    const dateend = document.createElement("td");
    const numteams = document.createElement("td");

    header.innerText = t.name;
    code.innerText = t.id;
    datestart.innerText = t.datestart;
    dateend.innerText = t.dateend;
    numteams.innerText = t.numteams;


    row.appendChild(header);
    row.appendChild(code);
    row.appendChild(datestart);
    row.appendChild(dateend);
    row.appendChild(numteams);

    eventList?.appendChild(row);
  });
}

createEventsTable()

function createFieldsTable() {
  fields.forEach(f => {
    const row = document.createElement("tr");
    const header = document.createElement("th");
    const openhours = document.createElement("td");
    const address = document.createElement("td");
    const phone = document.createElement("td");
    const rating = document.createElement("td");
    const ages = document.createElement("td");

    header.innerText = f.name;
    openhours.innerText = f.openhours;
    address.innerText = f.adress;
    phone.innerText = f.phone;
    rating.innerText = f.averagerating;
    ages.innerText = f.ages;


    row.appendChild(header);
    row.appendChild(openhours);
    row.appendChild(address);
    row.appendChild(phone);
    row.appendChild(rating);
    row.appendChild(ages);
    
    fieldList?.appendChild(row);
  });
}

createFieldsTable();