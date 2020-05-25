export const clearImageMixin = {
    methods: {
		clearImage: function () {
			if (this.imageName != '') {
				this.imageName = 'sunset.jpg'
			}
		}
	}
}