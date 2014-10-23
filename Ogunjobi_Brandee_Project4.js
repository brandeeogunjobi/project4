//alert("JavaScript works!");

//-----------String Library-----------//

//Does a string follow a 123-456-7890 pattern like a phone number?
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


//Does a string follow an aaa@bbb.ccc pattern like an email address?
var emailValidate = function(email) {
 var emailsec = email.split('@'); // ['somename', 'domain.tld']
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

console.log(emailValidate('superlinkx@gmail.com'));
console.log(emailValidate('@gmail.com'));
console.log(emailValidate('hello@gmail'));
console.log(emailValidate('hello.gmail.com'));
console.log(emailValidate('hello@www.gmail.com'));

	
//Title-case a string (split into words, then uppercase the first letter of each word.
var name = "brandee ogunjobi";

var wordUpper = function(string) {
	var i;
	var words = string.split(' ');
	for(i = 0; i < words.length; i++) {
	words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(i);
	}
	return words.join(' ');
};

console.log(wordUpper('brandee ogunjobi'));
console.log(wordUpper('Brandee ogunjobi'));
console.log(wordUpper('brandeeogunjobi'));
console.log(wordUpper('@brandee .ogunjobi'));



    
    /*Given a string that is a list of things separated by a given string, as well as 									      another string separator,
      return a string with the first separator changed to the second: "a,b,c" + "," +      "/"    ? "a/b/c".*/

//-----------Number Library-----------//
    //Format a number to use a specific number of decimal places, as for money: 2.1 ? 	      2.10
    
    //Fuzzy-match a number: is the number above or below a number within a certain      percent?
    
    //Find the number of hours or days difference between two dates.
    
    //Given a string version of a number such as "42", return the value as an actual      Number, such as 42.
    
//-----------Array Library-----------//
    //Find the smallest value in an array that is greater than a given number

    
  
    //Find the total value of just the numbers in an array, even if some of the items 	      are not numbers.
    
    /*Given an array of objects and the name of a key, return the array sorted by the      value of that key in each of the objects: "a"
      + [{a:2},{a:3},{a:1}] ? [{a:1},{a:2},{a:3}].*/
 