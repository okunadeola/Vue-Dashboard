<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    app
    v-model="drawer"
    
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Dashboard
          </v-list-item-title>
         
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          exact
        >

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-row justify="end">
       
    <v-avatar color="indigo">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
    <span class="pt-5 ml-2">Hello Ola</span>
  </v-row>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      
    </v-main>
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard/overview'},
          { title: 'Products', icon: 'mdi-chart-ppf', to: '/dashboard/products' },
          { title: 'Sales', icon: 'mdi-palette-swatch-variant', to: '/dashboard/sales' },
          { title: 'User', icon: 'mdi-account-box-multiple', to: '/dashboard/user' },
        ],
      
      }),
  }
</script>