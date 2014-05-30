// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Rescue Mission
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.moveDown();
this.attackNearbyEnemy();
//Grab the Mushroom
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
//Drink Me
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
//Taunt the Guard
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Let's run for it");
this.moveDown();
this.say("Attack!");
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveUp();
this.moveRight();
//It's A Trap
this.moveDown();
this.moveDown();
this.say("Hello!");
this.moveUp();
this.moveUp();
//Break the Prison
if(name === "William")
    return true;
if(name === "Marcus")
    return true;
if(name === "Robert")
    return true;
if(name === "Lucas")
    return true;
if(name === "Gordon")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "MARCUS")
    return false;
return true;
//Taunt
this.say("Hey!");
this.say("Hello!");
this.say("I hate you!");
this.say("You ugly!");
this.say("Put some pants on!");
//Cowardly Taunt
this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
this.moveXY(70,46);
this.say("Hey!");
this.moveXY(70,10);
this.moveXY(38,46);
this.say("Hey!");
this.moveXY(70,10);
//Commanding Followers
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow!");
this.moveXY(66,41);
this.say("Attack");
//Mobile Artillery
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(49,41);
this.attackXY(68,53);
this.attackXY(62,48);
this.attackXY(48,60);
this.attackXY(47,55);
 
 
// Reflection:
// Write your reflection here.
Code Combat was incredibly tedious because of the time consuming animations, but it was a good review of what "this" does in that it the function of an object calls the object to access one of its functions or keys.  The parentheses are to pass in any parameters and the semicolon delimits commands so that the browser knows where one command ends the the next begins.  I haven't touched JS in quite some time working mainly in the jQuery framework, but I did recognize everything so far as having similarities to Java's syntax.