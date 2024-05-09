/*let num = 1 ;
let i = 1 ;
do {
    num = num * 2 ; 
    console.log(num);
    i++
}while (i< 6)

// for loop 
let n = 1 ;
let i ;
for (i= 0 ; i<5 ; i ++){
    n = n *2 ;
    console.log(n);

}
// while loop 
let num = 1;
let i =1;
while (i < 100) {
    num = num *2 ;
    if (num >= 100) break ;
    console.log(num);
    i++;
    
}*/

let students = ['Alice', 'Bob', 'Charlie', 'David'];
let students2 = [
    { age: 12, name: 'Alice' },
    { age: 23, name: 'Bob' },
    { age: 33, name: 'Charlie' },
    { age: 34, name: 'David' }
];

//Good for exact amount of times you want to repeat oit
for (let i = 0; i <4; i++) {
    console.log(`Student ${i + 1}: ${students[i]}`);
}

//for each example (Looping over all the students always)
students.forEach(student => {
    console.log(`Student ${student}`);
});

//for of: ( a newer way of writing just like var / let)
for (const student of students) {
    console.log(`Student: ${student}`);
}
//for in is typically used in Array of objects:
for (const index in students2) {
    if (students2.hasOwnProperty(index)) {  // Ensures that we're only accessing direct properties
        console.log(`Student ${students2[index].name}, Age: ${students2[index].age}`);
    }
}