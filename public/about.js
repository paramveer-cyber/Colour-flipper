function chroma(){
    let text = document.getElementById("navbar-content");
    let c = "#";
    for (let index = 0; index < 6; index++) {
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        b = a[Math.floor(Math.random() * a.length)];
        c = c+b;
    }
    text.style.color = c;
    let text1 = document.getElementById("navbar-contet");
    text1.style.color = c;
}

setInterval(chroma, 75)