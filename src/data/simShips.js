const ships = [
  {
    id: "corvette",
    name: "Corvette Crocus",
    class: "Corvette",
    structure: 6,
    armor: 8,
    shield: 10,
    rocket: 2,
    bullet: 0,
    laser: 0
  },
  {
    id: "frigate",
    name: "Frigate Quorn",
    class: "Frigate",
    structure: 12,
    armor: 16,
    shield: 8,
    rocket: 3,
    bullet: 0,
    laser: 0
  },
  {
    id: "destroyer",
    name: "Destroyer Rocket",
    class: "Destroyer",
    structure: 12,
    armor: 14,
    shield: 16,
    rocket: 4,
    bullet: 0,
    laser: 0
  },
  {
    id: "cruiser",
    name: "Cruiser Kent",
    class: "Cruiser",
    structure: 15,
    armor: 25,
    shield: 20,
    rocket: 5,
    bullet: 0,
    laser: 0
  },
  {
    id: "battlecruiser",
    name: "Battlecruiser Tiger",
    class: "Battlecruiser",
    structure: 40,
    armor: 20,
    shield: 36,
    rocket: 8,
    bullet: 0,
    laser: 0
  },
  {
    id: "carrier",
    name: "Carrier Argus",
    class: "Carrier",
    structure: 60,
    armor: 100,
    shield: 80,
    rocket: 20,
    bullet: 0,
    laser: 0
  },
  {
    id: "dreadnought",
    name: "Dreadnought Royal",
    class: "Dreadnought",
    structure: 200,
    armor: 240,
    shield: 160,
    rocket: 50,
    bullet: 0,
    laser: 0
  },
  {
    id: "tansporter",
    name: "Transporter",
    class: "Civil",
    structure: 80,
    armor: 20,
    shield: 20,
    rocket: 0,
    bullet: 0,
    laser: 0
  },
  // Bullet with Shield
  {
    id: "corvette1",
    name: "Corvette Petunia",
    class: "Corvette",
    structure: 6,
    armor: 8,
    shield: 10,
    rocket: 0,
    bullet: 2,
    laser: 0
  },
  {
    id: "frigate1",
    name: "Frigate Redmill",
    class: "Frigate",
    structure: 12,
    armor: 16,
    shield: 8,
    rocket: 0,
    bullet: 3,
    laser: 0
  },
  {
    id: "destroyer1",
    name: "Destroyer Janus",
    class: "Destroyer",
    structure: 12,
    armor: 14,
    shield: 16,
    rocket: 0,
    bullet: 4,
    laser: 0
  },
  {
    id: "cruiser1",
    name: "Cruiser Drake",
    class: "Cruiser",
    structure: 15,
    armor: 25,
    shield: 20,
    rocket: 0,
    bullet: 5,
    laser: 0
  },
  {
    id: "battlecruiser1",
    name: "Battlecruiser Lion",
    class: "Battlecruiser",
    structure: 40,
    armor: 20,
    shield: 36,
    rocket: 0,
    bullet: 8,
    laser: 0
  },
  {
    id: "carrier1",
    name: "Carrier Unicorn",
    class: "Carrier",
    structure: 60,
    armor: 100,
    shield: 80,
    rocket: 0,
    bullet: 20,
    laser: 0
  },
  {
    id: "dreadnought1",
    name: "Dreadnought Imperial",
    class: "Dreadnought",
    structure: 200,
    armor: 240,
    shield: 160,
    rocket: 0,
    bullet: 50,
    laser: 0
  },
  // Laser with Armor
  {
    id: "corvette2",
    name: "Corvette Pimpernel",
    class: "Corvette",
    structure: 6,
    armor: 8,
    shield: 10,
    rocket: 0,
    bullet: 0,
    laser: 2
  },
  {
    id: "frigate2",
    name: "Frigate Lasalle",
    class: "Frigate",
    structure: 12,
    armor: 16,
    shield: 8,
    rocket: 0,
    bullet: 0,
    laser: 3
  },
  {
    id: "destroyer2",
    name: "Destroyer Banshee",
    class: "Destroyer",
    structure: 12,
    armor: 14,
    shield: 16,
    rocket: 0,
    bullet: 0,
    laser: 4
  },
  {
    id: "cruiser2",
    name: "Cruiser Hogue",
    class: "Cruiser",
    structure: 15,
    armor: 25,
    shield: 20,
    rocket: 0,
    bullet: 0,
    laser: 5
  },
  {
    id: "battlecruiser2",
    name: "Battlecruiser Leopard",
    class: "Battlecruiser",
    structure: 40,
    armor: 20,
    shield: 36,
    rocket: 0,
    bullet: 0,
    laser: 8
  },
  {
    id: "carrier2",
    name: "Carrier Centaur",
    class: "Carrier",
    structure: 60,
    armor: 100,
    shield: 80,
    rocket: 0,
    bullet: 0,
    laser: 20
  },
  {
    id: "dreadnought2",
    name: "Dreadnought Galactic",
    class: "Dreadnought",
    structure: 200,
    armor: 240,
    shield: 160,
    rocket: 0,
    bullet: 0,
    laser: 50
  },
  {
    id: "explorer",
    name: "Explorer",
    class: "Civil",
    structure: 80,
    armor: 20,
    shield: 20,
    rocket: 0,
    bullet: 0,
    laser: 0
  },
  {
    id: "explorer1",
    name: "Explorer II",
    class: "Civil",
    structure: 45,
    armor: 0,
    shield: 0,
    rocket: 0,
    bullet: 0,
    laser: 0
  },
  {
    id: "transporter1",
    name: "Transporter II",
    class: "Civil",
    structure: 25,
    armor: 0,
    shield: 0,
    rocket: 0,
    bullet: 0,
    laser: 0
  },
  {
    id: "transporter2",
    name: "Transporter III",
    class: "Civil",
    structure: 50,
    armor: 0,
    shield: 0,
    rocket: 0,
    bullet: 0,
    laser: 0
  },
  {
    id: "wonder0",
    name: "Wondership",
    class: "Wonder",
    structure: 32,
    armor: 32,
    shield: 32,
    rocket: 3,
    bullet: 3,
    laser: 3
  },
  {
    id: "wonder1",
    name: "Wondership 1",
    class: "Wonder",
    structure: 40,
    armor: 40,
    shield: 40,
    rocket: 4,
    bullet: 4,
    laser: 4
  },
  {
    id: "wonder2",
    name: "Wondership 2",
    class: "Wonder",
    structure: 80,
    armor: 80,
    shield: 80,
    rocket: 6,
    bullet: 6,
    laser: 6
  },
  {
    id: "wonder3",
    name: "Wondership 3",
    class: "Wonder",
    structure: 100,
    armor: 100,
    shield: 100,
    rocket: 8,
    bullet: 8,
    laser: 8
  },
  {
    id: "wonder4",
    name: "Wondership 4",
    class: "Wonder",
    structure: 110,
    armor: 110,
    shield: 110,
    rocket: 10,
    bullet: 10,
    laser: 10
  },
  {
    id: "wonder5",
    name: "Wondership 5",
    class: "Wonder",
    structure: 150,
    armor: 150,
    shield: 150,
    rocket: 12,
    bullet: 12,
    laser: 12
  },
  {
    id: "wonder6",
    name: "Wondership 6",
    class: "Wonder",
    structure: 168,
    armor: 168,
    shield: 168,
    rocket: 14,
    bullet: 14,
    laser: 14
  },
  {
    id: "wonder7",
    name: "Wondership 7",
    class: "Wonder",
    structure: 200,
    armor: 200,
    shield: 200,
    rocket: 16,
    bullet: 16,
    laser: 16
  },
  {
    id: "wonder8",
    name: "Wondership 8",
    class: "Wonder",
    structure: 240,
    armor: 240,
    shield: 240,
    rocket: 19,
    bullet: 19,
    laser: 19
  },
  {
    id: "wonder9",
    name: "Wondership 9",
    class: "Wonder",
    structure: 290,
    armor: 290,
    shield: 290,
    rocket: 24,
    bullet: 24,
    laser: 24
  },
  {
    id: "wonder10",
    name: "Wondership 10",
    class: "Wonder",
    structure: 350,
    armor: 350,
    shield: 350,
    rocket: 29,
    bullet: 29,
    laser: 29
  },
  {
    id: "wonder11",
    name: "Wondership 11",
    class: "Wonder",
    structure: 440,
    armor: 440,
    shield: 440,
    rocket: 36,
    bullet: 36,
    laser: 36
  },
  {
    id: "wonder12",
    name: "Wondership 12",
    class: "Wonder",
    structure: 530,
    armor: 530,
    shield: 530,
    rocket: 44,
    bullet: 44,
    laser: 44
  },
  {
    id: "wonder13",
    name: "Wondership 13",
    class: "Wonder",
    structure: 700,
    armor: 700,
    shield: 700,
    rocket: 58,
    bullet: 58,
    laser: 58
  },
  {
    id: "wonder14",
    name: "Wondership 14",
    class: "Wonder",
    structure: 880,
    armor: 880,
    shield: 880,
    rocket: 73,
    bullet: 73,
    laser: 73
  },
  {
    id: "wonder15",
    name: "Wondership 15",
    class: "Wonder",
    structure: 1100,
    armor: 1100,
    shield: 1100,
    rocket: 92,
    bullet: 92,
    laser: 92
  },
  {
    id: "wonder16",
    name: "Wondership 16",
    class: "Wonder",
    structure: 1400,
    armor: 1400,
    shield: 1400,
    rocket: 115,
    bullet: 115,
    laser: 115
  },
  {
    id: "wonder17",
    name: "Wondership 17",
    class: "Wonder",
    structure: 1650,
    armor: 1650,
    shield: 1650,
    rocket: 138,
    bullet: 138,
    laser: 138
  },
  {
    id: "wonder18",
    name: "Wondership 18",
    class: "Wonder",
    structure: 2000,
    armor: 2000,
    shield: 2000,
    rocket: 168,
    bullet: 168,
    laser: 168
  },
  {
    id: "wonder19",
    name: "Wondership 19",
    class: "Wonder",
    structure: 2400,
    armor: 2400,
    shield: 2400,
    rocket: 200,
    bullet: 200,
    laser: 200
  },
  {
    id: "wonder20",
    name: "Wondership 20",
    class: "Wonder",
    structure: 3000,
    armor: 3000,
    shield: 3000,
    rocket: 250,
    bullet: 250,
    laser: 250
  },
  {
    id: "end",
    name: "end",
    class: "end",
    structure: 0,
    armor: 0,
    shield: 0,
    rocket: 0,
    bullet: 0,
    laser: 0,
    defense: 0
  }
];

export default ships;
