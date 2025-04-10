// script.js
 

 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 const body = document.body;
 

 darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
 });
 

 // Form Validation
 const addInvoiceForm = document.getElementById('addInvoiceForm');
 addInvoiceForm.addEventListener('submit', (event) => {
  if (!addInvoiceForm.checkValidity()) {
  event.preventDefault();
  event.stopPropagation();
  }
  addInvoiceForm.classList.add('was-validated');
  // Clear the form inputs if the form is valid
  if (addInvoiceForm.checkValidity()) {
  document.getElementById('invoiceNumber').value = '';
  document.getElementById('clientName').value = '';
  document.getElementById('dueDate').value = '';
  document.getElementById('totalAmount').value = '';
  addInvoiceForm.classList.remove('was-validated'); // Remove the 'was-validated' class
  }
 });
 

 // Floating Action Button (Modal)
 const saveInvoiceButton = document.getElementById('saveInvoice');
 const addInvoiceModalForm = document.getElementById('addInvoiceModalForm');
 const addInvoiceModal = new bootstrap.Modal(document.getElementById('addInvoiceModal'));
 

 saveInvoiceButton.addEventListener('click', () => {
  if (!addInvoiceModalForm.checkValidity()) {
  addInvoiceModalForm.classList.add('was-validated');
  return;
  }
 

  // Save the invoice data (replace with your logic)
  const invoiceNumber = document.getElementById('modalInvoiceNumber').value;
  const clientName = document.getElementById('modalClientName').value;
  const dueDate = document.getElementById('modalDueDate').value;
  const totalAmount = document.getElementById('modalTotalAmount').value;
 

  // Display a notification
  showNotification('Invoice added successfully!');
 

  // Clear the form and close the modal
  addInvoiceModalForm.reset();
  addInvoiceModalForm.classList.remove('was-validated');
  addInvoiceModal.hide();
 });
 

 // Notification Function
 function showNotification(message, isError = false) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notificationMessage');
  notificationMessage.textContent = message;
 

  notification.classList.remove('error'); // Remove error class to reset color
  if (isError) {
  notification.classList.add('error'); // Add error class if it's an error message
  }
 

  notification.style.display = 'block';
  notification.classList.add('show');
 

  // Hide the notification after a few seconds
  setTimeout(() => {
  notification.classList.remove('show');
  setTimeout(() => {
  notification.style.display = 'none';
  }, 500); // Wait for the fade-out animation
  }, 3000);
 }
 

 const closeNotificationButton = document.getElementById('closeNotification');
 closeNotificationButton.addEventListener('click', () => {
  document.getElementById('notification').style.display = 'none';
 });
 

 // API Integration
 async function fetchData(url) {
  try {
  const response = await fetch(url);
  if (response.ok) {
  return await response.json();
  } else {
  return null;
  }
  } catch (error) {
  const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
  const proxyResponse = await fetch(proxyUrl);
  if (proxyResponse.ok) {
  return await proxyResponse.json();
  } else {
  return null;
  }
  }
 }
 

 async function loadAndDisplayData() {
  const apiUrl = 'https://www.freetestapi.com/api/v1/users';
  const data = await fetchData(apiUrl);
  
  if (data) {
  const shuffledData = data.sort(() => Math.random() - 0.5);
  displayData(shuffledData);
  } else {
  showNotification('Failed to fetch data. Please check your connection.', true);
  }
 }
 

 function displayData(data) {
  const invoiceList = document.getElementById('invoiceList');
  invoiceList.innerHTML = ''; // Clear existing data
 

  let totalInvoices = 0;
  let dueInvoices = 0;
  let overdueInvoices = 0;
 

  data.forEach((item, index) => {
  totalInvoices++;
  const dueDate = new Date(); // Example: Due in 7 days
  dueDate.setDate(dueDate.getDate() + 7);
  const amount = Math.floor(Math.random() * 1000) + 100; // Random amount
  const status = getStatus(dueDate);
 

  let statusBadge = '';
  if (status === 'Paid') {
  statusBadge = '<span class="badge bg-success">Paid</span>';
  } else if (status === 'Due') {
  dueInvoices++;
  statusBadge = '<span class="badge bg-warning">Due</span>';
  } else {
  overdueInvoices++;
  statusBadge = '<span class="badge bg-danger">Overdue</span>';
  }
 

  const row = `
  <tr>
  <td>${index + 1}</td>
  <td>${item.name}</td>
  <td>${dueDate.toLocaleDateString()}</td>
  <td>$${amount}</td>
  <td>${statusBadge}</td>
  </tr>
  `;
  invoiceList.innerHTML += row;
  });
 

  document.getElementById('totalInvoices').textContent = totalInvoices;
  document.getElementById('dueInvoices').textContent = dueInvoices;
  document.getElementById('overdueInvoices').textContent = overdueInvoices;
 }
 

 function getStatus(dueDate) {
  const now = new Date();
  if (dueDate < now) {
  return 'Overdue';
  } else if (dueDate.getTime() === now.getTime() || dueDate > now) {
  return 'Due';
  }
  // Mock Payment Status
  return 'Paid';
 }
 

 // Event listener for refreshing data
 document.getElementById('refreshData').addEventListener('click', loadAndDisplayData);
 

 // Load data on page load
 loadAndDisplayData();
 

 // Example usage of primitive types
 const invoiceNumber = 'INV-2024-001'; // String
 const clientName = 'Acme Corp'; // String
 const dueDate = new Date('2024-03-15'); // Date
 const totalAmount = 1200.50; // Number
 const isPaid = false; // Boolean
 let paymentStatus = null; // Null
 let notes; // Undefined
 

 // Type conversion
 const amountString = String(totalAmount);
 const amountInt = parseInt(totalAmount); // 1200
 

 // Template literals
 const invoiceDescription = `Invoice ${invoiceNumber} for ${clientName} is due on ${dueDate.toLocaleDateString()}.`;
 

 // Variable scoping
 function exampleScope() {
  let localVar = 'This is a local variable';
  if (true) {
  let blockVar = 'This is a block variable';
  console.log(localVar); // Accessible
  console.log(blockVar); // Accessible
  }
  //console.log(blockVar); // Not accessible - block scoped
 }
 

 // Control Flow - Conditionals
 const amountDue = 500;
 if (amountDue > 1000) {
  console.log('Amount due is high');
 } else if (amountDue > 0) {
  console.log('Amount due is moderate');
 } else {
  console.log('No amount due');
 }
 

 // Control Flow - Switch
 const invoiceStatus = 'Overdue';
 switch (invoiceStatus) {
  case 'Paid':
  console.log('Invoice is paid.');
  break;
  case 'Due':
  console.log('Invoice is due.');
  break;
  case 'Overdue':
  console.log('Invoice is overdue!');
  break;
  default:
  console.log('Unknown invoice status.');
 }
 

 // Control Flow - Ternary
 const message = (isPaid) ? 'Invoice has been paid' : 'Invoice is pending payment';
 console.log(message);
 

 // Logical Operators
 if (amountDue > 0 && invoiceStatus !== 'Paid') {
  console.log('Please pay the invoice.');
 }
 

 if (amountDue > 1000 || invoiceStatus === 'Overdue') {
  console.log('Important: Invoice requires attention.');
 }
 

 // Error Handling
 try {
  // Simulate an error
  // throw new Error('An error occurred while processing the invoice.');
 } catch (error) {
  console.error('Error:', error.message);
  showNotification('An error occurred: ' + error.message, true);
 } finally {
  console.log('Invoice processing complete.');
 }
 

 // User Input & Math
 // Example of getting user input (you'd typically use this with form elements)
 const enteredAmount = '1500';
 const parsedAmount = parseFloat(enteredAmount);
 if (isNaN(parsedAmount)) {
  console.log('Invalid amount entered.');
 } else {
  console.log('Entered amount:', parsedAmount);
 }
 

 const discount = 0.1; // 10% discount
 const discountedAmount = totalAmount * (1 - discount);
 console.log('Discounted amount:', discountedAmount);
 

 // Arrays & Objects
 const invoices = [
  { invoiceNumber: 'INV-2024-001', clientName: 'Acme Corp', amount: 1200 },
  { invoiceNumber: 'INV-2024-002', clientName: 'Beta Inc', amount: 800 }
 ];
 

 // CRUD operations on an array
 invoices.push({ invoiceNumber: 'INV-2024-003', clientName: 'Gamma Ltd', amount: 2000 }); // Create
 invoices[0].amount = 1300; // Update
 invoices.splice(1, 1); // Delete (remove the second invoice)
 

 // Array methods
 const invoiceAmounts = invoices.map(invoice => invoice.amount);
 console.log('Invoice amounts:', invoiceAmounts);
 

 const highValueInvoices = invoices.filter(invoice => invoice.amount > 1000);
 console.log('High value invoices:', highValueInvoices);
 

 const totalInvoiceValue = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
 console.log('Total invoice value:', totalInvoiceValue);
 

 // Spread/Rest operators
 const newInvoice = { ...invoices[0], dueDate: new Date('2024-04-01') };
 console.log('New invoice:', newInvoice);
 

 function sumAmounts(...amounts) {
  return amounts.reduce((sum, amount) => sum + amount, 0);
 }
 

 console.log('Sum of amounts:', sumAmounts(100, 200, 300));
 

 // Object methods
 const invoiceObject = {
  invoiceNumber: 'INV-2024-004',
  clientName: 'Delta Inc',
  amount: 1500,
  printInvoice: function () {
  console.log(`Invoice ${this.invoiceNumber} for ${this.clientName} - $${this.amount}`);
  }
 };
 

 invoiceObject.printInvoice();
 

 // Functions & Events
 // Named function
 function calculateTax(amount, taxRate) {
  return amount * taxRate;
 }
 

 console.log('Tax amount:', calculateTax(1000, 0.05));
 

 // Arrow function
 const calculateDiscount = (amount, discountRate) => amount * discountRate;
 console.log('Discount:', calculateDiscount(1000, 0.1));
 

 // Callback function
 function processInvoice(invoice, callback) {
  console.log('Processing invoice:', invoice.invoiceNumber);
  callback(invoice.amount);
 }
 

 processInvoice(invoiceObject, (amount) => {
  console.log('Invoice amount:', amount);
 });