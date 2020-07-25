<template>
  <div class="about">
    <h1>This is an add page</h1>
    <div v-for="item in items" :key="item.key">
      <div v-if="!item.image">
        <h2>Select an image</h2>
        <input type="file" @change="onFileChange(item, $event)" />
      </div>
      <div v-else>
        <img :src="item.image" class="img-preview" />
        <button @click="removeImage(item)">Remove image</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: false,
        },
      ],
    };
  },
  methods: {
    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      // var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(item) {
      item.image = false;
    },
  },
};
</script>

<style>
.img-preview {
  width: 10em;
}
</style>
