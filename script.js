document.getElementById("parent").innerHTML=("SomethingElse");
//document.getElementById("parent").style.backgroundColor=("red");
//document.getElementById("parent").style.color=("white");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center")

document.getElementsByClassName("exercise")[0].innerHTML=("I am Samriti Subedi");
document.getElementsByClassName("exercise")[2].innerHTML=("I am 18 years old");

document.getElementsByTagName("h1")[0].style.cssText=("text-transform:uppercase;text-align:centre")
document.getElementsByTagName("h1")[1].style.cssText=("text-transform:uppercase;text-align:centre")
document.getElementsByTagName("h1")[2].style.cssText=("text-transform:uppercase;text-align:centre")

document.getElementsByTagName("h2")[0].style.cssText=("text-transform:uppercase;text-align:centre")
document.getElementsByTagName("h2")[1].style.cssText=("text-transform:uppercase;text-align:centre")
document.getElementsByTagName("h2")[2].style.cssText=("text-transform:uppercase;text-align:centre")


document.querySelector("h2").innerHTML=("I am Samriti");
document.querySelector("#hi").innerHTML=("I am Sam");
document.querySelector(".hey").innerHTML=("I am haha");

const change = document.querySelectorAll("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am sammi");
}
//function myFunction(){
//document.open();
//   document.write("<h1>Hello World</h1>");
 //   document.close();
//}

function myFunction(){
    const myWindow = window.open();
    myWindow.document.open();
    myWindow.document.write(<h1>Hello World</h1>);
    document.close()


}

