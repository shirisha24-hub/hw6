const app = Vue.createApp({
    data() {
      return {
        showDetails: false,
        edit: false,
        message: 'My Contacts',
        contacts: [
            {
              name: 'John Doe',
              email: 'john.doe@example.com',
              age: 35,
              link: 'https://www.linkedin.com/in/johndoe/',
            },
            {
              name: 'Jane Smith',
              email: 'jane.smith@example.com',
              age: 28,
              link: 'https://www.linkedin.com/in/janesmith/',
            },
            {
              name: 'Alice Johnson',
              email: 'alice.johnson@example.com',
              age: 42,
              link: 'https://www.linkedin.com/in/alicejohnson/',
            },
            {
              name: 'Bob Anderson',
              email: 'bob.anderson@example.com',
              age: 29,
              link: 'https://www.linkedin.com/in/bobanderson/',
            },
          ],
      };
    },
    methods: {
        toggleDetails() {
          this.showDetails = !this.showDetails;
        },
        toggleEdit() {
          this.edit = !this.edit;
        },
        incrementAge(index) {
          this.contacts[index].age++;
        },
      },
  });
  
  app.mount('#app');
  