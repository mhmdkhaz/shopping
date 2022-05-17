// start in navabar

let activeElement = document.querySelectorAll(".nav-element ul li");

activeElement.forEach((element) => {
  element.onclick = function () {
    activeElement.forEach((navelement) => {
      navelement.classList.remove("active"); //change color in click element nav
      this.classList.add("active");
    });
  };
});

// start in back to top
let btnToTop = document.getElementById("toTop");
let containrToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    containrToTop.style.bottom = "5%";
  } else {
    containrToTop.style.bottom = "100%";
  }
  btnToTop.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
};
// end  in back to top
// start in filter element
let btnChose = document.querySelectorAll(".buttons-choose button");
let imgChose = document.querySelectorAll(".filterImg");

btnChose.forEach((btn) => {
  btn.addEventListener("click", chooseElement);
});
function chooseElement() {
  imgChose.forEach((contentimg) => {
    contentimg.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}

// click image and show img in box
function SetSrcInImageAndGet() {
  let FullScreen = document.querySelectorAll(".cakeImg img");
  let ShowImage = document.getElementById("showImgFullScreen");
  let setSrcImg = document.getElementById("imgFullScreen");
  let hide = document.getElementById("close");

  FullScreen.forEach((BoxImg) => {
    BoxImg.addEventListener("click", () => {
      let getSrc = BoxImg.getAttribute("src");
      ShowImage.style.visibility = "visible";
      setSrcImg.src = `${getSrc}`;
    });
  });
  hide.addEventListener("click", () => {
    ShowImage.style.visibility = "hidden";
  });
}
SetSrcInImageAndGet();

// start in cntact change imgaes 2 second
let contactImg = document.querySelector(".imgcontact img");
let i = 0;

function changeImgaesContact() {
  let ArrImgContact = [
    "images/undraw_personal_email_re_4lx7.svg",
    "images/undraw_profile_data_re_v81r.svg",
    "images/undraw_profile_details_re_ch9r.svg",
  ];
  setInterval(() => {
    contactImg.src = `${ArrImgContact[i]}`;
    i++;
    contactImg.style.top = "0%";
    if (i > ArrImgContact.length) {
      contactImg.src = `${ArrImgContact[(i -= i)]}`;
      contactImg.style.top = "100%";
    }
  }, 1000);
}
changeImgaesContact();
