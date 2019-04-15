let myHeading = document.querySelector('h2');
myHeading.textContent = 'hello world!';

document.querySelector('html').onclick = function() {
    // alert('nosss');
    console.log('tap html');
};
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let imSrc = myImage.getAttribute('src');
    if (imSrc === '/images/通知.png'){
        myImage.setAttribute('src','/images/粮食党建二维码.png');
    } else {
        myImage.setAttribute('src','/images/通知.png');
    }
};

document.getElementById('tapDiv').onclick = function(){
    alert('-。-');
};

function setHeading(name){
    document.querySelector('h2').textContent = 'Mozilla ' + name + ' !';
};
function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    setHeading(myName);
};
let stroedName = localStorage.getItem('name');
if (!stroedName){
    setUserName();
}else{
    setHeading(stroedName);
};
document.getElementById('myBtn').onclick = function(){
    setUserName();
};