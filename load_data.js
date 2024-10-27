// document.addEventListener('DOMContentLoaded', () => {
//   loadSavedData();
// });

// // Global variable to store the current QR URL
// let currentQRURL = '';

// // Load saved data from the server
// function loadSavedData() {
//   fetch('http://localhost:3000/api/data')
//     .then(response => response.json())
//     .then(data => {
//       const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
      
//       data.forEach(item => {
//         const newRow = table.insertRow();

//         const cell1 = newRow.insertCell(0);
//         const cell2 = newRow.insertCell(1);
//         const cell3 = newRow.insertCell(2);

//         cell1.innerText = item.partNumber;
//         cell2.innerText = item.componentType;
//         cell3.innerHTML = `<button onclick="showModal('${item.qrURL}')" id="viewButton">View QR</button>`;
//       });
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// // Show the modal with QR code
// function showModal(qrURL) {
//   const modal = document.getElementById('qrModal');
//   const qrCodeImage = document.getElementById('qrCodeImage');
//   const submitButton = document.querySelector('#qrModal button');
  
//   qrCodeImage.src = qrURL;
//   currentQRURL = qrURL;  // Store the QR URL in a global variable
//   modal.style.display = 'block';

//   // Add event listener to the submit button
//   submitButton.onclick = function() {
//     scanQRCode();
//   };
// }

// // Close the modal when clicking on the close button or outside the modal
// document.addEventListener('click', function(event) {
//   const modal = document.getElementById('qrModal');
//   if (event.target.classList.contains('close') || event.target === modal) {
//     modal.style.display = 'none';
//   }
// });

// // Handle QR code scanning
// function scanQRCode() {
//   const qrURL = currentQRURL;  // Use the global variable to get the QR URL
//   const canvas = document.getElementById('canvas');
//   const context = canvas.getContext('2d');
//   const img = new Image();

//   img.crossOrigin = "anonymous";
//   img.onload = function() {
//     canvas.width = img.width;
//     canvas.height = img.height;
//     context.drawImage(img, 0, 0, canvas.width, canvas.height);
    
//     const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//     const code = jsQR(imageData.data, imageData.width, imageData.height, {
//       inversionAttempts: 'dontInvert',
//     });

//     if (code) {
//       try {
//         let qrData = {};
//         const lines = code.data.split('\n');
//         lines.forEach(line => {
//           const [key, value] = line.split(':').map(str => str.trim());
//           if (key && value) {
//             qrData[key] = value;
//           }
//         });

//         console.log('Parsed QR Data:', qrData); 

//         if (qrData["Part Number"] && qrData["Arrival Date"] && qrData["Component Type"] && qrData["Order Number"]) {
//           const url = new URL('http://127.0.0.1:5500/view/qr_data.html');
//           url.searchParams.append('partNumber', qrData['Part Number']);
//           url.searchParams.append('arrivalDate', qrData['Arrival Date']);
//           url.searchParams.append('componentType', qrData['Component Type']);
//           url.searchParams.append('orderNumber', qrData['Order Number']);
//           window.location.href = url;
//         } else {
//           throw new Error('Missing required QR data fields');
//         }
//       } catch (e) {
//         console.error('Failed to parse QR code data:', code.data);
//         alert('Failed to parse QR code data.');
//       }
//     } else {
//       alert('No QR code found.');
//     }
//   };

//   img.src = qrURL;
// }
document.addEventListener('DOMContentLoaded', () => {
  loadSavedData();
});

// Global variable to store the current QR URL
let currentQRURL = '';

// Load saved data from the server
function loadSavedData() {
  fetch('http://localhost:3000/api/data')
    .then(response => response.json())
    .then(data => {
      const table = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
      
      data.forEach(item => {
        const newRow = table.insertRow(0); // Insert new row at the beginning

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerText = item.partNumber;
        cell2.innerText = item.componentType;
        cell3.innerHTML = `<button onclick="showModal('${item.qrURL}')" id="viewButton">View QR</button>`;
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Show the modal with QR code
function showModal(qrURL) {
  const modal = document.getElementById('qrModal');
  const qrCodeImage = document.getElementById('qrCodeImage');
  const submitButton = document.querySelector('#qrModal button');
  
  qrCodeImage.src = qrURL;
  currentQRURL = qrURL;  // Store the QR URL in a global variable
  modal.style.display = 'block';

  // Add event listener to the submit button
  submitButton.onclick = function() {
    scanQRCode();
  };
}

// Close the modal when clicking on the close button or outside the modal
document.addEventListener('click', function(event) {
  const modal = document.getElementById('qrModal');
  if (event.target.classList.contains('close') || event.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle QR code scanning
function scanQRCode() {
  const qrURL = currentQRURL;  // Use the global variable to get the QR URL
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const img = new Image();

  img.crossOrigin = "anonymous";
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert',
    });

    if (code) {
      try {
        let qrData = {};
        const lines = code.data.split('\n');
        lines.forEach(line => {
          const [key, value] = line.split(':').map(str => str.trim());
          if (key && value) {
            qrData[key] = value;
          }
        });

        console.log('Parsed QR Data:', qrData); 

        if (qrData["Part Number"] && qrData["Arrival Date"] && qrData["Component Type"] && qrData["Order Number"]) {
          const url = new URL('http://127.0.0.1:5500/view/qr_data.html');
          url.searchParams.append('partNumber', qrData['Part Number']);
          url.searchParams.append('arrivalDate', qrData['Arrival Date']);
          url.searchParams.append('componentType', qrData['Component Type']);
          url.searchParams.append('orderNumber', qrData['Order Number']);
          window.location.href = url;
        } else {
          throw new Error('Missing required QR data fields');
        }
      } catch (e) {
        console.error('Failed to parse QR code data:', code.data);
        alert('Failed to parse QR code data.');
      }
    } else {
      alert('No QR code found.');
    }
  };

  img.src = qrURL;
}
