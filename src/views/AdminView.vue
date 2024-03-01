<template>
  <div class="adminpage">
    <h3>users</h3>
    <table>
      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>userAge</th>
          <th>Gender</th>
          <th>userRole</th>
          <th>emailAdd</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody v-for="user in users" :key="user.id">
        <tr>
          <td>{{ user.FirstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.Gender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td><button @click="deleteUser(user.userID)">deleteuser</button></td>
          <td><button @click="openModal('edit',user.userID)">edit user</button></td>
        </tr>
      </tbody>
    </table>
    <br><br><br><br>
    <h3>products</h3>
    <table>
      <thead>
        <tr>
      <th>productID</th>
      <th>productName</th>
      <th>quantity</th>
      <th>amount</th>
      <th>Category</th>
      <th>image</th>
    </tr>
    </thead>
    </table>
    <tbody v-for="product in products" :key="product.id" >
      <tr>
      <td>{{ product.prodID }}</td>
      <td>{{ product.productName }}</td>
      <td>{{product.quantity  }}</td>
      <td>{{  product.amount}}</td>
      <td>{{  product.Category}}</td>
      <td><img :src="product.productUrl" alt=""></td>
    </tr>
    </tbody>
    </div>
    <div v-if="editModal" class="modal" ref="editModal">
        <div class="modal-content">
          <span class="close" @click="closeModal('editModal')">&times;</span>
          <h2>Edit Product</h2>
          <form @submit.prevent="editProduct">
            <label for="editProductName">Name:</label>
            <input type="text" id="editProductName" v-model="editedProduct.name" required>
            <label for="editProductDescription">Description:</label>
            <textarea id="editProductDescription" v-model="editedProduct.description" required></textarea>
            <label for="editProductPrice">Price:</label>
            <input type="number" id="editProductPrice" v-model="editedProduct.price" required>
            <label for="editProductImage">Image:</label>
          <input type="file" id="editProductImage" @change="onEditImageChange" accept="image/*" required>
          <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
</template>

<script>
  export default {
    computed:{
      users(){
        return this.$store.state.users
      },
      products(){
        return this.$store.state.products
      }
    },
    mounted(){
      this.$store.dispatch('getUsers')
      this.$store.dispatch('getProducts')
    },
    methods:{
      deleteUser(userID){
        this.$store.dispatch('deleteUser',userID)
      },
      openModal(type, product) {
        if (type === 'add') {
          this.addModal = true;
        } else if (type === 'edit') {
          this.editedProduct = { ...product }; // Create a copy of the product to edit
          this.editModal = true;
        } else if (type === 'delete') {
          this.selectedProduct = product;
          this.deleteModal = true;
        }
        document.body.classList.add('modal-open');
      },
      closeModal(modalName) {
        this[modalName] = false;
        document.body.classList.remove('modal-open');
      },
    }
  }
</script>

<style scoped>
.adminpage {
  padding: 100px;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  margin: 5px;
}

input[type="text"],
input[type="email"],
input[type="role"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
img{
  width:  100px;
}
</style>