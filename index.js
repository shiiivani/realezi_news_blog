document.querySelector(".toggle-collapse").addEventListener("click", function () {
    var cardContainer = document.getElementById("cardContainer");
    var arrowIcon = document.getElementById("arrowIcon").querySelector("i");

    if (cardContainer.classList.contains("collapse")) {
        cardContainer.classList.remove("collapse");
        cardContainer.classList.add("show");
        arrowIcon.classList.remove("fa-arrow-down");
        arrowIcon.classList.add("fa-arrow-up");
    } else {
        cardContainer.classList.remove("show");
        cardContainer.classList.add("collapse");
        arrowIcon.classList.remove("fa-arrow-up");
        arrowIcon.classList.add("fa-arrow-down");
    }
});

function changeCity(city) {
  const cityData = {
    Mumbai: {
      img1: "./assets/property/property-1.jpg",
      img2: "/assets/property/property-2.jpg",
      img3: "/assets/property/property-3.jpg",
      img4: "/assets/property/property-4.jpg",
      title1: "Villa in Mumbai with Sea View",
      desc1:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title2: "Apartment in Mumbai Suburbs",
      desc2:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Villa in Mumbai with Sea View",
      desc3:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Apartment in Mumbai Suburbs",
      desc4:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
    },
    Delhi: {
      img1: "/assets/property/property-5.jpg",
      img2: "/assets/property/property-6.jpg",
      img3: "/assets/property/property-1.jpg",
      img4: "/assets/property/property-2.jpg",
      title1: "Bungalow in South Delhi",
      desc1:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title2: "Apartment near Connaught Place",
      desc2:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Villa in Delhi with Sea View",
      desc3:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Apartment in Delhi Suburbs",
      desc4:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
    },
    Baroda: {
      img1: "/assets/property/property-5.jpg",
      img2: "/assets/property/property-6.jpg",
      img3: "/assets/property/property-3.jpg",
      img4: "/assets/property/property-4.jpg",
      title1: "Heritage Property in Baroda",
      desc1:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title2: "Modern House in Baroda Suburbs",
      desc2:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Villa in Baroda with Sea View",
      desc3:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Apartment in Baroda Suburbs",
      desc4:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
    },
    Pune: {
      img1: "/assets/property/property-1.jpg",
      img2: "/assets/property/property-2.jpg",
      img3: "/assets/property/property-5.jpg",
      img4: "/assets/property/property-6.jpg",
      title1: "Villa in Pune with Garden",
      desc1:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title2: "Apartment near Pune University",
      desc2:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Villa in Pune with Sea View",
      desc3:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Apartment in Pune Suburbs",
      desc4:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
    },
    Chennai: {
      img1: "/assets/property/property-3.jpg",
      img2: "/assets/property/property-4.jpg",
      img3: "/assets/property/property-1.jpg",
      img4: "/assets/property/property-2.jpg",
      title1: "Beach House in Chennai",
      desc1:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title2: "Apartment in Chennai City Center",
      desc2:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Villa in Chennai with Sea View",
      desc3:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Apartment in Chennai Suburbs",
      desc4:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
    },
    Bengaluru: {
      img1: "/assets/property/property-5.jpg",
      img2: "/assets/property/property-6.jpg",
      img3: "/assets/property/property-3.jpg",
      img4: "/assets/property/property-4.jpg",
      title1: "Penthouse in Bengaluru",
      desc1:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title2: "Apartment near Electronic City",
      desc2:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Villa in Bengaluru with Sea View",
      desc3:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
      title3: "Apartment in Bengaluru Suburbs",
      desc4:
        "Very nice property in sec24 Rohini near Rithala metro station within 1km and is ISKCON temple 200m. More about this property...",
    },
  };

  const data = cityData[city];

  document.getElementById("card-img-1").src = data.img1;
  document.getElementById("card-title-1").innerText = data.title1;
  document.getElementById("card-text-1").innerText = data.desc1;

  document.getElementById("card-img-2").src = data.img2;
  document.getElementById("card-title-2").innerText = data.title2;
  document.getElementById("card-text-2").innerText = data.desc2;

  document.getElementById("card-img-3").src = data.img3;
  document.getElementById("card-title-3").innerText = data.title3;
  document.getElementById("card-text-3").innerText = data.desc3;

  document.getElementById("card-img-4").src = data.img4;
  document.getElementById("card-title-4").innerText = data.title4;
  document.getElementById("card-text-4").innerText = data.desc4;
}

// Set default city to Mumbai on page load
window.onload = function () {
  changeCity("Mumbai");
};
