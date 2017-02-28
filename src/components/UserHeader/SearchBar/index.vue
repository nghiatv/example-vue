<template lang="html">
    <div class="pull-left dropdown " :class="open">
        <form role="search" class="navbar-left app-search pull-left hidden-xs">
            <input id="search-input"
                    @input="update"
                    type="text"
                    placeholder="Search..." class="form-control">
            <a href=""><i class="fa fa-search"></i></a>
        </form>

        <ul class="dropdown-menu dropdown-menu-lg" id="search-result">
            <search-item tag="li" v-for="item in getAllData" key="n" :item="item"></search-item>
            <li class="text-center" v-if="searching">
                <i class="fa fa-spinner fa-spin"></i>
            </li>
        </ul>


    </div>

</template>
<style scoped lang="css">
  #search-result{
    max-height:40vh;
    overflow: auto;
  }
</style>
<script type="text/javascript">
    import SearchItem from './SearchItem.vue'
    import {mapActions, mapGetters, mapState} from 'vuex'
    import _ from 'lodash'
    export default{
        data(){
            return {
                editing: false,
            }
        },
        computed: {
            ...mapGetters('search', [
                'getData', // map this.$store.getters['search/getData'] => getData
                'getKeyword' // map this.$store.getters['search/Keyword'] => getKeyword

            ]),
          ...mapState('search',[
              'data',
            'keyword',
            'searching'
          ]),
            open()
            {
              if(this.data.length === 0 && this.keyword.length === 0){
                return {
                  open: false
                }
              }else{
                return {
                  open: true
                }
              }


            }
        },
        methods: {
            ...mapActions('search', [
                'search', // map this.$store.actions('search/search', keyword)
                'clearSearch'
            ]),
            update: _.debounce(function (e)
            {
                // chay action de thay doi keyword
                this.search({
                    keyword: e.target.value
                })
            }, 300)
        },
        components: {
            SearchItem: SearchItem
        }
    }


</script>
