<script>
    import { SignedIn, SignedOut } from "sveltefire";
    import Navbar from "$lib/widgets/Navbar.svelte";
    import Todos from "$lib/widgets/Todos.svelte";
</script>

<div>
    <Navbar></Navbar>
    <div class="wrapper">
        <SignedOut>Login to continue</SignedOut>
        <SignedIn let:user>
            <Todos uid={user.uid}></Todos>
        </SignedIn>
    </div>
</div>

<style>
    .wrapper {
        padding: var(--page-margin);
    }
</style>
