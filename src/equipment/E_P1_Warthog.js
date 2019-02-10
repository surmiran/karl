export default {
	selected: true,
	name: "Warthog",
	class: "Shotgun",
	icon: "equipment.E_P1_Warthog",
	baseStats: {
		dmg: { name: "Damage", value: 6 },
		ammo: { name: "Max Ammo", value: 90 },
		clip: { name: "Magazine Size", value: 6 },
		rate: { name: "Rate of Fire", value: 1.6 },
		reload: { name: "Reload Time", value: 2 },
		ex1: { name: "Bullets (per shot)", value: 7 },
		ex2: { name: "Stun Duration", value: 2 },
		ex3: { name: "Stun Chance", value: 20, percent: true },
		ex4: { name: "Reduced Recoil", value: 0, binary: true },
		ex5: { name: "Increased Accuracy", value: 0, percent: true },
		ex6: { name: "Armor Break Bonus", value: 0, percent: true },
		ex7: { name: "Turret Whip", value: 0, binary: true },
		ex8: { name: "Automatic Fire", value: 0, binary: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Supercharged Feed Mechanism",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text:
					"We overclocked your gun. It fires faster. Don't ask, just enjoy. Also probably don't tell Management, please. ",
				stats: {
					rate: { name: "Rate of Fire", value: 0.6 }
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
				name: "Overstuffed Magazine ",
				icon: "Icon_Upgrade_ClipSize",
				type: "CLip size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants. ",
				stats: {
					clip: { name: "Magazine Size", value: 3 }
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
			}
		],
		[
			{
				selected: false,
				name: "Expanded Ammo Bags ",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased! ",
				stats: {
					ammo: { name: "Max Ammo", value: 40 }
				},
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 0,
					enorPearl: 15,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Loaded Shells",
				icon: "Icon_Upgrade_Shotgun_Pellet",
				type: "Pellet Count",
				text: "More pellets in each shell ",
				stats: {
					ex1: { name: "Bullets (per shot)", value: 2 }
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
				name: "High Capacity Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants. ",
				stats: {
					clip: { name: "Magazine Size", value: 3 }
				},
				cost: {
					credits: 2000,
					bismor: 24,
					croppa: 0,
					enorPearl: 15,
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
				name: "Recoil Dampener",
				icon: "Icon_Upgrade_Recoil",
				type: "Recoil",
				text:
					"Quality engineering, the best lasercut parts, the tender loving care of a dedicated R&D Department, The recoil of your gun is drastically reduced. ",
				stats: {
					ex4: { name: "Reduced Recoil ", value: 1, binary: true }
				},
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 35,
					enorPearl: 0,
					jadiz: 50,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Choke ",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text: "Decreased shot spread ",
				stats: {
					ex5: { name: "Increased Accuracy ", value: 1, binary: true }
				},
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 50,
					umanite: 35,
					err: 0
				}
			},
			{
				selected: false,
				name: "Quickfire Ejector",
				icon: "Icon_Upgrade_Speed",
				type: "Reload Speed",
				text:
					'Experience, training, and a couple of under-the-table "adjustments" means your gun can be reloaded significantly faster.',
				stats: {
					reload: { name: "Reload Time", value: 0.5, subtract: true }
				},
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 0,
					enorPearl: 50,
					jadiz: 0,
					magnite: 35,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Tungsten Coated Buckshot ",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text:
					"We're proud of this one. Armor shredding. Tear through that high-impact plating of those big buggers like butter. What could be finer? ",
				stats: {
					ex6: { name: "Armor Break Bonus ", value: 400, percent: true }
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
				name: "Stun ",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text:
					"Hit 'em so hard they can't recover! Every shot you fire has a higher chance to stop the target in its tracks. ",
				stats: {
					ex3: { name: "Stun Chance", value: 20, percent: true }
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
			},
			{
				selected: false,
				name: "Bigger Pellets ",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased. ",
				stats: {
					dmg: { name: "Damage", value: 2 }
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
			}
		],
		[
			{
				selected: false,
				name: "Turret Whip ",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text: "Shoot your turrets to make them create an overcharged shot ",
				stats: {
					ex7: { name: "Turret Whip", value: 1, binary: true }
				},
				cost: {
					credits: 5600,
					bismor: 0,
					croppa: 64,
					enorPearl: 70,
					jadiz: 140,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Miner Adjustments ",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text: "Fully automatic with an increased rate of fire ",
				stats: {
					rate: { name: "Rate of Fire", value: 1 },
					ex8: { name: "Automatic Fire", value: 1, binary: true }
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
			}
		]
	]
};
