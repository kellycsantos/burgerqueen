<template>
    <nav class="h-screen border-r-2 bg-[#ec483bff] px-6 flex justify-between flex-col py-16">
        <div>        
        <ul class="flex flex-col ">
            <NuxtLink class=" h-16  items-center m-2" v-for="link in menuContent" :key="link.title"
            :to='link.to'><li class="bg-white shadow-lg shadow-[#ad0c00]/50 flex items-center p-2 rounded-md font-semibold"><img class="pr-4 w-16" :src="require(`../static/icons/${link.icon}.png`)">{{link.title}}</li></NuxtLink>

        </ul>
    </div>
    <div>
        <NuxtLink to='#'><li class="bg-gray-200 h-12 rounded-md flex items-center pl-4"><img class="pr-4 w-12" src='../static/icons/chat.png'>Fale Conosco</li></NuxtLink>

    </div>
    </nav>
</template>
<script>


export default ({
    data(){
        return{
            menuContent: [
                {title:'Pagina Inicial', to:'/', icon:'bq'},
                {title:'Cardapio', to:'/menu', icon:'all-menu'},
                {title:'Burgers', to:'/burgers', icon:'hamburger'},
                {title:'Acompanhamentos', to:'/sides', icon:'french-fries'},
                {title:'Bebidas', to:'/drinks', icon:'drink'},
                {title:'Sobremesas', to:'/desserts', icon:'milkshake'}               
            ]
        }
    }
})
</script>
