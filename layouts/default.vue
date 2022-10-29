<template>
    <div>
        <div class="flex h-screen overflow-hidden ">
    <SideMenu class="hidden sm:flex sm: w-3/12 min-w-[300px] max-w-[450px]" />
    <MenuMobile class="sm:hidden" />
    <div class="w-9/12">
      <TopBar />
      <CardContainer />
    </div>
  </div>
       <NuxtChild/>
      
    </div>
</template>
<script>
import Menu from '@/components/SideMenu.vue'
import MenuMobile from '@/components/SideMenuMobile.vue'
import TopBar from '@/components/TopBar.vue'
import CardContainer from '@/components/ProductContainer.vue'

export default({
    name:'LayoutDefault',
    components:{
        Menu,
        MenuMobile,
        TopBar,
        CardContainer
    }
})
</script>