import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class HrUI extends Plugin {
    init() {
        console.log( 'HrUI#init() got called' );

        const editor = this.editor;
        const t = editor.t;

        editor.ui.componentFactory.add( 'horizontalRule', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: t( '❧' ),
                withText: true,
                tooltip: true
            } );

            view.on( 'execute', () => {
                editor.model.change( writer => {
                    const hrElement = writer.createElement( 'horizontalRule' );

                    editor.model.insertContent( hrElement );
                } );
            } );

            return view;
        } );
    }
}