/*pseudo code:
goal: return an object with two key sorted by company. Company key value includes totalSales and totalTaxes
  - find entries with the same names
  - find the tax rate for the appropriate province
  -

1) name the  empty object which yield expected results
2) loop through
*/

// getRate(province) { return 0.05;}
// get tax(province, amount) { }
// pretty(???) {console......}

// getRate('BC') // return 0.12

// companySalesData.forEach(function(entry){
//   let province = entry.province;
//   console.log(province, getRate(province));
// })

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var summary = {};
  for (var key in salesData){
    var sumOfSales = salesData[key].sales.reduce(function(a, b) {
      return a + b;
    }, 0);
    if (!(salesData[key].name in summary)) {
      summary[salesData[key].name] = {};
    }
    if (!("totalSales" in summary[salesData[key].name])) {
      summary[salesData[key].name].totalSales = 0;
    }
      summary[salesData[key].name].totalSales += sumOfSales;
    if (!("totalTaxes" in summary[salesData[key].name])) {
      summary[salesData[key].name].totalTaxes = 0;
    }
      summary[salesData[key].name].totalTaxes += (sumOfSales * salesTaxRates[salesData[key].province]);
  }
  return summary;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
