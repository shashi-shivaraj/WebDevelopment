//store the username and password entered
//get access to submit button
var button = document.getElementById("submit");
button.onclick = getLoginData;

function getLoginData()
{
    var title = document.getElementsByTagName("h1")[0];
    title.innerHTML = "Hello ";
}