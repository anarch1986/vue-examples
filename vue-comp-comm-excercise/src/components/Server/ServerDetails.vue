<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="this.server != null">
            <p>Server #{{ this.server.id }}</p>
            <p>Status: {{ this.server.status }}</p>
            <button @click="changeStatus">Change Status</button>
        </div>
        <div v-else>No server choosen for edit</div>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    data: function () {
        return {
            server: null
        }
    },
    methods: {
        changeStatus() {
            this.server.status = 'Normal';
        }
    },
    created() {
        eventBus.$on('serverChoosen', (server) => {
            this.server = server;
        })
    }
}
</script>

<style>
</style>
