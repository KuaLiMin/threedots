/**/ /**/ /**/

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






console.log("🚀 Checking document.readyState:", document.readyState);

if (document.readyState === "complete" || document.readyState === "interactive") {
    console.log("✅ DOM was already loaded, running event listener setup now!");
    setupSubmitButton();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("✅ DOMContentLoaded event fired!");
        setupSubmitButton();
    });
}

// Function to attach event listener
function setupSubmitButton() {
    const submitButton = document.querySelector("input[type='submit']");
    console.log("🔍 Found submit button:", submitButton);

    if (submitButton) {
        submitButton.addEventListener("click", function() {
            console.log("✅ Submit button clicked!");
        });
    } else {
        console.error("❌ Submit button not found.");
    }
}







sendData("double    test")
console.log('Firebase loaded');
