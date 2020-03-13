var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";


//Anonymous Function means a function doesn't have name 
/* we can say it's local function, we can not use the function 
or method outside of the function which it was declared*/
themeSwitcher.addEventListener("click", function(){
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
}

});
 
themeSwitcher.addEventListener("click", myFunction
  
  );
 //create a function or declar the function: myFunction
 /* Advantage of declaration function: 
 I can say it's global function, after declar the function 
  I can reuse the funtion or method over again and again */
 function myFunction(){
  
  if (mode === "dark") {
     mode = "light";
     container.setAttribute("class", "light");
   }
   else {
   mode = "dark";
     container.setAttribute("class", "dark");
}
}
