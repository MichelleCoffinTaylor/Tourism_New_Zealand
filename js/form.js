//	Transport

//	Petrol Price as of Friday 30th June - $1.859/L

//	Motorbike 1 person – $109/day - min 1 day, max 5 days, 3.7L/100km
//	Small car 1-2 people – $129/day - min 1 day, max 10 days, 8.5L/100km
//	Large car 1-5 people – $144/day - min 3 days, max 10 days, 9.7L/100km
//	Motor home 2-6 people – $200/day - min 2 days, max 15 days, 17L/100km

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

	//	Submit
	$("#ContinueToPayment").click(function(event){
		event.preventDefault();
	})
});
