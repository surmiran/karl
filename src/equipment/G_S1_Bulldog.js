export default {
	selected: false,
	name: '"Bulldog" Heavy Revolver',
	class: "Revolver",
	icon: "equipment.G_S1_Bulldog",
	baseStats: {
		dmg: { name: "Damage", value: 45 },
		ammo: { name: "Max Ammo", value: 28 },
		clip: { name: "Clip Size ", value: 4 },
		rate: { name: "Rate of Fire", value: 2 },
		reload: { name: "Reload Time", value: 2 },
		ex1: { name: "Increased Accuracy", value: 0, binary: true },
		ex2: { name: "Increased Stability", value: 0, binary: true },
		ex3: { name: "Max Penetrations", value: 0 },
		ex4: { name: "Stun Chance", value: 0, percent: true },
		ex5: { name: "Area Damage", value: 0 },
		ex6: { name: "Weakspot Damage Bonus", value: 0, percent: true },
		ex7: { name: "Dead-Eye", value: 0, percent: true },
		ex8: { name: "Damage Vs Glyphid", value: 0, percent: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Quickfire Ejector",
				icon: "Icon_Upgrade_Speed",
				type: "Speed",
				text:
					'Experience, training, and a couple of under-the-table design "adjustments" means your gun can be reloaded significantly faster. ',
				stats: {
					reload: { name: "Reload Time", value: 0.4, subtract: true }
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
				name: "Perfect Weight Balance",
				icon: "Icon_Upgrade_Aim",
				type: "Aim",
				text: "Improved Accuracy",
				stats: {
					ex1: { name: "Increased Accuracy", value: 1, binary: true }
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
				name: "Increased Caliber Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased. ",
				stats: {
					dmg: { name: "Damage", value: 10 }
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
				name: "Floating Barrel",
				icon: "Icon_Upgrade_Aim",
				type: "Aim",
				text:
					"Sweet, sweet optimization. We called in a few friends and managed to significantly improve the stability of this gun. ",
				stats: {
					ex2: { name: "Increased Stability", value: 1, binary: true }
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
				name: "Expanded Ammo Bags ",
				icon: "Icon_Upgrade_Ammo",
				type: "Ammo",
				text: "Expanded Ammo Bags ",
				stats: {
					ammo: { name: "Max Ammo", value: 6 }
				},
				cost: {
					credits: 1800,
					bismor: 0,
					croppa: 0,
					enorPearl: 12,
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
				name: "Super Blowtrough Rounds",
				icon: "Icon_Upgrade_BulletPenetration",
				type: "Bullet Penetration",
				text:
					"Shaped projectiles capable to over-penetrate targets with a mininal loss of energy. In other words: Fire straight through several enemies at once! ",
				stats: {
					ex3: { name: "Max Penetrations", value: 10 }
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
				name: "Stun",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Hit 'em so hard they can't recover! Each shot you fire has a chance to stop the target in its tracks. ",
				stats: {
					ex4: { name: "Stun Chance", value: 50, percent: true }
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
				name: "Explosive Rounds",
				icon: "Icon_Upgrade_Explosive",
				type: "Explosive",
				text: "Bullets detonate creating a radius of damage ",
				stats: {
					ex5: { name: "Area Damage", value: 26 }
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
			}
		],
		[
			{
				selected: false,
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased! ",
				stats: {
					ammo: { name: "Max Ammo", value: 12 }
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
				name: "High Velocity Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased. ",
				stats: {
					dmg: { name: "Damage", value: 20 }
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
			},
			{
				selected: false,
				name: "Hollow-Point Bullets",
				icon: "Icon_Upgrade_Weakspot",
				type: "Weakspot",
				text:
					"Hit 'em where it hurts! Literally! We've upped the damage you'll be able to do to any creatures fleshy bits. You're welcome. ",
				stats: {
					ex6: { name: "Weakspot Damage Bonus", value: 75, percent: true }
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
			}
		],
		[
			{
				selected: false,
				name: "Dead Eye",
				icon: "Icon_Upgrade_Aim",
				type: "Aim",
				text: "No aim penalty while moving ",
				stats: {
					ex7: { name: "Dead-Eye", value: 150, subtract: true, percent: true }
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
				name: "Glyphid Neurotoxin Coating ",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text: "Bonus damage against Glyphids ",
				stats: {
					ex8: { name: "Damage Vs Glyphid", value: 20, percent: true }
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
			}
		]
	]
};
