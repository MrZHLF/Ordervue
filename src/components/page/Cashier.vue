<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3><img src="http://www.dicos.com.cn/__c__/uploadfile/2018/0404/20180404013216666.jpg" alt="">
        <img src="http://www.dicos.com.cn/__c__/uploadfile/2018/0404/20180404013252646.jpg" alt="">
      </h3>
      <!-- <h3><img src="http://www.dicos.com.cn/__c__/uploadfile/2018/0404/20180404013252646.jpg" alt=""></h3>
      <h3><img src="http://www.dicos.com.cn/__c__/uploadfile/2018/0227/20180227102439353.jpg" alt=""></h3>
      <h3><img src="http://www.dicos.com.cn/__c__/uploadfile/2018/0227/20180227102439353.jpg" alt=""></h3> -->
    </el-carousel-item>
  </el-carousel>
</template>
<script>
    
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
