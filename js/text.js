// start in navabar 

let activeElement = document.querySelectorAll(".nav-element ul li");

activeElement.forEach((element) =>{
    element.onclick = function(){
        activeElement.forEach((navelement) =>{
            navelement.classList.remove("active");//change color in click element nav
            this.classList.add("active");
        })
    }
})

// create images

function imagescreate(){
    let arrayImages = [
        "cake-1.jpeg",
        "cake-2.jpeg",
        "cake-3.jpeg",
        "cupcake-1.jpeg",
        "cupcake-2.jpeg",
        "cupcake-3.jpeg",
        "doughnut-1.jpeg",
        "doughnut-2.jpeg",
        "doughnut-3.jpeg",
        "sweets-1.jpeg",
        "sweets-2.jpeg",
        "sweets-3.jpeg"
    ]
    for (let i = 0; i < arrayImages.length ; i++) {
        let contentelementimg = document.createElement("div");
        let contentImg = document.createElement("div");
        let images = document.createElement("img");
        
        let cartBody = document.createElement("h3");
        let textCart = document.createTextNode(`cake`);
        
        let apperentImages = document.getElementById("box-cake");

        images.src = `images/${arrayImages[i]}`;
        
        
        contentelementimg.className = `content-${i + 1} hello`;
        contentImg.className = `cake-${i + 1}`;
        cartBody.className = `cart-${i + 1}`;

        apperentImages.appendChild(contentelementimg);
        contentelementimg.appendChild(contentImg);
        contentImg.appendChild(images)
        contentelementimg.appendChild(cartBody);
        cartBody.appendChild(textCart);
    }
}
imagescreate()