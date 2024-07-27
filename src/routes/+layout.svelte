<script>
    import { FirebaseApp } from "sveltefire";
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyDOh7ldvVBIMvQ3064t4JlblpF1E_PtIY4",
        authDomain: "sveltefiredemo-123.firebaseapp.com",
        projectId: "sveltefiredemo-123",
        storageBucket: "sveltefiredemo-123.appspot.com",
        messagingSenderId: "220732468284",
        appId: "1:220732468284:web:54ac2a7de5a4b767ed2739",
    };

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const auth = getAuth(app);
</script>

<FirebaseApp {auth} {firestore}>
    <slot />
</FirebaseApp>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    :root {
        --page-margin: 0.5rem;
    }
</style>
