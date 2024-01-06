var add_list = document.querySelector(".add-btn");

var modal_body = document.querySelector(".modal-body");

add_list.addEventListener("click", add);

var operation_title = document.querySelector(".operation_title");

function add(){
    modal_body.classList.add("modal-div");

}

var closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click",close)

function close(){
    modal_body.classList.remove("modal-div");
}

/////////// image select code..
const image_input = document.querySelector('#file');
var uploaded_image ;

image_input.onchange = function(){
  uploaded_image =  document.querySelector('#profile_pic');
  uploaded_image.src = URL.createObjectURL(image_input.files[0]);
}


//////////////// add employee row////////

operation_title.innerHTML = "Add New Employee's Details...";

var table = document.querySelector(".tbody");
var form = document.querySelector(".add-form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  var name = document.getElementById("name").value;
  var idno = document.getElementById("idno").value;
  var salary = document.getElementById("salary").value;

  var newrow = document.createElement("tr");

  var newtdimage = document.createElement("td");
  newtdimage.setAttribute("class","employee-image")


  var newtdname = document.createElement("td");
  var newtdidno = document.createElement("td");
  var newtdsalary = document.createElement("td");
  var delEdit_td = document.createElement("td");
  

  newtdimage.innerHTML = `<img class="newtdimage" src=${uploaded_image.src} alt="">`;
  newtdname.innerHTML = name;
  newtdidno.innerHTML = idno;
  newtdsalary.innerHTML = salary;
  delEdit_td.innerHTML = `<button class="btn edit">Edit</button> <button class="btn delete" onclick="delete_list(this)">Delete</button>`;

  newrow.appendChild(newtdimage);
  newrow.appendChild(newtdname); 
  newrow.appendChild(newtdidno); 
  newrow.appendChild(newtdsalary); 
  newrow.appendChild(delEdit_td); 

  table.appendChild(newrow);

  close();
  form.reset();
  document.querySelector('#profile_pic').src = "profile.jfif";
  uploaded_image="";
  refreshLocalStorage();

})

//////// delete selected list...

function delete_list(e){

  var a = e.parentElement.parentElement.firstChild.nextSibling.innerHTML;
  var cnf = confirm(`Do you want to delete ${a}'s records ?`);
  if(cnf==true){
    e.parentElement.parentElement.remove();
    refreshLocalStorage();
  }
 
}

function refreshLocalStorage(){
  localStorage.setItem("allList",table.innerHTML);
}

table.innerHTML = localStorage.getItem("allList");


