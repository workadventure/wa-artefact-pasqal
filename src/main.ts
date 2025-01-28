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

    WA.ui.actionBar.addButton({
        id: 'explore-btn',
        // @ts-ignore
        label: 'Event info',
        callback: () => {
            WA.nav.openCoWebSite("https://workadventure.github.io/embed-pages/src/pasqal/welcome.html");
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
