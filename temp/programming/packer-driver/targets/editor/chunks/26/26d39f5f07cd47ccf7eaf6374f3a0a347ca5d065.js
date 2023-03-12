System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, director, EasyControllerEvent, EasyController, _crd, ccclass, property;

  _export({
    EasyControllerEvent: void 0,
    EasyController: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc933ijiadBG47GZ61xXA52", "EasyController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EasyControllerEvent", EasyControllerEvent = class EasyControllerEvent {});

      EasyControllerEvent.CAMERA_ROTATE = 'EasyControllerEvent.CAMERA_ROTATE';
      EasyControllerEvent.CAMERA_ZOOM = 'EasyControllerEvent.CAMERA_ZOOM';
      EasyControllerEvent.MOVEMENT = 'EasyControllerEvent.MOVEMENT';
      EasyControllerEvent.MOVEMENT_STOP = 'EasyControllerEvent.MOVEMENT_STOP';
      EasyControllerEvent.JUMP = 'EasyControllerEvent.JUMP';

      _export("EasyController", EasyController = class EasyController {
        static on(type, callback, target) {
          director.getScene().on(type, callback, target);
        }

        static off(type, callback, target) {
          var _director$getScene;

          (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.off(type, callback, target);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=26d39f5f07cd47ccf7eaf6374f3a0a347ca5d065.js.map