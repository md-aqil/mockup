new Vue({
    el: '#app',
    data: {
      contentData: [],
    },
    created() {
      // Retrieve data from local storage
      const storedData = JSON.parse(localStorage.getItem('contentData')) || [];
      this.contentData = storedData;
    },
  });
  