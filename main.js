let company = {
  sales: [
    { name: 'John', 
    salary: 1000 },
    { name: 'Alice', 
    salary: 600 }
  ],
  development: {
    sites: [
      { name: 'Peter', 
      salary: 2000 },
      { name: 'Alex', 
      salary: 1800 }
    ],
    internals: [
      { name: 'Jack', 
      salary: 1300 }
    ]
  } 
};

function countSallary(department) {
  if (Array.isArray(department)) { 
    return department.reduce((total, ammount) => total + ammount.salary, 0); 
  } else { 
    let sum = 0;
    for (let subdivision of Object.values(department)) {
      sum += countSallary(subdivision); 
    }
    return sum;
  }
}

console.log(countSallary(company)); 
















