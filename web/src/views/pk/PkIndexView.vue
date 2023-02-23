<template>
    <PlayGround v-if="$store.state.pk.status === 'playing'"/>
    <MatchGround v-if="$store.state.pk.status === 'matching'"/>
</template>

<script>
import PlayGround from '../../components/PlayGround.vue'
import MatchGround from '../../components/MatchGround.vue'
import { onMounted, onUnmounted } from 'vue';
import { useStore } from 'vuex';

export default {
    components: {
        PlayGround,
        MatchGround,
    },
    setup() {
        const store = useStore();
        const socketUrl = `ws://127.0.0.1:3000/websocket/${store.state.user.token}/`;

        let socket = null;
        onMounted(() => {
            socket = new WebSocket(socketUrl);

            socket.onopen = () => {
                console.log("WebSocket connected");
                socket.commit("updateSocket", socket);
            }

            socket.onmessage = msg => {
                const data = JSON.parse(msg.data);
                if (data.event === "start-matching") {
                    store.commit("updateOpponent", JSON.stringify({
                        username: data.opponent_username,
                        photo: data.opponent_photo,
                    }));
                }
            }

            socket.onclose = () => {
                console.log("WebSocket disconnected");
            }
        });

        onUnmounted(() => {
            socket.close();
        });
    }
}
</script>

<style scoped>

</style>