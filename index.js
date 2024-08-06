
let section = document.querySelector("section");
let buttons = document.querySelectorAll("button");
let p = document.querySelector("p");

buttons.forEach((element) => {
    element.addEventListener("click", () => {
        
        if (element.innerText === "Reset") {
            section.style.background = ""; 
            p.innerText = "Click the button to change background color";
            p.style.color = ""; 
            buttons.forEach(btn => {
                btn.style.background = ""; 
                btn.style.transform = "scale(1)";
            });
            p.style.transform = "rotateX(360deg) scale(1)"; 
            p.style.transition = "none";
            buttons.forEach(btn => btn.style.transition = "none"); 
        } else {
           
            section.style.background = element.innerText;
        }
    });

   
    element.addEventListener("mouseover", () => {
        if (element.innerText !== "Reset") {
            p.innerText = `Click the button to get ${element.innerText} background`;
            p.style.color = element.innerText;
            element.style.background = element.innerText;
            p.style.transform = "rotateX(360deg) scale(1.2)";
            element.style.transform = "scale(1.2)";
            p.style.transition = "2s";
            element.style.transition = "2s";
        }
    });


    element.addEventListener("mouseout", () => {
        if (element.innerText !== "Reset") {
            p.innerText = "Click the button to change background color";
            element.style.background = "black";
            p.style.transform = "rotateX(360deg) scale(1)";
            p.style.color = "white";
            element.style.transform = "scale(1)";
            p.style.transition = "2s";
            element.style.transition = "2s";
        }
    });
});
