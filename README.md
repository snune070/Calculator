# Calculator

## Description
  
This project focused on the culmination of the css, javascript, and html skills that  
have been acquired so far. To create an on-screen calculator with keyboard support.  



### Outline

1. Calculator Operations
    1. Add
    2. Subtract
    3. Multiply
    4. Divide
    5. Operate


* Functions
   * Keyboard Support
   * Accepts Float Points
  * Restricts multiple decimals
  * Update display with solution
  * Round answers
  * Backspace Button
  * Clear Button that clears display


* Design
  * Size Should be 4 x 6 
  * grouped into numbers, and operations
  * div container for the grid
  * top item will be display that stretches the entire row
   
  
  ## Problems

 For most of the project designing the calculator and functions for the mathematics  
 were simple, the main issue arose from linking the front end calculator to the javascript and updating the display in real time.  
   
 At first many solutions were tried, creating a calculator class made the current process of linking more  
 complicated, having one function that dealt with storing values, and updating the display also proved to cause multiple bugs 
 such as the display not properly updating or throw errors in parts of the code separate from were the percieved issue should  
 come from.
 
## Solution
By taking a short break and then tackling the overarching problems, it was possible to come to a method of fixing the current issues  

1. Break down the problems into parts
   1. Stored Value is constantly updated
   2. Stored Operation is not getting correctly updated
   3. Execution of  stored operation when another operation is passed or execute button pressed is passing errors

Then I would give a basic overarching approach to my solutions, separate functions to make the code clearer and more readable
by separating how the operations were stored and executed into 3 separate methods, of determining Operation, evaluatingOperation  
and executingCalculation, each method passing the result of one to the next.


