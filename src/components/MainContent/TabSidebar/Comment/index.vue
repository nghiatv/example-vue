<template>

  <div class="tab-pane" id="comment">
   <div class="list-comment">
     <h4 class="m-t-0 header-title"><b>Thảo luận về bài học</b></h4>
     <p class="text-muted m-b-30 font-13">Nếu có thắc mắc về bài học, xin vui lòng đặt câu hỏi tại đây.</p>
     <div>
       <div class="media">
         <div class="media-left">
           <a href="#">
             <img class="media-object img-circle thumb-sm" alt=""
                  src="https://techmaster.vn/img/users/53.png"
             >
           </a>
         </div>
         <div class="media-body">
           <h4 class="media-heading">Đặng Quang Huy</h4>
           <p>Tham khảo bài hướng dẫn này nhé http://techmaster.vn/posts/33577/cach-su-dung-sublime-text</p>
         </div>
       </div>
       <div class="media">
         <div class="media-left">
           <a href="#">
             <img class="media-object img-circle thumb-sm" alt="64x64" src="static/img/default-avatar.png">
           </a>
         </div>
         <div class="media-body">
           <h4 class="media-heading">Media heading</h4>
           Cras sit amet nibh libero, in gravida nulla.
           Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
           viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
           <div class="media">
             <div class="media-left">
               <a href="#"><img class="media-object img-circle thumb-sm" alt="64x64"
                                src="static/img/default-avatar.png"
               ></a></div>
             <div class="media-body"><h4 class="media-heading">Nested media heading</h4>Cras sit amet nibh libero, in
               gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
               vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
               congue felis in faucibus.
             </div>
           </div>
         </div>
       </div>

       <div class="media">
         <div class="media-left">
           <a href="#">
             <img class="media-object img-circle thumb-sm" alt="64x64" src="static/img/default-avatar.png">
           </a></div>
         <div class="media-body"><h4 class="media-heading">Media heading</h4>Cras sit amet nibh libero, in gravida nulla.
           Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus
           viverra turpis.
         </div>
       </div>
     </div>
   </div>
    <div class="comment-textarea">
      <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
    </div>
  </div>
</template>

<style lang="css" scoped>
  #comment{
    background-image: url(http://rexkirby.com/kirbyandson/images/comment.svg);
    background-size: 30px 30px;
    background-position: 11px 8px;
    background-repeat: no-repeat;
  }

</style>

<script>
  export default{}
</script>
