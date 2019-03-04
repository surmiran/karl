export default {
	selected: false,
	modified: false,
	name: "Zhukov NUK17",
	class: "Submachine Gun",
	icon: "equipment.S_S2_Zhuk",
	baseStats: {
		dmg: { name: "Damage", value: 10 },
		ammo: { name: "Max Ammo", value: 600 },
		clip: { name: "Magazine Size", value: 50 },
		rate: { name: "Rate of Fire", value: 30 },
		reload: { name: "Reload Time", value: 1.8 },
		ex1: { name: "Increased Accuracy", value: 0, binary: true },
		ex2: { name: "Max Penetrations", value: 0 },
		ex3: { name: "Stun Chance", value: 0, percent: true },
		ex4: { name: "Weakpoint Damage Bonus", value: 0, percent: true },
		ex5: { name: "Movement for 3 seconds", value: 0, percent: true },
		ex6: { name: "Electric Damage", value: 0, percent: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased",
				stats: {
					ammo: { name: "Max Ammo", value: 75 }
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
				name: "Disabled Safety",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "High Velocity Rounds",
				stats: {
					dmg: { name: "Damage", value: 1 }
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
				name: "Better Weight Balance",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text: "Base Accuracy Increase",
				stats: {
					ex1: { name: "Increased Accuracy", value: 1, binary: true }
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
			},
			{
				selected: false,
				name: "Supercharged Feed Mechanism",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text:
					"We overclocked your gun. It fires faster. Don't ask. Just enjoy. Also probably don't tell Management, please.",
				stats: {
					rate: { name: "Rate of Fire", value: 6 }
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
			},
			{
				selected: false,
				name: "Blowthrough Rounds",
				icon: "Icon_Upgrade_BulletPenetration",
				type: "Blow Through",
				text:
					"Shaped projectiles designed to over-penetrate targets with minimal loss of energy. In other words: Fire straight through several enemies at once!",
				stats: {
					ex2: { name: "Max Penetrations", value: 1 }
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
				name: "Increased Caliber Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 3 }
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
				name: "High Capacity Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks...you can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 10 }
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
			},
			{
				selected: false,
				name: "Quickfire Ejector",
				icon: "Icon_Upgrade_Speed",
				type: "Reload Speed",
				text:
					'Experience, training, and a couple of under-the-table design "adjustments" means your gun can be reloaded significantly faster. ',
				stats: {
					reload: { name: "Reload Time", value: 0.6, subtract: true }
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
			}
		],
		[
			{
				selected: false,
				name: "Stun",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Hit 'em so hard they can't recover! Every shot you fire has a chance to stop the target in its tracks.",
				stats: {
					ex3: { name: "Stun Chance", value: 20, percent: true }
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
				name: "Hollow-Point Bullets",
				icon: "Icon_Upgrade_Weakspot",
				type: "Weak Spot Bonus",
				text:
					"Hit em' where it hurts! Literally! We've upped the damage you'll be able to do to any creature's fleshy bits. You're welcome.",
				stats: {
					ex4: { name: "Weakpoint Damage Bonus", value: 50, percent: true }
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
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up on some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					ammo: { name: "Max Ammo", value: 100 }
				},
				cost: {
					credits: 3800,
					bismor: 36,
					croppa: 0,
					enorPearl: 0,
					jadiz: 15,
					magnite: 26,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Conductive Bullets",
				icon: "Icon_Upgrade_Electricity",
				type: "Electricity",
				text: "More damage to targets that are in an electric field",
				stats: {
					ex6: { name: "Electric Damage", value: 25, percent: true }
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
				name: "Get In, Get Out",
				icon: "Icon_Upgrade_MovementSpeed",
				type: "Movement Speed",
				text: "Temporary movement speed bonus after emptying clip",
				stats: {
					ex5: { name: "Movement for 3 seconds", value: 100, percent: true }
				},
				cost: {
					credits: 4400,
					bismor: 60,
					croppa: 0,
					enorPearl: 110,
					jadiz: 0,
					magnite: 40,
					umanite: 0,
					err: 0
				}
			}
		]
	]
};
