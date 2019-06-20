export default {
	selected: true,
	modified: false,
	name: '"Lead Storm" Powered Minigun',
	class: "Heavy Weapon",
	icon: "equipment.G_P1_Lead",
	baseStats: {
		dmg: { name: "Damage", value: 10 },
		ammo: { name: "Max Ammo", value: 2400 },
		rate: { name: "Rate of Fire", value: 30 },
		reload: { name: "Cooling Rate", value: 1.5 },
		ex1: { name: "Spinup Time", value: 0.7 },
		ex2: { name: "Spindown Time", value: 3 },
		ex3: { name: "Increased Accuracy", value: 0, boolean: true },
		ex4: { name: "Armor Breaking", value: 0, percent: true },
		// ex5: { name: "Stun Chance", value: 0, percent: true },
		ex6: { name: "Max Penetrations", value: 0 },
		ex7: { name: "Max Stabilization Damage Bonus", value: 0, percent: true },
		ex8: { name: "Critical Overheat", value: 0, boolean: true },
		ex9: { name: "Heat Removed on Kill", value: 0, boolean: true },
		ex10: { name: "Hot Bullets", value: 0, percent: true },
		ex11: { name: "Stun Duration", value: 0 }
	},
	mods: [
		[
			{
				selected: false,
				name: "Magnetic Refrigeration",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Cooling",
				text: "Cooling Rate",
				stats: {
					reload: { name: "Cooling Rate", value: 1.5 }
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
				name: "Improved Motor",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text: "Increased rate of fire and faster gyro stabilization",
				stats: {
					rate: { name: "Rate of Fire", value: 4 }
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
			},
			{
				selected: false,
				name: "Improved Platform Stability",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text: "Increased Accuracy",
				stats: {
					ex3: { name: "Increased Accuracy", value: 1, boolean: true }
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
				name: "Oversized Drum",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "Expanded Ammo Bags",
				stats: {
					ammo: { name: "Max Ammo", value: 600 }
				},
				cost: {
					credits: 2000,
					bismor: 15,
					croppa: 0,
					enorPearl: 24,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
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
					dmg: { name: "Damage", value: 2 }
				},
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 24,
					enorPearl: 0,
					jadiz: 15,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Hardened Rounds",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text: "Improved armor breaking",
				stats: {
					ex4: { name: "Armor Breaking", value: 200, percent: true }
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
				name: "Stun Duration",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Stunned enemies are incapacitated for a longer period of time",
				stats: {
					ex11: { name: "Stun Duration", value: 0 }
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
				name: "Blowthrough Rounds",
				icon: "Icon_Upgrade_BulletPenetration",
				type: "Blow Through",
				text: "Shaped bullets capable of passing through a target!",
				stats: {
					ex6: { name: "Max Penetrations", value: 1 }
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
			}
		],
		[
			{
				selected: false,
				name: "Variable Chamber Pressure",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Damage increase when fully stabilized",
				stats: {
					ex7: { name: "Max Stabilization Damage Bonus", value: 15, percent: true }
				},
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 72,
					enorPearl: 50,
					jadiz: 48,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Lighter Barrel Assembly",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				text: "Start killing things sooner with a shorter spinup time",
				stats: {
					ex1: { name: "Spinup Time", value: 0.4, subtract: true }
				},
				cost: {
					credits: 4800,
					bismor: 48,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 72,
					umanite: 50,
					err: 0
				}
			},
			{
				selected: false,
				name: "Magnetic Bearings",
				icon: "Icon_Upgrade_Special",
				type: "Special",
				text: "Barrels keep spinning for a longer time after firing, keeping the gun stable for longer.",
				stats: {
					ex2: { name: "Spindown Time", value: 3, subtract: true }
				},
				cost: {
					credits: 4800,
					bismor: 50,
					croppa: 72,
					enorPearl: 0,
					jadiz: 0,
					magnite: 48,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Aggressive Venting",
				icon: "Icon_Upgrade_Explosion",
				type: "Explosion",
				text: "Burn everything around you and send enemies running when the minigun overheats.",
				stats: {
					ex8: { name: "Critical Overheat", value: 1, boolean: true }
				},
				cost: {
					credits: 5600,
					bismor: 140,
					croppa: 64,
					enorPearl: 70,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Cold As The Grave",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Cooling",
				text: "Every kill cools the gun",
				stats: {
					ex9: { name: "Heat Removed on Kill", value: 1, boolean: true }
				},
				cost: {
					credits: 5600,
					bismor: 0,
					croppa: 0,
					enorPearl: 70,
					jadiz: 140,
					magnite: 64,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Hot Bullets",
				icon: "Icon_Upgrade_Heat",
				type: "Heat",
				text: "Rounds fired when the heat meter is red will burn the target",
				stats: {
					ex10: { name: "Hot Bullets", value: 50, percent: true }
				},
				cost: {
					credits: 5600,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 140,
					magnite: 70,
					umanite: 64,
					err: 0
				}
			}
		]
	]
};
