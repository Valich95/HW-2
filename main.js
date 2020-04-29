document.addEventListener("DOMContentLoaded", function(event){

    document.getElementById("apply").addEventListener("click", function(){
        var nextFoodItem = new FoodItem(
            document.getElementById("name").value, 
            document.getElementById("calories").value, 
            document.getElementById("quantity").value
        );
        if(nextFoodItem.isValid()){
            foodList.push(nextFoodItem);
            clear();
            updateDisplay(foodList);
        }
        else{
            document.getElementById("total").innerHTML = "Sorry, invalid input data";
        }
    });
    document.getElementById("clear").addEventListener("click", clear);
});

function clear(){
    document.getElementById("name").value = "";
    document.getElementById("calories").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("name").focus();
}

var foodList = [];

function updateDisplay(array){
    var myList = document.getElementById("foodList");
    myList.innerHTML = "";
    let total = 0;
    for (i = 0; i < array.length; i++){
        total = total + (array[i].calories * array[i].quantity);
        var node = document.createElement("li");
        node.innerHTML = array[i].name + ", " + array[i].calories + ", " + array[i].quantity;
        document.getElementById("foodList").appendChild(node);
    }
    document.getElementById("total").innerHTML = "You have consumed " + total + " calories";
}