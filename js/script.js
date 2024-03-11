const getColor = () => {
    const reandomNumber = Math.floor(Math.random()* 16777215);
    const randomCode = "#" + reandomNumber.toString(16);
    document.body.style.backgroundColor = randomCode ;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();