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
    ngOnInit(): void {
        this.editors = ['Order', 'User', 'Category', 'Tag', 'Pet', 'ApiResponse'].map(tabName =>
            getEditor((openapiSchemaExample as any) as OpenApiDocument, tabName),
        );
    }
}
