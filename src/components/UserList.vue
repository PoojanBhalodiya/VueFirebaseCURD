<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in Users" :key="user.key">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: user.key } }"
                class="btn btn-primary"
              >
                Edit
              </router-link>
              <button
                @click.prevent="deleteUser(user.key)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import db from "../FirebaseDB";

export default {
  data() {
    return {
      Users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const usersCollection = collection(db, "users");
        onSnapshot(usersCollection, (snapshot) => {
          this.Users = snapshot.docs.map((doc) => ({
            key: doc.id,
            ...doc.data(),
          }));
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        try {
          const userDocRef = doc(collection(db, "users"), id);
          await deleteDoc(userDocRef);
          console.log("Document deleted!");
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>
