<script lang="ts">
    import { docStore } from "sveltefire";
    import { firestore } from "$lib/firebase";
    import EditableName from "./EditableName.svelte";

    export let uid: string;

    interface GeneralSettings {
        name?: string;
    }

    const settings = docStore<GeneralSettings>(
        firestore,
        "users/" + uid + "/settings/general",
    );

    $: console.log("Settings", $settings);
</script>

<div style:margin-bottom="1rem">
    {#if typeof $settings !== "undefined"}
        <EditableName {uid} originalValue={$settings?.name || ""}
        ></EditableName>
    {/if}
</div>
