<template>
	<div class="statsDisplay">
		<h1 class="equipmentTitle allCaps">{{ equipment.name }}</h1>
		<h2 class="equipmentSubTitle allCaps">{{ equipment.class }}</h2>
		<div v-for="(stat, statId) in calcStats" :key="statId" class="statsContainer">
			<span class="statsText" :class="[stat.inactive ? 'inactiveStat' : '']">{{ stat.name }}:</span>
			<span class="statsValue" :class="[stat.modified ? 'modifiedStat' : '']">{{ stat.value }}<span v-if="stat.percent">%</span></span>
			<span class="statsModifier">{{ stat.modifier }}</span>
		</div>
	</div>
</template>
<!--todo: show three values, base value, modified value, modification-->
<!--todo: show total cost of selected mods-->
<script>
import store from "../store";

const precision = (a) => {
	if (!isFinite(a)) return 0;
	var e = 1, p = 0;
	while (Math.round(a * e) / e !== a) { e *= 10; p++; }
	return p;
};

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
			return store.state.tree[this.selectedClassId][this.selectedEquipmentId];
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
						// do tofixed to bigger precision of either modifier or stat..
						if (upgrade.stats[key].subtract && upgrade.stats[key].percent) {
							modifier.value = modifier.value - upgrade.stats[key].value;
							modifiedStats.value = modifiedStats.value - upgrade.stats[key].value;
						} else if (upgrade.stats[key].subtract) {
							modifier.value = modifier.value - upgrade.stats[key].value;
							modifiedStats.value = (parseFloat(modifiedStats.value) - parseFloat(upgrade.stats[key].value)).toFixed(1);
						} else {
							modifier.value = modifier.value + upgrade.stats[key].value;
							modifiedStats.value = modifiedStats.value + upgrade.stats[key].value;
						}

						modifier.subtract = upgrade.stats[key].subtract;
						modifier.percent = upgrade.stats[key].percent;
					}
					modifiedStats.modifier = `${modifier.subtract ? "" : "+"}${modifier.value}${modifier.percent ? "%" : ""}`;
					modifiedStats.modified = true;
				}
				if (modifiedStats.value === 0) {
					modifiedStats.inactive = true;
				}
				return modifiedStats;
			});
		}
	}
};
</script>

<style scoped>
.statsDisplay {
	flex: 1;
	height: 100%;
	width: 100%;
	padding: 1rem;
}

@media (max-width: 1024px) {
	.statsDisplay {
		flex: 0 0 100%;
		order: 2;
	}
}

.equipmentTitle {
	text-align: center;
	color: #fc9e00;
	margin-bottom: 0;
}

.equipmentSubTitle {
	text-align: center;
	color: #fffbff;
	font-size: 1rem;
	margin-top: 0;
}
.statsContainer {
	display: flex;
	width: 60%;
}
.statsText {
	color: #fffbff;
}
.statsValue {
	color: #fc9e00;
	margin-left: auto;
}
.statsModifier {
	width: 3rem;
	text-align: right;
	color: #fccc00;
}
.modifiedStat {
	color: #fccc00;
}
.inactiveStat {
	color: #ada195;
}
</style>
