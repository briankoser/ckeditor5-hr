import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class HrEditing extends Plugin {
    init() {
        console.log( 'Hr Editing#init() got called' );
        this._defineSchema();
        this._defineConverters();
    }

    _defineSchema() {
        const schema = this.editor.model.schema;

        schema.register( 'horizontalRule', {
            isObject: true,
            allowWhere: '$block'
        } );
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for( 'upcast' ).elementToElement( {
            view: {
                name: 'hr'
            },
            model: 'horizontalRule'
        } );

        conversion.for( 'dataDowncast' ).elementToElement( {
			model: 'horizontalRule',
			view: ( modelElement, writer ) => {
                console.log( 'createHrElement() called' );
                // const container = writer.createContainerElement( 'div', { class: 'hr-container' } );
                
                // const svg = writer.createContainerElement( "svg", { xmlns: "http://www.w3.org/2000/svg", version="1.1", viewBox:"0 0 360 40", class:"hr-image" } ); 
                // const circle1 = writer.createEmptyElement( "circle1", { cx = "20",  cy = "20", r = "20", style = "fill:#000000" } );
                // const circle1 = writer.createEmptyElement( "circle2", { cx = "100", cy = "20", r = "20", style = "fill:#000000" } );
                // const circle1 = writer.createEmptyElement( "circle3", { cx = "180", cy = "20", r = "20", style = "fill:#000000" } );
                // const circle1 = writer.createEmptyElement( "circle4", { cx = "260", cy = "20", r = "20", style = "fill:#000000" } );
                // const circle1 = writer.createEmptyElement( "circle5", { cx = "340", cy = "20", r = "20", style = "fill:#000000" } );
                // writer.insert( writer.createPositionAt( svg, 0 ), circle1 );
                // writer.insert( writer.createPositionAt( svg, 1 ), circle2 );
                // writer.insert( writer.createPositionAt( svg, 2 ), circle3 );
                // writer.insert( writer.createPositionAt( svg, 3 ), circle4 );
                // writer.insert( writer.createPositionAt( svg, 4 ), circle5 );
                
                const hr = writer.createEmptyElement( 'hr', { class: 'hr-placeholder' } );
            
                // writer.insert( writer.createPositionAt( container, 0 ), hr );
            
                return hr;
            }
        } );

        conversion.for( 'editingDowncast' ).elementToElement( {
            model: 'horizontalRule',
            view: ( modelElement, writer ) => {
                return writer.createEmptyElement( 'hr', { class: 'hr-placeholder' } );
            }
        } );
    }
}