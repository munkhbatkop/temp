import {app, BrowserWindow} from "electron";

const path = require("path");

let win = null; // window browser variable initial
let dev = process.env.development; // check mode is [development or production]

// this called when app ready
const ready = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if (dev) {
    win.loadURL("http://localhost:9000");
    win.webContents.openDevTools();
  } else {
    win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
  }

  win.on("closed", () => {
    win = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", ready);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => (process.platform !== 'darwin') ? app.quit() : null);

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', () => (win === null) ? ready() : null);