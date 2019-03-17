export default {
	selected: false,
	modified: false,
	name: "LMG Gun Platform",
	class: "Sentry Gun",
	icon: "equipment.E_E_Sentry",
	baseStats: {
		ammo: { name: "Carried Amount", value: 425 },
		rate: { name: "Construction Time", value: 4 },
		clip: { name: "Sentry Ammo Capacity", value: 90 },
		reload: { name: "Reload Ammo Per Second", value: 45 },
		dmg: { name: "Damage", value: 4.5 },
		amount: { name: "Number of Sentries", value: 1 },
		ex1: { name: "Armor Break Bonus", value: 0, percent: true },
		ex2: { name: "Stun Chance", value: 0, percent: true },
		ex3: { name: "Defender System", value: 0, boolean: true },
		ex4: { name: "Manual Targeting", value: 0, boolean: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Gemini System",
				icon: "Icon_Upgrade_TwoTurrets",
				type: "Special",
				text: "Can deploy two separate sentries at once",
				stats: {
					amount: { name: "Number of Sentries", value: 1 }
				},
				cost: {
					credits: 360,
					bismor: 12,
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
				name: "High Velocity Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "An upgraded model with more of a punch.",
				stats: {
					dmg: { name: "Damage", value: 2.5 }
				},
				cost: {
					credits: 360,
					bismor: 0,
					croppa: 12,
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
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					ammo: { name: "Carried Amount", value: 90 }
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
				name: "Quick Deploy",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				text: "Takes less time to build a sentry.",
				stats: {
					rate: { name: "Construction Time", value: 2, subtract: true }
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
				name: "Widemouth Refill Port",
				icon: "Icon_Upgrade_Speed",
				type: "Reload Speed",
				text: "Refill a turret's ammo faster.",
				stats: {
					reload: { name: "Reload Ammo Per Second", value: 45 }
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
				name: "Penetrating Rounds",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text:
					"We're proud of this one. Armor shredding. Tear through that high-impact plating of those big buggers like butter. What could be finer?",
				stats: {
					ex1: { name: "Armor Break Bonus", value: 300, percent: true }
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
				name: "Stun",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Hit 'em so hard they can't recover. Every shot has a chance to stop the target in it's tracks.",
				stats: {
					ex2: { name: "Stun Chance", value: 20, percent: true }
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
				name: "High Capacity Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The sentry can fire more shots before refilling.",
				stats: {
					clip: { name: "Sentry Ammo Capacity", value: 30 }
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
				name: "Defender System",
				icon: "Icon_Upgrade_Special",
				type: "Special",
				text: "A design variation with greatly increased shot power and a focused scan angle",
				stats: {
					dmg: { name: "Damage", value: 5.5 },
					ex3: { name: "Defender System", value: 1, boolean: true }
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
				name: "Defender System",
				icon: "Icon_Upgrade_StrongerTurret",
				type: "Special",
				text: "Paint a target with your laser pointer and the LMG will take care of the rest.",
				stats: {
					ex4: { name: "Manual Targeting", value: 1, boolean: true }
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
