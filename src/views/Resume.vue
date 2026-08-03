<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">

      I'm <strong>Mort Onmaz</strong>, a passionate game developer that's been making games since 2018, with a majority of my projects being in Unity, and C#, 
      but now almost fully focused on C++ and Unreal Engine, as well as interest in lower-level development. <br/>
      <br/>
      My primary passion is <strong>Gameplay Programming</strong>, but I also take great pleasure from 
      building tools and frameworks for other developers to utilize. <br/>
      <br/>

      I find it deeply satisfying to design and build flexible and reuable core systems. Furthermore, I am well versed in strong programming practices and design principles, and find it riveting to mentor interns and share my experience. <br/>
      <br/>

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="files/resume/CV-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Resume 🇬🇧</a>
        <a class="download-link" href="files/resume/CV-nl.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> CV 🇳🇱</a> 
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Resume portrait" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
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

      <h2>Career</h2>

      <h3>BattleForged Game Studio, Haarlem - Present</h3>
      <h4>Gameplay Programmer</h4>
      <div>
        Key Contributions:<br>
        • Identified and optimized memory usage by roughly 70% within the project.<br>
        • Created internal wiki guides on industry-proven designs and patterns 
        (e.g. Observer, Component, Factory) to ensure scalability and maintainability 
        across the project, as well as version control usage instructions for colleagues and interns.<br>
        • Reviewed pull requests, as well as optimizing and streamlining the review process to maximize 
        efficieny and cut down wasted time.<br>
        • Developed a character state system to maintain flags and status effects with flexible lookup methods.<br>
        • Developed a modular NPC AI foundation with dynamic environment queries.<br>
        • Developed a dynamic archery mechanic inspired by M&B Bannerlord and Skyrim.<br>
        • Developed a combat combo system supporting chained attacks with dynamic follow-up animations.<br>
        • Developed a souls-like target locking system with distinct softlock and hardlock modes, 
        including locational locking ability.
      </div>

      <h3>LaserMaxx, De Bilt - 2022</h3>
      <h4>Gameplay Programmer - Intern</h4>
      <div>
        Key Contributions:<br>
        • Conducted QA testing and optimization for an unannounced VR title using proprietary lasergaming hardware.<br>
        • Programmed, tested, and diagnosed embedded systems and custom hardware components.<br>
        • Collaborated with cross-functional hardware/software teams to refine system integration.
      </div>

      <h3>XR Lab, Hilversum - 2021</h3>
      <h4>Lead Programmer - Intern</h4>
      <div>
        Key Contributions:<br>
        • Led project teams in developing multiple proof-of-concept VR/AR prototypes for external clients.<br>
        • Engineered a procedural prop generation system for an endless runner game.<br>
        • Developed FPS player controllers using custom VR hardware, in both Unity and Unreal Engine.<br>
        • Reviewed and merged pull requests, ensuring consistent quality and functionality across builds.
      </div>

      <h2>Education</h2>

      <h3>Digital Arts & Entertainment, HOWEST - 2024</h3>
      <h4>Game Developer Major</h4>
      <div>DAE allowed me to delve deeper into everything I had learnt at
      GLU. Rather than being restricted to existing game engines, I
      was designing and building my own. I've made games from the
      ground up, using my own frameworks and libraries.</div>

      <h3>Grafisch Lyceum Utrecht - 2022</h3>
      <h4>Game Developer</h4>
      <div>My first foray into the world of C# and game development.
      Learning about scripting, game design, SCRUM, S.O.L.I.D.
      principles and Object Oriented Programming. I've worked in a
      very practical learning environment; tasked with making a game
      in both solo & group projects 4 times a year. This instilled in me
      a burning desire to improve myself as a programmer who loves
      making polished games.</div>

      <h2>Languages</h2>
      <br/>
      <div>English: Native</div>
      <div>Dutch: Fluent</div>
      <div>Turkish: Fluent</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Gaming</h3>
        <div>
          From RPGs to city builders, strategy to shooters, I love games of almost all genres. But the ones I'm most passionate about are ones that either lean heavily on sandbox elements, or provide real survival challenges.<br/><br/>
          Some of my favorite games are: Crusader Kings 3, Rimworld, Foundation, Farthest Frontier, Project Zomboid and Space Engineers.
        </div>

        <h3>I 💚 Photography</h3>
        <div>
          Starting with my sister's old camera, I quickly fell in love with photography. I've spent years honing my skills and developed a gritty fantasy style inspired by LOTR and The Witcher.
        </div>

        <h3>I 💛 Motorcycles</h3>
        <div>
          I have a beloved Honda Rebel 500 that I've affectionately named Asfaloth, and I love taking her out on rides when the weather is nice.
        </div>

        <h3>I 🖤 Cats</h3>
        <div>
          I have a little void named Darcy, and I love her to bits. She has given me a new life purpose of one day building a cat sanctuary in nature someday and rescue cats who are in need.
        </div>

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