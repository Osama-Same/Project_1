console.log("project")

const openPage = (x,y) =>{
   x = document.getElementById("Search").value;
   y = document.getElementById("S").value;
   y=x;
  for(let i=0;i < x.length;i++){
    
  if(x === "iMac")
  {
  window.open("iMac.html");
  }
  else if(x === "iPad")
  {
    window.open("iPad.html")
  }
  else if(x === "iPhone" && x === "iphone")
  {
    window.open("iPhone.html")
  }
  else if(x === "Home" && x === "home")
  {
    window.open("Home.html")
  }

}
 }

 const dark = (element) => {
   element = document.body;
   element.classList.toggle("dark-mode");
}


 const iMac1 = () => {
  document.getElementById("iMac1").innerHTML = "amet consectetur adipisicing elit. Iure voluptas aspernatur quaerat non reprehenderit quia accusamus ad tempora voluptates tenetur dolorem rerum inventore, excepturi dolores deleniti pariatur eveniet mollitia esse."
}
const iMac2 = () => {
  document.getElementById("iMac2").innerHTML = "amet consectetur adipisicing elit. Iure voluptas aspernatur quaerat non reprehenderit quia accusamus ad tempora voluptates tenetur dolorem rerum inventore, excepturi dolores deleniti pariatur eveniet mollitia esse."
}
const iMac3 = () => {
  document.getElementById("iMac3").innerHTML = "amet consectetur adipisicing elit. Iure voluptas aspernatur quaerat non reprehenderit quia accusamus ad tempora voluptates tenetur dolorem rerum inventore, excepturi dolores deleniti pariatur eveniet mollitia esse."
}
const iPad1 = () => {
   document.getElementById("ipad1").innerHTML ="It’s a magical piece of glass"
  
}
const iPad2 = () => {
  document.getElementById("ipad2").innerHTML ="It’s a magical piece of glass"
 //document.getElementById("ipad").innerHTML ="It’s a magical piece of glass"
}
// iPhone 
const iPhone1 = () => {

  document.getElementById("iPhone1").innerHTML ="amet consectetur adipisicing elit. Iure voluptas aspernatur quaerat non reprehenderit quia accusamus ad tempora voluptates tenetur dolorem rerum inventore, excepturi dolores deleniti pariatur eveniet mollitia esse."
  
}
const iPhone2 = () => {

  document.getElementById("iPhone2").innerHTML ="amet consectetur adipisicing elit. Iure voluptas aspernatur quaerat non reprehenderit quia accusamus ad tempora voluptates tenetur dolorem rerum inventore, excepturi dolores deleniti pariatur eveniet mollitia esse."
  
}
