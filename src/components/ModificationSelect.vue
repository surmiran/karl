<template>
    <div class="modSelection">
        <h1 class="modSelectionTitle">Gear modifications</h1>
        <div v-for="(tier, tierId) in availableMods" :key="tierId" class="tierContainer">
            <h2>Tier {{ tierId + 1 }}</h2>
            <div v-for="(mod, modId) in tier" :key="modId" v-on:click="selectMod(selectedClassId, selectedEquipmentId, tierId, modId)"
                 class="modDisplay" :class="[mod.selected ? 'selectedTemp' : '']">
                <!--{{mod.name}}-->
                <svg viewBox="0 0 80 50" height="100%" class="mod" :class="[mod.selected ? 'modBackgroundActive' : 'modBackground']">
                    <path d="M 0.3679663,25 13.7826,0.609756 H 66.221625 L 79.636259,25 66.221625,49.390244 H 13.7826 L 0.3679663,25" />
                    <g>
                        <svg xmlns="http://www.w3.org/2000/svg" y="10%" viewBox="0 0 80 50" :class="[mod.selected ? 'modIconActive' : 'modIcon']" height="80%"
                             preserveAspectRatio="xMidYMid meet" v-html="getIconFromPath(mod.icon)"></svg>
                    </g>
                </svg>
            </div>
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
    background: linear-gradient(to bottom, rgba(0,0,0,0) 40%,rgba(40,33,23,1) 40%,rgba(40,33,23,1) 60%,rgba(0,0,0,0) 60%);
    color: #282117
}
.selectedTemp {
	color: yellow;
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
        height: 4rem
    }
</style>
