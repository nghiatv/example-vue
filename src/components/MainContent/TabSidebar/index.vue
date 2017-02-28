<template>
    <div class="right-content" :style="rightContentPosition">

        <ul class="nav nav-tabs navtab-bg nav-justified">
            <li class="">
                <a href="#"  class="m-b-0" @click="toggleExpandMode" >
                    <i class="fa fa-chevron-right"  title="Thu nhỏ"></i>
                </a>
            </li>
            <li class="active">
                <a href="#home1" data-toggle="tab" aria-expanded="false" class="m-b-0" >
                    <span class="" ><i class="fa fa-bookmark-o" data-toggle="tooltip" data-placement="bottom" title="Giáo trình"></i></span>
                </a>
            </li>
            <li class="">
                <a href="#profile1" data-toggle="tab" aria-expanded="true" class="m-b-0">
                    <span class=""><i class="fa fa-book" data-toggle="tooltip" data-placement="bottom" title="Ghi chú"></i></span>
                </a>
            </li>
            <li class="">
                <a href="#comment" data-toggle="tab" aria-expanded="false" class="m-b-0">
                    <span class=""><i class="fa fa-comments-o" data-toggle="tooltip" data-placement="bottom" title="Thảo luận"></i></span>
                </a>
            </li>

        </ul>
        <div class="tab-content">
            <div class="tab-pane" id="home1">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
            </div>
            <div class="tab-pane active" id="profile1">
                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
          <comment></comment>

        </div>
    </div>
</template>
<style scoped lang="css">
    .tab-content{
        height: calc(100% - 50px);
        overflow-y: auto;
    }
   @media all and (max-width: 767px) {
       .nav-tabs.nav-justified>li {
            display: table-cell;
            width: 1%;
        }
   }

</style>
<script type="text/javascript">
    import {mapMutations, mapActions, mapGetters} from 'vuex'
    import Comment from './Comment/index.vue'

    export default{
        data(){
            return{

            }
        },
        computed: {
                ...mapGetters('expandMode',[
                        'rightContentPosition'
                ])

//            rightContentPosition: function(){
//                return this.$store.getters['expandMode/rightContentPosition'];
//            }
        },
        mounted: function() {

        },
        methods: {
                ...mapActions('expandMode',[
                    'toggleExpandMode'
                ])
//            toggleExpandMode: function(){
//                this.$store.dispatch('expandMode/toggleExpandMode')
//            }
        },
        components:{
            Comment: Comment
        },

    }

</script>
