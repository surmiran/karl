import Vue from "vue";
import Vuex from "vuex";
// imports for driller equipment
import D_P1_CRSPR from "./equipment/D_P1_CRSPR.js";
import D_P1_CRSPR_SVG from "./assets/D_P1_CRSPR.js";
import D_P2_Cryo from "./equipment/D_P2_Cryo.js";
import D_P2_Cryo_SVG from "./assets/D_P2_Cryo.js";
import D_S1_Subata from "./equipment/D_S1_Subata.js";
import D_S1_Subata_SVG from "./assets/D_S1_Subata.js";
import D_S2_Plasma from "./equipment/D_S2_Plasma.js";
import D_S2_Plasma_SVG from "./assets/D_S2_Plasma.js";
// imports for engineer equipment
import E_P1_Warthog from "./equipment/E_P1_Warthog.js";
import E_P1_Warthog_SVG from "./assets/E_P1_Warthog.js";
import E_P2_Stubby from "./equipment/E_P2_Stubby.js";
import E_P2_Stubby_SVG from "./assets/E_P2_Stubby.js";
import E_S1_PGL from "./equipment/E_S1_PGL.js";
import E_S1_PGL_SVG from "./assets/E_S1_PGL.js";
import E_S2_Breach from "./equipment/E_S2_Breach.js";
import E_S2_Breach_SVG from "./assets/E_S2_Breach.js";
// imports for gunner equipment

// imports for scout equipment

// imports for shared equipment

// imports for modification icons
import Icon_Upgrade_Distance from "./assets/mods/Icon_Upgrade_Distance.js";
import Icon_Upgrade_FireRate from "./assets/mods/Icon_Upgrade_FireRate.js";
import Icon_Upgrade_Fuel from "./assets/mods/Icon_Upgrade_Fuel.js";
import Class_level_icon from "./assets/mods/Class_level_icon.js";
import Icon_Upgrade_Aim from "./assets/mods/Icon_Upgrade_Aim.js";
import Icon_Upgrade_Ammo from "./assets/mods/Icon_Upgrade_Ammo.js";
import Icon_Upgrade_Area from "./assets/mods/Icon_Upgrade_Area.js";
import Icon_Upgrade_ArmorBreaking from "./assets/mods/Icon_Upgrade_ArmorBreaking.js";
import Icon_Upgrade_BulletPenetration from "./assets/mods/Icon_Upgrade_BulletPenetration.js";
import Icon_Upgrade_ChargeUp from "./assets/mods/Icon_Upgrade_ChargeUp.js";
import Icon_Upgrade_ClipSize from "./assets/mods/Icon_Upgrade_ClipSize.js";
import Icon_Upgrade_Cold from "./assets/mods/Icon_Upgrade_Cold.js";
import Icon_Upgrade_DamageGeneral from "./assets/mods/Icon_Upgrade_DamageGeneral.js";
import Icon_Upgrade_DefenseOne from "./assets/mods/Icon_Upgrade_DefenseOne.js";
import Icon_Upgrade_Digging from "./assets/mods/Icon_Upgrade_Digging.js";
import Icon_Upgrade_Duration from "./assets/mods/Icon_Upgrade_Duration.js";
import Icon_Upgrade_Electricity from "./assets/mods/Icon_Upgrade_Electricity.js";
import Icon_Upgrade_Explosion from "./assets/mods/Icon_Upgrade_Explosion.js";
import Icon_Upgrade_Explosive from "./assets/mods/Icon_Upgrade_Explosive.js";
import Icon_Upgrade_Explosive_Resistance from "./assets/mods/Icon_Upgrade_Explosive_Resistance.js";
import Icon_Upgrade_Fire_Resistance from "./assets/mods/Icon_Upgrade_Fire_Resistance.js";
import Icon_Upgrade_Flare_01 from "./assets/mods/Icon_Upgrade_Flare_01.js";
import Icon_Upgrade_Heat from "./assets/mods/Icon_Upgrade_Heat.js";
import Icon_Upgrade_MovementSpeed from "./assets/mods/Icon_Upgrade_MovementSpeed.js";
import Icon_Upgrade_Poison_Resistance from "./assets/mods/Icon_Upgrade_Poison_Resistance.js";
import Icon_Upgrade_Recoil from "./assets/mods/Icon_Upgrade_Recoil.js";
import Icon_Upgrade_Ricoshet from "./assets/mods/Icon_Upgrade_Ricoshet.js";
import Icon_Upgrade_ScareEnemies from "./assets/mods/Icon_Upgrade_ScareEnemies.js";
import Icon_Upgrade_Shot from "./assets/mods/Icon_Upgrade_Shot.js";
import Icon_Upgrade_Shotgun_Pellet from "./assets/mods/Icon_Upgrade_Shotgun_Pellet.js";
import Icon_Upgrade_Speed from "./assets/mods/Icon_Upgrade_Speed.js";
import Icon_Upgrade_SpeedUp from "./assets/mods/Icon_Upgrade_SpeedUp.js";
import Icon_Upgrade_Sticky from "./assets/mods/Icon_Upgrade_Sticky.js";
import Icon_Upgrade_Stun from "./assets/mods/Icon_Upgrade_Stun.js";
import Icon_Upgrade_TemperatureCoolDown from "./assets/mods/Icon_Upgrade_TemperatureCoolDown.js";
import Icon_Upgrade_Weakspot from "./assets/mods/Icon_Upgrade_Weakspot.js";

