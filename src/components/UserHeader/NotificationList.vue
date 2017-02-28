<template>
    <li class="dropdown top-menu-item-xs">
        <a href="#" data-target="#" class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown"
           aria-expanded="true">
            <i class="fa fa-bell"></i> <span class="badge badge-xs badge-danger">3</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-lg">
            <li class="notifi-title"><span class="label label-default pull-right">3 mới</span>Thông báo</li>
            <li class="list-group slimscroll-noti notification-list">
                <notification-item v-for="n in 10"></notification-item>
            </li>
            <li>
                <a href="javascript:void(0);" class="list-group-item text-right">
                    <small class="font-600">Xem tất cả</small>
                </a>
            </li>
        </ul>
    </li>
</template>
<style lang="css" scoped>


    @media all and (max-width: 767px) {
        .navbar-nav .open .dropdown-menu {
            background-color: #ffffff;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
            position: fixed;
            left: calc(100% - 240px);
            top: 60px;
        }
    }

</style>
<script>
   import NotificationItem from './NotificationItem.vue'
    export default{
        data(){
            return{
                msg:'hello vue',
                fakeNotify: [1,2,3]
            }
        },
        components:{
            NotificationItem:NotificationItem
        }
    }

</script>
