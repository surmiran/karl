<template>
	<div class="modSelection">
		<h1 class="modSelectionTitle allCaps">Gear modifications</h1>
		<div v-for="(tier, tierId) in availableMods" :key="tierId" class="tierContainer">
			<h2>Tier {{ tierId + 1 }}<p v-if="tierId > 0" class="levelIndicator">Level {{tierId * 4}}</p></h2>
			<!-- todo: show level requirement  -->
			<div
				class="tierSubContainer"
				:class="[tier.length === 1 ? '' : tier.length === 2 ? 'tierBackgroundGradientHalf' : 'tierBackgroundGradient']"
			>
				<div
					v-for="(mod, modId) in tier"
					:key="modId"
					v-on:click="selectMod(selectedClassId, selectedEquipmentId, tierId, modId, mod.selected)"
					v-on:mouseover="hoverMod(selectedClassId, selectedEquipmentId, tierId, modId)"
					class="tooltip-target modDisplay"
					:class="[mod.selected ? 'selectedTemp' : '']"
				>
					<svg
						viewBox="0 0 80 50"
						height="100%"
						class="mod"
						:class="[mod.selected ? 'modBackgroundActive' : 'modBackground']"
					>
						<path
							d="M 0.3679663,25 13.7826,0.609756 H 66.221625 L 79.636259,25 66.221625,49.390244 H 13.7826 L 0.3679663,25"
						/>
						<g>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								y="10%"
								viewBox="0 0 80 50"
								:class="[mod.selected ? 'modIconActive' : 'modIcon']"
								height="80%"
								preserveAspectRatio="xMidYMid meet"
								v-html="getIconFromPath(mod.icon)"
							></svg>
						</g>
					</svg>
				</div>
				<div v-if="tier.length === 2" class="pseudoModDisplay"></div>
			</div>
		</div>
		<div class="modTextBox" v-if="!!hoveredMod.name">
			<div class="modTextBoxHeader">
				<div class="modTextBoxIcon">
					<svg viewBox="0 0 80 50" height="100%" class="modPadding modBackgroundActiveNoStroke">
						<path
							d="M 0.3679663,25 13.7826,0.609756 H 66.221625 L 79.636259,25 66.221625,49.390244 H 13.7826 L 0.3679663,25"
						/>
						<g>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								y="10%"
								viewBox="0 0 80 50"
								class="modIconActive"
								height="80%"
								preserveAspectRatio="xMidYMid meet"
								v-html="getIconFromPath(hoveredMod.icon)"
							></svg>
						</g>
					</svg>
				</div>
				<div class="modTextBoxTitle">
					<p class="allCaps">{{ hoveredMod.type }}</p>
					<p class="allCaps modificationName">{{ hoveredMod.name }}</p>
					<p class="costList">
						<span class="costListItem" v-if="hoveredMod.cost.credits > 0">
							<img src="../assets/img/20px-Credit.png" alt="Credits" title="Credits" />
							<span>{{ hoveredMod.cost.credits }}</span>
						</span>
						<span class="costListItem" v-if="hoveredMod.cost.bismor > 0">
							<img src="../assets/img/Bismor_icon.png" alt="Bismor" title="Bismor" />
							<span>{{ hoveredMod.cost.bismor }}</span>
						</span>
						<span class="costListItem" v-if="hoveredMod.cost.croppa > 0">
							<img src="../assets/img/Croppa_icon.png" alt="Croppa" title="Croppa" />
							<span>{{ hoveredMod.cost.croppa }}</span>
						</span>
						<span class="costListItem" v-if="hoveredMod.cost.enorPearl > 0">
							<img src="../assets/img/Enor_pearl_icon.png" alt="Enor Pearl" title="Enor Pearl" />
							<span>{{ hoveredMod.cost.enorPearl }}</span>
						</span>
						<span class="costListItem" v-if="hoveredMod.cost.jadiz > 0">
							<img src="../assets/img/Jadiz_icon.png" alt="Jadiz" title="Jadiz" />
							<span>{{ hoveredMod.cost.jadiz }}</span>
						</span>
						<span class="costListItem" v-if="hoveredMod.cost.magnite > 0">
							<img src="../assets/img/Magnite_icon.png" alt="Magnite" title="Magnite" />
							<span>{{ hoveredMod.cost.magnite }}</span>
						</span>
						<span class="costListItem" v-if="hoveredMod.cost.umanite > 0">
							<img src="../assets/img/Umanite_icon.png" alt="Umanite" title="Umanite" />
							<span>{{ hoveredMod.cost.umanite }}</span>
						</span>
					</p>
				</div>
			</div>
			<div>
				{{ hoveredMod.text }}
			</div>
			<div v-if="hoveredMod.increase" class="increaseOverBase">
				Increase over base stat: {{ parseInt(hoveredMod.increase) }}%
			</div>
		</div>
	</div>
</template>

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
			if (selected) {
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
	width: 11rem;
}

.levelIndicator {
	margin: 0;
	font-size: 1rem;
	font-style: normal;
	font-weight: normal;
}

.modSelection {
	flex: 1;
	height: 100%;
	width: 100%;
	padding-left: 1rem;
}

.modificationName {
	font-size: 1.2rem;
}

.modSelectionTitle {
	width: 100%;
	/*background-color: #282117;*/
	color: #fffbff;
	font-size: 1.2rem;
	text-align: center;
}

.tierContainer {
	display: flex;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	justify-content: start;
	align-items: center;
	color: #282117;
}

.tierSubContainer {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.tierBackgroundGradient {
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 40%,
			rgba(40, 33, 23, 1) 40%,
			rgba(40, 33, 23, 1) 60%,
			rgba(0, 0, 0, 0) 60%
		)
		no-repeat;
	background-size: 100% 100%;
}
.tierBackgroundGradientHalf {
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 40%,
			rgba(40, 33, 23, 1) 40%,
			rgba(40, 33, 23, 1) 60%,
			rgba(0, 0, 0, 0) 60%
		)
		no-repeat;
	background-size: 50% 100%;
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

.modPadding {
	padding-left: 0.5rem;
	padding-right: 0.5rem;
}

.modDisplay {
	cursor: pointer;
	height: 4rem;
	width: 6rem;
}
.pseudoModDisplay {
	height: 4rem;
	width: 6rem;
}

.modDisplay:hover .modBackground {
	stroke: #fffbff;
}

.modTextBox {
	min-height: 11rem;
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

.increaseOverBase {
	color: rgba(255, 251, 255, 0.4);
	padding-top: 1rem;
}

@media (max-width: 1024px) {
	.modSelection {
		flex: 0 0 100%;
		order: 1;
		padding: 0;
	}

	.tierSubContainer {
		max-width: 30rem;
	}
}

@media (max-width: 550px) {
	.modDisplay {
		height: 3rem;
		width: 4.8rem;
	}
	.pseudoModDisplay {
		height: 3rem;
		width: 4.8rem;
	}
	h2 {
		width: 20vw;
	}

	.modificationName {
		font-size: 1.2rem;
	}
}
</style>
