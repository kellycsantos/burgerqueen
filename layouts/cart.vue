<template>
    <div class="overflow-hidden m-0 p-0 ">
        
        <NuxtLink to="/"><div class="flex h-[6vh] px-2 bg-[#ec483b]"><img  class="" src="@/static/icons/back-arrow.png"></div></NuxtLink>
        <NuxtChild/>
    </div>
</template>
<script>
export default({
    name:'CartLayout'
})
</script>
