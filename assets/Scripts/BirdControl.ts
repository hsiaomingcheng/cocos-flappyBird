const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {

    onLoad () {
        // 物理引擎開啟
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {

    }

    // update (dt) {}

    // 像上飛的動作
    fly() {
       this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 200);
    }

    //
    onBeginContact(contact, self, other) {
        if (other.tag === 1) {
            console.log('加分');
        } else {
            console.log('死亡');
        }
    }
}
