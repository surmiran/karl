<template>
	<div class="weaponSelectContainer" v-on:click="selectEquip()">
		<!--todo: either find a way to set the viewbox dynamically for each icon or set it on the svgs, so that all equipment icons have the same fixed viewbox..-->
		<!-- https://www.creativebloq.com/how-to/10-golden-rules-for-responsive-svgs -->
		<div class="flexboxWeaponSelect" :class="[getSelected ? 'equipmentActive' : 'equipment']">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 180 90"
				:class="[getSelected ? 'equipmentIconActive' : 'equipmentIcon']"
				height="70%"
				preserveAspectRatio="xMidYMid meet"
				v-html="getIconFromPath"
			></svg>
		</div>
		<div :class="[getSelected ? 'equipmentTextActive' : 'equipmentText']">
			<h4>{{ name }}</h4>
		</div>
	</div>
</template>

<script>
import store from "../store";

export default {
	name: "EquipmentSelect",
	props: {
		iconPath: String,
		name: String,
		classId: String,
		equipmentId: String,
		data: Object
	},
	computed: {
		getIconFromPath: function() {
			console.log("get icon from path:");
			console.log(this);
			let aPath = this.iconPath.split(".");
			if (aPath.length < 2) {
				return "";
			}
			return store.state.icons[aPath[0]][aPath[1]];
		},
		getSelected: function() {
			console.log(this.data);
			return this.data.selected;
		}
	},
	methods: {
		selectEquip() {
			console.log(this.classId);
			console.log(this.equipmentId);
			console.log(this.data);
			store.commit("selectEquipment", {
				classID: this.classId,
				equipID: this.equipmentId
			});
			store.commit("deSelectOtherEquipments", {
				classID: this.classId,
				equipID: this.equipmentId
			});
		}
	}
};
</script>

<style scoped>
	h4 {
		white-space: nowrap;
	}

.weaponSelectContainer {
	display: flex;
	cursor: pointer;
}
.weaponSelectContainer:hover .equipmentText {
	color: #fffbff;
}
.weaponSelectContainer:hover .equipmentIcon {
	fill: #fffbff;
}

.flexboxWeaponSelect {
	display: flex;
	align-items: center;
	height: 5rem;
}

.flexboxWeaponSelect > svg {
	margin: 0.5rem;
}
</style>
