import terminalKit from "terminal-kit";

const { terminal: term } = terminalKit;

export const generateTable = async (obj: any) => {

    const tableCells = [];

    for (const key in obj) {
        tableCells.push([ key, obj[key] ])
    }
    term.table(tableCells, 
        {
            hasBorder: true,
            contentHasMarkup: true,
            fit: true,
            borderChars: 'lightRounded',
            borderAttr: { color: 'blue' },
            width: 80
        }
    );
}