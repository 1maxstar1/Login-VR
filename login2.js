function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="a"&& password=="u")
{
    window.open('video.html');
    return false;

}
else
{
    alert("login failed");
}


}