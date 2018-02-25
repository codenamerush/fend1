$(function(){
	$("img").attr("src", "http://placekitten.com/350/150");
});

var handler = function(name){
	console.log("Hi " + name);
}

var obj = {
	foo: 'bar',
	aarushi: function(parameter_handler){
		// handler is a type of function
		parameter_handler(obj.foo);
	}
};

obj.aarushi(handler);