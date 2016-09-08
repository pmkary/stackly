#! /usr/bin/env node

//
// Stackly -- A stack based "what I was doing" tool.
// Copyright 2016 by Pouya Kary <k@karyfoundation.org>
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

    import path = require( 'path' );
    import fs = require( 'fs' );
    import readlineSync = require( 'readline-sync' );
    import chalk = require( 'chalk' );

//
// ─── CONSTANTS ──────────────────────────────────────────────────────────────────
//

    const stackFilePath = path.join( process.env.HOME, '.stackly.json' );

//
// ─── GLOBALS ────────────────────────────────────────────────────────────────────
//

    var stack = new Array<string>();

//
// ─── MAIN ───────────────────────────────────────────────────────────────────────
//

    main();

    /** Where the universe starts */
    function main () {
        updateStackFromFile();
        // command switcher
        let args = process.argv.slice( 2 );
        if ( args.length === 0 ) {
            printStack( );
        } else if ( args.length === 1 ) {
            if ( args[ 0 ] === 'push' ) {
                stackAddCommand( );
            } else if ( args[ 0 ] === 'pop' ) {
                stackPopCommand( );
            } else if ( args[ 0 ] === 'clean' ) {

            } else {
                printCommandDidNotFound( args );
            }
        } else {
            printCommandDidNotFound( args );
        }
    };

//
// ─── COMMAND DID NOT FOUND ──────────────────────────────────────────────────────
//

    function printCommandDidNotFound ( args: string[ ] ) {
        console.log(`\n  Stackly Error: "${ args.join(' \u27E9 ') }" is not defined \n`);
    }

//
// ─── CLEAN STACK ────────────────────────────────────────────────────────────────
//

    function cleanTheStack ( ) {
        console.log('\n  Stackly: Fully Cleaned\n');
        stack = [ ];
        storeStackFile( );
    }

//
// ─── STACK POP ──────────────────────────────────────────────────────────────────
//

    function stackPopCommand ( ) {
        console.log(`\n \u2713 ${ stack.pop( ) }\n`);
        storeStackFile( );
    }

//
// ─── ADD TO STACK ───────────────────────────────────────────────────────────────
//

    function stackAddCommand ( ) {
        let task = readlineSync.question('  Stackly: New Task: ');
        stack.push( task );
        storeStackFile( );
    }

//
// ─── SHOW THE STACK ─────────────────────────────────────────────────────────────
//

    function printStack ( ) {
        let stackCount = stack.length;
        if ( stackCount === 0 ) {
            console.log( '\n  Stackly: No task found.\n' );
            return;
        }
        for ( let index = stackCount; index > 0; index-- ) {
            console.log( `\n ${ stackCount - index + 1 } \u2723 ${ stack[ index - 1 ] }` );
        }
        console.log('');
    }

//
// ─── LOAD THE STACK ─────────────────────────────────────────────────────────────
//

    /** Loads the stack file as the array itself. */
    function updateStackFromFile () {
        try {
            stack = JSON.parse( fs.readFileSync( stackFilePath, 'utf8' ) );
            return true;
        } catch ( error ) {
            return false;
        }
    }

//
// ─── STORE THE STACK ────────────────────────────────────────────────────────────
//

    /** Saves the stack array as a json file */
    function storeStackFile ( ) {
        try {
            fs.writeFileSync( stackFilePath, JSON.stringify( stack ) );
            return true;
        } catch ( error ) {
            return false;
        }
    }

// ────────────────────────────────────────────────────────────────────────────────

