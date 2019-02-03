export default {
	selected: false,
	name: "Subata 120",
	class: "Pistol",
	icon: "equipment.D_S1_Subata",
	baseStats: {
		dmg: { name: "Damage", value: 10 },
		ammo: { name: "Max Ammo", value: 140 },
		clip: { name: "Clip Size", value: 12 },
		rate: { name: "Rate of Fire", value: 8.0 },
		reload: { name: "Reload Time", value: 1.9 },
		ex1: { name: "Weakpoint Damage Bonus", value: 30, percent: true },
		ex2: { name: "Increased Accuracy", value: 0 },
		ex3: { name: "Increased Stability ", value: 0 },
		ex4: { name: "Damage Vs Burning", value: 0, percent: true },
		ex5: { name: "Damage Vs Mactera ", value: 0, percent: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Improved Alignment",
				icon: "Icon_Upgrade_Aim",
				type: "Increased Accuracy",
				text: "Pin-point accuracy on first shot",
				stats: {
					ex2: { name: "Increased Accuracy", value: 1 }
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
				name: "High Capacity Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "clip size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... you can always get bigger variants.",
				stats: {
					clip: { name: "Clip Size", value: 5 }
				},
				cost: {
					credits: 1000,
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
				name: "Extra Ammo",
				icon: "Icon_Upgrade_Ammo",
				type: "Ammo",
				text: "Expanded Ammo Bags ",
				stats: {
					ammo: { name: "Max Ammo", value: 80 }
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
				name: "Increased Caliber Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased. ",
				stats: {
					dmg: { name: "Damage", value: 2 }
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
			}
		],
		[
			{
				selected: false,
				name: "Recoil Compensator",
				icon: "Icon_Upgrade_Aim",
				type: "Aim",
				text: "Spread per shot reduced ",
				stats: {
					ex3: { name: "Increased Stability ", value: 1 }
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
				name: "Quicker Ejector",
				icon: "Icon_Upgrade_Speed",
				type: "speed",
				text:
					'Experience, training, and a couple of under-the-table design "adjustments" means your gun can be reloaded significantly faster.',
				stats: {
					reload: { name: "Reload Time", value: 0.4, subtract: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 0,
					enorPearl: 20,
					jadiz: 0,
					magnite: 30,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "ammo",
				text: "Expanded Ammo Bags ",
				stats: {
					ammo: { name: "Max Ammo", value: 80 }
				},
				cost: {
					credits: 2200,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 20,
					umanite: 30,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Hollow-Point Bullets",
				icon: "Icon_Upgrade_Weakspot",
				type: "weakspot",
				text:
					"Hit 'em where it hurts! Literally! We've upped the damage you'll be able to do to any creature's fleshy bits. You're welcome. ",
				stats: {
					ex1: { name: "Weakpoint Damage Bonus", value: 40, percent: true }
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
				name: "High Velocity Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "damage",
				text: "The Good folk in R&D have been busy. The overall damage of your weapon is increased. ",
				stats: {
					dmg: { name: "Damage", value: 3 }
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
				name: "Volatile Bullets ",
				icon: "Icon_Upgrade_Heat",
				type: "heat",
				text: "Bonus fire damage to burning targets. ",
				stats: {
					ex4: { name: "Damage Vs Burning", value: 50, percent: true }
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
				name: "Mactera Neurotoxin Coating",
				icon: "Icon_Upgrade_Shot",
				type: "shot",
				text: "Bonus damage against Mactera",
				stats: {
					ex5: { name: "Damage Vs Mactera", value: 10, percent: true }
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
			}
		]
	]
};
