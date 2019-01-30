<template>
	<div id="app" class="app">
		<!--<div class="green" v-html="svg"></div>
		<img alt="Vue logo" src="./assets/logo.png">-->
		<div class="equipmentSelectContainer">
			<ClassSelect :classId="'D'" :name="'Driller'"/>
			<ClassSelect :classId="'E'" :name="'Engineer'"/>
			<ClassSelect :classId="'G'" :name="'Gunner'"/>
			<ClassSelect :classId="'S'" :name="'Scout'"/>
			<h1 class="shareText">Share Link</h1><!--upload configuration for management approval-->
			<!--todo: use https://sharingbuttons.io/ ?-->
		</div>
		<div>
			<div v-if="selectedClass === 'D'" class="equipmentSelectContainer">
				<EquipmentSelect v-for="(equipment, equipmentId) in drillerEquipment"
				                 :key="equipmentId" :iconPath="equipment.icon" :name="equipment.name" :classId="'D'"
				                 :equipmentId="equipmentId" :data="equipment"/>
			</div>
			<div v-if="selectedClass === 'E'" class="equipmentSelectContainer">
				<EquipmentSelect v-for="(equipment, equipmentId) in engineerEquipment"
				                 :key="equipmentId" :iconPath="equipment.icon" :name="equipment.name" :classId="'E'"
				                 :equipmentId="equipmentId" :data="equipment"/>
			</div>
			<div v-if="selectedClass === 'G'" class="equipmentSelectContainer">
				<EquipmentSelect v-for="(equipment, equipmentId) in gunnerEquipment"
				                 :key="equipmentId" :iconPath="equipment.icon" :name="equipment.name" :classId="'G'"
				                 :equipmentId="equipmentId" :data="equipment"/>
			</div>
			<div v-if="selectedClass === 'S'" class="equipmentSelectContainer">
				<EquipmentSelect v-for="(equipment, equipmentId) in scoutEquipment"
				                 :key="equipmentId" :iconPath="equipment.icon" :name="equipment.name" :classId="'S'"
				                 :equipmentId="equipmentId" :data="equipment"/>
			</div>
		</div>
		<div class="mainContainer">
			<StatsDisplay/>
			<ModificationSelect/>
		</div>
	</div>
</template>

<script>
import ClassSelect from "./components/ClassSelect.vue";
import EquipmentSelect from "./components/EquipmentSelect.vue";
import ModificationSelect from "./components/ModificationSelect.vue";
import StatsDisplay from "./components/StatsDisplay.vue";
import store from "./store";

export default {
	name: "app",
	components: {
		ClassSelect,
		EquipmentSelect,
		ModificationSelect,
		StatsDisplay
	},
	computed: {
		svg() {
			return store.state.testJS;
		},
		selectedClass() {
			return store.state.selected.class;
		},
		drillerEquipment() {
			return store.state.tree.D;
		},
		engineerEquipment() {
			return store.state.tree.E;
		},
		gunnerEquipment() {
			return store.state.tree.G;
		},
		scoutEquipment() {
			return store.state.tree.S;
		},
		classes() {
			return store.state.tree;
		}
	}
};
</script>

<style>
body {
	display: flex;
	justify-content: center;
	/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#322c20+0,5f5137+100 */
	background: #322c20; /* Old browsers */
	background: -moz-linear-gradient(-45deg, #322c20 0%, #5f5137 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(-45deg, #322c20 0%,#5f5137 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(135deg, #322c20 0%,#5f5137 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#322c20', endColorstr='#5f5137',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: #2c3e50;
	margin-top: 60px;
	max-width: 1280px;
	background-color: #393220;
}
/*todo: make all backgrounds transparent!*/

.mainContainer {
	display: flex;
	flex-wrap: wrap;
	/*height: 5rem;*/
}
.shareText {
	color: #fc9e00;
	margin-left: auto;
	padding-right: 1rem
}
.statsDisplay {
	flex: 1;
	height: 100%;
	width: 100%;
	padding: 1rem;
}

.modSelection {
	flex: 1;
	height: 100%;
	width: 100%;
	padding: 1rem;
}

@media (max-width: 1024px) {
	.modSelection {
		flex: 0 0 100%;
		order: 1;
	}

	.statsDisplay {
		flex: 0 0 100%;
		order: 2;
	}
}

.equipment {
	background-color: #5b402d;
	color: #352e1e;
}

.equipmentActive {
	background-color: #fc9e00;
	color: #352e1e;
}

.equipmentIcon {
	fill: #ada195;
}

.equipmentIconActive {
	fill: #fffbff;
}

.equipmentText {
	padding-left: 0.5rem;
	padding-right: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #352e1e;
	color: #ada195;
}

.equipmentTextActive {
	padding-left: 0.5rem;
	padding-right: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #010103;
	color: #fffbff;
}

.equipmentSelectContainer {
	display: flex;
	flex-wrap: wrap;
	border-top: 5px solid #fc9e00;
	background-color: #352e1e;
	margin-bottom: 0.5rem;
}
</style>
