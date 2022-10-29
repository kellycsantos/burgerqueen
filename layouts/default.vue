<template>
    <div>
        <div class="flex h-screen overflow-hidden ">
    <SideMenu class="w-3/12 min-w-[300px] max-w-[450px]" />
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
import TopBar from '@/components/TopBar.vue'
import CardContainer from '@/components/ProductContainer.vue'

export default({
    name:'LayoutDefault',
    components:{
        Menu,
        TopBar,
        CardContainer
    }
})
</script>