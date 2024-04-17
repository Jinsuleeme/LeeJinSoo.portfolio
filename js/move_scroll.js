// script.js

// Mouse Over 되있는 요소 ID
let currentTargetID;

// Nav Scroll 시 색 변경
window.addEventListener('scroll', function (event) {
    const elementNavBtn = document.querySelectorAll(".nav_btn");
    let aboutSectionTop = window.scrollY + document.getElementById("sec_about").getBoundingClientRect().top;

    if (window.scrollY < aboutSectionTop) {
        // About ME 이상 스크롤시 글자색 black 
        this.document.querySelector("#nav_top").classList.remove("nav_changed_top");
        this.document.querySelector("#btn_logo").classList.remove("nav_changed_btn");
        this.document.querySelector("#btn_logo").classList.remove("nav_main_onmoused_btn");
        this.document.querySelector("#btn_logo").classList.remove("nav_onmoused_btn");
        elementNavBtn.forEach((element) => {
            element.classList.remove("nav_changed_btn");
        })

        // 상단 버튼 클릭 스크롤 시 색 변경 orange-red
        if (currentTargetID != null) {
            currentTargetID.classList.add('nav_main_onmoused_btn');
        }

        // 우측 하단 페이지업 버튼 visible off
        this.document.querySelector('.img_main_pageup').classList.remove('img_main_pageup_visible_on');
        this.document.querySelector('.img_main_pageup').classList.add('img_main_pageup_visible_off');

    } else if (window.scrollY >= aboutSectionTop) {
        // About ME 이상 스크롤시 글자색 black         
        this.document.querySelector("#nav_top").classList.add("nav_changed_top");
        this.document.querySelector("#btn_logo").classList.add("nav_changed_btn");
        this.document.querySelector("#btn_logo").classList.remove("nav_main_onmoused_btn");
        this.document.querySelector("#btn_logo").classList.remove("nav_onmoused_btn");
        elementNavBtn.forEach((element) => {
            element.classList.add("nav_changed_btn");
        })

        // 상단 버튼 클릭 스크롤 시 색 변경 orange-red
        if (currentTargetID != null) {
            currentTargetID.classList.add('nav_onmoused_btn');
        }

        // 우측 하단 페이지업 버튼 visible off
        this.document.querySelector('.img_main_pageup').classList.remove('img_main_pageup_visible_off');
        this.document.querySelector('.img_main_pageup').classList.add('img_main_pageup_visible_on');
    }
});


// 우측 하단 버튼 클릭
document.querySelector('.div_main_pageup').addEventListener('click', function () {
    scroll({ top: 0, left: 0, behavior: "smooth" });
})

// Nav btn Mouse Over 시 색 변경
function btn_MouseOver(event) {
    let currentID = this.document.getElementById(event.target.id);
    let aboutSectionTop = window.scrollY + document.getElementById("sec_about").getBoundingClientRect().top;
    if (window.scrollY < aboutSectionTop) {
        currentTargetID = currentID;    //
        currentID.classList.remove("nav_onmoused_btn");
        currentID.classList.remove("nav_main_onmoused_btn");
        currentID.classList.add("nav_main_onmoused_btn");
    } else if (window.scrollY >= aboutSectionTop) {
        currentTargetID = currentID;    //
        currentID.classList.remove("nav_main_onmoused_btn");
        currentID.classList.remove("nav_onmoused_btn");
        currentID.classList.add("nav_onmoused_btn");
    }
}

// Nav btn Mouse Out 시 색 변경
function btn_MouseOut(event) {
    let currentID = this.document.getElementById(event.target.id);
    currentTargetID = null;     //
    currentID.classList.remove("nav_main_onmoused_btn");
    currentID.classList.remove("nav_onmoused_btn");
}

// Nav 버튼 클릭
function btn_Click(event) {
    let currentEL = this.document.getElementById(event.target.id);
    let aboutSectionTop = window.scrollY + document.getElementById("sec_about").getBoundingClientRect().top;
    let skillsSectionTop = window.scrollY + document.getElementById("sec_skills").getBoundingClientRect().top;
    let projectsSectionTop = window.scrollY + document.getElementById("sec_projects").getBoundingClientRect().top;
    let activitySectionTop = window.scrollY + document.getElementById("sec_activity").getBoundingClientRect().top;
    let careerSectionTop = window.scrollY + document.getElementById("sec_career").getBoundingClientRect().top;

    switch (currentEL.id) {
        case "btn_logo":
            scroll({ top: 0, left: 0, behavior: "smooth" });
            break;

        case "btn_about":
            scroll({ top: aboutSectionTop, left: 0, behavior: "smooth" });
            break;

        case "btn_skills":
            scroll({ top: skillsSectionTop, left: 0, behavior: "smooth" });
            break;

        case "btn_projects":
            scroll({ top: projectsSectionTop, left: 0, behavior: "smooth" });
            break;

        case "btn_activity":
            scroll({ top: activitySectionTop, left: 0, behavior: "smooth" });
            break;

        case "btn_career":
            scroll({ top: careerSectionTop, left: 0, behavior: "smooth" });
            break;

        case "btn_findmore":
            scroll({ top: aboutSectionTop, left: 0, behavior: "smooth" });
            break;
    }
}
