System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RenderTexture, MeshRenderer, director, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, DepthMapSetter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RenderTexture = _cc.RenderTexture;
      MeshRenderer = _cc.MeshRenderer;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8f98MsOi9OtLrkE6OJm7Pj", "DepthMapSetter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RenderTexture', 'MeshRenderer', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DepthMapSetter", DepthMapSetter = (_dec = ccclass('DepthMapSetter'), _dec2 = property(RenderTexture), _dec(_class = (_class2 = class DepthMapSetter extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "renderTexture", _descriptor, this);

          _initializerDefineProperty(this, "samplerName", _descriptor2, this);
        }

        start() {
          let material = this.node.getComponent(MeshRenderer).sharedMaterial;
          material.setProperty(this.samplerName, this.renderTexture.window.framebuffer.depthStencilTexture);
          let pass0 = material.passes[0];
          let bindingIndex = pass0.getBinding(this.samplerName);
          pass0.bindSampler(bindingIndex, director.root.pipeline.globalDSManager.pointSampler);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "renderTexture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "samplerName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4bcbecc48a017fd2bc53f0dc0f4fc2cc2ddda47f.js.map