export default {
	selected: false,
	modified: false,
	name: "M1000 Classic",
	class: "Semi-Automatic Rifle",
	icon: "equipment.S_P2_M1000",
	baseStats: {
		dmg: { name: "Damage", value: 55 },
		ammo: { name: "Max Ammo", value: 50 },
		clip: { name: "Clip Size", value: 5 },
		rate: { name: "Rate of Fire", value: 5 },
		reload: { name: "Reload Time", value: 2.2 },
		ex1: { name: "Focus Speed", value: 1 },
		ex2: { name: "Focused Shot Damage", value: 50, percent: true },
		ex3: { name: "Increased Stability", value: 0, binary: true },
		ex4: { name: "Max Penetrations", value: 0 },
		ex5: { name: "Weakpoint Damage Bonus", value: 0, percent: true },
		ex6: { name: "Armor Break Bonus", value: 0, percent: true },
		ex7: { name: "Focused Shot Stun", value: 0, percent: true },
		ex8: { name: "Focus Shot Fear", value: 0, percent: true }
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
					ammo: { name: "Max Ammo", value: 15 }
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
				name: "Increased Caliber Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 10 }
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
				name: "Improved Ergonomics",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text: "Faster focus",
				stats: {
					ex1: { name: "Focus Speed", value: 1 }
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
				name: "Extended Clip",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Clip Size", value: 2 }
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
				name: "Floating Barrel",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text:
					"Sweet, sweet optimization. We called in a few friends and managed to significantly improve the stability of this gun.",
				stats: {
					ex3: { name: "Increased Stability", value: 1, binary: true }
				},
				cost: {
					credits: 2000,
					bismor: 24,
					croppa: 15,
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
				name: "High Velocity Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased",
				stats: {
					dmg: { name: "Damage", value: 10 }
				},
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 50,
					enorPearl: 0,
					jadiz: 35,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Killer Focus",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Greater focus damage bonus",
				stats: {
					ex2: { name: "Focused Shot Damage", value: 40, percent: true }
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
			},
			{
				selected: false,
				name: "Oversized Clip",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Clip Size", value: 2 }
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
			}
		],
		[
			{
				selected: false,
				name: "Blowthrough Rounds",
				icon: "Icon_Upgrade_BulletPenetration",
				type: "Blow Through",
				text:
					"Shaped projectiles designed to over-penetrate targets with a minimal loss of energy. In other words: Fire straight through several enemies at once!",
				stats: {
					ex4: { name: "Max Penetrations", value: 10 }
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
				name: "Hollow-Point Bullets",
				icon: "Icon_Upgrade_Weakspot",
				type: "Weak Spot Bonus",
				text:
					"Hit 'em where it hurts! Literally! We've upped the damage you'll be able to do to any creatures fleshy bits. You're welcome.",
				stats: {
					ex5: { name: "Weakpoint Damage Bonus", value: 50, percent: true }
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
				name: "Kinetic Energy Penetrator",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text:
					"We're proud of this one. Armor shredding. Tear through that high-impact plating of those big buggers like butter. What could be finer?",
				stats: {
					ex6: { name: "Armor Break Bonus", value: 200, percent: true }
				},
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 48,
					enorPearl: 50,
					jadiz: 72,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Hitting Where it Hurts",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Focused shots stun the target",
				stats: {
					ex7: { name: "Focused Shot Stun", value: 100, percent: true }
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
				name: "Precision Terror",
				icon: "Icon_Upgrade_ScareEnemies",
				type: "Fear",
				text: "Killing your target with a focused shot to the weakspot will send nearby creatures fleeing with terror!",
				stats: {
					ex8: { name: "Focus Shot Fear", value: 200, percent: true }
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
			}
		]
	]
};
