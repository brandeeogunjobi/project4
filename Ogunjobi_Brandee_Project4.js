//alert("JavaScript works!");

//-----------String Library-----------//

//(1) Does a string follow a 123-456-7890 pattern like a phone number?

	     var phoneValidate = function(phone) {
 var phonesec = phone.split('-'); // ['123', '456', '7890']
 if(phonesec.length === 3) {
  if(!isNaN(phonesec[0]) && !isNaN(phonesec[1]) && !isNaN(phonesec[2])) {
  if(phonesec[0].length === 3 && phonesec[1].length === 3 && phonesec[2].length === 4) {
  return true;
  }
  }
 }

 return false;
};


//(2) Does a string follow an aaa@bbb.ccc pattern like an email address?

var emailValidate = function(email) {
 var emailsec = email.split('@'); 
 if(emailsec.length === 2) { //Check that there is a single @ symbol with strings on each side
  if(emailsec[0].length > 0) { //Check that the username side is at least 1 character in length
  domainsec = emailsec[1].split('.'); //Split the domain on .
  if(domainsec.length > 1) { //Check that there are at least 2 sections in the domain (domain and tld at a minimum)
  if(domainsec[domainsec.length - 1].length > 1) { //Check length of final section (tld), and make sure it is at least 2 characters
  for(i = 0; i < domainsec.length; i++) { //Check each piece of the domain and make sure there is at least one character in it
  if(domainsec[i].length < 1)
  return false; //Return false if any section fails
  }
  return true;
  }
  }
  }
 }

 return false
};

	
//(3) Title-case a string (split into words, then uppercase the first letter of each word.

var name = "brandee ogunjobi";

var wordUpper = function(string) {
	var i;
	var words = string.split(' ');
	for(i = 0; i < words.length; i++) {
	words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(i);
	}
	return words.join(' ');
};


//-----------Number Library-----------//
    
//(4) Find the number of hours or days difference between two dates.

var dateDiff = function(date1, date2, flag) {
 date1 = new Date(date1);
 date2 = new Date(date2);
 
if(date1 > date2)
 	diff = date1 - date2;
 else
 	diff = date2 - date1;

 if(flag === 'hours')
 	return diff/(1000*60*60);

 if(flag === 'days')
 	return diff/(1000*60*60*24);

 return "Please pass 'days' or 'hours'";
};


    
    
//-----------Array Library-----------//
    
//Find the smallest value in an array that is greater than a given number

var nextGreatest = function(array, number) {
 var i;
 var sortNumber = function(a,b) {
 	return a - b;
 };

 array.sort(sortNumber);

 for(i = 0; i < array.length; i++) {
 	if(array[i] > number)
 	return array[i];
 }

 return false;
};




//Find the total value of just the numbers in an array, even if some of the items are not numbers.

var addArr = function(array) {
 var i;
 var total = 0;
 for(i = 0; i < array.length; i++) { // [0, '5', 6, 'hello', {"something": 'something'}, 8, 7.53]
 	if(typeof array[i] === "number")
 	total += array[i];
 }

 return total;
};


//-----------String---------------//
//-----------Email Test-----------//
console.log(emailValidate('superlinkx@gmail.com'));
console.log(emailValidate('@gmail.com'));
console.log(emailValidate('hello@gmail'));
console.log(emailValidate('hello.gmail.com'));
console.log(emailValidate('hello@www.gmail.com'));
//-----------Uppercase Test-----------//
console.log(wordUpper('brandee ogunjobi'));
console.log(wordUpper('Brandee ogunjobi'));
console.log(wordUpper('brandeeogunjobi'));
console.log(wordUpper('@brandee .ogunjobi'));

//-----------Number-------------------------//
//-----------Date Difference Test-----------//
console.log(dateDiff('1/1/10', '2/28/18', 'days'));
console.log(dateDiff('1/20/01', '1/21/01', 'hours'));

//-----------Array-------------------------//
//-----------Smallest Value Test-----------//
console.log(nextGreatest([6, 2, 78, 42], 8)); // 42
console.log(nextGreatest([6, 2, 78, 42], 79)); // false

//-----------Number Value Test-----------//
console.log(addArr([0, '5', 6, 'hello', {"something": 'something'}, 8, 7.53])); //21.53








 