const navBtn = document.querySelector('.nav-btn');
const sideBar = document.querySelector('.sidebar-nav');
const Img = document.querySelector('.svvg'); 
let isSidebarOpen = true;
let isImgrotate = true;

navBtn.onclick = function (event){
    event.preventDefault();
    if (isSidebarOpen){
   sideBar.classList.add('active');
   isSidebarOpen = false; 
   Img.classList.add('active');
   isImgrotate = false;
}else{
    sideBar.classList.remove('active');
    isSidebarOpen = true;
    Img.classList.remove('active');
    isImg = true;
}
}

const anchorTags = document.querySelectorAll('a');

anchorTags.forEach((anchor) => {
  anchor.addEventListener('dblclick', (event) => {
    event.preventDefault();
  });
});

document.getElementById('dl-cv').addEventListener('click', function() {
  window.location.href = 'index.html#pro';
});

document.getElementById('hi-me').addEventListener('click', function() {
  window.location.href = 'index.html#cont';
});

