<template>
    <!-- Top Bar Start -->
    <div class="topbar">

        <!-- LOGO -->
        <div class="topbar-left">
            <div class="text-center">
                <a href="/" class="logo">
                    <i class="icon-magnet icon-c-logo"></i><span>Techmaster</span>
                </a>
            </div>
        </div>

        <!-- Button mobile view to collapse sidebar menu -->
        <div class="navbar navbar-default" role="navigation">
            <div class="container">
                <div class="">
                    <search-bar></search-bar>


                    <ul class="nav navbar-nav navbar-right pull-right">
                        <notification-list tag='li'></notification-list>
                        <li class="top-menu-item-xs">
                            <a href="#"
                               @click="toggleLeaderBoard"
                               class="right-bar-toggle waves-effect waves-light"><i class="fa fa-trophy"></i></a>
                        </li>
                        <li class="dropdown top-menu-item-xs">
                            <a href="" class="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown"
                               aria-expanded="true">
                                <img src="https://techmaster.vn/img/users/923.png?0.30615614817766734" alt="user-img"
                                     class="img-circle">
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="/user/my-profile"><i class="fa fa-user m-r-10 text-custom"></i> Trang cá
                                    nhân</a></li>
                                <li><a href="javascript:void(0)"><i class="fa fa-cog m-r-10 text-custom"></i>
                                    Settings</a></li>
                                <li class="divider"></li>
                                <li><a href="/user/logout"><i class="fa fa-cog fa-spin m-r-10 text-danger"></i> Đăng
                                    xuất</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
                <!--/.nav-collapse -->
            </div>
        </div>
    </div>
    <!-- Top Bar End -->
</template>
<!--<style src="../assets/css/bootstrap.min.css">-->
<style scoped type="text/css" lang="css">
    .navbar-default {
        background-color: darkcyan
    }

    .topbar {
        position: relative;
    }

    .top-menu-item-xs {
        display: inline-flex !important;
    }
</style>
<script type="text/javascript">
    import SearchBar from './SearchBar'
    import NotificationList from './NotificationList.vue'

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            SearchBar: SearchBar,
            NotificationList: NotificationList,
        },
        methods: {
            toggleLeaderBoard: function ()
            {
                return this.$store.dispatch('toggleLeaderBoard');
            }
        }
    }


</script>
