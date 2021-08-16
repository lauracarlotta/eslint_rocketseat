const server = require( 'express' )()

server.get( "/", function ( res ) {
	console.log( res );
} );

server.get( "/frontend", function ( req ) {
	console.log( req );
} );

server.listen( 3000 )
