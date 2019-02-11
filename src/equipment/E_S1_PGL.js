export default {
	selected: false,
	modified: false,
	name: "Deepcore 40mm PGL",
	class: "Heavy Weapon",
	icon: "equipment.E_S1_PGL",
	baseStats: {
		dmg: { name: "Area Damage", value: 105 },
		ammo: { name: "Max Ammo", value: 8 },
		clip: { name: "Clip Size", value: 1 },
		rate: { name: "Rate of Fire", value: 2 },
		reload: { name: "Reload Time", value: 2 },
		ex1: { name: "Damage Radius", value: 2.5 },
		ex2: { name: "Armor Break Bonus", value: -50, percent: true },
		ex3: { name: "Fear Factor", value: 100, percent: true },
		ex4: { name: "Projectile Velocity", value: 0, percent: true },
		ex5: { name: "Converted to Fire", value: 0, percent: true },
		ex6: { name: "Stun Chance", value: 0, percent: true },
		ex7: { name: "Proximity Trigger", value: 0, binary: true },
		ex8: { name: "Direct Damage", value: 0 }
	},
	mods: [
		[
			{
				selected: false,
				name: "Fragmentary Shell",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "Damage radius increase",
				stats: {
					ex1: { name: "Damage Radius", value: 1 }
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
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "Expanded Ammo Bags",
				stats: {
					ammo: { name: "Max Ammo", value: 2 }
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
				name: "HE Compound",
				icon: "Icon_Upgrade_AreaDamage",
				type: "Area Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Area Damage", value: 15 }
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
				name: "Extra Ammo",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "Expanded Ammo Bags",
				stats: {
					ammo: { name: "Max Ammo", value: 2 }
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
				name: "Larger Payload",
				icon: "Icon_Upgrade_AreaDamage",
				type: "Area Damage",
				text: "More bang for the buck! Increases the damage done within the Area of Effect!",
				stats: {
					dmg: { name: "Area Damage", value: 25 }
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
				name: "High Velocity Grenades",
				icon: "Icon_Upgrade_ProjectileSpeed",
				type: "Projectile Speed",
				text:
					"We souped up the ejection mechanisms of your gun, so the projectiles are now fired at a much higher velocity.",
				stats: {
					ex4: { name: "Projectile Velocity", value: 180, percent: true }
				},
				cost: {
					credits: 1800,
					bismor: 0,
					croppa: 20,
					enorPearl: 0,
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
				name: "Incendiary Compound",
				icon: "Icon_Upgrade_Heat",
				type: "Heat",
				text: "50% damage converted to heat. This will reduce direct Damage, but will set enemies on fire.",
				stats: {
					ex5: { name: "Converted to Fire", value: 50, percent: true }
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
				name: "Pressure Wave",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text:
					"We're proud of this one. Armor shredding. Tear through that high-impact plating of those bug buggers like butter. What could be finer?",
				stats: {
					ex2: { name: "Armor Break Bonus", value: 500, percent: true }
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
				name: "Homebrew Explosive",
				icon: "Icon_Upgrade_AreaDamage",
				type: "Area Damage",
				text: "More bang for the buck! Increases the damage done within the Area of Effect!",
				stats: {
					dmg: { name: "Area Damage", value: 40 }
				},
				cost: {
					credits: 3800,
					bismor: 36,
					croppa: 0,
					enorPearl: 0,
					jadiz: 15,
					magnite: 25,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Nails + Tape",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text:
					'Fire in the hole! The Area of Effect is increased. (We advise keeping the term "safe distance" close to your heart)',
				stats: {
					ex1: { name: "Damage Radius", value: 1.5 }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 25,
					enorPearl: 15,
					jadiz: 36,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Concussive Blast",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Stuns creatures within the blast radius",
				stats: {
					ex6: { name: "Stun Chance", value: 100, percent: true }
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
			}
		],
		[
			{
				selected: false,
				name: "Proximity Trigger",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text:
					"Grenades will explode when they are close to an enemy. Damage goes up the longer the projectile flies. Up to +100%",
				stats: {
					ex7: { name: "Proximity Trigger", value: 1, binary: true }
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
				name: "Spiky Grenade",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Deals damage on direct impact",
				stats: {
					ex8: { name: "Direct Damage", value: 100 }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 60,
					enorPearl: 0,
					jadiz: 40,
					magnite: 0,
					umanite: 110,
					err: 0
				}
			}
		]
	]
};
