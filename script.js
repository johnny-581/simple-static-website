function changeBackgroundColor() {

    function randomColor() {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.ramdom() * 256)
        const b = Math.floor(Math.random() * 256)
    
        return `rgb(${r},${g},${b})`
    }

    document.body.style.backgroundColor = randomColor();

    setInterval(changeBackgroundColor, 5000)
}