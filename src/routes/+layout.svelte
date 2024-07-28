<script>
    import { FirebaseApp } from "sveltefire";
    import { auth, firestore } from "$lib/firebase";
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
