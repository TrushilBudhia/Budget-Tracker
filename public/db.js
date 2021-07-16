let db;

// New db request for a "budgetTracker" database.
const request = indexedDB.open('budgetTracker', 1);

request.onupgradeneeded = function (event) {
  // Object store called "BudgetTransaction", autoIncrement set to true
  const db = event.target.result;
  const BudgetObjectStore = db.createObjectStore("BudgetTransaction", {
    autoIncrement: true
  });
  BudgetObjectStore.createIndex("nameIndex", "name");
  BudgetObjectStore.createIndex("valueIndex", "value");
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // Logging error
  console.error(event.target.error);
};

function saveRecord(record) {
  // Creating a transaction on the pending db with readwrite access
  // Adding record to store with add method.
  const db = request.result;
  const transaction = db.transaction(["BudgetTransaction"], "readwrite");
  const budgetObjectStore = transaction.objectStore("BudgetTransaction");
  const nameIndex = budgetObjectStore.index("nameIndex");
  const valueIndex = budgetObjectStore.index("valueIndex");

  // Adds data to the objectStore
  budgetObjectStore.add(record);
}

function checkDatabase() {
  // Gets all records from store and set to getAll variable
  const db = request.result;
  const transaction = db.transaction(["BudgetTransaction"], "readwrite");
  const budgetObjectStore = transaction.objectStore("BudgetTransaction");
  const getAll = budgetObjectStore.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // Clears all items in the store
          const db = request.result;
          const transaction = db.transaction(["BudgetTransaction"], "readwrite");
          const BudgetObjectStore = transaction.objectStore("BudgetTransaction");
          BudgetObjectStore.clear();
        })
        .catch(err => {
          console.log(err);
      });
    }
  };
}

// Listening for app coming back online
window.addEventListener('online', checkDatabase);
