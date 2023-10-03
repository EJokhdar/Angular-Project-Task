// const themeToggler = document.querySelector(".rightSide-top-theme");
const languageToggler = document.querySelector(".rightSide-top-language");

function toggleTheme(){
  console.log("working");
  // Toggle between light and dark themes
  document.body.classList.toggle("dark-theme-variables");

  // Toggle active class on the icon elements
  themeToggler.querySelector("button:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("button:nth-child(2)").classList.toggle("active");
}

//Theme

 



// languageToggler.addEventListener("click", () => {
//   console.log("working");
//   // Toggle between light and dark themes
//   document.body.classList.toggle("rtl");

//   // Toggle active class on the icon elements
//   themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
//   themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
// });
