const indexMainPage = document.querySelector(".index-main-page");
const secondMainPage = document.querySelector(".main-mini-home");

// dropdownbtn
const list = document.querySelector(".list");

// login sign up handler
const logIn_signUp_handler = document.querySelectorAll(".messagePageReload");
const logIn_Toggle = document.querySelector(".logInPageContent");
const signUp_Toggle = document.querySelector(".signUpPageContent");

// handling header .navbar
const activePage = window.location.pathname;
const active_header_handler = document.querySelectorAll("nav a");

// implementing search
const search = document.querySelector(".search");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// connecting backend with frontend
const connectingBackend = async function () {
  try {
    const response = await fetch(`http://localhost:4000/public/home`);
    // https://unique-collections.onrender.com/home

    if (!response.ok) throw new Error(`Failed to fetch it: ${response.status}`);

    const data = await response.json();
    console.log(data);

    searchHandler(data); // search

    listDropDownButton(data); // list

    search.addEventListener("input", function () {
      searchHandler(data);
    }); // search

    list.addEventListener("change", function () {
      listDropDownButton(data);
    }); // list
  } catch (err) {
    secondMainPage.innerHTML =
      "<p>An error occurred. Please try again later.</p>";
  }
};
connectingBackend();

// handling dropdown button & api display
const listDropDownButton = function (whiskeyArr) {
  secondMainPage.innerHTML = "";

  const listValue = list.value;

  const filteredWhiskeys = whiskeyArr.filter((whiskey) => {
    return listValue === "all-options" || listValue === whiskey.category;
  });

  filteredWhiskeys.forEach((whiskey) => {
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

// implementing search
const searchHandler = function (whiskeyArr) {
  secondMainPage.innerHTML = "";
  const searchValue = search.value.toLowerCase(); // maybe include trim()

  const filteredData = whiskeyArr.filter((whiskey) => {
    return (
      searchValue === "" ||
      whiskey.name.toLowerCase().includes(searchValue) ||
      whiskey.category.toLowerCase().includes(searchValue) ||
      whiskey.quality.toLowerCase().includes(searchValue)
    );
  });

  filteredData.forEach((whiskey) => {
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

//////////////////////////////////////////////////////////////////////////////////////////

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


