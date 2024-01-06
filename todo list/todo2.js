
var getting = document.querySelector(".list-container");

function add_item(){
    var task = document.getElementById("input_item");
    if(task.value==""){
        alert("Enter any task")
    } else {

       var task_list = document.createElement("li");

        task_list.innerHTML =`<input type="checkbox" name="" class="check_box"  onclick="checked_list(this)">`+ task.value +`<img onclick="delete_list(this)" src="delete.png" width="25px" height="25px">`;

        var container = document.querySelector(".list-container");

        container.appendChild(task_list);

        localStorage.setItem("todo2",getting.innerHTML);

        task.value="";



    }
}

function show_data(){
    var fetching = localStorage.getItem("todo2");
    getting.innerHTML = fetching;
}


function checked_list(e){
    if( e.checked===true){
    alert("just cheked");

    e.setAttribute("checked",true);
    localStorage.setItem("todo2",getting.innerHTML);
    
    }else{
        alert("just unchecked");
        e.removeAttribute("checked");

        localStorage.setItem("todo2",getting.innerHTML);
    }

    console.log(e.checked);

}

function delete_list(e){
    e.parentElement.remove();
    localStorage.setItem("todo2",getting.innerHTML);
}

show_data();

// console.log(document.querySelectorAll(".check_box")[1].checked);

//// time & Date ////

function time_now(){
    
    var current_time = new Date();

    var current_hour = String(current_time.getHours()).padStart(2,"0");

    var current_minutes = String(current_time.getMinutes()).   padStart(2,"0");

    var current_seconds = String(current_time.getSeconds()).padStart(2,"0");

    document.getElementById("current_time").innerHTML = `${current_hour} : ${current_minutes} : ${current_seconds}`;
    
}

function date_now(){

    var current_dates = new Date();

    var current_day = current_dates.getDay();

    var current_date = current_dates.getDate();

    var current_month = current_dates.getMonth();

    var current_year = current_dates.getFullYear();

        var months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var day = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
    document.getElementById("current_date").innerHTML = `${day[current_day]},${current_date}  ${months[current_month]} ${current_year}`;

}
date_now();
time_now();
setInterval(time_now,1000);
setInterval(date_now,60*1000);






