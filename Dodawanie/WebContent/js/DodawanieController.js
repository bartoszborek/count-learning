app.controller('DodawanieController', ['$scope', function($scope) {
  
  $scope.summary = {
		  valid : 0,
		  invalid : 0,
		  all : 0
  }
  $scope.zadania = [];

  
  
  $scope.checkResult = function(index){
	  var obj = $scope.zadania[index];
	  if(!obj.result && obj.result !== 0){
		  return;
	  }
	  obj.computed = true;
	  obj.isValid = obj.correctResult == obj.result;
	  if(obj.isValid){
		  $scope.summary.valid = $scope.summary.valid + 1;
	  } else {
		  $scope.summary.invalid = $scope.summary.invalid + 1;
	  }
	  
	  if($scope.summary.all <= $scope.summary.valid + $scope.summary.invalid + 1){
		  $scope.addNext($scope.summary.valid + $scope.summary.invalid + 1 - $scope.summary.all)
	  }
	  
  };
  
 
  
  $scope.addSum = function(){
	  var var1 = Math.floor((Math.random() * 21));
	  var var2 = Math.floor((Math.random() * 21));
	  return {
		  operation : var1 + ' + ' + var2,
		  correctResult : var1 + var2,
		  result : null,
		  computed : false,
		  isValid : false
	  };
  };
  
  $scope.add3Sum = function(){
	  var var1 = Math.floor((Math.random() * 21));
	  var var2 = Math.floor((Math.random() * 21));
	  var var3 = Math.floor((Math.random() * 21));
	  return {
		  operation : var1 + ' + ' + var2 + ' + ' + var3,
		  correctResult : var1 + var2 + var3,
		  result : null,
		  computed : false,
		  isValid : false
	  };
  };
  
  $scope.addMinus = function(){
	  var var1 = Math.floor((Math.random() * 21));
	  var var2 = Math.floor((Math.random() * 21));
	  while(var2 > var1){
		  var2 = Math.floor((Math.random() * 21));
	  }
	  return {
		  operation : var1 + ' - ' + var2,
		  correctResult : var1 - var2,
		  result : null,
		  computed : false,
		  isValid : false
	  };
  };
  
  $scope.addMultiple = function(){
	  var var1 = Math.floor((Math.random() * 11));
	  var var2 = Math.floor((Math.random() * 11));

	  return {
		  operation : var1 + ' * ' + var2,
		  correctResult : var1 * var2,
		  result : null,
		  computed : false,
		  isValid : false
	  };
  };
  
  $scope.operationRegister = [$scope.addSum, $scope.add3Sum, $scope.addMinus, $scope.addMultiple];
  
  $scope.createOperation = function(){
	  var index = Math.floor(($scope.operationRegister.length * Math.random()));
	  console.log(index);
	  return $scope.operationRegister[index]();
  }
  
  $scope.addNext = function(multipler){
	  var mult = 1;
	  if(multipler){
		  mult = multipler;
	  }
	  for(var i = 0; i<mult; i++){
		  $scope.summary.all += 1;
		  $scope.zadania.push($scope.createOperation());
	  }
  }
  
  $scope.getImage = function(zad) {
	  if(zad.isValid){
		  return "images/good.jpg";
	  }
	  return "images/bad.jpg";
  }
  
  $scope.addNext(3);
}]);