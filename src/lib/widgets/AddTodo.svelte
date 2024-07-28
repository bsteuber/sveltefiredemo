<script lang="ts">
    import { getContext } from "svelte";
    import { collection, addDoc } from "firebase/firestore";
    import type { Firestore } from "firebase/firestore";

    const { firestore } = getContext<{ firestore: Firestore }>("firebase");

    export let uid: string;

    let title = "";

    function addTodo(): void {
        console.log("Add", uid, title);
        let coll = collection(firestore, "users", uid, "todos");
        addDoc(coll, { title, timestamp: Date.now() });
        title = "";
    }
</script>

<div class="add-todo">
    <form on:submit={addTodo}>
        <input type="text" bind:value={title} required />
        <button type="submit">Add Todo</button>
    </form>
</div>
