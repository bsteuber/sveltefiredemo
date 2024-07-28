<script>
    import { SignedIn, SignedOut } from "sveltefire";
    import Navbar from "$lib/widgets/Navbar.svelte";
    import Todos from "$lib/widgets/Todos.svelte";
    import Settings from "$lib/widgets/Settings.svelte";
</script>

<div>
    <Navbar></Navbar>
    <div class="wrapper">
        <SignedOut>Login to continue</SignedOut>
        <SignedIn let:user>
            <Settings uid={user.uid} />
            <Todos uid={user.uid}></Todos>
        </SignedIn>
    </div>
</div>

<style>
    .wrapper {
        padding: var(--page-margin);
    }
</style>
