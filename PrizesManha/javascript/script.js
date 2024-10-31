class mobileNavbar{
    constructor() {
     this.mobileMenu = document.querySelector(tmobileMenu);
     this.navList = document.querySelector(navList)
     this.navLinks = document.querySelectorAll(navLinks)
     this.activeClass = "active";
    } 

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("hey steff"));
    }
    Init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new mobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.Init();