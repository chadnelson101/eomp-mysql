<template>
  <div class="About">
    <div class="content">
      <h5 class="welcome">
        Welcome to <span class="KK">Kits Konnect</span>!
      </h5>
    </div>
  </div>
  <div>
    <h3 class="browse">The home of sport entusiasts and professional kits </h3>
  </div>
  <div id="slider-container">
    <div class="slide1">
      <img src="https://i.ibb.co/gW755Zj/1303771117.jpg" alt="Image 1">
    </div>
    <div class="slide2">
      <img src="https://i.ibb.co/cFc90sj/17091517.jpg" alt="Image 2">
    </div>
    <div class="slide3">
      <img src="https://i.ibb.co/Kqk6K16/5ba300cd5ec1310da228af0c5da87944.jpg" alt="Image 3">
    </div>
    <div class="slide4">
      <img src="https://i.ibb.co/RDtHGQQ/lionel-messi-celebrity-player.jpg" alt="Image 4">
    </div>
    <div class="slide5">
      <img src="https://i.ibb.co/mF6Kvcw/wp6436083.webp" alt="Image 5">
    </div>
    <div class="slide6">
      <img src="https://i.ibb.co/Z6y878L/747dcae9-0001-0004-0000-000001202746-w1528-r1-4668463611859839-fpx49-07-fpy49-98.jpg" alt="Image 6">
    </div>
    <div class="slide7">
      <img src="https://i.ibb.co/zFXmbmv/VFL-Wolfsburg-scaled.jpg" alt="Image 7">
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
img {
  width: 500px;
  height: 300px;
  padding: 0 30px; /* Adjust padding for horizontal spacing */
}

.content {
  padding: 5cm;
}
.welcome{
  padding: -9cm;
}

#slider-container {
  margin-top: 5cm;
}

.browse {
  text-align: center;
  margin: 0;
}

/* Define common animation for slides */
@keyframes animate__bounceInLeft {
  0% {
    opacity: 0;
    transform: translateX(-2000px); /* Use standard transform property */
  }
}

@keyframes animate__bounceInRight {
  0% {
    opacity: 0;
    transform: translateX(2000px); /* Use standard transform property */
  }
}

/* Slide classes */
.slide1 {
  margin-left: -60%;
  animation-name: animate__bounceInLeft;
  animation-duration: 4s;
}

.slide2 {
  margin-left: 60%;
  animation-name: animate__bounceInRight;
  animation-duration: 4s;
}

.slide3 {
  margin-left: -60%;
  animation-name: animate__bounceInLeft;
  animation-duration: 4s;
}

.slide4 {
  margin-left: 60%;
  animation-name: animate__bounceInRight;
  animation-duration: 6s;
}

.slide5 {
  margin-left: -60%;
  animation-name: animate__bounceInLeft;
  animation-duration: 6s;
}

.slide6 {
  margin-left: 60%;
  animation-name: animate__bounceInRight;
  animation-duration: 8s;
}

.slide7 {
  margin-left: -60%;
  animation-name: animate__bounceInLeft;
  animation-duration: 8s;
}

.slide8 {
  margin-left: -60%;
  animation-name: animate__bounceInLeft;
  animation-duration: 11s;
}

.welcome {
  font-family: "Alumni Sans Collegiate One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.welcome-message {
  font-family: "Alumni Sans Collegiate One", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  margin-bottom: 30px;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* 16:9
                     Aspect Ratio (divide 9 by 16 = 0.5625) */
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>