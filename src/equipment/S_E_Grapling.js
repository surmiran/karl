export default {
	selected: false,
	name: "Grappling Gun",
	class: "Support Tool",
	icon: "equipment.S_E_Grapling",
	baseStats: {
		range: { name: "Max Range", value: 20 },
		cool: { name: "Cooldown", value: 4 },
		speed: { name: "Max Speed", value: 1500 },
		wind: { name: "Wind up time", value: 0.4 },
		risk: { name: "Risk of Accidental Death", value: "HIGH" },
		ex1: { name: "Fall damage reduction after release", value: 0, binary: true },
		ex2: { name: "Faster movement after release", value: 0, binary: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Improved Recharger",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				text: "Spend less time waiting and more time swinging",
				stats: {
					cool: { name: "Cooldown", value: 0.5, subtract: true }
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
				name: "Longer Cable",
				icon: "Icon_Upgrade_Distance",
				type: "Reach",
				text: "Increased range",
				stats: {
					range: { name: "Max Range", value: 5 }
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
				name: "Greater Cable Stretch",
				icon: "Icon_Upgrade_Distance",
				type: "Reach",
				text: "Increased range",
				stats: {
					range: { name: "Max Range", value: 5 }
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
				name: "High velocity ejection system",
				icon: "Icon_Upgrade_",
				type: "Projectile Speed",
				text: "Hook shoots out at a higher speed",
				stats: {
					wind: { name: "Wind up time", value: 0.2, subtract: true }
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
				name: "Overcharged Winch",
				icon: "Icon_Upgrade_",
				type: "Movement Speed",
				text: "Faster hook retraction means a faster dwarf. Survival not guaranteed",
				stats: {
					speed: { name: "Max Speed", value: 750 }
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
				name: "Safety First",
				icon: "Icon_Upgrade_",
				type: "Resistance",
				text: "Temporary fall damage reduction bonus after releasing the Grapling Gun",
				stats: {
					ex1: { name: "Fall damage reduction after release", value: 1, binary: true }
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
				name: "Momentum",
				icon: "Icon_Upgrade_",
				type: "Movement Speed",
				text: "Temporary movement speed bonus after releasing the Grapling Gun.",
				stats: {
					ex2: { name: "Faster movement after release", value: 1, binary: true }
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
				name: "Bypassed Integrity Check",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				text: "Faster cooldown and a voided warranty",
				stats: {
					cool: { name: "Cooldown", value: 1, subtract: true }
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
