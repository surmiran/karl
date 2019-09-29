export default {
	selected: false,
	modified: false,
	name: "Experimental Plasma Charger",
	class: "Pistol",
	icon: "equipment.D_S2_Plasma",
	baseStats: {
		dmg: { name: "Damage", value: 20 },
		clip: { name: "Battery Capacity", value: 120 },
		rate: { name: "Rate of Fire", value: 8.0 },
		reload: { name: "Cooling Rate", value: 100, percent: true },
		ex1: { name: "Charged Damage", value: 60 },
		ex2: { name: "Charged Area Damage", value: 60 },
		ex3: { name: "Charged Effect Radius", value: 2 },
		ex4: { name: "Charged Shot Ammo Use", value: 8 },
		ex5: { name: "Charge Speed", value: 100, percent: true },
		ex6: { name: "Heat Buildup When Charged", value: 100, percent: true },
		ex7: { name: "Projectile Velocity", value: 100, percent: true },
		/*ex8: { name: "Heat when Charging", value: 0 },*/
		ex9: { name: "Flying Nightmare", value: 0, boolean: true },
		ex10: { name: "No Charged Shot Insta-Overheat", value: 0, boolean: true },
		ex12: { name: "Thin Containment Field", value: 0, boolean: true },
		ex11: { name: "Projectile Bounces", value: 0, boolean: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Increased Particle Density",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Improves the damage caused by the normal shots.",
				stats: {
					dmg: { name: "Damage", value: 5 }
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
			},
			{
				selected: false,
				name: "Larger Battery",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Battery Capacity", value: 24 }
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
				name: "Higher Charged Plasma Energy",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Increases the direct damage for the charged projectile.",
				stats: {
					ex1: { name: "Charged Damage", value: 20 }
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
			}
		],
		[
			{
				selected: false,
				name: "Expanded Plasma Splash",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "Greater damage radius for the charged projectile explosion",
				stats: {
					ex3: { name: "Charged Effect Radius", value: 1.5 }
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
				name: "Charged Plasma Accelerator",
				icon: "Icon_Upgrade_ProjectileSpeed",
				type: "Projectile Speed",
				text: "Significantly increases the movement speed of both of the EPCs projectiles.",
				stats: {
					ex7: { name: "Projectile Velocity", value: 400, percent: true }
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
				name: "Reactive Shockwave",
				icon: "Icon_Upgrade_AreaDamage",
				type: "Area Damage",
				text: "More bang for the buck! Increases the damage done within the Area of Effect!",
				stats: {
					ex2: { name: "Charged Area Damage", value: 20 }
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
				name: "Improved Charge Efficiency",
				icon: "Icon_Upgrade_Fuel",
				type: "Energy Consumption",
				text: "A charged shot uses less energy",
				stats: {
					ex4: { name: "Charged Shot Ammo Use", value: 2, subtract: true }
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
				name: "Crystal Capacitors",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				text: "Prepare a charged shot much faster.",
				stats: {
					ex5: { name: "Charge Speed", value: 200, percent: true }
				},
				cost: {
					credits: 2200,
					bismor: 0,
					croppa: 30,
					enorPearl: 0,
					jadiz: 20,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Tweaked Radiator",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Cooling",
				text:
					"Increases the rate at which the weapon sheds heat, letting you shoot more rounds before overheating and also recovering faster from an overheat.",
				stats: {
					reload: { name: "Cooling Rate", value: 50, percent: true }
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
			}
		],
		[
			{
				selected: false,
				name: "Heat Shield",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Cooling",
				text: "Reduces how fast the weapon overheats when holding a charged shot.",
				stats: {
					ex6: { name: "Heat Buildup When Charged", value: 60, subtract: true }
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
			/* todo: check price */
			{
				selected: false,
				name: "High Density Battery",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Battery Capacity", value: 24 }
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
			}
		],
		[
			{
				selected: false,
				name: "Flying Nightmare",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text: "The charged projectile deals damage to nearby enemies while it flies but takes longer to charge up.",
				stats: {
					ex9: { name: "Flying Nightmare", value: 1, boolean: true },
					ex5: { name: "Charge Speed", value: 30, percent: true, subtract: true }
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
				name: "Thin Containment Field",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text:
					"A weaker containment field takes less energy to create thus producing less heat for Charged Shots. Be aware that any high-energy impact will destabilize the Charged Projectile causing a large area implosion.",
				stats: {
					ex10: { name: "No Charged Shot Insta-Overheat", value: 1, boolean: true },
					ex12: { name: "Thin Containment Field", value: 1, boolean: true }
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
				name: "Bouncy Plasma",
				icon: "Icon_Upgrade_Ricoshet",
				type: "Ricochet",
				text:
					"Regular shots now ricochet, please try not to hit yourself or your teammates while pulling off trick shots.",
				stats: {
					ex11: { name: "Projectile Bounces", value: 1, boolean: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 0,
					enorPearl: 110,
					jadiz: 60,
					magnite: 40,
					umanite: 0,
					err: 0
				}
			}
		]
	]
};
