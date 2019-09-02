/*To get the enteries from the database and update the 
comments section */
getComments();

function getComments()
{
    $.get("/comments",function(data){
        if(!data)
        {
            console.log("No data recieved");
        }
        else
        {
            console.log("recieved data: ");
        /*    console.log(data.length);
            for(var i = 0;i<data.length;i++)
            {
                console.log(data[i].name);
            }
        */

            showComments(data);
        }
    });
};

function showComments(comments)
{
    var commentsSection = document.getElementById("usercomments");
    for(var i = 0;i<comments.length;i++)
    {
        var sec =  document.createElement("section");
        sec.className += "usercomments";
        var heading = document.createElement("h3");
        heading.innerHTML = comments[i].name;
        var cmt = document.createElement("p");
        cmt.innerHTML = comments[i].comment;
        sec.appendChild(heading);
        sec.appendChild(cmt);
        commentsSection.appendChild(sec);
    }
}

//store the username and password entered
//get access to submit button
/*var button = document.getElementById("submit");
button.onclick = getLoginData;

function getLoginData()
{
    var title = document.getElementsByTagName("h1")[0];
    var input = document.getElementById("name").value;
    var cmt = document.getElementById("comment").value;
    title.innerHTML = "Welcome to Great Quotes " + input + " "+cmt;
}*/