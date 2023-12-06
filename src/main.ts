/// <reference types="@workadventure/iframe-api-typings" />
import { Popup } from "@workadventure/iframe-api-typings";
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

import "./help/button";
import "./speaker/access";

console.log('Script started successfully');

let popupPrivateOffice1: Popup|null;
let popupPrivateOffice2: Popup|null;
let popupPrivateOffice3: Popup|null;
//let popupPrivateOffice4: Popup|null;
//let popupPrivateOffice5: Popup|null;
let popupStand: Popup|null;
let link: any;

// Waiting for the API to be ready
WA.onInit().then(() => {

    /*
    WA.room.area.onEnter("zone_work4").subscribe(() => {
        if(popupPrivateOffice4) return;
        if(!WA.state.work4) {
            popupPrivateOffice4 = WA.ui.openPopup("popup_work4", "Le workshop est déjà en cours, consultez le programme pour connaître l'horaire de la prochaine session. À tout à l'heure !", [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work4; 
                    WA.nav.openCoWebSite(link);
                    popupPrivateOffice4?.close();
                    popupPrivateOffice4 = null;
                }
            }]);
        }
    });
    WA.room.area.onEnter("zone_work5").subscribe(() => {
        if(popupPrivateOffice5) return;
        if(!WA.state.work5) {
            popupPrivateOffice5 = WA.ui.openPopup("popup_work5", "Le workshop est déjà en cours, consultez le programme pour connaître l'horaire de la prochaine session. À tout à l'heure !", [{
            label: "Ouvrir le programme",
            className: "primary",
            callback: () => {
                    link = WA.state.lnk_popup_work5; 
                    WA.nav.openCoWebSite(link);
                    popupPrivateOffice5?.close();
                    popupPrivateOffice5 = null;
                }
            }]);
        }
    });
    */

    /*
    WA.room.area.onLeave("zone_work4").subscribe(() => {
        popupPrivateOffice4?.close();
        popupPrivateOffice4 = null;
    });
    WA.room.area.onLeave("zone_work5").subscribe(() => {
        popupPrivateOffice5?.close();
        popupPrivateOffice5 = null;
    });

    WA.room.area.onEnter("zone_intro_stand4").subscribe(() => {
        if(popupStand) return;
        popupStand = WA.ui.openPopup("popup_stand4", WA.state.txt_popup_stand4 as string, [{
        label: "Fermer",
        className: "primary",
        callback: () => {
                popupStand?.close();
                popupStand = null;
            }
        }]);
    });
    WA.room.area.onLeave("zone_intro_stand4").subscribe(() => {
        popupStand?.close();
        popupStand = null;
    });
*/


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    // Detect if the browser if Firefox. If yet, open a popup to recommend using Chrome.
/*    if (navigator.userAgent.indexOf("Firefox") != -1) {
        WA.ui.openPopup("popup_firefox", "Pour une meilleure expérience, nous vous recommandons d'utiliser Chrome. Merci !", [{
            label: "Fechar",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    }
*/
}).catch(e => console.error(e));


export {};
