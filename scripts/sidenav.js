function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("content").style.marginLeft = "200px";
    document.getElementById("openNavButton").style.marginLeft = "2000px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").style.marginLeft= "0";
    document.getElementById("openNavButton").style.marginLeft = "0";
}