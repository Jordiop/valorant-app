<template>
    <div class="">
        <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'5'"
            :coverflowEffect="{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }"
            :pagination="true"
            :modules="modules"
            class="mySwiper"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="agent in agents" :key="agent.id" class="items-center justify-center w-fit">
                <div class="flex flex-col items-center justify-center p-2 border border-black rounded-lg w-72 h-96">
                    <span class="text-xs font-bold">{{ agent.name }}</span>
                    <img class="" :src="returnFoto(agent.id)">
                </div>
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper>
    </div>
</template>
<script>
import { useValorantStore } from '@/stores/valorant'
import { mapState, mapActions } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
    name: "Characters-index",
    components: {
        Swiper,
        SwiperSlide
    }, 
    computed: {
        ...mapState(useValorantStore, {
            agents: "agents",
            isLoaded: "isLoaded",
            maps: "maps",
            weapons: "weapons",
            isLoading: "isLoading",
        }),
    },
    methods: {
        ...mapActions(useValorantStore, ['getAgents', 'getMaps', 'getWeapons']),
        returnFoto(id) {
            return '/src/assets/characters/'+ id + '_full.png' ?? 'https://via.placeholder.com/150'
        }
    },
    mounted() {
        this.getAgents()
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        modules: [EffectCoverflow, Pagination],
        onSwiper,
        onSlideChange,
      };
    },
}
</script>