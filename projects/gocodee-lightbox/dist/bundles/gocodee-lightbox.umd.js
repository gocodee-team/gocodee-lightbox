(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('gocodee-lightbox', ['exports', '@angular/core'], factory) :
    (factory((global['gocodee-lightbox'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GocodeeLightboxService = /** @class */ (function () {
        function GocodeeLightboxService() {
        }
        GocodeeLightboxService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GocodeeLightboxService.ctorParameters = function () { return []; };
        /** @nocollapse */ GocodeeLightboxService.ngInjectableDef = i0.defineInjectable({ factory: function GocodeeLightboxService_Factory() { return new GocodeeLightboxService(); }, token: GocodeeLightboxService, providedIn: "root" });
        return GocodeeLightboxService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GocodeeLightboxComponent = /** @class */ (function () {
        function GocodeeLightboxComponent() {
        }
        /**
         * @return {?}
         */
        GocodeeLightboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        GocodeeLightboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-gocodee-lightbox',
                        template: "\n    <p>\n      gocodee-lightbox works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        GocodeeLightboxComponent.ctorParameters = function () { return []; };
        return GocodeeLightboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GocodeeLightboxModule = /** @class */ (function () {
        function GocodeeLightboxModule() {
        }
        GocodeeLightboxModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GocodeeLightboxComponent],
                        imports: [],
                        exports: [GocodeeLightboxComponent]
                    },] }
        ];
        return GocodeeLightboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GocodeeLightboxService = GocodeeLightboxService;
    exports.GocodeeLightboxComponent = GocodeeLightboxComponent;
    exports.GocodeeLightboxModule = GocodeeLightboxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gocodee-lightbox.umd.js.map