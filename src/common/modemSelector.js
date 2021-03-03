// constmodemSelector = (room) => {
//   totalsurfarea = 0;
//   trasivers = 0;
//   room.surfaces.forEach((surf) => {
//     totalsurfarea += surf.area; //area for this surf
//     trasivers += surf.trasivers.length;
//   });
//   if (trasivers < 7) room.modem = 60001;
//   else {
//     showmessage("Room needs 60002 model as trasivers are exeeding 6");
//     room.modem = 60002;
//   }
// };

// calcWith60001 = (e) => {
//   //add the Surfaces
//   let currentModem = 60001;
//   constmodemSelector(room);
//   if (currentModem !== room.modem) {
//     calcWith60002(e);
//   }
// };

// calcWith60002 = (e) => {};
