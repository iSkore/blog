const
    pack = require( '../../package.json' ),
    fs   = require( 'fs' ),
    path = require( 'path' );

const
    repo  = pack.repository.url.replace( 'git+', '' ).replace( '.git, ' ),
    cwd   = process.cwd(),
    pdocs = path.join( cwd, 'docs' );

function relativePath( n ) {
    return n.replace( pdocs, '' );
}

function readAndMapDocs( docPath ) {
    return fs.readdirSync( docPath )
        .map( ( item ) => {
            const fpath = path.join( docPath, item );

            if ( fs.lstatSync( fpath ).isDirectory() ) {
                return relativePath( path.join( fpath, `${ item }.md` ) );
            }

            return relativePath( path.join( docPath, item ) );
        } )
        .filter( ( i ) => !i.endsWith( 'README.md' ) && i.endsWith( '.md' ) );
}

module.exports = {
    title: pack.name,
    description: pack.description,
    head: [
        [ 'meta', { name: 'theme-color', content: '#3eaf7c' } ],
        [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' } ],
        [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ],
        [ 'link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' } ]
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
            [ '/', 'Home' ],
            {
                title: 'Brain-Teasers',
                path: relativePath( path.join( pdocs, 'brain-teasers' ) ),
                sidebarDepth: 1,
                children: readAndMapDocs( path.join( pdocs, 'brain-teasers' ) )
            }
        ]
    },
    extendMarkdown: ( md ) => {
        md.set( { breaks: true } );
        md.use( require( 'markdown-it-katex' ) );
    }
};
