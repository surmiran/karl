<template>
	<div class="statsDisplay">
		<div v-for="(stat, statId) in calcStats" :key="statId">
			{{stat.name}}: {{stat.value}}
		</div>
	</div>
</template>

<script>
import store from "../store";

export default {
	name: "StatsDisplay",
	computed: {
		selectedClassId: function() {
			return store.state.selected.class;
		},
		selectedEquipmentId: function() {
			return store.state.selected.equipment;
		},
		baseStats: function() {
			return store.state.tree[this.selectedClassId][this.selectedEquipmentId].baseStats;
		},
		calcStats: function() {
			let aSelectedUpgrades = store.state.tree[this.selectedClassId][this.selectedEquipmentId].mods.reduce(
				(array, tierArray) => {
					array.push(...tierArray.filter(mod => mod.selected));
					return array;
				},
				[]
			);
			console.log(aSelectedUpgrades);
			console.log(this.baseStats);

			return Object.keys(this.baseStats).map(key => {
				let upgradeForKey = aSelectedUpgrades.filter(element => {
					return !!element.stats[key];
				});
				console.log(key);
				console.log(upgradeForKey);
				console.log(this.baseStats[key]);
				let modifiedStats = Object.assign({}, this.baseStats[key]);
				if (upgradeForKey.length > 0) {
					for (let upgrade of upgradeForKey) {
						modifiedStats.value += upgrade.stats[key].value;
					}
				}
				return modifiedStats;
			});
		}
	}
};
</script>

<style scoped>
</style>
