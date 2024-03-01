<template>
  <div class="About">
    <div class="background-image">
      <img
        src="https://i2-prod.liverpool.com/incoming/article18700567.ece/ALTERNATES/s1200d/0_GettyImages-1261723959.jpg"
        alt="Football background"
      ></img>
    </div>
    <div class="content">
      <h5 class="merriweather-light">
        At <span class="KK">Kits Konnect</span>, we are passionate about football and
        providing our clients with the best gear to help them perform at their peak.
        Our extensive range of football kits includes something for everyone, from
        professional players to casual fans.
        <br />
        <br />
        Our team is dedicated to ensuring that our customers are completely
        satisfied with their purchases. We pride ourselves on our excellent
        customer service and will always go the extra mile to ensure that your
        shopping experience with us is a positive one.
        <br />
        <br />
        Thank you for choosing Kits Konnect as your football kit supplier. We look
        forward to serving you and helping you take your game to the next level!
      </h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.About {
  position: relative;
  min-height: 100vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}

.content {
  position: relative;
  padding: 50px;
  z-index: 1;
}

.merriweather-light {
  font-family: "Merriweather", serif;
  font-weight: 300;
  font-style: normal;
  padding: 100px;
  color: white;
}

.KK {
  color: #f00;
}

.footer {
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color:white;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>