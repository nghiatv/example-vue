<template>
    <div id="video-button">
        <button class="waves-effect waves-light btn btn-block" :class="btnType">{{ message }}</button>
    </div>
</template>
<style scoped>
  div{
  padding-top: 10px;
  }
  .btn-success {
    color: #fff;
    background-color: #45B6AF !important;
    border-color: #3ea49d !important;
}
</style>
<script type="text/javascript">
   
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        props: {
            type: {
                type: String,
                default: 'todo'
            },
            message: {
                type: String,
                default: 'Hoàn thành bài học'
            }

        },
        computed: {
            btnType: function(){
                return {
                    'btn-danger': this.type == 'todo',
                    'btn-success' : this.type == 'done'
                }
            }
        }
    }
</script>
