<script lang="ts">
    import { doc, setDoc } from "firebase/firestore";
    import { firestore } from "$lib/firebase";

    export let uid: string;
    export let originalValue;
    let value = originalValue;
    $: isDirty = value != originalValue;

    function submit() {
        console.log("submit", value);
        let settingsDoc = doc(firestore, "users", uid, "settings", "general");
        setDoc(settingsDoc, { name: value }, { merge: true });
    }
</script>

<form on:submit={submit} style:display="flex" style:gap="5px">
    <label for="name-input">Name:</label>
    <input id="name-input" type="text" bind:value />
    <button disabled={!isDirty} type="submit">Change</button>
</form>
