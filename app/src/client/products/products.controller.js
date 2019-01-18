(function(){

	angular
		.module("Main.products", [])
		.controller("productsController", productsController)
		.directive("productWidget", productWidget);

	function productsController($scope, productsService){
		
		var modelProducts = function(data){
			$scope.products = data;
		}

		productsService.getProducts()
			.then(modelProducts);
	}

	function productWidget(){
		var widget = {
			templateUrl: "./products/product.widget.html",
			restrict: "E",
			controller: function($scope){
				$scope.buyme = function(product){
					console.log(product);
				}
			}
		}

		return widget;
	}

}());
