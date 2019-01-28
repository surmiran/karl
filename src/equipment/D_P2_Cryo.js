export default {
	selected: false,
	name: "Cryo Cannon",
	class: "Heavy Weapon",
	icon: "equipment.D_P2_Cryo",
	baseStats: {
		dmg: { name: "Damage", value: 5 },
		ammo: { name: "Max Ammo", value: 300 },
		clip: { name: "Tank Size", value: 0 },
		rate: { name: "Chargeup Time", value: 0.6 },
		reload: { name: "Re-Pressurization Time", value: 1.5 },
		ex1: { name: "Cold Stream Reach", value: 6 },
		ex2: { name: "Freezing Power", value: 7 },
		ex3: { name: "Pressure Drop Rate", value: 0 },
		ex4: { name: "", value: 0 },
		ex5: { name: "", value: 0 },
		ex6: { name: "", value: 0 },
		ex7: { name: "", value: 0 },
		ex8: { name: "", value: 0 },
		ex9: { name: "", value: 0 }
	},
	mods: [
		[
			{
				name: "Larger Pressure Chamber",
				icon: "Icon_Upgrade_ClipSize",
				type: "clip",
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
				text: "Shoot longer before needing to recharge ",
				stats: {
					clip: {
						name: "Pressure Drop Rate",
						value: 30,
						subtract: true,
						percent: true
					}
				}
			},
			{
				name: "Improved 2nd Stage Pump",
				icon: "Icon_Upgrade_ChargeUp",
				type: "",
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
						value: 0.4,
						subtract: true,
						percent: false
					}
				}
			},
			{
				name: "Stronger Cooling Unit ",
				icon: "Icon_Upgrade_Cold",
				type: "",
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
						value: 2,
						subtract: false,
						percent: false
					}
				}
			}
		],
		[
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			},
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			},
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			}
		],
		[
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			},
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			},
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			}
		],
		[
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			},
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			},
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			}
		],
		[
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			},
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			},
			{
				name: "",
				icon: "",
				type: "",
				cost: {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "",
				stats: {}
			}
		]
	]
};
