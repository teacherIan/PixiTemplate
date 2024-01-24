import { Container, FederatedPointerEvent, Sprite, Ticker } from 'pixi.js';
import { IScene, Manager } from './Manager';
import { SceneA } from './SceneA';

export class SceneB extends Container implements IScene {
  private img: Sprite;
  private imgVelocity: number = 1;

  constructor() {
    super();
    this.img = Sprite.from('/vite.svg');
    this.img.anchor.set(0.5, 0.5);
    this.img.x = Manager.width / 2;
    this.img.y = Manager.height / 2;
    this.addChild(this.img);
    Ticker.shared.add(this.update, this);
    this.eventMode = 'dynamic';
    this.on('pointerdown', this.onClick, this);
  }
  resize(screenWidth: number, screenHeight: number): void {
    throw new Error('Method not implemented.');
  }

  update(deltaTime: number) {
    this.img.y = this.img.y + this.imgVelocity * deltaTime;
    if (this.img.y > Manager.height + this.img.height) {
      this.img.y = 0 - this.img.height;
    }
  }
  private onClick(e: FederatedPointerEvent) {
    console.log('Action');
    Manager.changeScene(new SceneA());
  }
}
