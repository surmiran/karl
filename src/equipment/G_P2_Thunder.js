export default {
    selected: false,
    name: '"Thunderhead" Heavy Autocannon',
    class: "Heavy Weapon",
    icon: "equipment.G_P2_Thunder",
    baseStats: {
        dmg: { name: "Damage", value: 14 },
        ammo: { name: "Max Ammo", value: 440 },
        clip: { name: "Clip Size", value: 110 },
        rate: { name: "Rate of Fire", value: 1 },
        reload: { name: "Reload Time", value: 5 },
        ex1: { name: "Area Damage", value: 8 },
        ex2: { name: "Damage Radius", value: 1 },
        ex3: { name: "Reduced Spread", value: 0, percent: true },
        ex4: { name: "Lighter Barrel Assembly", value: 0, percent: true },
        ex5: { name: "Armor Break Bonus", value: 0, percent: true },
        ex6: { name: "Stun Chance", value: 0, percent: true },
        ex7: { name: "Damage when at maximum fire rate", value: 0, percent: true },
        ex8: { name: "AoE Fear", value: 0 },
        ex9: { name: "Damage resistance when at maximum fire rate", value: 0, percent: true }
    },
    mods: [
        [
            {
                selected: false,
                name: "Increased Caliber Rounds",
                icon: "Icon_Upgrade_DamageGeneral",
                type: "Damage",
                text: "The good folk in R&D have been busy. The overall damage of your weapon is increased. ",
                stats: {
                    dmg: { name: "Damage", value: 3 },

                },
                cost: {
                    credits: 1200,
                    bismor: 25,
                    croppa: 0,
                    enorPearl: 0,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Quickfire Ejector",
                icon: "Icon_Upgrade_Speed",
                type: "Speed",
                text: 'Experience, training, and a couple of under-the-table design "adjustments" means your gun can be reloaded significantly faster. ',
                stats: {
                    reload: { name: "Reload Time", value: 1, subtract: true },

                },
                cost: {
                    credits: 1200,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 25,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Expanded Ammo Bags",
                icon: "Icon_Upgrade_Ammo",
                type: "Ammo",
                text: "You had to give up some sandwich-space, but your total ammo capacity is increased! ",
                stats: {
                    ammo: { name: "Max Ammo", value: 220 },

                },
                cost: {
                    credits: 1200,
                    bismor: 0,
                    croppa: 25,
                    enorPearl: 0,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            }
        ],
        [
            {
                selected: false,
                name: "Tighter Barrel Alignment",
                icon: "Icon_Upgrade_Aim",
                type: "Aim",
                text: "Improved accuracy ",
                stats: {
                    ex3: { name: "Reduced Spread", value: 25, percent: true },

                },
                cost: {
                    credits: 2000,
                    bismor: 0,
                    croppa: 24,
                    enorPearl: 15,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Improved Gas System",
                icon: "Icon_Upgrade_FireRate",
                type: "Fire Rate",
                text: "We overclocked your gun. It fires faster. Don't ask, just enjoy. Also probably don't tell Management, please. ",
                stats: {

                    rate: { name: "Rate of Fire", value: 0.15 },
                },
                cost: {
                    credits: 2000,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 15,
                    jadiz: 24,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Lighter Barrel Assembly",
                icon: "Icon_Upgrade_FireFate",
                type: "Fire Rate",
                text: "Reach the max rate of fire faster ",
                stats: {
                    ex4: { name: "Lighter Barrel Assembly", value: 20, percent: true, subtract: true },

                },
                cost: {
                    credits: 2000,
                    bismor: 15,
                    croppa: 0,
                    enorPearl: 24,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            }
        ],
        [
            {
                selected: false,
                name: "Supercharged Feed Mechanism",
                icon: "Icon_Upgrade_FireRate",
                type: "Fire Rate",
                text: "We overclocked your gun. It fires faster. Don't ask, just enjoy. Also probably don't tell Management, please. ",
                stats: {

                    rate: { name: "Rate of Fire", value: 0.35 },
                },
                cost: {
                    credits: 2800,
                    bismor: 0,
                    croppa: 50,
                    enorPearl: 0,
                    jadiz: 25,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Loaded Rounds",
                icon: "Icon_Upgrade_Flare_01",
                type: "Splash",
                text: "Increased splash damage ",
                stats: {
                    ex1: { name: "Area Damage", value: 2 },

                },
                cost: {
                    credits: 2000,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 0,
                    jadiz: 0,
                    magnite: 35,
                    umanite: 50,
                    err: 0
                }
            },
            {
                selected: false,
                name: "High Velocity Rounds",
                icon: "Icon_Upgrade_DamageGeneral",
                type: "Damage",
                text: "The good folk in R&D have been busy. The overall damage of your weapon is increased. ",
                stats: {
                    dmg: { name: "Damage", value: 4 },

                },
                cost: {
                    credits: 2800,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 35,
                    jadiz: 0,
                    magnite: 50,
                    umanite: 0,
                    err: 0
                }
            }
        ],
        [
            {
                selected: false,
                name: "Penerating Rounds",
                icon: "Icon_Upgrade_ArmorBreaking",
                type: "Armor Breaking",
                text: "We're proud of this one. Armor shredding. Tear through that high-impact plating of those bug buggers like butter. What could be finer? ",
                stats: {
                    ex5: { name: "Armor Break Bonus", value: 400, percent: true },

                },
                cost: {
                    credits: 4800,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 50,
                    jadiz: 72,
                    magnite: 48,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Stun",
                icon: "Icon_Upgrade_Stun",
                type: "Stun",
                text: "Hit 'em so hard they can't recover! Every shot you fire has a chance to stop the target in its tracks. ",
                stats: {
                    ex6: { name: "Stun Chance", value: 20, percent: true },

                },
                cost: {
                    credits: 4800,
                    bismor: 72,
                    croppa: 48,
                    enorPearl: 50,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Shrapnel Rounds ",
                icon: "Icon_Upgrade_Area",
                type: "Area",
                text: "Greater splash damage radius ",
                stats: {
                    ex2: { name: "Damage Radius", value: 0.5 },

                },
                cost: {
                    credits: 4800,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 0,
                    jadiz: 72,
                    magnite: 50,
                    umanite: 48,
                    err: 0
                }
            }
        ],
        [
            {
                selected: false,
                name: "Feedback Loop",
                icon: "Icon_Upgrade_DamageGeneral",
                type: "Damage",
                text: "Increased damage when at max rate of fire ",
                stats: {
                    ex7: { name: "Damage when at maximum fire rate", value: 20, percent: true },

                },
                cost: {
                    credits: 5600,
                    bismor: 70,
                    croppa: 140,
                    enorPearl: 0,
                    jadiz: 0,
                    magnite: 64,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Suppressive Fire",
                icon: "Icon_Upgrade_ScareEnemies",
                type: "Fear",
                text: "Chance to scare enemies next to a bullet impact ",
                stats: {
                    ex8: { name: "AoE Fear", value: 1 },

                },
                cost: {
                    credits: 5600,
                    bismor: 70,
                    croppa: 0,
                    enorPearl: 0,
                    jadiz: 0,
                    magnite: 64,
                    umanite: 140,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Resistance At Full Rate Of Fire ",
                icon: "Icon_Upgrade_Resistance",
                type: "Resistance",
                text: "Gain damage reduction when at max rate of fire ",
                stats: {
                    ex9: { name: "Damage resistance when at maximum fire rate", value: 20, percent: true }
                },
                cost: {
                    credits: 0,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 0,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            }
        ]
    ]
};

