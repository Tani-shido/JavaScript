// GET : To get any HTML element in javascript we use querySelector (document.querySelector("element");) 

	// This is querySelector which is getting the input tag which is assigned in HTML
		document.querySelector("input"); 

	// To access it's value we assign a variable to it
		const inputEl = document.querySelector("input"); 

	// Then we store the element's value in that assigned var
		const value = inputEl.value;

	// To check : Enter anything in input tag and open your console
		console.log(value);

	// [There are mutliple types of selectors] 

		document.querySelectorAll("h3"); //To select all same types of tags
		document.querySelectorAll("h3")[2]; //To select a specific tag from all the same types of tags
		document.getElementById("idOne"); //To select with assigned ID
		document.getElementsByClassName("classNine"); //To select with assigned Class
			

// Update : Get element, add .innerHTML/.innerText = "The updation you want" 

		document.querySelectorAll("h3")[3].innerHTML = "UPDATION : INNER HTML KA KAMAAL";
		document.querySelectorAll("h3")[4].innerText= "UPDATION : INNER TEXT KA KAMAAL";

	// We can also update using variable (How? : Get an element assign a var to it then change it's innerHTML)
	// If we want to upadte it more we can do it with variable itself
		const assignedVariable = document.getElementById("idSeven");
		assignedVariable.innerHTML = "UPDATION : By assigning variable KA KAMAAL";


//Adding : To create element in HTML using javascript is also possible with createElement("nameofElement");

	// This will create the element createElement("div"), Then select location by querySelector to add the element, then querySelector("location").appendChild("div") will make that element a child of location
		const addElement = document.createElement("div");
		addElement.innerHTML = "Hi there, I am a Div (created using javascript)";
		
		document.getElementById("idEleven").append(addElement);

		const addElement2 = document.createElement("div");
		addElement2.innerHTML = "Hi there, I am a second Div (created using javascript for Deletion)";
		document.getElementById("idTwelve").append(addElement2);

				
//Deleting : To delete an element (we can't directly so) we have to delete it's parent. To delete it - get element, get parent, removeChild(childName/elementName);

		// document.getElementById("idTwelve").remove(addElement2);


			

			


