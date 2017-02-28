<template>
    <div id="main-content">
        <video-wrap></video-wrap>
        <tab-sidebar></tab-sidebar>
    </div>
</template>
<style scoped lang="css">
    @media all and (max-width: 767px) {
        #main-content {
            display: block;
            height: calc(100vh - 124px);
            overflow: hidden;
            width: 100%;
            position: relative;

        }

        #main-content .left-content {

            position:absolute;
            width: 100%;
            height: 100%;
            padding: 0;
            z-index: 0;
            /*display: flex;*/
        }

        #main-content .right-content {
            position: relative;
            top:0;
            left: 100%;
            width: 100%;
            height:100%;
        }
    }

    @media all and (min-width: 768px) {
        #main-content{
            position: relative;
            overflow: hidden;
            height: calc(100vh - 124px);
        }
        #main-content .left-content {

            width: 66.66667%;
            height:100%;
            padding: 15px;
            }
        #main-content .right-content {
            position: absolute;
            top:0;
            right:0;
            width: 33.3333%;
            padding-top: 15px   ;
            padding-right: 15px;
            padding-bottom: 15px;
            height: 100%;
            margin: 0;
        }
    }
</style>
<script type="text/javascript">
    import  VideoWrap from './VideoWrap'
    import TabSidebar from './TabSidebar'

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            VideoWrap: VideoWrap,
            TabSidebar: TabSidebar
        }
    }
</script>
