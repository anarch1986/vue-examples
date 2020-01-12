<template>
    <div class="server-element" @click="serverClicked">Server #{{ server.id }} {{ server.status }}</div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    props: {
        server: Object,
    },
    methods: {
        serverClicked() {
            eventBus.$emit('serverChoosen', this.server);
        }
    }
}
</script>

<style>
.server-element:hover {
  cursor: pointer;
}
</style>
