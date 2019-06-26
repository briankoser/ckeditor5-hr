import HrEditing from './hrediting';
import HrUI from './hrui';
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class Hr extends Plugin {
    static get requires() {
        return [ HrEditing, HrUI ];
    }
}