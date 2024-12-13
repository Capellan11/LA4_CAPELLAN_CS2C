function hashFunction(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
      hash = (hash + name.charCodeAt(i)) % 5; 
  }
  return hash;
}

let hashTable = new Array(5).fill(null);

let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

function addCustomerToQueue() {
  for (let i = 0; i < customers.length; i++) {
      let hashIndex = hashFunction(customers[i]);
      while (hashTable[hashIndex] !== null) {
          hashIndex = (hashIndex + 1) % 5; 
      }
      hashTable[hashIndex] = customers[i];
      console.log(`${customers[i]} added at index ${hashIndex}`);
  }
}

function displayHashTable() {
  console.log("Current Queue:");
  for (let i = 0; i < hashTable.length; i++) {
      console.log(`Index ${i}: ${hashTable[i] === null ? "Empty" : hashTable[i]}`);
  }
}

function serviceCustomer() {
  let serviceNumber = prompt("Enter the number of the customer to be serviced (1-5):");

  serviceNumber = parseInt(serviceNumber) - 1;

  if (serviceNumber >= 0 && serviceNumber < 5 && hashTable[serviceNumber] !== null) {
      let servicedCustomer = hashTable[serviceNumber];
      alert(`Customer serviced: ${servicedCustomer}`);

      hashTable[serviceNumber] = null;
      console.log(`${servicedCustomer} removed from the queue.`);
  } else {
      alert("Invalid number or no customer at that position.");
  }

  displayHashTable();
}

function runQueueingSystem() {
  addCustomerToQueue();
  displayHashTable();

  for (let i = 0; i < 5; i++) {
      serviceCustomer();
  }
}

runQueueingSystem();

