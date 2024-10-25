const container = document.querySelector(".container");
const refreshButton = document.querySelector(".Refresh-button");

const maxPletteboxes = 32;

const generatePalette = () => {
    container.innerHTML = "";
    for (let i = 0; i < maxPletteboxes; i++) {
        let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
        randomColor = `#${randomColor.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomColor}"></div>
                        <span class="color-code">${randomColor}</span>`;
        color.addEventListener("click", () => copyColor(color, randomColor));
        container.appendChild(color);
    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".color-code");
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!"))
}


refreshButton.addEventListener("click", generatePalette);