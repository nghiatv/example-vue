<template>
    <li class="list-group">
        <a href="javascript:void(0)">
          {{ item.title }}
        </a>
      <span class="divider"></span>
    </li>


</template>
<style lang="css" scoped>
    li {
        max-width: 300px;
    }

    li a {
        white-space: normal;
    }

</style>
<script type="text/javascript">

    export default{
        data(){
            return {}
        },
        props:['item'],
        components: {}
    }
</script>
