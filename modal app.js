var open_modal = document.querySelector(".open-btn");

var close_btn = document.querySelector(".close-btn");

var modal_div = document.querySelector(".modal-app-body");

open_modal.addEventListener("click",opne_app);

function opne_app(){
    modal_div.classList.add("open_modal_app");
}

close_btn.addEventListener("click",close_app);

function close_app(){
    modal_div.classList.remove("open_modal_app");
}

modal_div.addEventListener("click",outside);

function outside(e){
    if(e.target==modal_div){
        modal_div.classList.remove("open_modal_app");
    }
}
/////////// QR Code Generator
 var qr_img = document.getElementById("qr_img");
 var url_input = document.getElementById("input_url");

 var loading_div = document.querySelector(".loading-div");

 var api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;

 var img_src ;
 var user_input;
 function generate_qr(){

    user_input = url_input.value;
    
    var validate = user_input.includes(".in") || user_input.includes(".com") || user_input.includes(".gov");

    if(user_input==""){
        alert("Enput URL");
        
    }else if(! validate){
        alert("Invailid URL ! Hints:.com/.in/.gov")

    }
    else{
        loading_div.classList.add("loading");

        var generate = document.getElementById("generate");
        generate.innerHTML = "Generating..."
        
        qr_img.onload = function(){
            loading_div.classList.remove("loading");
            generate.innerHTML = "Generate QR";

            var downloadBtn = document.querySelector(".download_qr");
            downloadBtn.style.display = "block";
        }
        qr_img.src = api+url_input.value;
        img_src =  qr_img.src;
    }
 }


 ////////////
 function download_qr() {
    // Get the image URL
    var imageUrl =  img_src;
  
    // Fetch the image data
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a link element
        var link = document.createElement('a');

        // Create a URL for the Blob
        var url = window.URL.createObjectURL(blob);
  
        // Set the link's href attribute to the Blob URL
        link.href = url;
  
        // Set the download attribute with the desired filename
        link.download = `QR-${user_input}-image.jpg`;
  
        // Append the link to the document
        document.body.appendChild(link);
  
        // Trigger a click event on the link
        link.click();
  
        // Remove the link and revoke the Blob URL
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error fetching image:', error));
  }
