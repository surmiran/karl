<template>
	<div class="classSelectContainer" v-on:click="selectClass()">
		<div :class="[isSelected ? 'equipmentTextActive' : 'equipmentText']">
			<h4>{{ name }}</h4>
		</div>
	</div>
</template>

<script>
import store from "../store";

export default {
	name: "ClassSelect",
	props: {
		name: String,
		classId: String
	},
	computed: {
		isSelected: function() {
			return store.state.selected.class === this.classId;
		}
	},
	methods: {
		selectClass() {
			console.log(this.name);
			console.log(this.classId);
			store.commit("selectClass", { classID: this.classId });
		}
	}
};
</script>

<style scoped>
.classSelectContainer {
	display: flex;
	cursor: pointer;
}
</style>
