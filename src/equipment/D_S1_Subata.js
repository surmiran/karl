export default {
	selected: false,
	modified: false,
	name: "Subata 120",
	class: "Pistol",
	icon: "equipment.D_S1_Subata",
	baseStats: {
		dmg: { name: "Damage", value: 12 },
		ammo: { name: "Max Ammo", value: 160 },
		clip: { name: "Magazine Size", value: 12 },
		rate: { name: "Rate of Fire", value: 8.0 },
		reload: { name: "Reload Time", value: 1.9 },
		ex1: { name: "Weakpoint Damage Bonus", value: 20, percent: true },
		ex2: { name: "Base Spread", value: 100, percent: true },
		ex3: { name: "Spread Per Shot", value: 100, percent: true },
		ex4: { name: "Bonus Fire Damage to Burning Targets", value: 0, percent: true },
		ex5: { name: "Damage Vs Mactera", value: 0, percent: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Improved Alignment",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text: "Pin-point accuracy on first shot",
				stats: {
					ex2: { name: "Base Spread", value: 100, percent: true, subtract: true }
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
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... you can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 5 }
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
			},
			{
				selected: false,
				name: "Quickfire Ejector Ejector",
				icon: "Icon_Upgrade_Speed",
				type: "Reload Speed",
				text:
					'Experience, training, and a couple of under-the-table design "adjustments" means your gun can be reloaded significantly faster.',
				stats: {
					reload: { name: "Reload Time", value: 0.6, subtract: true }
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
				name: "Extra Ammo",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "Expanded Ammo Bags",
				stats: {
					ammo: { name: "Max Ammo", value: 40 }
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
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 1 }
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
				name: "Improved Propellant",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 1 }
				},
				cost: {
					credits: 2200,
					bismor: 30,
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
				name: "Recoil Compensator",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text: "This little tweak reduces weapon recoil and spread per shot helping you hit consecutive shots.",
				stats: {
					ex3: { name: "Spread Per Shot", value: 50, percent: true, subtract: true},
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
				text: "Expanded Ammo Bags",
				stats: {
					ammo: { name: "Max Ammo", value: 40 }
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
				type: "Weak Spot Bonus",
				text:
					"Hit 'em where it hurts! Literally! We've upped the damage you'll be able to do to any creature's fleshy bits. You're welcome.",
				stats: {
					ex1: { name: "Weakpoint Damage Bonus", value: 60, percent: true }
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
				type: "Damage",
				text: "The Good folk in R&D have been busy. The overall damage of your weapon is increased.",
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
				name: "Volatile Bullets",
				icon: "Icon_Upgrade_Heat",
				type: "Heat",
				text: "Bonus fire damage to burning targets.",
				stats: {
					ex4: { name: "Bonus Fire Damage to Burning Targets", value: 50, percent: true }
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
				name: "Mactera Toxin-Coating",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text: "Bonus damage against Mactera aliens",
				stats: {
					ex5: { name: "Damage Vs Mactera", value: 20, percent: true }
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
