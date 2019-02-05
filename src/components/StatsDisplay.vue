<template>
	<div class="statsDisplay">
		<h1 class="equipmentTitle allCaps">{{ equipment.name }}</h1>
		<h2 class="equipmentSubTitle allCaps">{{ equipment.class }}</h2>
		<!-- todo: table?-->
		<div class="statsBaseContainer">
			<div v-for="(stat, statId) in calcStats.stats" :key="statId" class="statsContainer">
				<span class="statsText" :class="[stat.inactive ? 'inactiveStat' : '']">{{ stat.name }}:</span>
				<div class="statsValueContainer">
					<span class="statsValue fixedWidth">{{ stat.baseValue }}</span>
					<span class="statsModifier fixedWidth">{{ stat.modifier }}</span>
					<span class="statsValue fixedWidth" :class="[stat.modified ? 'modifiedStat' : '']">
						{{ stat.value }}<span v-if="stat.percent">%</span>
					</span>
				</div>
			</div>
			<h2>Total Costs:</h2>
			<p class="costList">
				<span class="costListItem" v-if="calcStats.cost.credits > 0">
					<img src="../assets/img/20px-Credit.png" />
					<span>{{ calcStats.cost.credits }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.bismor > 0">
					<img src="../assets/img/Bismor_icon.png" />
					<span>{{ calcStats.cost.bismor }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.croppa > 0">
					<img src="../assets/img/Croppa_icon.png" />
					<span>{{ calcStats.cost.croppa }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.enorPearl > 0">
					<img src="../assets/img/Enor_pearl_icon.png" />
					<span>{{ calcStats.cost.enorPearl }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.jadiz > 0">
					<img src="../assets/img/Jadiz_icon.png" />
					<span>{{ calcStats.cost.jadiz }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.magnite > 0">
					<img src="../assets/img/Magnite_icon.png" />
					<span>{{ calcStats.cost.magnite }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.umanite > 0">
					<img src="../assets/img/Umanite_icon.png" />
					<span>{{ calcStats.cost.umanite }}</span>
</span>
			</p>
		</div>
	</div>
</template>
<!--todo: show three values, base value, modified value, modification-->
<!--todo: show total cost of selected mods-->
<!--todo: show most cost effective upgrade in tier (most change %)-->
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

			const precisionCalc = a => {
				if (!isFinite(a)) return 0;
				var e = 1,
					p = 0;
				while (Math.round(a * e) / e !== a) {
					e *= 10;
					p++;
				}
				return p;
			};

			let costsArray = [];
			let stats = Object.keys(this.baseStats).map(key => {
				let upgradeForKey = aSelectedUpgrades.filter(element => {
					return !!element.stats[key];
				});
				let modifiedStats = Object.assign({}, this.baseStats[key]);
				modifiedStats.baseValue = modifiedStats.value;
				if (upgradeForKey.length > 0) {
					/*console.log(key);
					console.log(upgradeForKey);
					console.log(this.baseStats[key]);*/
					let modifier = {
						value: 0
					};
					for (let upgrade of upgradeForKey) {
						let upgradePrecision = precisionCalc(upgrade.stats[key].value);
						let statsPrecision = precisionCalc(modifier.value);
						let precision = statsPrecision > upgradePrecision ? statsPrecision : upgradePrecision;

						// todo: binary values as (+) or ( ) instead of 1 and 0
						if (upgrade.stats[key].subtract) {
							modifier.value = modifier.value - upgrade.stats[key].value;
							modifiedStats.value = (parseFloat(modifiedStats.value) - parseFloat(upgrade.stats[key].value)).toFixed(
								precision
							);
						} else {
							modifier.value = modifier.value + upgrade.stats[key].value;
							modifiedStats.value = (parseFloat(modifiedStats.value) + parseFloat(upgrade.stats[key].value)).toFixed(
								precision
							);
						}

						modifier.subtract = upgrade.stats[key].subtract;
						modifier.percent = upgrade.stats[key].percent;
					}
					modifiedStats.modifier = `${modifier.subtract ? "" : "+"}${modifier.value}${modifier.percent ? "%" : ""}`;
					modifiedStats.modified = true;

                    costsArray.push(upgradeForKey[0].cost)
				}
				if (modifiedStats.value === 0) {
					modifiedStats.inactive = true;
				}
				return modifiedStats;
			});

			let totalCost = {
                credits: 0,
                bismor: 0,
                croppa: 0,
                enorPearl: 0,
                jadiz: 0,
                magnite: 0,
                umanite: 0,
                err: 0
            };
			for (let cost of costsArray) {
                totalCost.credits += cost.credits;
                totalCost.bismor += cost.bismor;
                totalCost.croppa += cost.croppa;
                totalCost.enorPearl += cost.enorPearl;
                totalCost.jadiz += cost.jadiz;
                totalCost.magnite += cost.magnite;
                totalCost.umanite += cost.umanite;
                totalCost.err += cost.err;
			}
			console.error("sstats", stats)
			console.error("costs", totalCost)
			return {stats: stats, cost: totalCost};
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

	display: flex;
	flex-flow: column;
	align-items: center;
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
.statsBaseContainer {
	width: 90%;
}
.statsContainer {
	display: flex;
	width: 100%;
}
.fixedWidth {
	width: 33%;
}
.statsValueContainer {
	width: 45%;
	display: flex;
	justify-content: end;
}
.statsText {
	width: 55%;
	color: #fffbff;
}
.statsValue {
	color: #fc9e00;
	text-align: right;
}
.statsModifier {
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
