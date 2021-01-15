const path = require("path");

const builder = require("electron-builder");

const root = path.join(__dirname, ".."); // project root that contain package.json
const pack = path.join(root, "build", "pack"); // path to build/pack folder

const config = () => {
  const target = process.env.target; // check target is [win, mac and lin]


  const common = () => {
    const beforeBuild = () => {
      require("rimraf").sync(pack);
    };
    const date = new Date();

    return {
      appId: "com.meslzy.name",
      productName: "helloWorld",
      copyright: `Copyright © ${date.getFullYear()} Meslzy`,

      npmRebuild: true,
      asar: true,
      electronCompile: false,

      directories: {
        buildResources: path.join(__dirname, "resources"),
        output: pack,
        app: root // path to pack.json
      },

      artifactName: "${productName} (${version}).${ext}",

      beforeBuild: beforeBuild,
    };
  }; // this is the common configuration
  const window = () => {
    return {
      win: {
        target: "nsis",
        compression: "maximum",
        icon: "meslzy.ico"
      },
      nsis: {
        oneClick: false,
        createDesktopShortcut: "always",
        allowToChangeInstallationDirectory: true,
        createStartMenuShortcut: true,
        deleteAppDataOnUninstall: true,
        displayLanguageSelector: true,
        installerIcon: "meslzy.ico",
        runAfterFinish: true,
      }
    };
  }; // this is the window configuration


  // return configuration base on target
  // Object.assign this will combine common and another object
  switch (target.trim()) {
    case "win":
      return Object.assign(common(), window());
    case "mac":
      console.log("sorry i did not do it, maybe you can do it ! ):");
  }
};

builder.build({
  config: config(),
}).then(() => {
  console.log("\nfinished without any errors, how lucky you are");
}).catch((error) => {
  console.error("error: ", error);
});