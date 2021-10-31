
//starting outside the door 
export default (locations = {

//Below are Davis Maps 
  Outside: {
    name: 'Outside',
    img: 'Outside.JPG',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 9.55,
        pitch: 0.01,
        goesTo: 'DavisDoor',
      },
    ],
  },
    
  DavisDoor: {
      name: 'DavisDoor',
      img: 'Test.JPG',
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 6.8,
          pitch: 0.01,
          text: 'Welcome to Davis Library! This is the largest library at Middlebury',
        },
        {
          width: 50,
          height: 50,
          yaw: 1.9, //goes left and right
          pitch: 0.01, //up and down 
          text: 'Enter Wilson Cafe',

        },
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 6.6,
          pitch: 0.01,
          goesTo: 'DavisLobby',
        },
        {
          width: 50,
          height: 50,
          yaw:-3.3,
          pitch: 0.01,
          goesTo: 'Outside',
        },
        {
          width: 50,
          height: 50,
          yaw: 1.7,
          pitch: 0.01,
          goesTo: 'WilsonCafe',
        },
      ],
    },
    
  WilsonCafe: {
      name: 'Wilson Cafe',
      img: 'WilsonCafe.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 0.8,
          pitch: 0.01,
          goesTo: 'DavisDoor',
        },
      ],
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 10,
          pitch: 0.01,
          text: 'Welcome to Wilson Cafe! This is a 24/7 study space with weekday retail coffee and bagel offerings',

        },
      ]
    },
    
  DavisLobby: {
      name: 'Davis Lobby',
      img: 'Lobby.JPG',
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 4,
          pitch: 0.01,
          text: 'This is the circulation where students come to find, check out library materials including books, cameras, and projectors! ',

        },
        {
          width: 50,
          height: 50,
          yaw: 7.8,
          pitch: -0.1,
          text: 'Here on display is a special collections temporary exhibit',

        },
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3,
          pitch: 0.01,
          goesTo: 'DavisDoor',
        },
        {
          width: 50,
          height: 50,
          yaw: 0.75,
          pitch: 0.01,
          goesTo: 'FromEntranceRight',
        },
        {
          width: 50,
          height: 50,
          yaw: 5.55,
          pitch: 0.01,
          goesTo: 'FromLobbyLeft',
        },
      ],
    },
   
  FromLobbyLeft: {
      name: 'From Lobby Left',
      img: 'FromLobbyLeft.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 2.6,
          pitch: 0.01,
          goesTo: 'DavisLobby', // go to upstairs
        },
        {
          width: 50,
          height: 50,
          yaw: 5.4,
          pitch: 0.01,
          goesTo: 'PrinterCorridorFirst', //go to printers 
        },
        {
          width: 50,
          height: 50,
          yaw: 0,
          pitch: 0.01,
          goesTo: 'DownLobbyLeft',
        },
        {
          width: 50,
          height: 50,
          yaw: 4.7,
          pitch: 0.01,
          goesTo: 'DavisLobby', //go up stairs 
        },
      ],
    },

  DownLobbyLeft: {
      name: 'Down Lobby Left',
      img: 'DownLobbyLeft.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.1,
          pitch: 0.01,
          goesTo: 'DownDownLobbyLeft', // go to upstairs
        },
        {
          width: 50,
          height: 50,
          yaw: 5.4,
          pitch: 0.01,
          goesTo: 'DownLobbyLeft', //go to printers 
        },
        {
          width: 50,
          height: 50,
          yaw: 0,
          pitch: 0.01,
          goesTo: 'LobbyRightIn',
        },
      ],
    },

  DownDownLobbyLeft: {
      name: 'Down Down Lobby Left',
      img: 'DownDownLobbyLeft.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 0,
          pitch: 0.01,
          goesTo: 'BackHallway', // go to upstairs
        },
        {
          width: 50,
          height: 50,
          yaw: 5.4,
          pitch: 0.01,
          goesTo: 'PrinterCorridorFirst', //go to printers 
        },
      ],
    },

  BackHallway: {
      name: 'BackHallway',
      img: 'BackHallway.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 0,
          pitch: 0.01,
          goesTo: 'CTLR', // go to upstairs
        },
        {
          width: 50,
          height: 50,
          yaw: 5.4,
          pitch: 0.01,
          goesTo: 'DownDownLobbyLeft', //go to printers 
        },
      ],
    },

  PrinterCorridorFirst: {
      name: 'Printer Corridor First Floor',
      img: 'PrinterCorridorFirst.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: -.2,
          pitch: 0.01,
          goesTo: 'FromLobbyLeft',
        },
        {
          width: 50,
          height: 50,
          yaw: 9.3,
          pitch: 0.01,
          goesTo: 'PastPrinterCorner',
        },
        {
          width: 50,
          height: 50,
          yaw: 4.3,
          pitch: 0.01,
          goesTo: 'PrintersFirstFloor',
        },
      ],
    },

  PastPrinterCorner: {
      name: 'PastPrinterCorner',
      img: 'PastPrinterCorner.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 4.5,
          pitch: 0.01,
          goesTo: 'InsideCarrellByPrinters',
        },
        {
          width: 50,
          height: 50,
          yaw: 9.1,
          pitch: 0.01,
          goesTo: 'PrinterCorridorFirst',
        },
        {
          width: 50,
          height: 50,
          yaw: 6.4,
          pitch: 0.01,
          goesTo: 'DownPrinterCorner',
        },
      ],
    },

  InsideCarrellByPrinters: {
      name: 'InsideCarrellByPrinters',
      img: 'InsideCarrellByPrinters.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.3,
          pitch: 0.01,
          goesTo: 'PastPrinterCorner',
        },
      ],
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 3.6,
          pitch: 0.01, 
          text: 'These carrels are where seniors culminate their studies into their thesis!',
        },
      ],
    },

  DownPrinterCorner: {
      name: 'DownPrinterCorner',
      img: 'DownPrinterCorner.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 6.4,
          pitch: 0.01,
          goesTo: 'FirstFloorLeftCorner',
        },
        {
          width: 50,
          height: 50,
          yaw: 9.3,
          pitch: 0.01,
          goesTo: 'PastPrinterCorner',
        },
      ],
    },

  FirstFloorLeftCorner: {
      name: 'FirstFloorLeftCorner',
      img: 'FirstFloorLeftCorner.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: -1.2,
          pitch: 0.01,
          goesTo: '',//go to elevator
        },
        {
          width: 50,
          height: 50,
          yaw: 7.4,
          pitch: 0.01,
          goesTo: 'BackHallway',
        },
        {
          width: 50,
          height: 50,
          yaw: 9,
          pitch: 0.01,
          goesTo: 'DownPrinterCorner', 
        },
      ],
    },

  BackHallway: {
      name: 'BackHallway',
      img: 'BackHallway.JPG',
      transitions: [
        
        {
          width: 50,
          height: 50,
          yaw: 7.35,
          pitch: 0.01,
          goesTo: 'FirstFloorLeftCorner',
        },
        {
          width: 50,
          height: 50,
          yaw: 9.9,
          pitch: 0.01,
          goesTo: 'CTLR'//CTLR, 
        },
        {
          width: 50,
          height: 50,
          yaw: 7.75,
          pitch: 0.01,
          goesTo: ''//take the stairs up
        },
      ],
    },

  PrintersFirstFloor: {
      name: 'Printer First Floor',
      img: 'PrintersFirstFloor.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 1,
          pitch: 0.01,
          goesTo: 'PrinterCorridorFirst',
        },
      ],
    },

  FromEntranceRight: {
      name: 'From Entrance Lobby',
      img: 'FromEntranceRight.JPG',
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 8,
          pitch: 0.01,
          text: 'This is the Technology Help Desk! Students come here for both hardware and software help.',

        },
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 2.8,
          pitch: 0.01,
          goesTo: 'RightStairs', //up from main stairs 
        },
        {
          width: 50,
          height: 50,
          yaw: 1.1,
          pitch: 0.01,
          goesTo: 'FromEntranceRight', //needs to go upstairs from help desk
        },
        {
          width: 50,
          height: 50,
          yaw: 0.2,
          pitch: 0.01,
          goesTo: 'LobbyRightIn',
        },
        {
          width: 50,
          height: 50,
          yaw: 4.1,
          pitch: 0.01,
          goesTo: 'DavisLobby',
        },
      ],
    },

  LobbyRightIn: {
      name: 'Lobby Right to Lobby In',
      img: 'LobbyRightIn.JPG',
      tooltips: [
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.3,
          pitch: 0.01,
          goesTo: 'DavisDoor', 
        },
        {
          width: 50,
          height: 50,
          yaw: 1.1,
          pitch: 0.01,
          goesTo: 'FromEntranceRight',
        },
        {
          width: 50,
          height: 50,
          yaw: 0.2,
          pitch: 0.01,
          goesTo: 'OutsideWilson', //make this go to the other side 
        },
        {
          width: 50,
          height: 50,
          yaw: 4.6,
          pitch: 0.01,
          goesTo: 'DavisLobby',
        },
      ],
    },

  RightStairs: {
      name: 'RightStairs',
      img: 'RightStairs.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 4.3,
          pitch: 0.01,
          goesTo: 'UpstairsLobby', //keep going up
        },
        {
          width: 50,
          height: 50,
          yaw: 0.75,
          pitch: -0.7,
          goesTo: 'FromEntranceRight', 
        },
      ],
    },

    UpstairsLobby: {
      name: 'UpstairsLobby',
      img: 'UpstairsLobby.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 4.2,
          pitch: 0.01,
          goesTo: 'UpstairsLobby', //go right
        },
        {
          width: 50,
          height: 50,
          yaw: 5.25,
          pitch: 0.01,
          goesTo: 'FromEntranceRight', //go outside 
        },
      ],
    },  

  OutsideWilson: {
      name: 'Outside Wilson',
      img: 'OutsideWilsonMedia.JPG',
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 8,
          pitch: 0.01,
          text: 'This the Wilson Media Lab - This lab provides a collaborative workspace and a variety of digitization equipment. Sometimes classes and workshops would take place here..',

        },
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.3,
          pitch: 0.01,
          goesTo: 'LobbyRightIn',
        },
        {
          width: 50,
          height: 50,
          yaw: 1.1,
          pitch: 0.01,
          goesTo: 'WilsonMediaLab', //don't have pictures yet 
        },
        {
          width: 50,
          height: 50,
          yaw: -0.1,
          pitch: 0.01,
          goesTo: 'CTLR',
        },
      ],
    },

  WilsonMediaLab: {
      name: 'WilsonMediaLab',
      img: 'WilsonMediaLab.JPG',
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.15,
          pitch: 0.01,
          goesTo: 'OutsideWilson',
        },
      ],
    },  
   
  CTLR: {
      name: 'CTLR',
      img: 'CTLR.JPG',
      tooltips: [
        {
          width: 50,
          height: 50,
          yaw: 7.8,
          pitch: 0.01,
          text: 'This academic center supports faculty and students with tutoring, research advising, inclusivity initiatives and more!',
        },
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 3.5,
          pitch: 0.01,
          goesTo: 'OutsideWilson',
        },
        {
          width: 50,
          height: 50,
          yaw: 6.0,
          pitch: 0.01,
          goesTo: 'BackHallway',
        },
      ],
    },
  });