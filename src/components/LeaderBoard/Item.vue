<template>
    <tr>
        <th scope="row">{{ }}</th>
        <td>{{ item.display_name }}</td>
        <td>
            <small class="pull-right"> {{ item.total }}/ {{ item.total}}</small>
            <div class="progress">
                <div class="progress-bar progress-bar-success progress-bar-striped active" :style="styleProgress" role="progressbar"></div>
            </div>

        </td>
    </tr>
</template>
<style lang="css" scoped>
    small.pull-right{
        margin-left: 10px;
    }
    .progress{
        margin: 4px 5px;
    }
</style>
<script type="text/javascript">
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        props: ['item'],
        computed: {
            styleProgress: function() {
//                console.log(this.item);
              return {
                  width: `${this.item.total / this.item.total * 100}`+'%'
              }
            }
        }
    }
</script>
