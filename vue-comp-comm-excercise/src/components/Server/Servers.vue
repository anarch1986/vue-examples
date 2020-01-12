<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="server in servers"
                v-bind:key="server.id"
            ><app-server :server="server"></app-server></li>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../../main';
import Server from './Server.vue';

export default {
    data: function () {
        return {
            servers: [
                { id: 1, status: 'Normal' },
                { id: 2, status: 'Critical' },
                { id: 3, status: 'Unknown' },
                { id: 4, status: 'Normal' },
            ]
        };
    },
    components: {
        appServer: Server
    },
    created() {
      eventBus.$on('serverStatusChanged', (id) => {
        let server = this.servers.find(server => server.id === id);
        if (server != null) {
            server.status = 'Normal';
        }
      })
    }
};
</script>

<style>
</style>
