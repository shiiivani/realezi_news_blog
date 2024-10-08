document.addEventListener("DOMContentLoaded", function () {
  let activeShareContainer = null; // Track the currently active share container

  const shareContainers = document.querySelectorAll(".share-container");

  // Function to close all open dropdowns
  function closeAllShareContainers() {
    shareContainers.forEach((share) => {
      const list = share.querySelector("ul");
      if (list.classList.contains("active")) {
        list.classList.remove("active");
      }
    });
    activeShareContainer = null; // Reset the active container
  }

  // Add click event for each share button
  shareContainers.forEach((share) => {
    const list = share.querySelector("ul");
    share.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent click from propagating to document

      // Close any previously opened share container
      if (activeShareContainer && activeShareContainer !== list) {
        closeAllShareContainers();
      }

      // Toggle the current share container
      list.classList.toggle("active");

      // Update the currently active share container
      activeShareContainer = list.classList.contains("active") ? list : null;
    });
  });

  // Close share containers when clicking outside
  document.addEventListener("click", function () {
    if (activeShareContainer) {
      closeAllShareContainers();
    }
  });
});

document
  .querySelector(".toggle-collapse")
  .addEventListener("click", function () {
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

  document.getElementById("card-mobile-img-1").src = data.img1;
  document.getElementById("card-mobile-title-1").innerText = data.title1;
  document.getElementById("card-mobile-text-1").innerText = data.desc1;

  document.getElementById("card-img-2").src = data.img2;
  document.getElementById("card-title-2").innerText = data.title2;
  document.getElementById("card-text-2").innerText = data.desc2;

  document.getElementById("card-mobile-img-2").src = data.img2;
  document.getElementById("card-mobile-title-2").innerText = data.title2;
  document.getElementById("card-mobile-text-2").innerText = data.desc2;

  document.getElementById("card-img-3").src = data.img3;
  document.getElementById("card-title-3").innerText = data.title3;
  document.getElementById("card-text-3").innerText = data.desc3;

  document.getElementById("card-mobile-img-3").src = data.img3;
  document.getElementById("card-mobile-title-3").innerText = data.title3;
  document.getElementById("card-mobile-text-3").innerText = data.desc3;

  document.getElementById("card-img-4").src = data.img4;
  document.getElementById("card-title-4").innerText = data.title4;
  document.getElementById("card-text-4").innerText = data.desc4;

  document.getElementById("card-mobile-img-4").src = data.img4;
  document.getElementById("card-mobile-title-4").innerText = data.title4;
  document.getElementById("card-mobile-text-4").innerText = data.desc4;
}

// Set default city to Mumbai on page load
window.onload = function () {
  changeCity("Mumbai");
};

const contentData = {
  Heritage: {
    heroImage: "./assets/hero-image.png",
    heroTitle: "Heritage Hot News Dummy Second Line",
    heroSubtitle:
      "Discover the latest updates on heritage topics.  Explore fascinating histories and cultures.  Stay informed about preservation efforts.",
    newsItems: [
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "./assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "./assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "./assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
    ],
    trendingNewsOne: [
      {
        imageUrl: "./assets/property/property-8.png",
        title: "Innovative Housing Solutions for Urban Areas",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title: "Affordable Housing Projects Around the World",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-11.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
    ],
    trendingNewsTwo: [
      {
        imageUrl: "./assets/property/property-12.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-8.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      // Add more news items as needed
    ],
  },
  Technology: {
    heroImage: "./assets/hero-image.png",
    heroTitle: "Technology Innovations Shaping Our Future",
    heroSubtitle:
      "Stay ahead with the latest in tech.  Innovations that are changing the world.  Explore the future of technology today.",
    newsItems: [
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "./assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "./assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
    ],
    trendingNewsOne: [
      {
        imageUrl: "./assets/property/property-8.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-11.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
    ],
    trendingNewsTwo: [
      {
        imageUrl: "./assets/property/property-12.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-8.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      // Add more news items as needed
    ],
  },
  Architecture: {
    heroImage: "./assets/hero-image.png",
    heroTitle: "Architecture Trends Redefining Spaces",
    heroSubtitle:
      "Explore cutting-edge designs.  Sustainable architecture for the future.  Innovative spaces that inspire.",
    newsItems: [
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "./assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
    ],
    trendingNewsOne: [
      {
        imageUrl: "./assets/property/property-11.png",
        title: "Modern Architecture in Urban Spaces",
        date: "September 15, 2024",
      },
      {
        imageUrl: "./assets/property/property-12.png",
        title: "The Role of Architecture in Cultural Preservation",
        date: "October 20, 2024",
      },
      {
        imageUrl: "./assets/property/property-8.png",
        title: "Architectural Marvels of the 21st Century",
        date: "November 25, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title: "Sustainable Architectural Design Trends",
        date: "December 30, 2024",
      },
    ],
    trendingNewsTwo: [
      {
        imageUrl: "./assets/property/property-12.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-8.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      // Add more news items as needed
    ],
  },
  "Real-Estate": {
    heroImage: "./assets/hero-image.png",
    heroTitle: "Real Estate Market Insights and Trends",
    heroSubtitle:
      "Understand the real estate market.  Trends that are shaping property investments.  Expert advice for buyers and sellers.",
    newsItems: [
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "./assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
    ],
    trendingNewsOne: [
      {
        imageUrl: "./assets/property/property-8.png",
        title: "Innovative Housing Solutions for Urban Areas",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title: "Affordable Housing Projects Around the World",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-11.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
    ],
    trendingNewsTwo: [
      {
        imageUrl: "./assets/property/property-12.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-8.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title: "Real Estate Market Trends in 2024",
        date: "March 6, 2024",
      },
      // Add more news items as needed
    ],
  },
  Business: {
    heroImage: "./assets/hero-image.png",
    heroTitle: "Business Strategies For Modern Challenges",
    heroSubtitle:
      "Adapt and thrive in today's business landscape.  Innovative strategies for growth.  Insights from industry leaders.",
    newsItems: [
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "./assets/property/property-7.png",
      },
      {
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        description:
          "Descubre cómo el propósito y la incertidumbre pueden ser dos fuerzas poderosas a favor de las organizaciones. comparte sus reflexiones sobre cómo las empresas pueden aportar valor en lugar de simplemente vender para sobrevivir",
        image: "/assets/property/property-7.png",
      },
    ],
    trendingNewsOne: [
      {
        imageUrl: "./assets/property/property-9.png",
        title: "Business Strategies for Real Estate Investors",
        date: "May 15, 2025",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title: "Commercial Real Estate: Opportunities and Risks",
        date: "June 20, 2025",
      },
      {
        imageUrl: "./assets/property/property-11.png",
        title: "Real Estate Financing in a Changing Market",
        date: "July 25, 2025",
      },
      {
        imageUrl: "./assets/property/property-12.png",
        title: "Mergers and Acquisitions in the Real Estate Sector",
        date: "August 30, 2025",
      },
    ],
    trendingNewsTwo: [
      {
        imageUrl: "./assets/property/property-12.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-8.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-9.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      {
        imageUrl: "./assets/property/property-10.png",
        title:
          "Emprendedurismo. Propósito e incertidumbre, dos fuerzas a favor de las organizaciones",
        date: "March 6, 2024",
      },
      // Add more news items as needed
    ],
  },
};

var currentTabName = "";

function changeContent(tabName) {
  currentTabName = tabName;

  const data = contentData[tabName];

  // Update the tab name display
  document.getElementById("currentTabName").innerText = tabName;

  // Update Hero Section
  document.getElementById("heroTitle").innerText = data.heroTitle;
  document.getElementById("heroSubtitle").innerText = data.heroSubtitle;
  document.getElementById("heroImage").src = data.heroImage;

  // Update News Cards Section
  const newsCards = document.getElementById("newsCards");
  newsCards.innerHTML = "";
  data.newsItems.forEach((news) => {
    newsCards.innerHTML += `
        <div class="row align-items-center position-relative">
            <div class="col-lg-5 col-12">
                <span class="badge position-absolute top-1 start-1 mt-0 text-light">${tabName}</span>
                <img src="${news.image}" alt="Card-image" class="w-100">
            </div>
            <div class="col-lg-7 col-12">
                <div class="mt-3">
                    <h6 class="primary-text-color fw-semibold">${news.title}</h6>
                    <p class="secondary-text-color fs-13">${news.description}</p>
                </div>
            </div>
        </div>
    `;
  });

  // Update Carousel Section for mobile view
  const sliderContainer = document.getElementById("slider-container");
  sliderContainer.innerHTML = "";
  data.newsItems.forEach((news) => {
    const truncateText = (text) => {
      const words = text.split(" ");
      return words.length > 5 ? words.slice(0, 5).join(" ") + "..." : text;
    };

    const truncatedTitle = truncateText(news.title);
    const truncatedDescription = truncateText(news.description);

    sliderContainer.innerHTML += `
    <div class="slide me-3">
      <div class="card border-0 shadow p-1">
        <div class="d-flex pb-0">
          <div class="position-relative">
            <span class="badge position-absolute top-1 start-1 mt-0 text-light" style="font-size: 10px">${tabName}</span>
            <img src="${news.image}" alt="Card-image" class="img-fluid h-100 w-100">
          </div>
          <div class="ms-4">
            <h6 class="primary-text-color fw-semibold" style="font-size: 14px;">${truncatedTitle}</h6>
            <p class="fs-13 secondary-text-color mt-1">${truncatedDescription}</p>
          </div>
        </div>
      </div>
    </div>  
    `;
  });

  // Update Trending News One Section
  const trendingNewsOneContainer = document.getElementById(
    "trendingNewsOneContainer"
  );
  trendingNewsOneContainer.innerHTML = "";
  data.trendingNewsOne.forEach((news) => {
    trendingNewsOneContainer.innerHTML += `
        <div class="row">
          <div class="col-4">
            <img src="${news.imageUrl}" alt="Card-image" class="img-fluid">
          </div>
          <div class="col-8">
            <h6 class="card-title primary-text-color fw-semibold">${news.title}</h6>
            <p class="mb-0 mt-3 secondary-text-color">${news.date}</p>
          </div>
          <hr class="mt-3">
        </div>
    `;
  });

  // Update Trending News One Section for mobile
  const trendingNewsOneContainerMobile = document.getElementById(
    "trendingNewsOneContainerMobile"
  );
  trendingNewsOneContainerMobile.innerHTML = "";
  data.trendingNewsOne.forEach((news) => {
    trendingNewsOneContainerMobile.innerHTML += `
    <div class="slide me-3">
        <div class="d-flex">
          <div>
            <img src="${news.imageUrl}" alt="Card-image" class="">
          </div>
          <div class="ms-4">
            <h6 class="card-title fw-bold" style="font-size: 14px;">${news.title}</h6>
            <p class="mb-0 mt-2">${news.date}</p>
          </div>
        </div>
      </div>
    `;
  });

  // Update Trending News Two Section
  const trendingNewsTwoContainer = document.getElementById(
    "trendingNewsTwoContainer"
  );
  trendingNewsTwoContainer.innerHTML = "";
  data.trendingNewsTwo.forEach((news) => {
    trendingNewsTwoContainer.innerHTML += `
        <div class="row">
          <div class="col-4">
            <img src="${news.imageUrl}" alt="Card-image" class="img-fluid">
          </div>
          <div class="col-8">
            <h6 class="card-title primary-text-color fw-semibold">${news.title}</h6>
            <p class="mb-0 mt-3 secondary-text-color">${news.date}</p>
          </div>
          <hr class="mt-3">
        </div>
    `;
  });

  // Update Trending News Two Section for mobile
  const trendingNewsTwoContainerMobile = document.getElementById(
    "trendingNewsTwoContainerMobile"
  );
  trendingNewsTwoContainerMobile.innerHTML = "";
  data.trendingNewsTwo.forEach((news) => {
    trendingNewsTwoContainerMobile.innerHTML += `
    <div class="slide me-3">
        <div class="d-flex">
          <div>
            <img src="${news.imageUrl}" alt="Card-image" class="">
          </div>
          <div class="ms-4">
            <h6 class="card-title fw-bold" style="font-size: 14px;">${news.title}</h6>
            <p class="mb-0 mt-2">${news.date}</p>
          </div>
        </div>
      </div>
    `;
  });
}

// Initialize with Heritage content
changeContent("Heritage");

function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareToWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${url}`, "_blank");
}

function shareToEmail() {
  const subject = encodeURIComponent("Check out this article!");
  const body = encodeURIComponent(
    `I found this article interesting: ${window.location.href}`
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy text: ", err));
}
