export default {
	selected: false,
	modified: false,
	name: "Jury-Rigged Boomstick",
	class: "Shotgun",
	icon: "equipment.S_S1_Jury",
	baseStats: {
		dmg: { name: "Damage", value: 12 },
		ammo: { name: "Max Ammo", value: 24 },
		clip: { name: "Magazine Size", value: 2 },
		rate: { name: "Rate of Fire", value: 1.5 },
		reload: { name: "Reload Time", value: 2 },
		ex1: { name: "Pellets", value: 8 },
		ex2: { name: "Stun Chance", value: 10, percent: true },
		ex3: { name: "Max Penetrations", value: 0 },
		ex4: { name: "Armor Breaking", value: 100, percent: true },
		ex5: { name: "Blast Wave", value: 0, boolean: true },
		ex6: { name: "Auto Reload", value: 0, boolean: true },
		ex7: { name: "Proximity Fear Chance", value: 0, percent: true },
		ex8: { name: "Damage % as Fire", value: 0, percent: true },
		ex9: { name: "Stun Duration", value: 2 }
	},
	mods: [
		[
			{
				selected: false,
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					ammo: { name: "Max Ammo", value: 8 }
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
				name: "Double-Sized Buckshot",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Bigger and heavier handcrafted specialist dwarf buckshot. Accept no substitute.",
				stats: {
					dmg: { name: "Damage", value: 3 }
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
				name: "Double Trigger",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text:
					"Tweaked trigger mechanism allows you to unload both barrels in quick succession dealing massive damage to anything in front of you.",
				stats: {
					rate: { name: "Rate of Fire", value: 7.5 }
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
				type: "Reload Speed",
				text:
					'Experience, training, and a couple of under-the-table design "adjustments" means your gun can be reloaded significantly faster. ',
				stats: {
					reload: { name: "Reload Time", value: 0.7, subtract: true }
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
			}
		],
		[
			{
				selected: false,
				name: "Stun",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Hit 'em so hard they can't recover! Every shot you fire has a chance to stop the target in it's tracks",
				stats: {
					ex2: { name: "Stun Chance", value: 40, percent: true }
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
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					ammo: { name: "Max Ammo", value: 12 }
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
				name: "High Capacity Shells",
				icon: "Icon_Upgrade_Shotgun_Pellet",
				type: "Pellet Count",
				text:
					"It took some creating thinking, but we finally found out how to pack more buckshot into each shell. Just... Handle with care, they're liable to take your eye out.",
				stats: {
					ex1: { name: "Pellets", value: 3 }
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
				name: "Super Blowthrough Rounds",
				icon: "Icon_Upgrade_BulletPenetration",
				type: "Blow Through",
				text:
					"Shaped projectiles designed to over-penetrate targets with a minimal loss of energy. In other words: Fire straight through several enemies at once!",
				stats: {
					ex3: { name: "Max Penetrations", value: 3 }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 0,
					enorPearl: 36,
					jadiz: 25,
					magnite: 15,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Tungsten Coated Buckshot",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text:
					"We're proud of this one. Armor shredding. Tear through that high-impact plating of those big buggers like butter. What could be finer?",
				stats: {
					ex4: { name: "Armor Breaking", value: 300, percent: true }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 25,
					enorPearl: 0,
					jadiz: 15,
					magnite: 0,
					umanite: 36,
					err: 0
				}
			},
			{
				selected: false,
				name: "Blast Wave",
				icon: "Icon_Upgrade_Special",
				type: "Special",
				text:
					"Shockwave from the blast deals extra damage to any enemies unlucky enough to be in the area extending 4m in front of you.",
				stats: {
					ex5: { name: "Blast Wave", value: 1, boolean: true }
				},
				cost: {
					credits: 3800,
					bismor: 36,
					croppa: 0,
					enorPearl: 25,
					jadiz: 0,
					magnite: 15,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Auto Reload",
				icon: "Icon_Upgrade_Speed",
				type: "Reload Speed",
				text: "Reloads automatically when unequipped for more than 5 seconds",
				stats: {
					ex6: { name: "Auto Reload", value: 1, boolean: true }
				},
				cost: {
					credits: 4400,
					bismor: 40,
					croppa: 0,
					enorPearl: 60,
					jadiz: 0,
					magnite: 0,
					umanite: 110,
					err: 0
				}
			},
			{
				selected: false,
				name: "Fear the Boomstick",
				icon: "Icon_Upgrade_ScareEnemies",
				type: "Fear",
				text: "Chance to scare nearby creatures whenever you shoot",
				stats: {
					ex7: { name: "Proximity Fear Chance", value: 50, percent: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 40,
					enorPearl: 0,
					jadiz: 60,
					magnite: 110,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "White Phosphorous Shells",
				icon: "Icon_Upgrade_Heat",
				type: "Heat",
				text: "Convert some of the damage to Fire damage",
				stats: {
					ex8: { name: "Damage % as Fire", value: 50, percent: true }
				},
				cost: {
					credits: 4400,
					bismor: 60,
					croppa: 0,
					enorPearl: 0,
					jadiz: 110,
					magnite: 0,
					umanite: 40,
					err: 0
				}
			}
		]
	]
};
