const
    pack     = require( '../../package.json' ),
    fs       = require( 'fs' ),
    { join } = require( 'path' );

const
    repo  = pack.repository.url.replace( 'git+', '' ).replace( '.git, ' ),
    cwd   = process.cwd(),
    pdocs = join( cwd, 'docs' );

function relativePath( n ) {
    return n.replace( pdocs, '' );
}

function readAndMapDocs( docPath ) {
    return fs.readdirSync( docPath )
        .map( ( item ) => {
            const fpath = join( docPath, item );

            if ( fs.lstatSync( fpath ).isDirectory() ) {
                return relativePath( join( fpath, `${ item }.md` ) );
            }

            return relativePath( join( docPath, item ) );
        } )
        .filter( ( i ) => !i.endsWith( 'README.md' ) && i.endsWith( '.md' ) );
}

module.exports = {
    title: pack.name,
    description: pack.description,
    head: [
        [ 'meta', { name: 'theme-color', content: '#3eaf7c' } ],
        [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' } ],
        [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ]
    ],
    base: process.env.NODE_ENV === 'production' ? '/blog/' : '',
    host: '0.0.0.0',
    themeConfig: {
        repo,
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit',
        activeHeaderLinks: false,
        nav: [
            { text: 'Home', link: '/' }
        ],
        sidebar: [
            [ '/', 'Home' ]
        ]
    }
};
