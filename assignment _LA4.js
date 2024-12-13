// Initialize the customer queue with predefined customers
let customerQueue = ["Elain", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to add a customer to the queue
function addCustomer() {
  // Prompt the user to enter their name
  let name = prompt("Please enter your name to join the queue:");

  // Add the entered name to the customerQueue array
  customerQueue.push(name);

  // Log the addition of the customer and display the current queue
  console.log(`Customer ${name} added to the queue.`);
  console.log("Current Queue: " + customerQueue.join(", "));
}

// Function to service a customer from the queue
function serviceCustomer() {
  // Check if the queue is empty
  if (customerQueue.length === 0) {
    alert("The queue is empty! No customers to service.");
    return; // Exit the function if there are no customers
  }

  // Prompt the user to enter a customer number to service
  let customerNumber = prompt(`Enter a customer number (1-${customerQueue.length}) to service:`);
  customerNumber = parseInt(customerNumber); // Convert input to an integer

  // Validate the entered customer number
  if (customerNumber >= 1 && customerNumber <= customerQueue.length) {
    // Remove the customer from the queue and store their name
    let servicedCustomer = customerQueue.splice(customerNumber - 1, 1)[0];
    
    // Notify the user that the customer has been serviced
    alert(`Customer ${servicedCustomer} has been serviced.`);
    console.log(`Serviced customer: ${servicedCustomer}`);
    console.log("Updated Queue: " + customerQueue.join(", "));
  } else {
    // Notify the user of invalid input
    alert("Invalid number! Please enter a valid customer number.");
  }
}

// Function to start the queueing system
function startQueueSystem() {
  alert("Welcome to the Queueing System!");

  // Allow a maximum of 5 customers to join the queue
  for (let i = 0; i < 5; i++) {
    addCustomer();
  }

  // Continue servicing customers until the queue is empty
  while (customerQueue.length > 0) {
    serviceCustomer();
  }

  // Notify the user that all customers have been serviced
  alert("All customers have been serviced. Thank you!");
}

// Start the queueing system
startQueueSystem();
