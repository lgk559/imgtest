import dayjs from "dayjs"
export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.vueApp.directive('timeformat', {
        mounted(el, binding){
            // console.log(el,binding.value)
            const time = dayjs(binding.value).format('YYYY-MM-DD');
            el.innerText = time;
        }
    })
})