/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer("roofZone").subscribe(() => {
        WA.room.hideLayer('Roof1');
        WA.room.hideLayer('Roof2');
    });

    WA.room.onLeaveLayer("roofZone").subscribe(() => {
        WA.room.showLayer('Roof1');
        WA.room.showLayer('Roof2');
    });
    WA.room.onEnterLayer("silent").subscribe(() => {
        WA.room.showLayer('silentRoof');
    });

    WA.room.onLeaveLayer("silent").subscribe(() => {
        WA.room.hideLayer('silentRoof');
    });

    let ressourcesUrl: any;
    if(WA.player.tags.includes("room1")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1CDLSMttrmndpWNLSky7pFvGeTflR5yLp?usp=drive_link";
    } else if (WA.player.tags.includes("room2")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1937ac3i5jZsPISRolIJuWt3-31s1x1pH?usp=drive_link";
    } else if (WA.player.tags.includes("room3")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1s65iaJEptQyCEl-mf9vUh8xQuYH91J9n?usp=drive_link";
    } else if (WA.player.tags.includes("room4")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1t_ocFUi-F8aIyJAH5F2JiHOn2MC_dvvZ?usp=drive_link";
    } else if (WA.player.tags.includes("room5")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1zVUnAdlHFvChsI69dvXiLu8k8SY8Zlwp?usp=drive_link";
    } else if (WA.player.tags.includes("room6")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1Bm32-5zUX2jqYosLZv6KzRdqL1xZa2gv?usp=drive_link";
    } else if (WA.player.tags.includes("room7")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/17dXMnrooA1c99SN0hcYORNMdHEB_K55T?usp=drive_link";
    } else if (WA.player.tags.includes("room8")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1OkBsinwvNWJtg7nnSAZ4EJ3KFkjdmB7F?usp=drive_link";
    } else if (WA.player.tags.includes("room9")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/14sDTehs-_Tjzh7dO1A_YYKlnkaiGAHzd?usp=drive_link";
    } else if (WA.player.tags.includes("room10")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1AI85Rc0F5SMRY_T2NQUXV9kQy22Rbzl7?usp=drive_link";
    } else if (WA.player.tags.includes("room11")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1bvw5m6WCwzVfYAXgyFqF7stp5IhVB3Cr?usp=drive_link";
    } else if (WA.player.tags.includes("room12")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/10GJl9QJ73wr1jp0irPzn4bulh_vUMU-3?usp=drive_link";
    } else if (WA.player.tags.includes("room13")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1zgWxsDV3SHGJNHeIFlp7nsr-GfNHpp3W?usp=drive_link";
    } else if (WA.player.tags.includes("room14")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1BJxMu1A434jx8Jws2RNy6fDq1mWKRxCD?usp=drive_link";
    } else if (WA.player.tags.includes("room15")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1XWV9m0RSM-oOUFp3ZN0-DdbMpZgeeqDZ?usp=drive_link";
    } else if (WA.player.tags.includes("admin")) {
        ressourcesUrl = "https://drive.google.com/drive/folders/1b7-l8iWaZlQFkuqwATrP9SFlkqFVv8HC?usp=drive_link";
    }

    WA.ui.actionBar.addButton({
        id: 'help-btn',
        // @ts-ignore
        label: 'Help',
        callback: () => {
            WA.nav.openCoWebSite("https://workadventure.github.io/embed-pages/src/pasqal/welcome.html");
        }
    });

    WA.ui.actionBar.addButton({
        id: 'workspace',
        // @ts-ignore
        label: 'Ressources',
        toolTip: 'Access to your project directory',
        callback: () => {
            WA.nav.openTab(ressourcesUrl as string);
        }
    });
    let helpZone: any;
    WA.room.area.onEnter('helpZoneLeft').subscribe(() => {
        helpZone = WA.ui.displayActionMessage({
            message: "<div style='text-align:center;'>Press <svg width='20' height='10' viewBox='0 0 20 10' style='margin-right: 2px; margin-left: 2px; fill: white; border-radius: 2px; border: 1px solid white; padding: 2px; box-sizing: border-box; background-color: white;'><text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' style='font-size: 10px; fill: black; font-weight: bold;'>SPACE</text></svg> to get help</div>",
            callback: () => {
                WA.ui.modal.closeModal();
                WA.ui.modal.openModal({
                    src: "https://workadventure.github.io/embed-pages/src/pasqal/welcome.html",
                    allow: 'fullscreen',
                    title: 'Bienvenue',
                    allowApi: true,
                    position: 'right',
                });
            }
        }); 
    })
    WA.room.area.onLeave('helpZoneLeft').subscribe(() => {
        helpZone.remove();
    })
    WA.room.area.onEnter('helpZoneRight').subscribe(() => {
        helpZone = WA.ui.displayActionMessage({
            message: "<div style='text-align:center;'>Press <svg width='20' height='10' viewBox='0 0 20 10' style='margin-right: 2px; margin-left: 2px; fill: white; border-radius: 2px; border: 1px solid white; padding: 2px; box-sizing: border-box; background-color: white;'><text x='50%' y='50%' text-anchor='middle' dominant-baseline='middle' style='font-size: 10px; fill: black; font-weight: bold;'>SPACE</text></svg> to get help</div>",
            callback: () => {
                WA.ui.modal.closeModal();
                WA.ui.modal.openModal({
                    src: "https://workadventure.github.io/embed-pages/src/pasqal/welcome.html",
                    allow: 'fullscreen',
                    title: 'Bienvenue',
                    allowApi: true,
                    position: 'right',
                });
            }
        }); 
    })
    WA.room.area.onLeave('helpZoneRight').subscribe(() => {
        helpZone.remove();
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
