// Select the section, buttons, and paragraph elements
let section = document.querySelector("section");
let buttons = document.querySelectorAll("button");
let p = document.querySelector("p");

// Function to handle color change when a color button is clicked
buttons.forEach((element) => {
    element.addEventListener("click", () => {
        // If the clicked button is the Reset button
        if (element.innerText === "Reset") {
            section.style.background = ""; // Reset the background color
            p.innerText = "Click the button to change background color";
            p.style.color = ""; // Reset the color of the text
            buttons.forEach(btn => {
                btn.style.background = ""; // Reset the background color of buttons
                btn.style.transform = "scale(1)"; // Reset button scale
            });
            p.style.transform = "rotateX(360deg) scale(1)"; // Reset the scale and rotation of the paragraph
            p.style.transition = "none"; // Remove transition effect
            buttons.forEach(btn => btn.style.transition = "none"); // Remove transition effect from buttons
        } else {
            // Change the background color of the section based on the clicked button
            section.style.background = element.innerText;
        }
    });

    // Handle mouseover event for color buttons
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

    // Handle mouseout event for color buttons
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
