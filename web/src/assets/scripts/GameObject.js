const GAME_OBJECTS = [];

export class GameObject {
    constructor() {
        GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    // 只执行一次
    start() {
        
    }

    // 每一帧执行一次
    update() {

    }

    //删除前执行
    on_destory() {

    }

    destory() {
        this.on_destory();

        for (let i in GAME_OBJECTS) {
            const obj = GAME_OBJECTS[i];
            if (obj === this) {
                GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; //上一次执行的时间

const step = timestamp => {
    for (let obj of GAME_OBJECTS) {
        if (!obj.has_called_start)
        {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step)
}
 
requestAnimationFrame(step)