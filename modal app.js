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

 function generate_qr(){

    var user_input = url_input.value;
    
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
    }
    
 }

 //////////

 function download_qr(){
    var qr = document.createElement("a");
    qr.href = "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf";
    qr.setAttribute("target", "_blank");
    // qr.download = "test.pdf";
    document.body.appendChild(qr);
    qr.click();
    // qr.remove();
    
    console.log(qr);
 }