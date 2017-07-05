//	Form Validation

$(document).ready(function(){

	//	Form input Variables
	//	Number of people that will be traveling
	var ValidNumberOfPeople = false;
	//	Map starting point and end point
	var ValidStartingPoint = false;
	var ValidEndPoint = false;
	//	Book your trip fields
	var ValidFirstName = false;
	var ValidLastName = false;
	var ValidEmail = false;
	var ValidConfirmEmail = false;

	//	Submitting the form all fields have to return back true
	$("#ContinueToPayment").click(function(event){
		event.preventDefault();
		if(ValidNumberOfPeople === true && ValidStartingPoint === true && ValidEndPoint === true && ValidFirstName === true && ValidLastName === true && ValidEmail === true && ValidConfirmEmail === true){
			$("#LiveValidation").submit();
		}
	});

	//	Number of people
	$("#ValidNumberOfPeople")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var NumberOfPeopleRules = ["required", "min:1", "max:6"];
			ValidNumberOfPeople = validate($(this), NumberOfPeopleRules);
		})

	//	Starting point
	$("#ValidStartingPoint")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var StartingPointRules = ["required", "min:10", "max:40"];
			ValidStartingPoint = validate($(this), StartingPointRules);
		})

	//	End point
	$("#ValidEndPoint")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var StartingPointRules = ["required", "min:10", "max:40"];
			ValidEndPoint = validate($(this), EndPointRules);
		})

	//	First Name
	$("#ValidFirstName")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var FirstNameRules = ["required", "min:2", "max:15"];
			ValidFirstName = validate($(this), FirstNameRules);
		})

	//	Last name
	$("#ValidLastName")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var LastNameRules = ["required", "min:2", "max:20"];
			ValidLastName = validate($(this), LastNameRules);
		})

	//	Email
	$("#ValidEmail")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var EmailRules = ["required", "min:10", "max:40"];
			ValidEmail = validate($(this), EmailRules);
		})

	//	Confirm Email
	$("#ValidConfirmEmail")
		.focus(function(){

		}).blur(function(){

		}).keyup(function(){
			var ConfirmEmailRules = ["required", "min:10", "max:40"];
			ValidConfirmEmail = validate($(this), ConfirmEmailRules);
		})
});

function validate(element, rules){
	var valid = true;
	element.parent().find('span.input-errors').empty();
	for (var i = 0; i < rules.length; i++) {
		var pattern = /[:]\w/;
		if(rules[i].match(pattern)){
			var split = rules[i].split(':');
			var rule = split[0];
			var value = parseInt(split[1]);
		} else {
			var rule = rules[i];
		}

		//	Making all fields required
		switch(rule){
			case "required":
				if(element.val().length === 0){
					valid = false;
					element.parent().find('span.input-errors').text('This field is required');
					return valid;
				}
			break;
			// When information is entered less than the min required it will show this error
			case "min":
				if(element.val().length < value){
					valid = false;
					element.parent().find('span.input-errors').text('This field must be more than ' + value + ' characters');
					return valid;
				}
			break;
			//	When information is entered more than the max required it will show this error
			case "max":
				if(element.val().length > value){
					valid = false;
					element.parent().find('span.input-errors').text('This field must be less than ' + value + ' characters');
					return valid;

				}
			break;
			//	When an email is not entered correctly it will show this error
			case "email":
				if(element.val().length){
					valid = false;
					element.parent().find('span.input-errors').text('This field must include ' + value + ' /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/');
					return valid;
				}
			break;
			//	When the email is not the same as email entered previously it will show
			case "confirmEmail":
				if(element.val().length){
					valid = false;
					element.parent().find('span.input-errors').text('This field must include ' + value + ' /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/');
					return valid;
				}
			break;
		}
	};
	return valid;
}
