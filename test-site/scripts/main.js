// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
// //1234
// alert('hello!');
// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

//点击切换图片
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shatan.jpg') {
        myImage.setAttribute('src', 'images/haiyang.jpg');
    }else{
        myImage.setAttribute('src', 'images/shatan.jpg');
    }
}

//切换用户，显示用户名
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to my web，' + myName;
    }

}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my web，' + storedName;
}

//调用切换用户函数
myButton.onclick = function() {
    setUserName();
}