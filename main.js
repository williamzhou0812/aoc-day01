// Input data from 
// https://adventofcode.com/2019/day/1/input
// Fetch Data from api ???

const masses = document.querySelector('pre').innerText.split(/\r?\n/);

// console.log(masses);


const calcuateFuel  =  (mass) => {
  return Math.floor(mass / 3) - 2 > 0 ? Math.floor(mass / 3) - 2 : 0;
}

const calcuateTotalFuel = (masses) => { 
  return masses.map(mass => calcuateFuel(mass)).reduce((total, fuel) => 
          total + fuel );
}

console.log(`Total Fuel: ${calcuateTotalFuel(masses)}`);