Vue.use(Vuex);
// todo: update state.selected on each click/selection and find a way to load from url. Keep all selection data in url or only the current weapon?
// todo: or only the current class? maybe have a binary url that references all classes and equipments?
// D_P1: 23 --> tier1: mod0 mod1  mod2  tier1: mod0 mod1  mod2  tier2: mod0 mod1  mod2
//											0    1     0            0     0     1           1     0     0
//          -->        256  128    64          32     16    8           4     2     1
//          --> 140
// URL: surmiran.github.io/karl/?selection={"D":{"P1":140,"P2":0}}
export default new Vuex.Store({
	state: {
		selected: {
			class: "D",
			equipment: "P1",
			slot1: 0,
			slot2: 0,
			slot3: 0,
			slot4: 0,
			slot5: 0
		},
		hovered: {},
		testJS: D_P1_CRSPR_SVG,
		icons: {
			equipment: {
				D_P1_CRSPR: D_P1_CRSPR_SVG,
				D_P2_Cryo: D_P2_Cryo_SVG,
				D_S1_Subata: D_S1_Subata_SVG,
				D_S2_Plasma: D_S2_Plasma_SVG,
				E_P1_Warthog: E_P1_Warthog_SVG,
				E_P2_Stubby: E_P2_Stubby_SVG,
				E_S1_PGL: E_S1_PGL_SVG,
				E_S2_Breach: E_S2_Breach_SVG
			},
			mods: {
                Icon_Upgrade_Distance: Icon_Upgrade_Distance,
                Icon_Upgrade_FireRate: Icon_Upgrade_FireRate,
                Icon_Upgrade_Fuel: Icon_Upgrade_Fuel,
                Class_level_icon: Class_level_icon,
                Icon_Upgrade_Aim: Icon_Upgrade_Aim,
                Icon_Upgrade_Ammo: Icon_Upgrade_Ammo,
                Icon_Upgrade_Area: Icon_Upgrade_Area,
                Icon_Upgrade_ArmorBreaking: Icon_Upgrade_ArmorBreaking,
                Icon_Upgrade_BulletPenetration: Icon_Upgrade_BulletPenetration,
                Icon_Upgrade_ChargeUp: Icon_Upgrade_ChargeUp,
								Icon_Upgrade_ClipSize: Icon_Upgrade_ClipSize,
                Icon_Upgrade_Cold: Icon_Upgrade_Cold,
                Icon_Upgrade_DamageGeneral: Icon_Upgrade_DamageGeneral,
                Icon_Upgrade_DefenseOne: Icon_Upgrade_DefenseOne,
                Icon_Upgrade_Digging: Icon_Upgrade_Digging,
                Icon_Upgrade_Duration: Icon_Upgrade_Duration,
                Icon_Upgrade_Electricity: Icon_Upgrade_Electricity,
                Icon_Upgrade_Explosion: Icon_Upgrade_Explosion,
                Icon_Upgrade_Explosive: Icon_Upgrade_Explosive,
                Icon_Upgrade_Explosive_Resistance: Icon_Upgrade_Explosive_Resistance,
                Icon_Upgrade_Fire_Resistance: Icon_Upgrade_Fire_Resistance,
                Icon_Upgrade_Flare_01: Icon_Upgrade_Flare_01,
                Icon_Upgrade_Heat: Icon_Upgrade_Heat,
                Icon_Upgrade_MovementSpeed: Icon_Upgrade_MovementSpeed,
                Icon_Upgrade_Poison_Resistance: Icon_Upgrade_Poison_Resistance,
                Icon_Upgrade_Recoil: Icon_Upgrade_Recoil,
                Icon_Upgrade_Ricoshet: Icon_Upgrade_Ricoshet,
                Icon_Upgrade_ScareEnemies: Icon_Upgrade_ScareEnemies,
                Icon_Upgrade_Shot: Icon_Upgrade_Shot,
                Icon_Upgrade_Shotgun_Pellet: Icon_Upgrade_Shotgun_Pellet,
                Icon_Upgrade_Speed: Icon_Upgrade_Speed,
                Icon_Upgrade_SpeedUp: Icon_Upgrade_SpeedUp,
                Icon_Upgrade_Sticky: Icon_Upgrade_Sticky,
                Icon_Upgrade_Stun: Icon_Upgrade_Stun,
                Icon_Upgrade_TemperatureCoolDown: Icon_Upgrade_TemperatureCoolDown,
                Icon_Upgrade_Weakspot: Icon_Upgrade_Weakspot,
			}
		},
		tree: {
			D: {
				P1: D_P1_CRSPR,
				P2: D_P2_Cryo,
				S1: D_S1_Subata,
				S2: D_S2_Plasma
			},
			E: {
				P1: E_P1_Warthog,
				P2: E_P2_Stubby,
				S1: E_S1_PGL,
				S2: E_S2_Breach
			},
			G: {},
			S: {}
		}
	},
	mutations: {
		selectClass: (state, indizes) => (state.selected.class = indizes.classID),
		selectEquipment: (state, indizes) => {
			state.selected.equipment = indizes.equipID;
			state.tree[indizes.classID][indizes.equipID].selected = true;
		},
		deSelectOtherEquipments: (state, indizes) => {
			for (let equipment in state.tree[indizes.classID]) {
				if (equipment !== indizes.equipID) {
					state.tree[indizes.classID][equipment].selected = false;
				}
			}
		},
		selectModification: (state, indizes) => {
			return (state.tree[indizes.classID][indizes.equipID].mods[indizes.tierID][indizes.modID].selected = true);
		},
		deSelectOtherModifications: (state, indizes) => {
			let tierOfModification = state.tree[indizes.classID][indizes.equipID].mods[indizes.tierID];
			let modIdClicked = parseInt(indizes.modID);
			for (let mod in tierOfModification) {
				let modIdInLoop = parseInt(mod);
				if (modIdInLoop !== modIdClicked) {
					state.tree[indizes.classID][indizes.equipID].mods[indizes.tierID][modIdInLoop].selected = false;
				}
			}
		},
		deSelectAllModifications: (state, indizes) => {
			let tierOfModification = state.tree[indizes.classID][indizes.equipID].mods[indizes.tierID];
			for (let mod in tierOfModification) {
				let modIdInLoop = parseInt(mod);
				state.tree[indizes.classID][indizes.equipID].mods[indizes.tierID][modIdInLoop].selected = false;
			}
		},
		addToHovered: (state, indizes) => {
			state.hovered = state.tree[indizes.classID][indizes.equipID].mods[indizes.tierID][indizes.modID];
		}
	},
	actions: {}
});
