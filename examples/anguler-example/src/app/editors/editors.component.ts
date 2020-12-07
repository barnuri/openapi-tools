import { Component, OnInit } from '@angular/core';
import { Editor, getEditor, OpenApiDocument } from 'openapi-definition-to-editor';
import openapiSchemaExample from 'openapi-definition-to-editor/src/openapiSchemaExample.json';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css'],
})
export class EditorsComponent implements OnInit {
    constructor() {}
    editors: Editor[];
    value: any;
    changes: any;
    ngOnInit(): void {
        this.editors = ['Pet', 'User', 'Category', 'Tag', 'Order', 'ApiResponse'].map(tabName =>
            getEditor((openapiSchemaExample as any) as OpenApiDocument, tabName),
        );
        this.value = {};
        this.changes = { $set: {}, $unset: {} };
    }
    setChanges(val: any): void {
        val = val || { $set: {}, $unset: {} };
        this.changes = { ...val };
        console.log(this.changes);
    }
}
