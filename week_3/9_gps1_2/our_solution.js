// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Ian Bui
//  2. Matt Chan


// 0. "YOU SIGNED... WHO?!"

var jackie = {
  name:"Jackie Chan",
  age:50,
  quote:"AIYahhh",
};


// 1. "Here they Come!"

var adam={
  name:"Adam Sandler",
  age:47,
  quote:"That's your home! Are you too good for your home?",
};

var kristen={
  name:"Kristen Bell",
  age:33,
  quote:"Do you wanna build a snowman?",
};

var jim={
  name:"Jim Carrey",
  age:52,
  quote:"So you're telling me there's a chance? Yeah!",
};



// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote){
	this.name= name;
	this.age=age;
	this.quote=quote;
};
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";




// 3. "SHOW 'EM OFF!"

function Client(name, age, quote){
	this.name= name;
	this.age=age;
	this.quote=quote;
	this.clientInfo=function(){console.log("Name:"+this.name+"\nAge:"+this.age+"\nQuote:"+this.quote)};
};
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";
shooterMcGavin.clientInfo();


// 4. "But wait, there's more!"

function Client(name, age, quote){
	this.name= name;
	this.age=age;
	this.quote=quote;
	this.clientInfo=function(){console.log("Name:"+this.name+"\n Age:"+this.age+"\n quote:"+this.quote)};
	this.showQuote=function(){console.log(this.quote)};
};
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";
shooterMcGavin.showQuote();


// 5.  ** BONUS **

function Client(name, age, quote, businesslist){
this.name= name;
this.age=age;
this.quote=quote;
this.clientInfo=function(){console.log("Name:"+this.name+"\n Age:"+this.age+"\n quote:"+this.quote)};
this.showQuote=function(){console.log(this.quote)};
this.businessList=[];  //Array population not implemented
};
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.","Shops");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";
shooterMcGavin.businessList === [];   //Array population not implemented


//  6.  Your Reflection:

//Javascript was review for me since I've seen it before, but haven't touched it for some time as I've been working with the jQuery framework.  This challenge meant more to me as proof that I could work remotely in a pair session since all my session last week highlighted a difficulty for me to break out of my shell and also my tendency to retreat back into my shell if my partner asserts himself/herself more.  This time, I had the opportunity to go into "Yoda mode" where I was working with someone who hadn't had much experience working with Javascript or related languages and therefore would benefit from guidance from me while I needed to practice more of being a navigator.  I still have to see if I've improved my communication when working with someone who's an experienced programmer, but working on this challenge offered a good stepping stone to reaching the goal of working competently as a navigator in professional situations.