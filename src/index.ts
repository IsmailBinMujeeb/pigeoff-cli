#!/usr/bin/env node

import { program } from '@commander-js/extra-typings';
import terminalKit from 'terminal-kit';
import axios from 'axios';
import path from 'path';
import fs from "fs";
import Req from './types/Req';
import { getFile } from './utils/getFile.js';
import { generateTable } from './utils/generateTable.js';

const { terminal: term } = terminalKit

program
    .name('pigeoff')
    .description('A HTTP request response cli tool')
    .version('1.0.0');

program
    .description("Get File request")
    .action( async () => {

        const filePath: string = await getFile() as string;
        await term.blue('\nSending ').spinner({animation: 'impulse'});
        
        try {
    
            if (!fs.existsSync(filePath)) {
                console.error(`File "${filePath}" not found!`);
                process.exit(1);
            }

            const response: string = fs.readFileSync(filePath, 'utf8');
            const parsedResponse: Req = JSON.parse(response);

            term.red.bold(`\n ${parsedResponse.method} `).gray(parsedResponse.req)('\n')

            let form: any = {};

            for (const key in parsedResponse.body) {
                form[key] = parsedResponse.body[key];
            }

            for (const key in parsedResponse.files) {

                form[key] = fs.createReadStream(parsedResponse.files[key]);
            }

            const data = await axios({ url: parsedResponse.req, method: parsedResponse.method, data: form, params: parsedResponse.query, headers: parsedResponse.header});
            term.green(`\n-> Get An ${data.status} status code\n`);

            if ( parsedResponse.project?.response || parsedResponse.project?.response === undefined )
            {
                fs.writeFileSync(filePath.replace(".json", ".response.json"), JSON.stringify(data.data, null, 4))
                term.green(`\n-> Response file created successfuly ✅\n`);
            }
            if ( parsedResponse.project?.header ){
                fs.writeFileSync(filePath.replace(".json", ".header.json"), JSON.stringify(data.headers, null, 4));
                term.green(`\n-> Header file created successfuly ✅\n`);
            }

            if ( parsedResponse.project?.cookie ){
                fs.writeFileSync(filePath.replace(".json", ".cookie.json"), JSON.stringify(data.headers['set-cookie'], null, 4));
                term.green(`\n-> Cookie file created successfuly ✅\n`);
            }
            
            await generateTable(data.headers);
        } catch (error: any) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.status, error.response?.statusText)
                // fs.writeFileSync(filePath.replace(W".json", ".response.json"), JSON.stringify(error.response?.data, null, 4))
            }

            // console.log(error)
        }

        process.exit();
    } )

program.parse(process.argv);
