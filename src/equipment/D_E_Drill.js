export default {
	selected: false,
	name: "Reinforced power drills",
	class: "support tool",
	icon: "equipment.D_E_Drill",
	baseStats: {
		dmg: { name: "Damage", value: 10 },
		ammo: { name: "Max Fuel", value: 35 },
		clip: { name: "", value: 0 },
		rate: { name: "Mining rate", value: 2 },
		reload: { name: "", value: 0 },
		ex1: { name: "Overheat Duration", value: 8 },
		ex2: { name: "Cooling Rate", value: 2 },
		ex3: { name: "Movement speed while drilling", value: 0, percent: true },
		ex4: { name: "Heat removal on Damage", value: 0, binary: true },
		ex5: { name: "", value: 0 },
		ex6: { name: "", value: 0 },
		ex7: { name: "", value: 0 },
		ex8: { name: "", value: 0 },
		ex9: { name: "", value: 0 }
	},
	mods: [
		[
			{
				selected: false,
				name: "Barbed Drills",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "More damage inflicted on enemies",
				stats: {
					dmg: { name: "Damage", value: 5 }
				},
				cost: {
					credits: 420,
					bismor: 0,
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
				name: "Hardened Drill Tips",
				icon: "Icon_Upgrade_Digging",
				type: "Digging",
				text: "Drill faster",
				stats: {
					rate: { name: "Mining rate", value: 1 },
					ex3: { name: "Movement speed while drilling", value: 10, percent: true },
					ex4: { name: "Heat removal on Damage", value: 1, binary: true }
				},
				cost: {
					credits: 420,
					bismor: 0,
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
				name: "Expanded fuel tanks",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "Carries more fuel",
				stats: {
					ammo: { name: "Max Fuel", value: 0 }
				},
				cost: {
					credits: 420,
					bismor: 0,
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
				name: "Magnetic Refrigeration",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Cooling",
				text: "Faster cooling for the drills when not in action",
				stats: {
					ex2: { name: "Cooling Rate", value: 1 }
				},
				cost: {
					credits: 0,
					bismor: 0,
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
				name: "Streamlined Integrity Check",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Overheat",
				text: "Can use drills sooner after an overheat",
				stats: {
					ex1: { name: "Overheat Duration", value: 3, subtract: true }
				},
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
		],
		[
			{
				selected: false,
				name: "Supercharged Motor",
				icon: "Icon_Upgrade_Digging",
				type: "Digging",
				text: "Drill faster.",
				stats: {
					rate: { name: "Mining rate", value: 1 },
					ex3: { name: "Movement speed while drilling", value: 10, percent: true },
					ex4: { name: "Heat removal on Damage", value: 1, binary: true }
				},
				cost: {
					credits: 0,
					bismor: 0,
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
				name: "Increased Tank Pressure",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "Carries more fuel",
				stats: {
					ammo: { name: "Max Fuel", value: 0 }
				},
				cost: {
					credits: 1100,
					bismor: 0,
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
				name: "Bloody Cold Drills",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Cooling",
				text: "Your drills cool when drilling enemies!",
				stats: {
					ex4: { name: "Heat removal on Damage", value: 1, binary: true }
				},
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		]
	]
};

