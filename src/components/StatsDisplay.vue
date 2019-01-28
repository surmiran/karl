<template>
	<div class="statsDisplay">
		<h1 class="equipmentTitle">{{equipment.name}}</h1>
		<div v-for="(stat, statId) in calcStats" :key="statId">
			<p class="stats">{{stat.name}}: {{stat.value}} <b>{{stat.modifier}}</b></p>
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
		equipment: function() {
			return store.state.tree[this.selectedClassId][this.selectedEquipmentId]
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
				let modifiedStats = Object.assign({}, this.baseStats[key]);
				if (upgradeForKey.length > 0) {
                    console.log(key);
                    console.log(upgradeForKey);
                    console.log(this.baseStats[key]);
				    let modifier = {
				        value: 0
					};
					for (let upgrade of upgradeForKey) {
					    if (upgrade.stats[key].subtract) {
                            modifier.value = modifier.value - upgrade.stats[key].value;
                            modifiedStats.value = modifiedStats.value - upgrade.stats[key].value;
						} else {
                            modifier.value = modifier.value + upgrade.stats[key].value;
                            modifiedStats.value = modifiedStats.value + upgrade.stats[key].value;
						}

					    modifier.subtract = upgrade.stats[key].subtract;
					    modifier.percent = upgrade.stats[key].percent;

					}
					modifiedStats.modifier = `${modifier.subtract ? '' : '+' }${modifier.value}${modifier.percent ? '%' : ''}`;
				}
				return modifiedStats;
			});
		}
	}
};
</script>

<style scoped>
	.equipmentTitle {
		text-align: center;
		color: #fffbff;
	}

	.stats {
		color: #fffbff;
	}
</style>
