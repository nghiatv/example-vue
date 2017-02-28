<template>
    <div class="main-footer">
        <div class="row" style="column-fill: balance;">
            <div class="footer-left col-xs-12 col-sm-8 col-md-8">
                <button type="button" class="btn btn-default waves-effect waves-light">
                   <span class="btn-label">
                       <i class="fa fa-arrow-left"></i>
                   </span>
                    <span class="hidden-xs">
                        Bài trước
                    </span>
                </button>
                <button type="button" class="btn btn-default waves-effect waves-light pull-right">
                   <span class="hidden-xs">
                        Bài sau
                   </span>
                   <span class="btn-label btn-label-right">
                       <i class="fa fa-arrow-right"></i>
                   </span>
                </button>
            </div>
            <div class="footer-right hidden-xs col-sm-4 col-md-4">

                <div class="progress-first">
                    <i class="fa fa-bank"></i>
                </div>
                <div class="progress progress-lg">
                    <div class="progress-bar progress-bar-success progress-bar-striped wow animated progress-animated"
                         role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"
                         style="width: 96%;">
                        96%
                    </div>
                </div>
                <div class="progress-last">
                    <span>96/100</span>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="css" type="text/css" scoped>
    .main-footer {
        position: fixed;
        width: 100%;
        background-color: #ffffff;
        bottom: 0;
        padding: 15px;
    }
    .progress{
        margin: 7px 55px 7px 25px ;
    }
    .progress-first,.progress-last{
        position: absolute;
        top:7px;
    }
    .progress-last{

        right:0;
    }
</style>
<script>
   
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            
        }
    }



</script>
