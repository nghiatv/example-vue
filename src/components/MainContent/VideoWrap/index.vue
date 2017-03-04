<template>
    <div class="left-content" :style="leftContentSize">
        <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOutRight"
        >
            <div id="expand-mode" v-if="getIsExpand">
                <a @click="toggleExpandMode">
                    <i v-if="getIsExpand" class="fa fa-chevron-left"></i>
                </a>
            </div>
        </transition>
        <div id="video-box" class="card-box m-b-0">
            <h4 id="video-title" class="text-dark header-title m-t-0">Cắt HTML,CSS từ file PSD phần 1</h4>
            <!-- 16:9 aspect ratio -->
            <div class="embed-responsive" :style="getPlayerHeight">
                <!--<iframe class="embed-responsive-item"-->
                        <!--src="http://player.vimeo.com/video/69988283?color=5fbeaa&amp;title=0&amp;byline=0&amp;portrait=0"></iframe>-->
           <!---->
            </div>

            <quiz-button type="done" message="Luyện tập quiz"></quiz-button>
        </div>
    </div>
</template>
<style lang="css" scoped>
    #video-title {
        margin-right: 40px;
    }

    #expand-mode {
        text-align: center;
        background-color: #ffffff;
        z-index: 99;
        display: block;
        position: absolute;
        top: 15px;
        right: 0;
        border: 1px solid rgba(23, 24, 26, 0.15);
        border-right: none;
        border-radius: 5px 0 0 5px;
    }

    #expand-mode a {
        background-color: transparent;
        border-radius: 0;
        border: none;
        color: #505461 !important;
        cursor: pointer;
        line-height: 50px;
        padding-left: 20px;
        padding-right: 20px;
        letter-spacing: 0.03em;
        font-weight: 600;
        text-transform: uppercase;
        font-family: "Source Sans Pro", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    #expand-mode a i {
        font-size: 20px;
        line-height: 50px;
    }

    .embed-responsive iframe {

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .card-box {
        flex: 1;
    }

</style>
<script type="text/javascript">
    import QuizButton from './QuizButton.vue'
    import {mapActions, mapGetters} from 'vuex'
    export default{
        data(){
            return {}
        },
        components: {
            QuizButton: QuizButton
        },
        computed: {
            ...mapGetters('expandMode', [
                'leftContentSize', // map this.$store.getters('expandMode/leftContentSize') => leftContentSize()
                'getIsExpand' // map this.$store.getters('expandMode/getIsExpand') => getIsExpand()
            ]),
            ...mapGetters('resize', [
                'getPlayerHeight'
            ])
        },
        mounted() {
//            this.$store.dispatch('resize/checkResizeMode');
            this.$nextTick(function ()
            {
                const vm = this
                window.addEventListener('resize', () =>
                {
//                    vm.$store.dispatch('resize/checkResizeMode')
                    vm.checkResizeMode()
                })
            })
        },
        methods: {
            ...mapActions('expandMode', [
                'toggleExpandMode',// map this.$store.dispach('expandMode/toggleExpandMode') => toggleExpandMode()
            ]),
            ...mapActions('resize', [
                'checkResizeMode'    // map this.$store.actions('resize/checkResizeMode') => checkResizeMode()
            ])
        },
        beforeDestroy(){
            const vm = this;
            window.removeEventListener('resize', () =>
            {
//                vm.$store.dispatch('resize/checkResizeMode')
                vm.checkResizeMode()
            })
        }

    }
</script>
