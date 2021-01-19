import * as PIXI from 'pixi.js';
window.PIXI = PIXI;
import 'pixi-layers';

export class MyPixiApp {
  mainApp: PIXI.Application;

  constructor() {
    this.mainApp = new PIXI.Application();
    this.mainApp.stage.addChild(
      new PIXI.Text('Hello from PIXI!', {
        fontFamily:
          'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
        fontSize: 50,
        fill: 'white',
        align: 'left',
      })
    );
  }
  
  render(element: string | HTMLElement) {
    if (typeof element === 'string') {
      document.querySelector(element).appendChild(this.mainApp.view);
    } else {
      element.appendChild(this.mainApp.view);
    }
  }
}
