import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLightboxService {
    constructor() { }
}
GocodeeLightboxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GocodeeLightboxService.ctorParameters = () => [];
/** @nocollapse */ GocodeeLightboxService.ngInjectableDef = defineInjectable({ factory: function GocodeeLightboxService_Factory() { return new GocodeeLightboxService(); }, token: GocodeeLightboxService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLightboxComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GocodeeLightboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gocodee-lightbox',
                template: `
    <p>
      gocodee-lightbox works!
    </p>
  `
            }] }
];
/** @nocollapse */
GocodeeLightboxComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLightboxModule {
}
GocodeeLightboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GocodeeLightboxComponent],
                imports: [],
                exports: [GocodeeLightboxComponent]
            },] }
];

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