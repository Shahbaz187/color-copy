const getcolor = () => {
    let mathHex = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + mathHex.toString(16)
    document.body.style.background = randomCode
    document.getElementById("color-Code").innerText = randomCode
    navigator.clipboard.writeText(randomCode)
}
document.getElementById("btn").addEventListener('click', getcolor)

getcolor();