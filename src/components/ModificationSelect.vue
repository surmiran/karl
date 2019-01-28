<template>
    <div class="modSelection">
        <div v-for="(tier, tierId) in availableMods" :key="tierId" class="tierContainer">
            <h2>Tier {{ tierId + 1 }}</h2>
            <div v-for="(mod, modId) in tier" :key="modId" v-on:click="selectMod(selectedClassId, selectedEquipmentId, tierId, modId)"
                 :class="[mod.selected ? 'selectedTemp' : '']">
                {{mod.name}}
            </div>
        </div>
    </div>
</template>

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
		}
	},
	methods: {
		selectMod(classId, equipmentId, tierId, modId) {
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
		},
		getSelected: function(mod) {
			console.log(mod);
			return mod.selected;
		}
	}
};
</script>

<style scoped>
.tierContainer {
	display: flex;
}
.selectedTemp {
	color: yellow;
}
</style>
