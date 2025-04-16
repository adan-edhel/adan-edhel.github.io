<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">

      I'm <strong>Mort Onmaz</strong>, a passionate game developer that's been making games since 2018, with a majority of my projects being in Unity, and C#, 
      but have significant experience in C++ and Unreal Engine, as well as making custom engines. <br/>
      <br/>
      My primary passion is <strong>Gameplay Programming</strong>, while I also take great pleasure from 
      building tools and frameworks as foundation for games and apps, even for non-game related functions. <br/>
      <br/>

      I deeply enjoy using strong programming practices and design principles, and find it riveting to build robust, 
      expandable and modular code utilizing SOLID design and Object Oriented Programming. <br/>
      <br/>

      <!--
      I'm <strong>John Matrix</strong>, a former Delta Force operative with lots of experience, lots of training and huge muscles.
      <br />After graduating from kindergarten, I've been enrolled in the army for 25 years, where I learned to destroy things in an amazing number of ways.
      <br />I joined the Delta Force because I thought it was Greek lessons, but I quickly adapted to this unexpected environment and became a key element.
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Right now I'm trying to find inner peace after I've read some personal development books. I'm looking for a monk job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides war, I'm passionate about firearms, martial arts, explosions, push-ups and flowers.
      -->

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/CV-nl.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download als PDF 🇳🇱</a> 
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      
      <!--
      <h2>Work experience</h2>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2018-2019</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2015-2017</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2012-2015</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>
      -->

      <!--

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Lethal</h3>
        <SkillRate name="Handguns" :rate="5" />
        <SkillRate name="Rifles" :rate="5" />
        <SkillRate name="Shotguns" :rate="5" />
        <SkillRate name="Machineguns" :rate="5" />
        <SkillRate name="Missile launchers" :rate="5" />
        <SkillRate name="Knives" :rate="5" />
        <SkillRate name="Hand to hand combat" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Non-lethal</h3>
        <SkillRate name="Sneaking" :rate="1" />
        <SkillRate name="Negotiation" :rate="1" />
        <SkillRate name="Seduction" :rate="1" />
        <SkillRate name="Sense of humor" :rate="2" />
      </div>

      -->

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Digital Arts & Entertainment, HOWEST - 2024</h3>
      <h4>Game Developer Major</h4>
      <div>DAE allowed me to delve deeper into everything I had learnt at
      GLU. Rather than being restricted to existing game engines, I
      was designing and building my own. I've made games from the
      ground up, using my own frameworks and libraries.</div>

      <h3>Grafisch Lyceum Utrecht - 2022</h3>
      <h4>Game Developer (Unity)</h4>
      <div>My first foray into the world of C# and game development.
      Learning about scripting, game design, SCRUM, S.O.L.I.D.
      principles and Object Oriented Programming. I've worked in a
      very practical learning environment; tasked with making a game
      in both solo & group projects 4 times a year. This instilled in me
      a burning desire to improve myself as a programmer who loves
      making polished games.</div>

      <h2>Human Languages</h2>

      <h3>English</h3>
      <div>Fluent</div>

      <h3>Dutch</h3>
      <div>Fluent</div>

      <h3>Turkish</h3>
      <div>Fluent</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Games</h3>
        <div>Some of my GOTYs: Rimworld, Kenshi, Project Zomboid... <br/>
          I love playing them, watching them, talking about them, studying them, watching studies about them, designing them... Whether I'm making them or playing them, time always seems to fly.</div>

        <h3>I 💚 Photography</h3>
        <div>Something about visual storytelling gives me immense satisfaction. Among media that inspires me the most for this are Lord of the Rings and The Witcher.</div>

        <h3>I 💛 Motorcycles</h3>
        <div>I have a beloved Honda Rebel 500 that I've affectionately named Asfaloth, and I love taking her out on rides when the weather is nice.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
  //  SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>