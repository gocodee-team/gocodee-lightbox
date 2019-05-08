import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GocodeeLightboxService = /** @class */ (function () {
    function GocodeeLightboxService() {
    }
    GocodeeLightboxService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GocodeeLightboxService.ctorParameters = function () { return []; };
    /** @nocollapse */ GocodeeLightboxService.ngInjectableDef = defineInjectable({ factory: function GocodeeLightboxService_Factory() { return new GocodeeLightboxService(); }, token: GocodeeLightboxService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { GocodeeLightboxService, GocodeeLightboxComponent, GocodeeLightboxModule };

//# sourceMappingURL=gocodee-lightbox.js.map