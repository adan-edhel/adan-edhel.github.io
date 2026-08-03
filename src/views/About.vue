<template>
  <div style="margin-bottom: 80px;">
    <h1>Hi, I'm Mort Onmaz</h1>

    <div class="paragraph">
      <div>
		Gameplay Programmer with strong interest in lower-level tools and engine work in C++. <br><br>

    I design and implement flexible, reusable, data-driven architectures that are easy for other developers and designers to work with. I’m strongest when building the core systems and mechanics of a game. <br><br>

    Particularly interested in sandbox games and emergent gameplay that lets players express their own creativity. <br><br>
      </div>

      <!--
      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">stuff</router-link>, on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a monk, like my good friend John Rambo did a few years back. You can reach me at <a href="mailto:johnmatrix@deltaforce.us">johnmatrix@deltaforce.us</a> or <router-link to="/contact">through here</router-link>.</div>
      -->
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar photo" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.photo img {
  width: 224px;
  height: 224px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>