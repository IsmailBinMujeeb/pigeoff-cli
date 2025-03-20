import terminalKit from "terminal-kit";

const { terminal: term } = terminalKit;

export const getFile = async (): Promise<string | void> => {
    term("Choose a json file: ");
    
    return await term.fileInput(
        { baseDir: './', style: term.yellow, hintStyle: term.bgBrightRed } ,
        function( error: any , fn: string ) {
            if ( error )
                term.red.bold( "\nAn error occurs: " + error + "\n" );
            
            return fn as string;
        }
    );
}