
// ------------------------------------1--------------------------------------//

/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
 let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

 function findMaxValue(numbers) {
     return Math.max(...numbers)
 }

// ------------------------------------1--------------------------------------//

// ------------------------------------2--------------------------------------//
 /**
 * Direction:
 * Convert this data of profit per days from object into array of objects
 *
 * Expected Result:
 * [ { date: '12/25/21', profit: 400000 },
 *   { date: '12/26/21', profit: 200000 },
 *   { date: '12/27/21', profit: 450000 },
 *   { date: '12/28/21', profit: 500000 },
 *   { date: '12/29/21', profit: 420000 },
 *   { date: '12/30/21', profit: 420000 },
 *   { date: '12/31/21', profit: 400000 } ]
 */

const reports = { 
    '12/25/21': 400000,
      '12/26/21': 200000,
      '12/27/21': 450000,
      '12/28/21': 500000,
      '12/29/21': 420000,
      '12/30/21': 420000,
      '12/31/21': 700000 
  }
  
  function  arrayOfObjectsConv(reports) {
    let myData = Object.entries(reports).map(key => {
        return {date:key[0],profit:key[1]}
    })
    return myData
  }
   

// ------------------------------------2--------------------------------------//

// ------------------------------------3--------------------------------------//

// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function multipleAndSortObj(data) {
    const result = Object.fromEntries(Object.entries(data).map(([key,value])=> [key,value * 3]).sort((a,b)=> a[1] - b[1]))
    return result
}



// ------------------------------------3--------------------------------------//

// ------------------------------------4--------------------------------------//
/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
 function getDays() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const fourDayBefore = new Date(new Date().setDate(new Date().getDate() - 4))
    return weekday[fourDayBefore.getDay()]
  }
  
// ------------------------------------4--------------------------------------//


// ------------------------------------5--------------------------------------//
/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */

const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
  ];

const group = 3


function dividedGrup(data,parts){

    
    const results = []
    const size = Math.ceil(data.length/parts)
    const sortedData =  data.sort((a,b)=> a.firstName > b.firstName ? 1 : -1)
 
    while (sortedData.length) {
      results.push(sortedData.splice(0, size));
    }
    return results;
  }

  // ------------------------------------5--------------------------------------//