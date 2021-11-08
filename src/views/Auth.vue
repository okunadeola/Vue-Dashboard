<template>
     <div class="text-center ma-2 loginWraper" >
       
    <v-card class="login"
      elevation="2"
      loading
      outlined
    >
    <v-card-title >Login</v-card-title>
         <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <v-text-field
            label="Email"
             clearable
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="6"
        >
          <v-text-field
            label="Password"
             clearable
            placeholder="Placeholder"
          ></v-text-field>
        </v-col>

        
      </v-row>
       <v-btn
            color="primary"
            text
            @click="submit"
          >
            Login
          </v-btn>
    </v-container>
  </v-form>
    </v-card>    
  </div>
</template>

<script>
export default {
name: 'Auth',
data(){
  return {
    snackbar: false,
    text: `Hello, I'm a snackbar`,
  }
},

  methods:{
    submit(){
      console.log(this.$store.state.isAuthenticated);
      this.$store.commit({ type:"setAuthentication",});
      this.$router.push("/dashboard/overview")  
      // console.log(this.$store.state.isAuthenticated);

    }
  }
}
</script>
<style>

 .loginWraper{
   width: 100%;
   margin: 50px auto
 }
 .login{
   margin: 0 auto;
   width: 500px;
 }


</style>









