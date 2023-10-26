
import { HttpClient } from '@angular/common/http';



const promise = new Promise((resolve, reject) => {
    // Perform asynchronous operation
    // If operation is successful, call resolve()
    // If operation fails, call reject()
  });

  promise.then(result => {
    // Handle successful result
  }).catch(error => {
    // Handle error
  }); 
  
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log(data); // Output: Data fetched successfully!
    })
    .catch(error => {
        console.error(error);
    });

