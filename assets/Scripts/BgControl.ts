import BirdControl from "./BirdControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {

    // 速度
    @property
    speed: number = 4;

    //寬度
    @property
    width: number = 288;

    //小鳥
    @property(BirdControl)
    bird: BirdControl = null;

    // onLoad () {}

    start () {
        // 點擊監聽
        for (let bg of this.node.children) {
            bg.on(cc.Node.EventType.MOUSE_DOWN, () => {
                this.bird.fly();
            });
        }
    }

    update (dt) {
        // 移動
        for (let bg of this.node.children) {
            bg.x -= this.speed * dt;

            // 如果背景超出螢幕
            if (bg.x < -this.width) {
                bg.x = this.width;
            }
        }
    }
}
