export default {
    selected: false,
    name: "BRT7 Burst Fire Gun",
    class: "Pistol",
    icon: "equipment.G_S2_Burst",
    baseStats: {
        dmg: { name: "Damage", value: 13 },
        ammo: { name: "Max Ammo", value: 144 },
        clip: { name: "Clip Size", value: 18 },
        rate: { name: "Rate of Fire", value: 5 },
        reload: { name: "Reload Time", value: 2.2 },
        ex1: { name: "Burst Size", value: 3 },
        ex2: { name: "Burst Speed", value: 0.05 },
        ex3: { name: "Increased Stability ", value: 0, binary: true },
        ex4: { name: "Reduced Recoil ", value: 0, binary: true },
        ex5: { name: "Armor Break Bonus ", value: 0, percent: true },
        ex6: { name: "Weakspot Damage Bonus", value: 0, percent: true },
        ex7: { name: "Burst Damage", value: 0 },
        ex8: { name: "Burst Stun Duration", value: 0 }
    },
    mods: [
        [
            {
                selected: false,
                name: "High Velocity Rounds",
                icon: "Icon_Upgrade_DamageGeneral",
                type: "Damage",
                text: "The good folk in R&D have been busy. The overall damage of your weapon is increased. ",
                stats: {
                    dmg: { name: "Damage", value: 2 },

                },
                cost: {
                    credits: 1000,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 20,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Disabled Safety",
                icon: "Icon_Upgrade_FireRate",
                type: "Fire Rate",
                text: "Shorter Delay between bursts ",
                stats: {
                    rate: { name: "Rate of Fire", value: 5 },

                },
                cost: {
                    credits: 1000,
                    bismor: 20,
                    croppa: 0,
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
                name: "Floating Barrel",
                icon: "Icon_Upgrade_Aim",
                type: "Aim",
                text: "Sweet, sweet optimization. We called in a few friends and managed to significantly improve the stability of this gun. ",
                stats: {
                    ex3: { name: "Increased Stability ", value: 1, binary: true },
                },
                cost: {
                    credits: 1800,
                    bismor: 0,
                    croppa: 18,
                    enorPearl: 0,
                    jadiz: 12,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Recoil Dampener",
                icon: "Icon_Upgrade_Recoil",
                type: "Recoil",
                text: "Quality engineering, the best laser cut parts, the tender loving care of a dedicated R&D Department. The recoil of your gun is drastically reduced. ",
                stats: {
                    ex4: { name: "Reduced Recoil ", value: 1, binary: true },

                },
                cost: {
                    credits: 1800,
                    bismor: 18,
                    croppa: 0,
                    enorPearl: 12,
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
                    reload: { name: "Reload Time", value: 0.5, subtract: true },

                },
                cost: {
                    credits: 1800,
                    bismor: 0,
                    croppa: 12,
                    enorPearl: 0,
                    jadiz: 18,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            }
        ],
        [
            {
                selected: false,
                name: "High Capacity Magazine",
                icon: "Icon_Upgrade_ClipSize",
                type: "Clip Size",
                text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants. ",
                stats: {
                    clip: { name: "Clip Size", value: 6 },

                },
                cost: {
                    credits: 2200,
                    bismor: 0,
                    croppa: 20,
                    enorPearl: 0,
                    jadiz: 30,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Increased Caliber Rounds",
                icon: "Icon_Upgrade_DamageGeneral",
                type: "Damage",
                text: "The good folk in R&D have been busy. The overall damage of your weapon is increased. ",
                stats: {
                    dmg: { name: "Damage", value: 4 },

                },
                cost: {
                    credits: 2200,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 20,
                    jadiz: 0,
                    magnite: 30,
                    umanite: 0,
                    err: 0
                }
            }
        ],
        [
            {
                selected: false,
                name: "Penetrating Rounds",
                icon: "Icon_Upgrade_ArmorBreaking",
                type: "Armor Breaking",
                text: "We're proud of this one. Armor shredding. Tear through that high-impact plating of those big buggers like butter. What could be finer? ",
                stats: {
                    ex5: { name: "Armor Break Bonus ", value: 200, percent: true },

                },
                cost: {
                    credits: 3800,
                    bismor: 36,
                    croppa: 0,
                    enorPearl: 0,
                    jadiz: 15,
                    magnite: 25,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Expanded Ammo Bags",
                icon: "Icon_Upgrade_Ammo",
                type: "Ammo",
                text: "You had to give up some sandwich-storage, but your total ammo capacity is increased! ",
                stats: {
                    ammo: { name: "Max Ammo", value: 72 },

                },
                cost: {
                    credits: 3800,
                    bismor: 0,
                    croppa: 25,
                    enorPearl: 15,
                    jadiz: 0,
                    magnite: 0,
                    umanite: 36,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Hollow-Point Bullets",
                icon: "Icon_Upgrade_Weakspot",
                type: "Weakspot",
                text: "Hit 'em where it hurts! Literally! We've upped the damage you'll be able to do to any creatures fleshy bits. You're welcome. ",
                stats: {
                    ex6: { name: "Weakspot Damage Bonus", value: 50, percent: true },

                },
                cost: {
                    credits: 3800,
                    bismor: 0,
                    croppa: 0,
                    enorPearl: 36,
                    jadiz: 26,
                    magnite: 15,
                    umanite: 0,
                    err: 0
                }
            }
        ],
        [
            {
                selected: false,
                name: "Burst Damage",
                icon: "Icon_Upgrade_DamageGeneral",
                type: "Damage",
                text: "Damage bonus on last bullet if the first two hit ",
                stats: {
                    ex7: { name: "Burst Damage", value: 20 },

                },
                cost: {
                    credits: 4400,
                    bismor: 0,
                    croppa: 40,
                    enorPearl: 0,
                    jadiz: 110,
                    magnite: 0,
                    umanite: 60,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Burst Stun",
                icon: "Icon_Upgrade_Stun",
                type: "Stun",
                text: "Stun target if all shots in a burst hit ",
                stats: {
                    ex8: { name: "Burst Stun Duration", value: 3 },

                },
                cost: {
                    credits: 4400,
                    bismor: 40,
                    croppa: 60,
                    enorPearl: 0,
                    jadiz: 0,
                    magnite: 110,
                    umanite: 0,
                    err: 0
                }
            },
            {
                selected: false,
                name: "Longer Burst",
                icon: "Icon_Upgrade_FireRate",
                type: "Fire Rate",
                text: "Fire more rounds in each burst ",
                stats: {
                    ex1: { name: "Burst Size", value: 3 },

                },
                cost: {
                    credits: 4400,
                    bismor: 60,
                    croppa: 0,
                    enorPearl: 110,
                    jadiz: 40,
                    magnite: 0,
                    umanite: 0,
                    err: 0
                }
            }
        ]
    ]
};

