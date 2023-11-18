let myimage = document.querySelector("img");
myimage.onclick = () => {
    let mySrc = myimage.getAttribute("src");
    if (mySrc === "images/1035847.png") {
        myimage.setAttribute("src","images/blue.png");
    } else {
        myimage.setAttribute("src","images/1035847.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
  
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
}

myButton.onclick = function () {
    setUserName();
};
  