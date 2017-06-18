var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;
app.on('ready',function () {
    var appWindow,info;
    appWindow = new BrowserWindow({

    });
    appWindow.loadURL('file://'+__dirname+'/index.html');

    // info = new BrowserWindow({
    //     width:400,
    //     height:300,
    //     // frame:false,
    //     // transparent:true
    // });
    // info.loadURL('file://'+__dirname+'/info.html');
    // ipc.on('closeInfo',function (event) {
    //     event.returnValue='';
    //     info.close();
    // }) ;
});
