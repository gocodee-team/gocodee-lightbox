/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import * as lightgallery from 'lightgallery';
export class GocodeeLightboxComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.images);
        lightgallery.lightGallery(this.lightbox.nativeElement);
    }
}
GocodeeLightboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'gocodee-lightbox',
                template: "<div #lightgal>\n    <div *ngFor=\"let image of images\">\n        <a [href]=\"image.image\">\n            <img [src]=\"image.thumbnail\" />\n        </a>\n    </div>\n\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
GocodeeLightboxComponent.ctorParameters = () => [];
GocodeeLightboxComponent.propDecorators = {
    lightbox: [{ type: ViewChild, args: ['lightbox',] }],
    images: [{ type: Input, args: ['images',] }]
};
if (false) {
    /** @type {?} */
    GocodeeLightboxComponent.prototype.lightbox;
    /** @type {?} */
    GocodeeLightboxComponent.prototype.images;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWdodGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGlnaHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sS0FBSyxZQUFZLE1BQU0sY0FBYyxDQUFDO0FBTzdDLE1BQU0sT0FBTyx3QkFBd0I7SUFHbkM7SUFDQSxDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsNExBQWdEOzthQUVqRDs7Ozs7dUJBRUUsU0FBUyxTQUFDLFVBQVU7cUJBQ3BCLEtBQUssU0FBQyxRQUFROzs7O0lBRGYsNENBQTRDOztJQUM1QywwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbGlnaHRnYWxsZXJ5IGZyb20gJ2xpZ2h0Z2FsbGVyeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvY29kZWUtbGlnaHRib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ29jb2RlZS1saWdodGJveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dvY29kZWUtbGlnaHRib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHb2NvZGVlTGlnaHRib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdsaWdodGJveCcpIGxpZ2h0Ym94OiBFbGVtZW50UmVmO1xuICBASW5wdXQoJ2ltYWdlcycpIGltYWdlczogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmltYWdlcyk7XG4gICAgXG4gICAgbGlnaHRnYWxsZXJ5LmxpZ2h0R2FsbGVyeSh0aGlzLmxpZ2h0Ym94Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbn1cbiJdfQ==