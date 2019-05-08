import { lightGallery } from 'lightgallery';
import { Injectable, Component, Input, ViewChild, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        console.log(this.images);
        lightGallery(this.lightbox.nativeElement);
    };
    GocodeeLightboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gocodee-lightbox',
                    template: "<div #lightgal>\n    <div *ngFor=\"let image of images\">\n        <a [href]=\"image.image\">\n            <img [src]=\"image.thumbnail\" />\n        </a>\n    </div>\n\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GocodeeLightboxComponent.ctorParameters = function () { return []; };
    GocodeeLightboxComponent.propDecorators = {
        lightbox: [{ type: ViewChild, args: ['lightbox',] }],
        images: [{ type: Input, args: ['images',] }]
    };
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
                    imports: [
                        CommonModule
                    ],
                    exports: [GocodeeLightboxComponent],
                    providers: [GocodeeLightboxService]
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