function changePic(pic,color,clsName){
    var bigImg=document.querySelector(".big-img");
    var btnLink=document.getElementById("btn-link");
    bigImg.src=`images/pepsi00${pic}.png`;
    document.body.style.background=color;
    btnLink.setAttribute("class","btn-"+clsName);
}