

$(document).ready(function () {

  const URL = "https://api.quotable.io/random"
  fetch(URL)
    .then(response => response.json())
    .then(response => {
        
      $("#text").text(response["content"]);
      $("#author").text(response["author"]);
    });
  
  
  $("#new-quote").on("click", function () {
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        
        $("#text").text(response["content"]);
        $("#author").text(response["author"]);
      }
      );
  
  })

 });