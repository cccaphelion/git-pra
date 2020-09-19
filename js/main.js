let myImage = document.querySelector('.img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'iconfinder_online_social_media_facebook_734386.png') {
    myImage.setAttribute('src', 'iconfinder_online_social_media_google_search_plus_734387.png');
  } else {
    myImage.setAttribute('src', 'iconfinder_online_social_media_facebook_734386.png');
  }
}

let myButton = document.querySelector('.user');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
