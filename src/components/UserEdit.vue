<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Update User</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            required
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input
            type="text"
            class="form-control"
            v-model="user.phone"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Update User</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { doc, getDoc, updateDoc } from "firebase/firestore";
import  db  from "../FirebaseDB";

export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    const userId = this.$route.params.id;
    const userDocRef = doc(db, "users", userId);

    getDoc(userDocRef)
      .then((doc) => {
        if (doc.exists()) {
          this.user = doc.data();
        } else {
          console.log("User document does not exist!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      const userId = this.$route.params.id;
      const userDocRef = doc(db, "users", userId);

      updateDoc(userDocRef, this.user)
        .then(() => {
          console.log("User successfully updated!");
          this.$router.push("/list");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
