var incrementEl = document.querySelector("#increment");

var decrement = document.querySelector("#decrement");

var countEl = document.querySelector("#count");

var count =0;




function setFuntion(){
    countEl.textContent = count;
}

incrementEl.addEventListener("click", function(){

    count++;

    setFuntion();

});


decrement.addEventListener("click", function(){
 if(count>0){
     count--;
     setFuntion();
 }
});

function myFunction(x){
x.incrementEl;
x.decrement;
    if(count>0){
        count--;
        setFuntion();
    }
    count++;
   setFuntion();

}