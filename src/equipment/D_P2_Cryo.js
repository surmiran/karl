export default {
	selected: false,
	modified: false,
	name: "Cryo Cannon",
	class: "Heavy Weapon",
	icon: "equipment.D_P2_Cryo",
	baseStats: {
		dmg: { name: "Damage", value: 7 },
		clip: { name: "Tank Capacity", value: 400 },
		rate: { name: "Chargeup Time", value: 0.8 },
		reload: { name: "Repressurization Delay", value: 1.7 },
		ex1: { name: "Cold Stream Reach", value: 6 },
		ex2: { name: "Freezing Power", value: 5 },
		ex3: { name: "Pressure Drop Rate", value: 100, percent: true },
		ex4: { name: "Pressure Gain Rate", value: 100, percent: true },
		ex5: { name: "Frozen Targets can Shatter", value: 0, boolean: true },
		ex6: { name: "Area Cold Damage", value: 0, boolean: true },
		ex7: { name: "Flow Rate", value: 100, percent: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Larger Pressure Chamber",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				cost: {
					credits: 1200,
					bismor: 0,
					croppa: 25,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Shoot longer before needing to repressurize.",
				stats: {
					ex3: {
						name: "Pressure Drop Rate",
						value: 40,
						subtract: true,
						percent: true
					}
				}
			},
			{
				selected: false,
				name: "Improved 2nd Stage Pump",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				cost: {
					credits: 1200,
					bismor: 0,
					croppa: 0,
					enorPearl: 25,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Shorter chargeup time",
				stats: {
					rate: {
						name: "Chargeup Time",
						value: 0.5,
						subtract: true
					}
				}
			},
			{
				selected: false,
				name: "Stronger Cooling Unit",
				icon: "Icon_Upgrade_Cold",
				type: "Cold",
				cost: {
					credits: 1200,
					bismor: 25,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Freeze things faster",
				stats: {
					ex2: {
						name: "Freezing Power",
						value: 1
					}
				}
			}
		],
		[
			{
				selected: false,
				name: "High Pressure Reserve Tank",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 0,
					enorPearl: 15,
					jadiz: 24,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					clip: { name: "Tank Capacity", value: 50 }
				}
			},
			{
				selected: false,
				name: "Overclocked Ejection Turbine",
				icon: "Icon_Upgrade_Distance",
				type: "Reach",
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 0,
					enorPearl: 35,
					jadiz: 0,
					magnite: 50,
					umanite: 0,
					err: 0
				},
				text: "Longer reach",
				stats: {
					ex1: { name: "Cold Stream Reach", value: 3 }
				}
			},
			{
				selected: false,
				name: "Bypassed Integrity Check",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Overheat",
				cost: {
					credits: 2000,
					bismor: 15,
					croppa: 24,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text:
					"Shorter repressurisation delay. After reaching minimum pressure, the weapon will start the recovery faster.",
				stats: {
					reload: { name: "Repressurization Delay", value: 1.1, subtract: true }
				}
			}
		],
		[
			{
				selected: false,
				name: "Faster 1st Stage Pump",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 50,
					enorPearl: 0,
					jadiz: 35,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Faster pressure recovery when not firing.",
				stats: {
					ex4: { name: "Pressure Gain Rate", value: 70, percent: true }
				}
			},
			{
				selected: false,
				name: "Increased Chamber Pressure",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 35,
					umanite: 50,
					err: 0
				},
				text: "Shoot longer before needing to recharge",
				stats: {
					ex3: { name: "Pressure Drop Rate", value: 40, percent: true, subtract: true }
				}
			},
			{
				selected: false,
				name: "Increased Flow Volume",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				cost: {
					credits: 2800,
					bismor: 50,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 35,
					err: 0
				},
				text:
					"We overclocked your gun. It fires faster. Don't ask, just enjoy. Also probably don't tell Management, please.",
				stats: {
					ex7: { name: "Flow Rate", value: 20, percent: true }
				}
			}
		],
		[
			{
				selected: false,
				name: "Higher Water Content",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				cost: {
					credits: 4800,
					bismor: 72,
					croppa: 48,
					enorPearl: 50,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "More ice formation in stream causing more damage",
				stats: {
					dmg: { name: "Damage", value: 3 }
				}
			},
			{
				selected: false,
				name: "Improved Mixture",
				icon: "Icon_Upgrade_Cold",
				type: "Cold",
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 0,
					enorPearl: 50,
					jadiz: 72,
					magnite: 48,
					umanite: 0,
					err: 0
				},
				text: "Freeze things faster",
				stats: {
					ex2: { name: "Freezing Power", value: 2 }
				}
			},
			{
				selected: false,
				name: "Larger Reserve Tank",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 72,
					magnite: 50,
					umanite: 48,
					err: 0
				},
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					clip: { name: "Tank Capacity", value: 150 }
				}
			}
		],
		[
			{
				selected: false,
				name: "Fragile",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text: "Frozen targets can spontaniously shatter",
				stats: {
					ex5: { name: "Frozen Targets can Shatter", value: 1, boolean: true }
				},
				cost: {
					credits: 5600,
					bismor: 64,
					croppa: 70,
					enorPearl: 0,
					jadiz: 0,
					magnite: 140,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Cold Radiance",
				icon: "Icon_Upgrade_Cold",
				type: "Cold",
				text: "Cool things down in a 5m radius around you",
				stats: {
					ex6: { name: "Area Cold Damage", value: 1, boolean: true }
				},
				cost: {
					credits: 5600,
					bismor: 0,
					croppa: 0,
					enorPearl: 140,
					jadiz: 70,
					magnite: 0,
					umanite: 64,
					err: 0
				}
			}
		]
	]
};
