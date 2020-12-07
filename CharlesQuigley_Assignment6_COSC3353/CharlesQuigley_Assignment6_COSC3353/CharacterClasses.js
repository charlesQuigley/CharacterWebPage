//This javascript file contains the Character class, the Paladin class, and the Necromancer class.
//The Paladin and Necromancer classes both inherit from the Character class.
//
//Author: Charles Quigley
//Version: 1.0
//Due: 22 November, 2020
//

//Javascript uses functions as classes.

//Character Class
//Parameters: 6 stats - Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma.
function Character(Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma)
{
	//I believe that when I grab the user input from the html number boxes,
	//those inputs are regarded as strings. So, parseInt() is used to convert those strings into integers.
	this.Strength = parseInt(Strength);
	this.Dexterity = parseInt(Dexterity);
	this.Constitution = parseInt(Constitution);
	this.Intelligence = parseInt(Intelligence);
	this.Wisdom = parseInt(Wisdom);
	this.Charisma = parseInt(Charisma);
		
}
//Defining the stat properties for the Character class.
Character.prototype.Strength = 1;
Character.prototype.Dexterity = 1;
Character.prototype.Constitution = 1;
Character.prototype.Intelligence = 1;
Character.prototype.Wisdom = 1;
Character.prototype.Charisma = 1;

//Defining the DisplayCharacter() method for the Character class.
Character.prototype.DisplayCharacter = function (){
	return "Your Character Stats" +"<br />" +"*****************" + "<br />" + "Strength = " + this.Strength + "<br />"
			+ "Dexterity = " + this.Dexterity + "<br />" + "Constitution = " + this.Constitution + "<br />" + "Intelligence = " + this.Intelligence + "<br />"
			+ "Wisdom = " + this.Wisdom + "<br />" + "Charisma = " + this.Charisma + "<br />" ;

}

//Defining the getStatsTotal() method for the Character class.
Character.prototype.getStatsTotal = function (){
	
	if(this.Strength + this.Dexterity + this.Constitution + this.Wisdom + this.Intelligence + this.Charisma > 0)
	{
		return this.Strength + this.Dexterity + this.Constitution + this.Wisdom + this.Intelligence + this.Charisma;
	}
	return 0;
}



//Paladin class
//Parameters:- 6 stats: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma
function Paladin(Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma)
{
	//Call the Character class constructor.
	Character.call(this, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma);
}


//Inherit from Character class.
Paladin.prototype = new Character();

//Correct the constructor pointer so that it points to Paladin rather than Character.
Paladin.prototype.constructor = Paladin;

//Define a new DisplayCharacter() function for Paladin.
Paladin.prototype.DisplayCharacter = function (){
	return "Your Paladin Stats" +"<br />" +"****************" + "<br />" + "Strength = " + this.Strength + "<br />"
			+ "Dexterity = " + this.Dexterity + "<br />" + "Constitution = " + this.Constitution + "<br />" + "Intelligence = " + this.Intelligence + "<br />"
			+ "Wisdom = " + this.Wisdom + "<br />" + "Charisma = " + this.Charisma + "<br />" ;

}

//Define lay_on_hands() for Paladin.
Paladin.prototype.lay_on_hands = function()
{
	alert("You are healed.");
}




//Necromancer class
//Parameters:- 6 stats: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma
function Necromancer(Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma)
{
	//Call the Character class constructor.
	Character.call(this, Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma);
}

//Inherit from Character class.
Necromancer.prototype = new Character();

//Correct the constructor pointer so that it points to Necromancer rather than Character.
Necromancer.prototype.constructor = Necromancer;

//Define a new DisplayCharacter() function for Necromancer.
Necromancer.prototype.DisplayCharacter = function (){
	return "Your Necromancer Stats" +"<br />" +"********************" + "<br />" + "Strength = " + this.Strength + "<br />"
			+ "Dexterity = " + this.Dexterity + "<br />" + "Constitution = " + this.Constitution + "<br />" + "Intelligence = " + this.Intelligence + "<br />"
			+ "Wisdom = " + this.Wisdom + "<br />" + "Charisma = " + this.Charisma + "<br />" ;

}

//Define summon_zombie() for Necromancer.
Necromancer.prototype.summon_zombie = function()
{
	alert("Zombies are coming.");
}