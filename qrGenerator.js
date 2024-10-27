// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById("qrForm");

//   form.addEventListener("submit", function(event) {
//     event.preventDefault(); 
//     generateqr(); 
//   });
// });

// function generateqr() {
//   var partNumber = document.getElementById("partNumber").value;
//   var arrivalDate = document.getElementById("arrivalDate").value;
//   var componentType = document.getElementById("componentType").value;
//   var orderNumber = document.getElementById("orderNo").value;

//   const details = {
//     partNumber: partNumber,
//     arrivalDate: arrivalDate,
//     componentType: componentType,
//     orderNumber: orderNumber
//   };
//   console.log(details);

//   var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
//     encodeURIComponent("Part Number: " + partNumber + "\nArrival Date: " + arrivalDate +  "\nComponent Type: " + componentType + "\nOrder Number: " + orderNumber);

//   saveDataToServer(partNumber, componentType, url);
// }

// function saveDataToServer(partNumber, componentType, qrURL) {
//   fetch('http://localhost:3000/api/save', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ partNumber, componentType, qrURL })
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Data saved:', data);
  
//     // window.location.href ='saved_data.html';
//     alert("QR is generated");
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("qrForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    generateqr(); 
  });
});

function generateqr() {
  var partNumber = document.getElementById("partNumber").value;
  var arrivalDate = document.getElementById("arrivalDate").value;
  var componentType = document.getElementById("componentType").value;
  var orderNumber = document.getElementById("orderNo").value;

  const details = {
    partNumber: partNumber,
    arrivalDate: arrivalDate,
    componentType: componentType,
    orderNumber: orderNumber
  };
  console.log(details);

  var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent("Part Number: " + partNumber + "\nArrival Date: " + arrivalDate +  "\nComponent Type: " + componentType + "\nOrder Number: " + orderNumber);

  saveDataToServer(partNumber, componentType, url);

  // Clear the form fields after submission
  document.getElementById("qrForm").reset();
}

function saveDataToServer(partNumber, componentType, qrURL) {
  fetch('http://localhost:3000/api/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ partNumber, componentType, qrURL })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Data saved:', data);
  
    // window.location.href ='saved_data.html';
    alert("QR is generated");
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
