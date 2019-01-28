import Vue from "vue";
import Vuex from "vuex";
import D_P1_CRSPR from "./equipment/D_P1_CRSPR.js";
import D_P1_CRSPR_SVG from "./assets/D_P1_CRSPR.js";
import D_P2_Cryo from "./equipment/D_P2_Cryo.js";
import D_P2_Cryo_SVG from "./assets/D_P2_Cryo.js";
import D_S1_Subata from "./equipment/D_S1_Subata.js";
import D_S1_Subata_SVG from "./assets/D_S1_Subata.js";
import D_S2_Plasma from "./equipment/D_S2_Plasma.js";
import D_S2_Plasma_SVG from "./assets/D_S2_Plasma.js";

import E_P1_Warthog from "./equipment/E_P1_Warthog.js";
import E_P1_Warthog_SVG from "./assets/E_P1_Warthog.js";
import E_P2_Stubby from "./equipment/E_P2_Stubby.js";
import E_P2_Stubby_SVG from "./assets/E_P2_Stubby.js";
import E_S1_PGL from "./equipment/E_S1_PGL.js";
import E_S1_PGL_SVG from "./assets/E_S1_PGL.js";
import E_S2_Breach from "./equipment/E_S2_Breach.js";
import E_S2_Breach_SVG from "./assets/E_S2_Breach.js";

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
			mods: {}
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
		}
	},
	actions: {}
});
