var FoodItem = function(pName, pCalories, pQuantity) {
    this.name = pName;
    this.calories = pCalories;
    this.quantity = pQuantity;
};

FoodItem.prototype.isValid = function(){
  if(this.name === "" || this.calories === "" || this.quantity === "" || isNaN(this.quantity) || isNaN(this.calories)){
    return false;
  }else{
    return true;
  }
};