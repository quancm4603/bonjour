<template>
  <div>
    <form>
      <!-- Add your form fields here -->
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
    </form>
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { AccountService } from "@/../api";

console.log("AuthenUser.vue");

@Options({
  props: {
    email: String,
    password: String,
  },
})
export default class AuthenUser extends Vue {
  email = ""; // Khởi tạo giá trị ban đầu cho email là chuỗi rỗng
  password = ""; // Khởi tạo giá trị ban đầu cho password là chuỗi rỗng

  login() {
    // Add your login logic here
    if (this.email && this.password) {
      try {
        const responsePromise = AccountService.postApiAccountLogin({
          email: this.email,
          password: this.password,
        });

        responsePromise
          .then((response) => {
            // Xử lý phản hồi thành công
            console.log("Response from server:", response);
            // Trích xuất token từ phản hồi
            const token = response.token; // Thay 'token' bằng tên trường chứa token trong phản hồi thực tế từ API
          })
          .catch((error) => {
            // Xử lý lỗi nếu có
            console.error("Error logging in:", error);
          });
      } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error logging in:", error);
      }
    }
  }
}
</script>
