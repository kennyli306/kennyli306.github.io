



const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/fish-diversity.jpg") {
        myImage.setAttribute("src", "images/pan-seared-salmon.jpg");
    }
    else {
        myImage.setAttribute("src", "images/fish-diversity.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");

    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Fishes, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Fishes, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};