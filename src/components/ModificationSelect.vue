<template>
	<div class="modSelection">
		<h1 class="modSelectionTitle">Gear modifications</h1>
		<div v-for="(tier, tierId) in availableMods" :key="tierId" class="tierContainer">
			<h2>Tier {{ tierId + 1 }}</h2>
			<div v-for="(mod, modId) in tier" :key="modId"
			     v-on:click="selectMod(selectedClassId, selectedEquipmentId, tierId, modId, mod.selected)"
                 v-on:mouseover="hoverMod(selectedClassId, selectedEquipmentId, tierId, modId)"
			     class="tooltip-target modDisplay" :class="[mod.selected ? 'selectedTemp' : '']">
				<!--{{mod.name}}-->
				<svg viewBox="0 0 80 50" height="100%" class="mod"
				     :class="[mod.selected ? 'modBackgroundActive' : 'modBackground']">
					<path
						d="M 0.3679663,25 13.7826,0.609756 H 66.221625 L 79.636259,25 66.221625,49.390244 H 13.7826 L 0.3679663,25"/>
					<g>
						<svg xmlns="http://www.w3.org/2000/svg" y="10%" viewBox="0 0 80 50"
						     :class="[mod.selected ? 'modIconActive' : 'modIcon']" height="80%"
						     preserveAspectRatio="xMidYMid meet" v-html="getIconFromPath(mod.icon)"></svg>
					</g>
				</svg>
			</div>
		</div>
		<div class="modTextBox" v-if="!!hoveredMod.name">
			<div class="modTextBoxHeader">
				<div class="modTextBoxIcon">
					<svg viewBox="0 0 80 50" height="100%" class="mod modBackgroundActiveNoStroke">
						<path d="M 0.3679663,25 13.7826,0.609756 H 66.221625 L 79.636259,25 66.221625,49.390244 H 13.7826 L 0.3679663,25"/>
						<g>
							<svg xmlns="http://www.w3.org/2000/svg" y="10%" viewBox="0 0 80 50"
								 class="modIconActive" height="80%"
								 preserveAspectRatio="xMidYMid meet" v-html="getIconFromPath(hoveredMod.icon)"></svg>
						</g>
					</svg>
				</div>
				<div class="modTextBoxTitle">
					<p>{{hoveredMod.name}}</p>
					<p>{{hoveredMod.type}}</p>
					<p class="costList">
						<span class="costListItem" v-if="hoveredMod.cost.credits > 0"><img src="../assets/img/20px-Credit.png"/><span>{{hoveredMod.cost.credits}}</span></span>
						<span class="costListItem" v-if="hoveredMod.cost.bismor > 0"><img src="../assets/img/Bismor_icon.png"/><span>{{hoveredMod.cost.bismor}}</span></span>
						<span class="costListItem" v-if="hoveredMod.cost.croppa > 0"><img src="../assets/img/Croppa_icon.png"/><span>{{hoveredMod.cost.croppa}}</span></span>
						<span class="costListItem" v-if="hoveredMod.cost.enorPearl > 0"><img src="../assets/img/Enor_pearl_icon.png"/><span>{{hoveredMod.cost.enorPearl}}</span></span>
						<span class="costListItem" v-if="hoveredMod.cost.jadiz > 0"><img src="../assets/img/Jadiz_icon.png"/><span>{{hoveredMod.cost.jadiz}}</span></span>
						<span class="costListItem" v-if="hoveredMod.cost.magnite > 0"><img src="../assets/img/Magnite_icon.png"/><span>{{hoveredMod.cost.magnite}}</span></span>
						<span class="costListItem" v-if="hoveredMod.cost.umanite > 0"><img src="../assets/img/Umanite_icon.png"/><span>{{hoveredMod.cost.umanite}}</span></span>
					</p>
				</div>
			</div>
			<div>
				{{hoveredMod.text}}
			</div>
			<!--todo: show content of hovered modification!-->
		</div>
	</div>
</template>

<!--todo: make modification togglable (deactivate active mod when clicking again-->
<!--todo: reset button-->
<!--todo: release on steam guide once done, in addition to reddit and forums-->
<script>
import store from "../store";

export default {
	name: "ModificationSelect",
	computed: {
		selectedClassId: function() {
			return store.state.selected.class;
		},
		selectedEquipmentId: function() {
			return store.state.selected.equipment;
		},
		availableMods: function() {
			return store.state.tree[this.selectedClassId][this.selectedEquipmentId].mods;
		},
		hoveredMod: function() {
			return store.state.hovered;
		}
	},
	methods: {
		selectMod(classId, equipmentId, tierId, modId, selected) {
			console.log("select mod")
			if (selected) {
				console.log("de select all!")
			    store.commit("deSelectAllModifications", {
					classID: classId,
					equipID: equipmentId,
					tierID: tierId,
					modID: modId
				});
            } else {
				store.commit("selectModification", {
					classID: classId,
					equipID: equipmentId,
					tierID: tierId,
					modID: modId
				});
				store.commit("deSelectOtherModifications", {
					classID: classId,
					equipID: equipmentId,
					tierID: tierId,
					modID: modId
				});
			}
		},
		hoverMod(classId, equipmentId, tierId, modId) {
			store.commit("addToHovered", {
				classID: classId,
				equipID: equipmentId,
				tierID: tierId,
				modID: modId
			});
        },
		getSelected: function(mod) {
			console.log(mod);
			return mod.selected;
		},
		getIconFromPath: function(iconPath) {
			// combine icon from path with icon border!
			return store.state.icons.mods[iconPath];
		}
	}
};
</script>

<style scoped>
h2 {
	color: #fffbff;
	padding-right: 1rem;
}

.modSelectionTitle {
	width: 100%;
	background-color: #282117;
	color: #fffbff;
	font-size: 2rem;
	text-align: center;
	text-transform: uppercase;
}

.tierContainer {
	display: flex;
	padding: 0.5rem;
	justify-content: start;
	align-items: center;
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0) 40%,
		rgba(40, 33, 23, 1) 40%,
		rgba(40, 33, 23, 1) 60%,
		rgba(0, 0, 0, 0) 60%
	);
	color: #282117;
}

.modBackground {
	fill: #000000;
	stroke: #fc9e00;
	stroke-width: 2px;
}

.modBackgroundActive {
	fill: #fc9e00;
	stroke: #fffbff;
	stroke-width: 2px;
}
.modBackgroundActiveNoStroke {
	fill: #fc9e00;
	stroke-width: 0px;
}

.modIcon {
	fill: #5b402d;
	stroke: none;
}

.modIconActive {
	fill: #000000;
	stroke: none;
}

.mod {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}

.modDisplay {
	cursor: pointer;
	height: 4rem;
}

.modDisplay:hover .modBackground {
	stroke: #fffbff;
}

.modTextBox {
	padding-top: 1rem;
	color: #fffbff;
}
.modTextBoxIcon {
	height: 5rem;
}
	.modTextBoxHeader {
		display: flex;
		padding-bottom: 1rem;
	}
	.modTextBoxTitle p {
		margin: 0;
	}

	.costList {
		display: flex;
	}
.costListItem {
	display: flex;
	align-items: center;
}
.costListItem > img {
	padding-right: 0.2rem;
}
.costListItem > span {
	padding-right: 0.6rem;
}
</style>
