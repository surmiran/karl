export default {
	selected: true,
	name: "CRSPR Flamethrower",
	class: "Heavy Weapon",
	icon: "equipment.D_P1_CRSPR",
	baseStats: {
		dmg: { name: "Damage", value: 5 },
		ammo: { name: "Max Fuel", value: 300 },
		clip: { name: "Tank Size", value: 90 },
		rate: { name: "Rate of Fire", value: 8.0 },
		reload: { name: "Reload Time", value: 3.0 },
		ex1: { name: "Sticky Flame Damage", value: 0 },
		ex2: { name: "Sticky Flame Burn", value: 0 },
		ex3: { name: "Sticky Flame Slowdown", value: 0 },
		ex4: { name: "Flame Duration", value: 3 },
		ex5: { name: "Fear Factor", value: 0 },
		ex6: { name: "Flame Reach", value: 0 },
		ex7: { name: "Area Heat", value: 0 },
		ex8: { name: "Intensity Bonus", value: 0 },
		ex9: { name: "Killed Targets Explode %", value: 0 }
	},
	mods: [
		[
			{
				selected: false,
				name: "HIGH CAPACITY TANKS",
				icon: "Icon_Upgrade_ClipSize",
				type: "CLIP SIZE",
				cost: {
					credits: 1200,
					bismor: 0,
					croppa: 0,
					enorPearl: 25,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... you can always get bigger variants.",
				stats: {
					clip: { name: "Tank Size", value: 30 }
				}
			},
			{
				selected: false,
				name: "HIGH PRESSURE EJECTOR",
				icon: "Icon_Upgrade_Distance",
				type: "REACH",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Increases the range of the flame for long distance incineration.",
				stats: {
					ex6: { name: "Flame Reach", value: 5 }
				}
			},
			{
				selected: false,
				name: "OVERSIZED VALVES",
				icon: "Icon_Upgrade_FireRate",
				type: "RATE OF FIRE",
				cost: {
					credits: 1200,
					bismor: 0,
					croppa: 25,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Increased fuel consumption rate for more damage.",
				stats: {
					rate: { name: "Rate of Fire", value: 2 }
				}
			}
		],
		[
			// 1/0
			{
				selected: false,
				name: "UNFILTERED FUEL",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "DAMAGE",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 1 }
				}
			}, // 1/1
			{
				selected: false,
				name: "TRIPPLE FILTERED FUEL",
				icon: "Icon_Upgrade_Heat",
				type: "HEAT",
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 0,
					enorPearl: 15,
					jadiz: 24,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Fire it up! You set things ablaze much faster. Time to watch the world burn...!",
				stats: {
					ex8: { name: "Intensity Bonus", value: 40, percent: true }
				}
			}, // 1/2
			{
				selected: false,
				name: "STICKY FLAME DURATION",
				icon: "Icon_Upgrade_Duration",
				type: "DURATION",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Sticky flames duration increase.",
				stats: {
					ex4: { name: "Flame Duration", value: 3 }
				}
			}
		],
		[
			// 2/0
			{
				selected: false,
				name: "STICKY FLAME DURATION",
				icon: "Icon_Upgrade_Duration",
				type: "DURATION",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Sticky flames duration increase.",
				stats: {
					ex4: { name: "Flame Duration", value: 2.5 }
				}
			}, // 2/1
			{
				selected: false,
				name: "STICKY FLAME SLOWDOWN",
				icon: "Icon_Upgrade_Sticky",
				type: "SLOWDOWN",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Creatures moving through sticky flames are slowed.",
				stats: {
					ex3: { name: "Sticky Flame Slowdown", value: 1 }
				}
			}, // 2/2
			{
				selected: false,
				name: "MORE FUEL",
				icon: "Icon_Upgrade_Ammo",
				type: "TOTAL AMMO",
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 35,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 50,
					err: 0
				},
				text: "Max Ammo +75",
				stats: {
					ammo: { name: "Max Fuel", value: 75 }
				}
			}
		],
		[
			// 3/0
			{
				selected: false,
				name: "MORE FUEL",
				icon: "Icon_Upgrade_Ammo",
				type: "TOTAL AMMO",
				cost: {
					credits: 4800,
					bismor: 72,
					croppa: 48,
					enorPearl: 50,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Max Ammo +75",
				stats: {
					ammo: { name: "Max Fuel", value: 75 }
				}
			},
			{
				selected: false,
				name: "STICKY FLAME DAMAGE",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "DAMAGE",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Creatures moving through sticky flames take more damage.",
				stats: {
					ex1: { name: "Sticky Flame Damage", value: 1 }
				}
			},
			{
				selected: false,
				name: "STICKY FLAME IGNITION",
				icon: "Icon_Upgrade_Heat",
				type: "HEAT",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Creatures moving through sticky flames are quickly set on fire.",
				stats: {
					ex2: { name: "Sticky Flame Burn", value: 1 }
				}
			}
		],
		[
			{
				selected: false,
				name: "HEAT RADIANCE",
				icon: "Icon_Upgrade_Heat",
				type: "HEAT",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Heat things up in a 5m radius around you.",
				stats: {
					ex7: { name: "Area Heat", value: 10 }
				}
			},
			{
				selected: false,
				name: "IT BURNS!",
				icon: "Icon_Upgrade_ScareEnemies",
				type: "FEAR",
				cost: {
					credits: 5600,
					bismor: 64,
					croppa: 0,
					enorPearl: 70,
					jadiz: 0,
					magnite: 140,
					umanite: 0,
					err: 0
				},
				text: "A chance that your target will flee in terror for every second that it is in your flame.",
				stats: {
					ex5: { name: "Fear Factor", value: 13, percent: true }
				}
			},
			{
				selected: false,
				name: "TARGETS EXPLODE",
				icon: "Icon_Upgrade_Explosion",
				type: "explosion",
				cost: {
					credits: 5600,
					bismor: 0,
					croppa: 64,
					enorPearl: 70,
					jadiz: 140,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Targets killed from direct damage have a chance to explode.",
				stats: {
					ex9: { name: "Killed Targets Explode %", value: 33, percent: true }
				}
			}
		]
	]
};
