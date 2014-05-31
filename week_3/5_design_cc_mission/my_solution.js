// I worked [by myself, with:] on this challenge

// Your mission description:
// The focus of this mission is to learn loops.  Tharin and his comrades need to escape over a ravine before a whole army of ogres catch them.  To get across the ravine, Tharin needs to throw a grappling hook across it to secure a rope line.  However simply throwing the hook won't reach across the ravine and he needs to swing it enough to gain momentum to get all the way across.
// 
// 

// Pseudocode
// move to ravine edge
// swing hook 5 times
// throw hook at far tree
// tie rope to near tree
// say "follow"
// cross rope line
// cut rope

// Initial Code
moveXY(23,45);
for(var i=0;i<5;i++)"{
	swingHook();
}
throwHook(45,23);
tieRope(23,45);
say("Follow!");
crossRope();
cutRope(45,23);





// Refactored Code
moveXY(23,45);
for(var i=0;i<5;i++)"{
	swingHook(360);
}
throwHook(tree2);
tieRope(tree1);
say("Follow!");
crossRope(tree1,tree2);
cutRope(tree2);






// Reflection
// Designing a level was an interesting exercise without graphics to work with, but it works if the point was the coding structure.  Since loops weren't covered in the beginner levels of Code Combat, I decided to use them in this level.  Also absent was the ability to refer to other objects, which I implemented in the refactoring when I didn't like all the XY coordinates.  As a result, I decided to use the story of creating something similar to a zipline across a wide ravine that would require swinging a rope several times to hurl the hook all the way across.  It seems presumptuous to invent functions to add based on convenience, but thinking along the lines of what was given in the Code Combat missions, it makes sense that the functions I created might exist in a real CC mission.  I was also hoping to implement something more complex than just a for loop, but given the simplicity of the CC missions, I'm not sure I could justify something that introduces an early variable that the for loop uses, but is set by another function.
// 
// 
// 
// 
// 
// 
// 