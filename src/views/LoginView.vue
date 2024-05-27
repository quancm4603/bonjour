<template>
    <div class="login">
        <AuthenUser />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AuthenUser from "@/components/AuthenUser.vue"; // @ is an alias to /src

@Options({
  components: {
    AuthenUser,
  },
})
export default class LoginView extends Vue {}
</script>
