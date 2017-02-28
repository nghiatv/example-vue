<template>
    <div class="side-bar right-bar" :class="{active: leaderBoardStatus}">
        <div class="contact-list ">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Họ và tên</th>
                        <th>Điểm số</th>
                    </tr>
                </thead>
                <tbody>
                    <item v-for="item in allPlayers" :item="item"></item>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style lang="css" scoped>
    .active{
        right:0 !important;
    }
    @media all and (min-width: 768px){
        .side-bar{
            width: 33.3333%;
        }
        .side-bar.right-bar {
            float: right !important;
            right: calc(-33.33333% - 20px);
            top: 60px;
        }
    }
</style>
<script type="text/javascript">
    import {mapGetters, mapActions } from 'vuex'
    import Item from './Item.vue'

    export default{
        data(){
            return{
//                isEnabled: false
            }
        },
        computed: mapGetters([
            'allPlayers',
            'leaderBoardStatus'
        ]),
        components: {
            Item: Item
        },
        created(){
            console.log(this.$store.getters.allPlayers);
        }
    }
</script>
