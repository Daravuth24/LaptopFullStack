
    var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    var maxFre = 1;
    var minFre = 0;
    var freElement;
    
    for (let i=0; i<arr1.length; i++){ //select first element
        for (let j=0; j<arr1.length; j++){ //iterate through the list
            if (arr1[i] == arr1[j]){ //check the recurring element in list
                minFre++; //increment for every recurrence
            }
            if (maxFre<minFre){ //check the min vs max
                maxFre = minFre; //add the num of reccurence for the element
                freElement = arr1[i]; //add the element to freElement
            }
        }
        minFre = 0; //resets min for next element to check the number of recurrence
    }
console.log(freElement + " " + maxFre + " " + "times");