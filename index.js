window.addEventListener("load", function () {
    var button = document.querySelector("#btn");
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    //center button on page
    button.style.display = "block";
    button.style.margin = "auto";
    button.style.marginTop = "20px";
   
    button.addEventListener("click", randomDog);
  });
  

  async function randomDog(evt) {
    evt.preventDefault();
    var output = document.querySelector("#output");
    console.log("button clicked");

    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }

    fetch("https://random.dog/woof.json")
       
        .then(function (response) {
            return response.json();
        }   
        )

        .then(function (data) {

         //remove all children
            
           
            var image = data.url;
            console.log(image);
            var img = document.createElement("img");
            img.src = image;
            img.style.width = "500px";
            //center image
            img.style.margin = "auto";
            output.appendChild(img);




    
        });

  }
 