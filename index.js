// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  

function superbowlWin(record){
    for(let item of record){
        if(item.result === 'W'){
            return item.year
        }
    }
}

  record.find(superbowlWin)


// console.log(record[0].year)

// function superbowlWin(array, finder){
//     let result = undefined
//     for (let item of array){
//         if (finder(item) === true)
//         result = item.year
//         break
//  }    
//     return result   
//   }

// function wonRecord(game){
//     return game.result === 'W'
//  }
    
//



//console.log(superbowlWin(record, wonRecord));
//const won = record.find(result => result.result === 'w')