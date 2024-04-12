// script.js

// 섹션 별 좌표 변수
const aboutSectionTop = window.scrollY + document.getElementById("sec_about").getBoundingClientRect().top;
const skillsSectionTop = window.scrollY + document.getElementById("sec_skills").getBoundingClientRect().top;
const projectsSectionTop = window.scrollY + document.getElementById("sec_projects").getBoundingClientRect().top;
const activitySectionTop = window.scrollY + document.getElementById("sec_activity").getBoundingClientRect().top;
const careerSectionTop = window.scrollY + document.getElementById("sec_career").getBoundingClientRect().top;

// Nav Scroll 시 색 변경

window.addEventListener('scroll', function (event) {
    const elementNavBtn = document.querySelectorAll(".nav_btn");
    if (window.scrollY <= aboutSectionTop) {
        this.document.querySelector("#nav_top").classList.remove("nav_changed_top");
        this.document.querySelector("#btn_logo").classList.remove("nav_changed_btn");
        elementNavBtn.forEach((element) => {
            element.classList.remove("nav_changed_btn");
        })
        console.log(event);
    }
    else if (window.scrollY > aboutSectionTop) {
        this.document.querySelector("#nav_top").classList.add("nav_changed_top");
        this.document.querySelector("#btn_logo").classList.add("nav_changed_btn");
        elementNavBtn.forEach((element) => {
            element.classList.add("nav_changed_btn");
        })
    }
});


// Nav btn Mouse Over 시 색 변경
function btn_MouseOver(event) {
    let currentID = this.document.getElementById(event.target.id);
    if (window.scrollY < aboutSectionTop) {
        currentID.classList.remove("nav_onmoused_btn");
        currentID.classList.remove("nav_main_onmoused_btn");
        currentID.classList.add("nav_main_onmoused_btn");
    } else if (window.scrollY >= aboutSectionTop) {
        currentID.classList.remove("nav_main_onmoused_btn");
        currentID.classList.remove("nav_onmoused_btn");
        currentID.classList.add("nav_onmoused_btn");
    }
}

// Nav btn Mouse Out 시 색 변경
function btn_MouseOut(event) {
    let currentID = this.document.getElementById(event.target.id);

    currentID.classList.remove("nav_main_onmoused_btn");
    currentID.classList.remove("nav_onmoused_btn");
}

// Nav 버튼 클릭
function btn_Click(event) {
    let currentID = this.document.getElementById(event.target.id);

    switch (currentID.id) {
        case "btn_logo":
            scroll({ top: 0, left: 0, behavior: "smooth" });
            break;

        case "btn_about":
            scroll({ top: aboutSectionTop, left: 0, behavior: "smooth" });
            window.btn_MouseOver(event);
            break;

        case "btn_skills":
            scroll({ top: skillsSectionTop, left: 0, behavior: "smooth" });
            window.btn_MouseOver(event);
            break;

        case "btn_projects":
            scroll({ top: projectsSectionTop, left: 0, behavior: "smooth" });
            window.btn_MouseOver(event);
            break;

        case "btn_activity":
            scroll({ top: activitySectionTop, left: 0, behavior: "smooth" });
            window.btn_MouseOver(event);
            break;

        case "btn_career":
            scroll({ top: careerSectionTop, left: 0, behavior: "smooth" });
            break;
    }
}
