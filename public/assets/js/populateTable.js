export function populateTable() {
  let transactions = [];
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  transactions.forEach(transaction => {
    // create and populate a table row
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.value}</td>
      `;

    tbody.appendChild(tr);
  });
}