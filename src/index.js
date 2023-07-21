const indexMainPage = document.querySelector(".index-main-page");
const secondMainPage = document.querySelector(".main-mini-home");

// dropdownbtn
const list = document.querySelector(".list");
const selectElement = document.querySelector('select[name="options"]');

// login sign up handler
const logIn_signUp_handler = document.querySelectorAll(".messagePageReload");
const logIn_Toggle = document.querySelector(".logInPageContent");
const signUp_Toggle = document.querySelector(".signUpPageContent");

// handling header .navbar
const activePage = window.location.pathname;
const active_header_handler = document.querySelectorAll("nav a");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// connecting backend with frontend
const connectingBackend = async function () {
  try {
    const response = await fetch(`http://localhost:4000/public/home`);

    if (!response.ok) throw new Error(`Failed to fetch it: ${response.status}`);

    const data = await response.json();
    console.log(data);

    indexMainPageDetails(data);
  } catch (err) {
    console.error(err);
  }
};
connectingBackend();

// api display
const indexMainPageDetails = function (whiskeyArr) {
  whiskeyArr.forEach((whiskey) => {
    const displayFrontend = ` 
         
    <img src="${whiskey.image}" alt="Whiskey">
    <p>Name: ${whiskey.name}</p>
    <p>Category: ${whiskey.category}</p>
    <p>Quality: ${whiskey.quality}</p>
    <p>Seller: ${whiskey.seller}</p> 
    <p>Price: ${whiskey.price}</p>  
   
    `;
    secondMainPage.insertAdjacentHTML("beforeend", displayFrontend);
  });
};

// handling log in and sign up
logIn_signUp_handler.forEach(function (button) {
  button.addEventListener("click", function () {
    logIn_Toggle.classList.toggle("hidden");
    signUp_Toggle.classList.toggle("hidden");
  });
});

// handing active header
active_header_handler.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
// handling dropdown button
