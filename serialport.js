const SerialPort = require('serialport');
const serial = require('./config');
const fs = require('fs');
const moment = require('moment');
const InterByteTimeout = require('@serialport/parser-inter-byte-timeout');

        /** Sends hexValue paramerter to RFID Reader and perform the command. 
        *   Here's the hex Command Table:
                * 
                *   --config---
                *   
                *   VER - 5645520D
                *   MD0 - 4D4430200D - DON'T NEED IT
                *   MD2 - 4D4432200D - DON'T NEED IT
                *   CN 1 - 434E20310D
                *   CID 1- 43494420310D
                *   GT - 47540D
                *   
                *   --changing antenna channels---
                * 
                *   MP1 - 4D50310D
                *   MP2 - 4D50320D
                *   MP3 - 4D50330D
                *   MP4 - 4D50340D
                *   MP5 - 4D50350D
                *   MP6 - 4D50360D
                *   MP7 - 4D50370D
                *   MP8 - 4D50380D
                * 
        */
        
module.exports = () => {

    /** Initialize */
    connectSerial();

    /** Connect To SerialPort device, listen and log. */
    function connectSerial(){

        // flag 'a' means appending (old data will be preserved)
        const logger = fs.createWriteStream('./logs/DE22.txt', { flags: 'a' });

        /** Manages serialport data based from the config. (serialname, serialoptions) */
        const port = new SerialPort(serial.serial_path.name, serial.serial_options, (err) => {
            let portUsedAndRecon = moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', ' + ' Serial path is undefined or currently using by other application. Reconnecting...';
            let portOk = moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', ' + 'Serial Device connected.';

            if(err){
                console.log(portUsedAndRecon)
            } else {
                console.log(portOk)
            }
        });

        const RFID_READER = (hexValue) => {

            port.write(hexValue, 'hex', (err) => {
                if(err){console.log(err)};
            });

            parser.once('data', (data) => {
                console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', ' + data.toString('utf8'));
            });
        }

        function RFID_CHANNEL_1() {

            port.write('4D50310D', 'hex', (err) => {
                if(err){console.log(err)};
            });

            setTimeout(() => {

                port.write('47540D', 'hex', (err) => {
                    if(err){console.log(err)};
                });

                parser.once('data', (data) => {
                    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', A1, BR, ' + data.toString('utf8'));
                });

            }, 2000);

        }

        function RFID_CHANNEL_2() {

            port.write('4D50320D', 'hex', (err) => {
                if(err){console.log(err)};
            });

            setTimeout(() => {

                port.write('47540D', 'hex', (err) => {
                    if(err){console.log(err)};
                });

                parser.once('data', (data) => {
                    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', A2, BL, ' + data.toString('utf8'));
                });

            }, 2000);

        }

        function RFID_CHANNEL_3() {

            port.write('4D50330D', 'hex', (err) => {
                if(err){console.log(err)};
            });

            setTimeout(() => {

                port.write('47540D', 'hex', (err) => {
                    if(err){console.log(err)};
                });

                parser.once('data', (data) => {
                    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', A3, FL, ' + data.toString('utf8'));
                });

            }, 2000);

        }

        function RFID_CHANNEL_4() {

            port.write('4D50340D', 'hex', (err) => {
                if(err){console.log(err)};
            });

            setTimeout(() => {

                port.write('47540D', 'hex', (err) => {
                    if(err){console.log(err)};
                });

                parser.once('data', (data) => {
                    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', A4, FR, ' + data.toString('utf8'));
                });

            }, 2000);

        }

        function RFID_CHANNEL_5() {

            port.write('4D50350D', 'hex', (err) => {
                if(err){console.log(err)};
            });

            setTimeout(() => {

                port.write('47540D', 'hex', (err) => {
                    if(err){console.log(err)};
                });

                parser.once('data', (data) => {
                    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', A5, FR, ' + data.toString('utf8'));
                });

            }, 2000);

        }

        function RFID_CHANNEL_6() {

            port.write('4D50360D', 'hex', (err) => {
                if(err){console.log(err)};
            });

            setTimeout(() => {

                port.write('47540D', 'hex', (err) => {
                    if(err){console.log(err)};
                });

                parser.once('data', (data) => {
                    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', A6, BL, ' + data.toString('utf8'));
                });

            }, 2000);

        }

        function RFID_CHANNEL_7() {

            port.write('4D50370D', 'hex', (err) => {
                if(err){console.log(err)};
            });

            setTimeout(() => {

                port.write('47540D', 'hex', (err) => {
                    if(err){console.log(err)};
                });

                parser.once('data', (data) => {
                    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', A7, FL, ' + data.toString('utf8'));
                });

            }, 2000);

        }

        function RFID_CHANNEL_8() {

            port.write('4D50380D', 'hex', (err) => {
                if(err){console.log(err)};
            });

            setTimeout(() => {

                port.write('47540D', 'hex', (err) => {
                    if(err){console.log(err)};
                });

                parser.once('data', (data) => {
                    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', A8, BR, ' + data.toString('utf8'));
                });

            }, 2000);

        }


        /** Parse data from the port and pipe it in InterByterTimeout. */
        const parser = port.pipe(new InterByteTimeout({ interval: 30 }));
            
        setTimeout(() => {RFID_READER('5645520D')}, 1500); // check RFID version.
        setTimeout(() => {RFID_READER('434E20310D')}, 2500); // change CN to 1.
        setTimeout(() => {RFID_READER('43494420310D')}, 3500); // change CID to 1.
        setTimeout(() => {RFID_READER('4D4432200D')}, 4500); // set to default md2
        setInterval(Read_Interval, 45000); // loop through 1-8 antenna channels.

        /** RFID Error Listner */
        parser.on('error', (error) => {
            console.log(error);
        });

        /** RFID PORT Listener when closed */
        port.on('close', () => {
            let portDisconnected = moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ', ' + ' Serial Device disconnected. Reconnecting...';

            /** TODO: from console to fs async write. */
            console.log(portDisconnected);

            // call reConnectSerial.
            reConnectSerial();
        });


        /** Reading interval set Timeout for RFID Reader Channels */
        function Read_Interval(){

            setTimeout(() => {RFID_CHANNEL_1()}, 5000); // logging channel 8
            setTimeout(() => {RFID_CHANNEL_2()}, 10000);// logging channel 1
            setTimeout(() => {RFID_CHANNEL_3()}, 15000);// logging channel 2
            setTimeout(() => {RFID_CHANNEL_4()}, 20000);// logging channel 3
            setTimeout(() => {RFID_CHANNEL_5()}, 25000);// logging channel 4
            setTimeout(() => {RFID_CHANNEL_6()}, 30000);// logging channel 5
            setTimeout(() => {RFID_CHANNEL_7()}, 35000);// logging channel 6
            setTimeout(() => {RFID_CHANNEL_8()}, 40000);// logging channel 7
        
        }
            /*
            setTimeout(() => {RFID_READER('4D50320D')}, 3000); // MP2
            setTimeout(() => {RFID_READER('47540D')}, 4000); // Get Tag Read
            
            setTimeout(() => {RFID_READER('4D50330D')}, 5000); // MP3
            setTimeout(() => {RFID_READER('47540D')}, 6000); // Get Tag Read

            setTimeout(() => {RFID_READER('4D50340D')}, 7000); // MP4
            setTimeout(() => {RFID_READER('47540D')}, 8000); // Get Tag Read

            setTimeout(() => {RFID_READER('4D50350D')}, 9000); // MP5
            setTimeout(() => {RFID_READER('47540D')}, 10000); // Get Tag Read

            setTimeout(() => {RFID_READER('4D50360D')}, 11000); // MP6
            setTimeout(() => {RFID_READER('47540D')}, 12000); // Get Tag Read   

            setTimeout(() => {RFID_READER('4D50370D')}, 13000); // MP7
            setTimeout(() => {RFID_READER('47540D')}, 14000); // Get Tag Read

            setTimeout(() => {RFID_READER('4D50380D')}, 15000); // MP8
            setTimeout(() => {RFID_READER('47540D')}, 16000); // Get Tag Read
            */
        /** Initialize PORT 
        port.open((err) => {

            
            setTimeout(() => {RFID_READER('5645520D')}, 1500); // check RFID version.

            setTimeout(() => {RFID_READER('434E20310D')}, 2500); // change CN to 1.

            setTimeout(() => {RFID_READER('43494420310D')}, 3500); // change CID to 1.
            setTimeout(() => {RFID_READER('4D4432200D')}, 4500); // set to default md2

            setInterval(Read_Interval, 17000); // loop through 1-8 antenna channels.

            function Read_Interval(){

                /*
                setTimeout(() => {RFID_READER('4D50310D')}, 1000); // MP1
                setTimeout(() => {RFID_READER('47540D')}, 2000); // Get Tag Read
        
                setTimeout(() => {RFID_READER('4D50320D')}, 3000); // MP2
                setTimeout(() => {RFID_READER('47540D')}, 4000); // Get Tag Read
                
                setTimeout(() => {RFID_READER('4D50330D')}, 5000); // MP3
                setTimeout(() => {RFID_READER('47540D')}, 6000); // Get Tag Read

                setTimeout(() => {RFID_READER('4D50340D')}, 7000); // MP4
                setTimeout(() => {RFID_READER('47540D')}, 8000); // Get Tag Read

                setTimeout(() => {RFID_READER('4D50350D')}, 9000); // MP5
                setTimeout(() => {RFID_READER('47540D')}, 10000); // Get Tag Read

                setTimeout(() => {RFID_READER('4D50360D')}, 11000); // MP6
                setTimeout(() => {RFID_READER('47540D')}, 12000); // Get Tag Read

                setTimeout(() => {RFID_READER('4D50370D')}, 13000); // MP7
                setTimeout(() => {RFID_READER('47540D')}, 14000); // Get Tag Read

                setTimeout(() => {RFID_READER('4D50380D')}, 15000); // MP8
                setTimeout(() => {RFID_READER('47540D')}, 16000); // Get Tag Read
                

            }

        });

        */
        
        
    }

     /** Invoke connectSerial() every 10 seconds. */
    function reConnectSerial(){
        setTimeout(() => {
            connectSerial();
        }, 10000);
    }

}