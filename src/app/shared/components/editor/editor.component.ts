import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { basicSetup } from 'codemirror';
import {
    EditorView,
    gutter,
    GutterMarker,
    lineNumbers,
    keymap,
} from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { EditorState, Extension, Compartment } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula';

@Component({
    selector: 'app-editor',
    standalone: true,
    imports: [],
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class EditorComponent implements AfterViewInit {
    @Input() codeType: string;
    @ViewChild('editor') editorDIV: ElementRef;
    editor: EditorView;
    state: EditorState;
    extensions: Extension[];

    ngAfterViewInit(): void {
        const editorElement = this.editorDIV.nativeElement;
        const extensions = [
            basicSetup,
            keymap.of([indentWithTab]),
            this.codeType === 'javascript' ? javascript() : python(),
            gutter({}),
            EditorView.lineWrapping,
            dracula,
        ];
        this.editor = new EditorView({
            state: EditorState.create({
                doc: '',
                extensions,
            }),
            parent: editorElement,
        });
    }
}
