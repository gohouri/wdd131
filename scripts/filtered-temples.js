document.addEventListener("DOMContentLoaded", () => {
    // Mise à jour de l'année actuelle
    document.querySelector("#year").textContent = new Date().getFullYear();

    // Mise à jour de la date de dernière modification
    document.querySelector("#lastModified").textContent = document.lastModified;

    // Gestion du menu hamburger
    const hamburger = document.querySelector("#menu");
    const navigation = document.querySelector("nav");
    
    if (hamburger) {
        hamburger.addEventListener("click", (e) => {
            e.preventDefault();
            navigation.classList.toggle("show");
        });
    }

    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
          templeName: "Salt Lake City",
          location: "Salt Lake City, Utah",
          dedicated: "1853, February , 14",
          area: 382207 ,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/NorthBirdsEye.jpg"
        },
        {
           templeName: "Quarters Nebraska",
           location: "Omaha, Nebraska",
           dedicated: "2001, April , 22",
           area: 16000 ,
           imageUrl:
           "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-temple-766499-wallpaper.jpg"
        }
      ];
    const main = document.querySelector(".main");
    const title = document.querySelector("#title");

    function displayTemple(temples) {
        main.innerHTML = "";
        temples.forEach((t) => {
            const templeFigure = document.createElement("figure");
            const templeName = document.createElement("h2");
            const templeInfo = document.createElement("div");
            const templeImage = document.createElement("img");

            templeName.textContent = t.templeName;
            templeInfo.innerHTML = `
                <p><strong>Location:</strong> ${t.location}</p>
                <p><strong>Dedicated:</strong> ${t.dedicated}</p>
                <p><strong>Size:</strong> ${t.area} sq ft</p>
            `;
            templeImage.src = t.imageUrl;
            templeImage.alt = t.templeName;
            templeImage.loading = "lazy";

            templeFigure.append(templeName, templeInfo, templeImage);
            main.appendChild(templeFigure);
        });
    }

    function filterTemples(condition) {
        clearMain();
        displayTemple(temples.filter(condition));
    }

    function clearMain() {
        main.innerHTML = "";
    }

    document.querySelector("#large")?.addEventListener("click", (e) => {
        title.textContent = e.target.textContent;
        filterTemples((t) => t.area > 90000);
    });

    document.querySelector("#small")?.addEventListener("click", (e) => {
        title.textContent = e.target.textContent;
        filterTemples((t) => t.area < 10000);
    });

    document.querySelector("#new")?.addEventListener("click", (e) => {
        title.textContent = e.target.textContent;
        filterTemples((t) => new Date(t.dedicated).getFullYear() > 2000);
    });

    document.querySelector("#old")?.addEventListener("click", (e) => {
        title.textContent = e.target.textContent;
        filterTemples((t) => new Date(t.dedicated).getFullYear() < 1900);
    });

    document.querySelector("#home")?.addEventListener("click", (e) => {
        title.textContent = e.target.textContent;
        clearMain();
    });

    // Affichage initial
    displayTemple(temples);
});
