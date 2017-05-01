// DONE
//1. What is the lenth of the following contacts array?

var contacts = [{
	name: 'Jake Overall',
	email: 'jake.overall@boisecodeworks.com',
	title: 'founder'
},{
	name: 'Matt Overall',
	email: 'matt.overall@boisecodeworks.com',
	title: 'founder'
},{
	name: 'Chris Hoyd',
	email: 'chris.hoyd@boisecodeworks.com',
	title: 'founder'
},{
	name: 'Tony Carolla',
	email: 'tony.carolla@gmail.com',
	title: 'mentor'
},{
	name: 'Andrew Hansen',
	email: 'andrew.hansen@gmail.com',
	title: 'mentor'
},{
	name: 'Stefan Nuxoll',
	email: 'stefan.nuxoll@gmail.com',
	title: 'mentor'
}]


// console.log(contacts.length)

//2. Add the following people to the contacts array.

// contacts.push(contacts)

//3. Woops after adding all of those people to the same contacts list you realized you need a list just the mentors. Create a new variable named mentors populate it using contacts array. 


function mentor() {
	for (var i = 0; i < contacts.length; i++) {
		var currentPerson = contacts[i];
		if (currentPerson.title === "mentor") {
			console.log(currentPerson)
		}
	}
}

// mentor()
