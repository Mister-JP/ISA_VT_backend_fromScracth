const {format} = require('date-fns');
const {v4: uuid} = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async(message)=>{
    //Important functions to be used for logs
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    //printing the logs for development env
    console.log(logItem);
    try{
        //if the directory logs doesn't exist create one
        if(!fs.existsSync(path.join(__dirname, 'logs'))){ 
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        //saving the logItem data to the file named eventLog.txt in a folder called logs
        //testing
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);
        
    }
    catch(err){
        //Logging error to console because the error is in.....
        // ......writing the file we cannot actually write the error in the file like logs
        console.log(err);
    }
}

module.exports = logEvents;