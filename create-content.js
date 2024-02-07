new Vue({
    el: '#app',
    data: {
      content: '',
      imageData: null,
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.imageData = reader.result;
          };
          reader.readAsDataURL(file);
        }
      },
      submitForm() {
        const newContent = {
          content: this.content,
          image: this.imageData,
        };
  
        // Get existing data from local storage or initialize an empty array
        const existingData = JSON.parse(localStorage.getItem('contentData')) || [];
        existingData.push(newContent);
  
        // Save the updated data back to local storage
        localStorage.setItem('contentData', JSON.stringify(existingData));
  
        // Clear form fields
        this.content = '';
        this.imageData = null;
        alert('Content submitted successfully!');
      },
    },
  });
  