import {ReactInstance, Surface} from 'react-360-web';
import SimpleRaycaster from 'simple-raycaster';

function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        fullScreen: true,
        ...options,
        cursorVisibility: 'visible',
    });

    const surface = new Surface(4096, 720, Surface.SurfaceShape.Cylinder);
    surface.setAngle(0, 0);
    r360.renderToSurface(
        r360.createRoot('Photo360', {}),
        surface
    );

    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = {init};
