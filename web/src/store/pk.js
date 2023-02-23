
export default {
    state: {
        status: "matching", // matching表示匹配界面, playing表示对战界面
        socket: null,
        opponent_username: "player",
        opponent_photo: "https://cdn.acwing.com/media/article/image/2022/08/09/1_1db2488f17-anonymous.png",
    },
    getters: {
    },
    mutations: {
        updateSocket(state, socket) {
            state.socket = socket;
        },
        updateOpponent(state, opponent) {
            state.opponent_username = opponent.username;
            state.opponent_photo = opponent.photo;
        },
        updateStatus(state, status) {
            state.status = status;
        }
    },
    actions: {
    },
    modules: {
    }
  }