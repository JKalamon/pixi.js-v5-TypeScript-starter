import * as PIXI from 'pixi.js';
window.PIXI = PIXI;
import 'pixi-layers';

const pixiApp = new PIXI.Application();
document.body.appendChild(pixiApp.view);
pixiApp.stage.addChild(new PIXI.Text('Hello from PIXI!', {
  fontFamily:
    'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
  fontSize: 50,
  fill: 'white',
  align: 'left'
}));
