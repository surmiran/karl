export default {
	selected: false,
	modified: false,
	name: "Breach Cutter",
	class: "Heavy Weapon",
	icon: "equipment.E_S2_Breach",
	baseStats: {
		dmg: { name: "Damage", value: 8 },
		ammo: { name: "Max Ammo", value: 12 },
		clip: { name: "Magazine Size", value: 2 },
		rate: { name: "Rate of Fire", value: 3 },
		reload: { name: "Reload Time", value: 3 },
		ex1: { name: "Projectile Lifetime", value: 0.9 },
		ex2: { name: "Plasma Beam Width", value: 1.5 },
		ex3: { name: "Plasma Expansion Delay", value: 0.2 },
		ex4: { name: "Armor Breaking", value: 50, percent: true },
		ex5: { name: "Explosive Goodbye", value: 0, boolean: true },
		ex6: { name: "There can be only one", value: 0, boolean: true },
		ex7: { name: "Double Split Line", value: 0, boolean: true },
		ex8: { name: "Roll Control", value: 0, boolean: true },
		ex9: { name: "Return to Sender", value: 0, boolean: true },
		ex10: { name: "Yaw Man", value: 0, boolean: true },
		ex11: { name: "High Voltage Crossover", value: 0, boolean: true },
		ex12: { name: "Inferno", value: 0, boolean: true },
	},
	/* todo, check if plasma expansion duration is correct */
	mods: [
		[
			{
				selected: false,
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					ammo: { name: "Max Ammo", value: 6 }
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
			},
			{
				selected: false,
				name: "Condensed Plasma",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 2 }
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
			}
		],
		[
			{
				selected: false,
				name: "Loosened Node Cohesion",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "Get a wider plasma line that can hit more targets at once.",
				stats: {
					ex2: { name: "Plasma Beam Width", value: 0.3 }
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
				name: "High Capacity Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 2 }
				},
				cost: {
					credits: 1800,
					bismor: 18,
					croppa: 12,
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
				name: "Armor Breaking",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text: "Increases armor breaking capabilities of the plasma line",
				stats: {
					ex4: { name: "Armor Breaking", value: 400, percent: true }
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
				name: "Prolonged Power Generation",
				icon: "Icon_Upgrade_Duration",
				type: "Delay",
				text: "Projectile lifetime increase",
				stats: {
					ex1: { name: "Projectile Lifetime", value: 1.2 }
				},
				cost: {
					credits: 2200,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 30,
					magnite: 0,
					umanite: 20,
					err: 0
				}
			},
			{
				selected: false,
				name: "Refined Plasma Flow",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 2 }
				},
				cost: {
					credits: 3800,
					bismor: 25,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 15,
					umanite: 36,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Expanded Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... you can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 2 }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 36,
					enorPearl: 25,
					jadiz: 15,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Increase Line Size",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "Longer plasma line",
				stats: {
					ex2: { name: "Plasma Beam Width", value: 0.3 }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 0,
					enorPearl: 36,
					jadiz: 25,
					magnite: 0,
					umanite: 15,
					err: 0
				}
			},
			{
				selected: false,
				name: "Quick Deploy",
				icon: "Icon_Upgrade_Duration",
				type: "Charge Speed",
				text: "The line projectile opens almost immediately and can hit multiple targets at very close range.",
				stats: {
					ex3: { name: "Plasma Expansion Delay", value: 0.2, subtract: true }
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
				name: "Explosive Goodbye",
				icon: "Icon_Upgrade_Explosion",
				type: "Explosion",
				text: "The projectile explodes at the end of its lifecycle when the nodes collapse damaging anything unlucky enough to be near by.",
				stats: {
					ex5: { name: "Explosive Goodbye", value: 1, boolean: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 40,
					enorPearl: 0,
					jadiz: 110,
					magnite: 60,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "There Can Be Only One",
				icon: "Icon_Upgrade_Explosion",
				type: "Explosion",
				text:
					"Whenever you fire a new projectile the previous one violently explodes damaging everything in it's vicinity.",
				stats: {
					ex6: { name: "There can be only one", value: 1, boolean: true }
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
				name: "Double Line",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "The plasma covers a taller area making it easier to hit targets at various heights.",
				stats: {
					ex7: { name: "Double Split Line", value: 1, boolean: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 0,
					enorPearl: 110,
					jadiz: 60,
					magnite: 0,
					umanite: 40,
					err: 0
				}
			}
		]
	],
	overclocks: [
		{
			selected: false,
			name: "Light-Weight Cases",
			icon: "Icon_Upgrade_Ammo",
			type: "clean",
			cost: {
				credits: 8700,
				bismor: 130,
				croppa: 100,
				enorPearl: 0,
				jadiz: 80,
				magnite: 0,
				umanite: 0,
				err: 0
			},
			text: "Bring more ammo with you and slam those cases in faster!",
			stats: {
				ammo: { name: "Max Ammo", value: 4 },
				reload: { name: "Reload Time", value: 0.2, subtract: true },
			}
		},
		{
			selected: false,
			name: "Roll Control",
			icon: "Icon_Overclock_Spinning_Linecutter",
			type: "clean",
			cost: {
				credits: 8150,
				bismor: 0,
				croppa: 95,
				enorPearl: 0,
				jadiz: 0,
				magnite: 80,
				umanite: 135,
				err: 0
			},
			text: "A few tweaks to the launcher cause it to add roll to the projectile as it is ejected. Holding down the trigger after the line leaves the gun activates a remote connection with on the release of the trigger causes the line to stop rolling.",
			stats: {
				ex8: { name: "Roll Control", value: 1, boolean: true },
			}
		},
		{
			selected: false,
			name: "Stronger Plasma Current",
			icon: "Icon_Upgrade_DamageGeneral",
			type: "clean",
			cost: {
				credits: 8650,
				bismor: 0,
				croppa: 100,
				enorPearl: 0,
				jadiz: 140,
				magnite: 75,
				umanite: 0,
				err: 0
			},
			text: "By improving the node's efficiency you can up the raw damage without too much fuss and it lasts a bit longer too!",
			stats: {
				dmg: { name: "Damage", value: 1 },
				ex1: { name: "Projectile Lifetime", value: 0.5 },
			}
		},
		{
			selected: false,
			name: "Return to Sender",
			icon: "Icon_Overclock_ForthAndBack_Linecutter",
			type: "balanced",
			cost: {
				credits: 7950,
				bismor: 140,
				croppa: 0,
				enorPearl: 100,
				jadiz: 0,
				magnite: 0,
				umanite: 80,
				err: 0
			},
			text: "Holding down the trigger after line leaves the gun activates a remote connection with on the release of the trigger causes the line to change direction and move back towards the gun.",
			stats: {
				ex9: { name: "Return to Sender", value: 1, boolean: true },
				dmg: { name: "Damage", value: 3, subtract: true },
				ammo: { name: "Max Ammo", value: 4, subtract: true },
			}
		},
		{
			selected: false,
			name: "Yaw Man",
			icon: "Icon_Upgrade_Special",
			type: "balanced",
			cost: {
				credits: 7300,
				bismor: 75,
				croppa: 95,
				enorPearl: 0,
				jadiz: 0,
				magnite: 0,
				umanite: 120,
				err: 0
			},
			text: "Through a bias of the release energy the line is released with a yaw spin. Due to repeat intersections, the spinning line will on average cause more damage than a static beam, especially to larger targets. However the tweaks have a negative impact on the weapons rate of fire.",
			stats: {
				ex10: { name: "Yaw Man", value: 0, boolean: true },
				rate: { name: "Rate of Fire", value: 2, subtract: true },
			}
		},
		{
			selected: false,
			name: "High Voltage Crossover",
			icon: "Icon_Upgrade_Electricity",
			type: "unstable",
			cost: {
				credits: 8250,
				bismor: 120,
				croppa: 0,
				enorPearl: 80,
				jadiz: 0,
				magnite: 100,
				umanite: 0,
				err: 0
			},
			text: "By passing an electric current through the plasma, the beam electrocutes anything it touches but at the cost of raw damage and the bulky hardware limits magazine capacity.",
			stats: {
				ex11: { name: "High Voltage Crossover", value: 1, boolean: true },
				dmg: { name: "Damage", value: 3, subtract: true },
				clip: { name: "Magazine Size", value: 1, subtract: true },
			}
		},
		{
			selected: false,
			name: "Inferno",
			icon: "Icon_Upgrade_Heat",
			type: "unstable",
			cost: {
				credits: 7550,
				bismor: 0,
				croppa: 70,
				enorPearl: 0,
				jadiz: 90,
				magnite: 135,
				umanite: 0,
				err: 0
			},
			text: "",
			stats: {
				ex12: { name: "Inferno", value: 1, boolean: true },
				ammo: { name: "Max Ammo", value: 4, subtract: true },
				rate: { name: "Rate of Fire", value: 2, subtract: true },
				/* todo: calc x0.5 */
				ex4: { name: "Armor Breaking", value: 25, percent: true, subtract: true },
			}
		},
	]
};
