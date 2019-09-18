export default {
	selected: false,
	modified: false,
	name: "Breach Cutter",
	class: "Heavy Weapon",
	icon: "equipment.E_S2_Breach",
	baseStats: {
		dmg: { name: "Damage", value: 8 },
		ammo: { name: "Max Ammo", value: 12 },
		clip: { name: "Magazine Size", value: 2 },
		rate: { name: "Rate of Fire", value: 3 },
		reload: { name: "Reload Time", value: 3 },
		ex1: { name: "Projectile Lifetime", value: 0.9 },
		ex2: { name: "Plasma Beam Width", value: 1.5 },
		ex3: { name: "Plasma Expansion Duration", value: 0.5 },
		ex4: { name: "Armor Breaking", value: 50, percent: true },
		ex5: { name: "Explosive Goodbye", value: 0, boolean: true },
		ex6: { name: "There can be only one", value: 0, boolean: true },
		ex7: { name: "Double Split Line", value: 0, boolean: true }
	},
	/* todo, check if plasma expansion duration is correct */
	mods: [
		[
			{
				selected: false,
				name: "Extra Ammo",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "Expanded Ammo Bags",
				stats: {
					ammo: { name: "Max Ammo", value: 6 }
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
				name: "Condensed Plasma",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 2 }
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
				name: "Increase Line Size",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "Longer plasma line",
				stats: {
					ex2: { name: "Plasma Beam Width", value: 0.3 }
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
				name: "Clip Size",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "Clip size increased",
				stats: {
					clip: { name: "Magazine Size", value: 2 }
				},
				cost: {
					credits: 1800,
					bismor: 18,
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
				name: "Armor Breaking",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text: "Increases armor breaking capabilities of the plasma line",
				stats: {
					ex4: { name: "Armor Breaking", value: 400, percent: true }
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
				name: "Prolonged Power Generation",
				icon: "Icon_Upgrade_Duration",
				type: "Delay",
				text: "Projectile lifetime increase",
				stats: {
					ex1: { name: "Projectile Lifetime", value: 1.2 }
				},
				cost: {
					credits: 2200,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 30,
					magnite: 0,
					umanite: 20,
					err: 0
				}
			},
			{
				selected: false,
				name: "Refined Plasma Flow",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 2 }
				},
				cost: {
					credits: 3800,
					bismor: 25,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 15,
					umanite: 36,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Expanded Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... you can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 2 }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 36,
					enorPearl: 25,
					jadiz: 15,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Increase Line Size",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "Longer plasma line",
				stats: {
					ex2: { name: "Plasma Beam Width", value: 0.3 }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 0,
					enorPearl: 36,
					jadiz: 25,
					magnite: 0,
					umanite: 15,
					err: 0
				}
			},
			{
				selected: false,
				name: "Quick Deploy",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				text: "The line projectile opens almost immediately becoming more useful at closer range",
				stats: {
					ex3: { name: "Plasma Expansion Duration", value: 0.3, subtract: true }
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
			}
		],
		[
			{
				selected: false,
				name: "Explosive Goodbye",
				icon: "Icon_Upgrade_Explosion",
				type: "Explosion",
				text: "The projectile explodes at the end of its lifecycle",
				stats: {
					ex5: { name: "Explosive Goodbye", value: 1, boolean: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 40,
					enorPearl: 0,
					jadiz: 110,
					magnite: 60,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "There Can Be Only One",
				icon: "Icon_Upgrade_Explosion",
				type: "Explosion",
				text: "Explodes last projectile when a new one is fired",
				stats: {
					ex6: { name: "There can be only one", value: 1, boolean: true }
				},
				cost: {
					credits: 4400,
					bismor: 40,
					croppa: 60,
					enorPearl: 0,
					jadiz: 0,
					magnite: 110,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Double Line",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "The plasma covers a taller area making it easier to hit targets at various heights.",
				stats: {
					ex7: { name: "Double Split Line", value: 1, boolean: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 0,
					enorPearl: 110,
					jadiz: 60,
					magnite: 0,
					umanite: 40,
					err: 0
				}
			}
		]
	]
};
