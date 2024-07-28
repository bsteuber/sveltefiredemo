<script>
    import { SignedIn, SignedOut } from "sveltefire";
    import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
    } from "firebase/auth";

    let email = "";
    let password = "";
</script>

<div class="navbar">
    <h1 class="title">My super cool Todo App</h1>
    <SignedOut let:auth>
        <form>
            <input type="text" placeholder="Email" bind:value={email} />
            <input
                type="password"
                placeholder="Password"
                bind:value={password}
            />
            <button
                type="submit"
                on:click={() =>
                    signInWithEmailAndPassword(auth, email, password)}
                >Login</button
            >
            <button
                on:click={() =>
                    createUserWithEmailAndPassword(auth, email, password)}
                >Register</button
            >
        </form>
    </SignedOut>
    <SignedIn let:user let:signOut>
        <div>{user.email}</div>
        <button class="logout-button" on:click={signOut}>Logout</button>
    </SignedIn>
</div>

<style>
    .navbar {
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        align-items: center;
        background-color: black;
        color: white;
        padding: var(--page-margin);
    }

    .title {
        margin: 0 auto 0 0;
        padding: 0;
    }

    .logout-button {
        margin-left: 10px;
    }
</style>
