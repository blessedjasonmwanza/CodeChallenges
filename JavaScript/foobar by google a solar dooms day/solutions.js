// Declare Solutions function
const solutions = (area) =>{
  let possiblePanels = [];
  // Verify if area is a valid interger number
  if(!isNaN(area) && Number.isInteger(area)){    
    let currentArea = area;
    while(area > 0){
      // Check if the squareRoot of the area is an interger and not a float i.e decimal
      if(Number.isInteger(Math.sqrt(currentArea))){
        // If interger add the number to possible Panels
        possiblePanels.push(currentArea);
        area -= currentArea;
        currentArea = area;
        continue;
      }
      // Reduce the current template by 1 for the next iteration
      currentArea -= 1;
    }
  }else{
    possiblePanels = "The area supplied is not a valid interger number";
  }
  return possiblePanels;
}
// test Cases
let panels = solutions(12);
console.log(panels);
