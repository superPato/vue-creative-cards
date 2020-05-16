<template>
  <div class="row">
		<div class="col-sm-6 card edit-area">
            <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload><hr>
		</div>
		<div class="col-sm-6 card edit-display">
			<cc-image-output :displayImage="imageName" :containerHeight="350" :clearImageProp="clearImage"></cc-image-output>
		</div>
	</div>
</template>

<script>
import ImageUpload from './ImageUpload.vue';
import ImageOutput from './ImageOutput.vue';

export default {
	data: function () {
		return {
			imageName: ''
		}
	},
	components: {
		ccImageUpload: ImageUpload,
		ccImageOutput: ImageOutput,
	}
}
</script>

<style>
	
</style>