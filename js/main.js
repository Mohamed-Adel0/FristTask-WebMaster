const SolarCards = [
    {
        id :1,
        title : "Off Grid",
        description : "WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation...",
        image : "./Picture/solar-panels-meadow4.png"
    },
    {
        id :2,
        title : "On Grid",
        description : "WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation...",
        image : "./Picture/solar-panels-meadow2.png"
    },
    {
        id :3,
        title : "Hybrid",
        description : "WOC has contributed to students so that they can work in their dream company, we will continue to stick to our commitment to create an advanced generation...",
        image : "./Picture/solar-panels-meadow3.png"
    },
]
const EnergyProducts = [
  {
    id :1,
    title : "SoliTek - The European Manufacturer of Solar Panels",
    description : "We work closely importing solar panels from Solitek, they offer 30 year warranties on their panels and are constantly coming up with new ideas - including their solar greenhouse."
},
{
    id :2,
    title : "Sunsynk - No Power No Problem",
    description : "Sunsynk build the most versatile hybrid inverter on the market, designed to take up to 7kW of solar on a standard domestic supply - for simultaneous battery charging and household usage."
},
{
    id :3,
    title : "BYD - Electrifying Transport",
    description : "We use battery cells made by BYD, a market leader in lithium batteries. BYD batteries are in cars, trucks, and buses - they build robust batteries."
},
{
    id :4,
    title : "REC - Solar's Most Trusted",
    description : "REC - Renewable Energy Corporation, are one of the longest trading names in solar. They know how to be truly sustainable in this industry - their panels are 100% lead free and have the most trusted warranty in solar."
},
]
const OurValues = [
  {
    id :1,
    title : "Customer Care",
    icon :`<i class="fa-solid fa-person-dots-from-line"></i>`,
    description : `We're here to help you with solar panel installation in Devon and Cornwall. If we were to sum ourselves up in a few words, those would be "reliable, honest and friendly." We find our customers agree! We're with you from the start of the project to the finish.`
},
{
    id :2,
    title : "Price",
    icon :`<i class="fa-solid fa-tags"></i>`,
    description : "As I'm sure you'll have seen, solar systems don't tend to come cheap. Our aim is to make solar power accessible to everyone, so we price ourselves in a way that makes solar energy more affordable. We're focused on helping you and on helping the environment, rather than on turning a profit."
},
{
    id :3,
    title : "Sustainability",
    icon :`<i class="fa-solid fa-globe"></i>`,
    description : `As we've said, we do this because we truly care about the planet and about seeing people embrace a greener, more eco-friendly approach to power. The world of green energy can be jargon-filled and opaque, so we want to help educate people on the big and little things they can do to protect our planet!`
},
]
const FetchData = ()=>{
    let RunData = ``
    let APIDataProducts = ``
    let APIOurValues = ``
    for (let i = 0; i < SolarCards.length; i++) {
        // console.log(SolarCards[i]);
        RunData +=`
         <div class="card">
            <div class="img">
              <img src="${SolarCards[i].image}" alt="">
            </div>
            <div class="list">
              <h3>${SolarCards[i].title}</h3>
              <p>${SolarCards[i].description}</p>
              <a href="#">View Products <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
        `
    }
    for (let i = 0; i < EnergyProducts.length; i++) {
        // console.log(SolarCards[i]);
        APIDataProducts +=`
        <div class="card">
            <div class="img">
              <button><i class="fa-regular fa-image"></i></button>
            </div>
            <h3>${EnergyProducts[i].title}</h3>
            <p>${EnergyProducts[i].description}</p>
            <a href="#">View integration <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
        `
    }
    for (let i = 0; i < OurValues.length; i++) {
        // console.log(SolarCards[i]);
        APIOurValues +=`
       <div class="card">
            <button>${OurValues[i].icon}</button>
            <h3>${OurValues[i].title}</h3>
            <p>${OurValues[i].description}</p>
          </div>
        `
    }
    document.getElementById("solar-cards").innerHTML = RunData
    document.getElementById("cards").innerHTML = APIDataProducts
    document.getElementById("our-values").innerHTML = APIOurValues
}
FetchData()
