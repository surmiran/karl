export default {
	selected: false,
	modified: false,
	name: "Stubby",
	class: "Submachine Gun",
	icon: "equipment.E_P2_Stubby",
	baseStats: {
		dmg: { name: "Damage", value: 6 },
		ammo: { name: "Max Ammo", value: 420 },
		clip: { name: "Magazine Size", value: 30 },
		rate: { name: "Rate of Fire", value: 11 },
		reload: { name: "Reload Time", value: 2 },
		ex1: { name: "Electric Damage", value: 2 },
		ex2: { name: "Electrocution Chance", value: 10, percent: true },
		ex3: { name: "Increased Accuracy", value: 0, boolean: true },
		ex4: { name: "Weakpoint Damage Bonus", value: 0, percent: true },
		ex5: { name: "Damage vs Electrocuted", value: 100, percent: true },
		ex6: { name: "Electrocution AoE", value: 0, percent: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Increased Caliber Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 3 }
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
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					ammo: { name: "Max Ammo", value: 120 }
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
			},
			{
				selected: false,
				name: "Upgraded Capacitors",
				icon: "Icon_Upgrade_Electricity",
				type: "Electricity",
				text: "Better chance to electrocute target",
				stats: {
					ex2: { name: "Electrocution Chance", value: 10, percent: true }
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
			}
		],
		[
			{
				selected: false,
				name: "High Capacity Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 10 }
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
				name: "Floating Barrel",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text:
					"Sweet, sweet optimization. We called in a few friends and managed to significantly improve the stability of this gun.",
				stats: {
					ex3: { name: "Increased Accuracy", value: 1, boolean: true }
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
				name: "Extra Ammo",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "Max Ammo +60",
				stats: {
					ammo: { name: "Max Ammo", value: 60 }
				},
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 24,
					enorPearl: 0,
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
				name: "Improved Gas System",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text:
					"We overclocked your gun. It fires faster. Don't ask. Just enjoy. Also probably don't tell Management, please.",
				stats: {
					rate: { name: "Rate of Fire", value: 2 }
				},
				cost: {
					credits: 2800,
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
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 3 }
				},
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 0,
					enorPearl: 35,
					jadiz: 50,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Hollow-Point Bullets",
				icon: "Icon_Upgrade_Weakspot",
				type: "Weak Spot Damage",
				text:
					"Hit 'em where it hurts! Literally! We've updated the damage you'll be able to do to any creatures fleshy bits. You're welcome.",
				stats: {
					ex4: { name: "Weakpoint Damage Bonus", value: 50, percent: true }
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
			},
			{
				selected: false,
				name: "Larger Capacitors",
				icon: "Icon_Upgrade_Electricity",
				type: "Electricity",
				text: "Better chance to electrocute target",
				stats: {
					ex2: { name: "Electrocution Chance", value: 10, percent: true }
				},
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 0,
					enorPearl: 50,
					jadiz: 48,
					magnite: 72,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Overcharged Rounds",
				icon: "Icon_Upgrade_Electricity",
				type: "Electricity",
				text: "More electric damage",
				stats: {
					ex1: { name: "Electric Damage", value: 2 }
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
				name: "Electrocution Rounds",
				icon: "Icon_Upgrade_Electricity",
				type: "Electricity",
				text: "Deal extra damage to electrocuted targets",
				stats: {
					ex5: { name: "Damage vs Electrocuted", value: 20, percent: true }
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
				name: "Magazine Capacity Tweak",
				icon: "Icon_Upgrade_ClipSize",
				type: "ClipSize",
				text: "Greatly increased magazine capacity",
				stats: {
					clip: { name: "Magazine Size", value: 20 }
				},
				cost: {
					credits: 5600,
					bismor: 64,
					croppa: 70,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 140,
					err: 0
				}
			},
			{
				selected: false,
				name: "Electric Arc",
				icon: "Icon_Upgrade_Electricity",
				type: "Electricity",
				text: "Chance for electrocution to arc from one target to another",
				stats: {
					ex6: { name: "Electrocution AoE", value: 25, percent: true }
				},
				cost: {
					credits: 5600,
					bismor: 64,
					croppa: 140,
					enorPearl: 0,
					jadiz: 70,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		]
	]
};
