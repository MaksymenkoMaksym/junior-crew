(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");

    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileLinkRef = document.querySelector("#menu");
    const header = document.querySelector("#header");
    const body = document.querySelector("body");

    menuBtnRef.addEventListener("click", () => {
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        body.classList.toggle("no-scroll");



    },
    );
    mobileLinkRef.addEventListener("click", () => {

        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        body.classList.toggle("no-scroll");

    });

})

    ();
