<template>
  <div>
    <user-header></user-header>
    <!--<div class="main-content">-->
    <!--<div class="left-content" style="width: 60%; height: 1px; float: left;"></div>-->
    <!--<div class="right-content" style="width: 40%;float: left;">-->
    <!--<tab-sidebar></tab-sidebar>-->
    <!--</div>-->
    <!--</div>-->
    <main-content></main-content>
    <user-footer></user-footer>

    <!--leaderboard-->
    <leader-board></leader-board>
    <!--end leaderboard-->
  </div>
</template>

<script type="text/javascript">
  import UserHeader from '../components/UserHeader'
  import UserFooter from '../components/UserFooter'
  import MainContent from '../components/MainContent'
  import LeaderBoard from  '../components/LeaderBoard'
  export default{
    data(){
      return {

      }
    },
    components: {
      UserHeader,
      UserFooter,
      MainContent,
      LeaderBoard,
    }
  }
</script>


<style>

</style>
