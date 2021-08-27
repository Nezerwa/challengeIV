var icon =document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src=src="/Users/TRUTH/Desktop/todo-app-starter-main/images/icon-sun.svg";


    }else{
        icon.src="/Users/TRUTH/Desktop/todo-app-starter-main/images/icon-moon.svg";
    }





}









document.querySelector('#push').onclick = function(){


if(document.querySelector('#newtask input').value.length == 0){
    alert("please enter a task")


}
else{
    document.querySelector('#tasks').innerHTML
    += `
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}

           </span>

           <button class="delete">
           

           <i class="fa fa-window-close" aria-hidden="true"></i>


           
           
           </button>

        
        
        
          </div>
    
    `;
}

}






    



