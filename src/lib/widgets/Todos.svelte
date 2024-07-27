<script lang="ts">
    export let uid: string;

    import { getContext } from "svelte";
    import { doc, deleteDoc } from "firebase/firestore";
    import type { Firestore } from "firebase/firestore";
    import { Collection } from "sveltefire";
    import AddTodo from "./AddTodo.svelte";

    const { firestore } = getContext<{ firestore: Firestore }>("firebase");

    function complete(id: string): void {
        console.log("Completed", id);
        deleteDoc(doc(firestore, "users", uid, "todos", id));
    }
</script>

<h2>Todos</h2>

<Collection ref="users/{uid}/todos" let:data let:count>
    <p>You have {count} todos.</p>

    <AddTodo {uid}></AddTodo>

    <div class="todos">
        {#each data as todo}
            <div class="todo">
                <div class="title">{todo.title}</div>
                <div class="complete">
                    <button on:click={() => complete(todo.id)}>Complete</button>
                </div>
            </div>
        {/each}
    </div>
</Collection>

<style>
    h2 {
        margin-top: 0;
    }

    .todos {
        margin: 1rem 0;
        display: table;
    }

    .todo {
        display: table-row;
    }

    .todo > * {
        display: table-cell;
        padding: 0 0 4px;
    }

    .title {
        padding-right: 1rem;
    }
</style>
