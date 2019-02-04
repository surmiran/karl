export default {
	selected: false,
	name: "Reinforced Impact Suit",
	class: "Armor",
	icon: "equipment.X_E_Armor",
	baseStats: {
		shield: { name: "Shield", value: 25 },
		explosion: { name: "Explosion Resistance", value: 0, percent: true },
		delay: { name: "Regeneration Delay", value: 7 },
		rate: { name: "Regeneration Rate", value: 100, percent: true },
		revive: { name: "Revive Invulnerability", value: 3 },
		carry: { name: "Extra Carrying Capacity", value: 0 },
		ex1: { name: "AoE Damage On Shield Break", value: 0, binary: true },
		ex2: { name: "AoE Stun On Shield Break", value: 0, binary: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Larger Capacitors",
				icon: "Icon_Upgrade_",
				type: "Resistance",
				text: "Your shield can absorb more damage before breaking.",
				stats: {
					shield: { name: "Shield", value: 2.5 }
				},
				cost: {
					credits: 1400,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 10,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Improved Generator",
				icon: "Icon_Upgrade_Duration",
				type: "Delay",
				text: "Shield begins to regenerate sooner.",
				stats: {
					delay: { name: "Regeneration Delay", value: 1, subtract: true }
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
				name: "Boosted Converter",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				text: "Shield regenerates at a much faster rate but after a longer initial delay",
				stats: {
					delay: { name: "Regeneration Delay", value: 1 },
					rate: { name: "Regeneration Rate", value: 50, percent: true }
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
				name: "Reactive Armor",
				icon: "Icon_Upgrade_Explosion",
				type: "Explosion Damage Resistance",
				text: "Fire in the hole! Fancy Reactive Armor plating takes half the sting out of any explosions.",
				stats: {
					explosion: { name: "Explosion Resistance", value: 50, percent: true }
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
				name: "Bigger Mineral Bag",
				icon: "Icon_Upgrade_Capacity",
				type: "Capacity",
				text: "You can collect more of each mineral before needing to deposit.",
				stats: {
					carry: { name: "Extra Carrying Capacity", value: 5 }
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
				name: "Overcharger",
				icon: "Icon_Upgrade_",
				type: "Resistance",
				text: "Your shield can absorb more damage before breaking",
				stats: {
					shield: { name: "Shield", value: 2.5 }
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
				name: "Shockwave",
				icon: "Icon_Upgrade_Explosive",
				type: "Area Damage",
				text: "Your shield breaks violently, damaging all enemies around you in the process.",
				stats: {
					ex1: { name: "AoE Damage On Shield Break", value: 1, binary: true }
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
				name: "Static Discharge",
				icon: "Icon_Upgrade_Electricity",
				type: "Electricity",
				text: "Whenever your shield breaks it releases a static discharge that has a chance to stun nearby enemies.",
				stats: {
					ex2: { name: "AoE Stun On Shield Break", value: 0, binary: true }
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
				name: "Breathing Room",
				icon: "Icon_Upgrade_Resistance",
				type: "Resistance",
				text: "Temporary invulnerability after being revived.",
				stats: {
					revive: { name: "Revive Invulnerability", value: 5 }
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
