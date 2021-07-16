import { populateTotal } from './populateTotal.js'
import { populateTable } from './populateTable.js'
import { populateChart } from './populateChart.js'
import { sendTransaction } from './sendTransaction.js'

let transactions = [];

fetch("/api/transaction")
  .then(response => {
    return response.json();
  })
  .then(data => {
    // save db data on global variable
    transactions = data;

    populateTotal();
    populateTable();
    populateChart();
  });

document.querySelector("#add-btn").onclick = function() {
  sendTransaction(true);
};

document.querySelector("#sub-btn").onclick = function() {
  sendTransaction(false);
};
