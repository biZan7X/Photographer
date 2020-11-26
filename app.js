const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
   nav.classList.toggle("nav-open"); //addes nav-open class
   burger.classList.toggle("toggle"); //for animation
});

links.forEach((link) => {
   link.addEventListener("click", () => {
      nav.classList.toggle("nav-open"); //removes the nav-open class
      burger.classList.toggle("toggle"); //for animation
   });
});
