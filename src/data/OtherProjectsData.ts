import ProjectData from '@/data/ProjectData'
import Helpers from "@/helpers";

const project1 = new ProjectData(
  "project-1", "3D Diorama - Forest Loner", "img/projects-other/ForestLonerThumbnail.png",`
    <div class="paragraph">
      This scene was inspired by the idea of someone living off the grid, surrounded by nature. 
      I modelled everything in Maya and created the textures using Adobe Photoshop, keeping things simple and thematic. 
      The cabin, bike, and small lake with a half-sunken rowboat all come together to tell a quiet story 
      of solitude and calm in the woods.
    </div>

    <div class="paragraph center sketchfab-wrapper">
      <iframe 
        class="sketchfab"
        src="https://sketchfab.com/models/9b6a4dabdbb443e2adf1a82ae502ddfa/embed"
        allowfullscreen
      ></iframe>
    </div>

    <div class="paragraph center">
      Preproduction Moodboard: </br>
      <img class="large-screenshot" src="img/projects-other/LonerMoodboard.png" alt="Moodboard" />
    </div>
  `,
  "#006603",
  true,
  true
);

const project2 = new ProjectData(
  "project-2", "3D Diorama - Grandma's House", "img/projects-other/GrandmasHouseThumbnail.png",`
    <div class="paragraph">
      This diorama is a cozy little tribute to the feeling of visiting grandma's place. 
      I modelled everything in Maya and created the textures using Adobe Photoshop. 
      The brick house, gazebo, small pond with ducks, and a black cat lounging nearby all help build a warm, 
      peaceful atmosphere. The kind of spot that feels familiar and a little magical.
    </div>

    <div class="paragraph center sketchfab-wrapper">
      <iframe 
        class="sketchfab"
        src="https://sketchfab.com/models/4286ad09f5754a078b4c26f7b3f7732b/embed"
        allowfullscreen
      ></iframe>
    </div>

    <div class="paragraph center">
      Preproduction Moodboard: </br>
      <img class="large-screenshot" src="img/projects-other/GrandmasMoodboard.png" alt="Moodboard" />
    </div>
  `,
  "#9e5298",
  false,
  true
);

project1.iconUrl = Helpers.getSketchfabThumbnail("9b6a4dabdbb443e2adf1a82ae502ddfa", project1);
project2.iconUrl = Helpers.getSketchfabThumbnail("4286ad09f5754a078b4c26f7b3f7732b", project2);

export default [

    project1,

        new ProjectData("project-3", "Building Placement Prototype", "img/projects-other/KeuzedeelCover.jpg", `
      <div class="paragraph">
        An educative prototype I've put together to explore building placement systems in games like Foundation or Manor Lords.
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/WEHM5jrEgmg" frameborder="0" allowfullscreen></iframe>
      </div>

      `, "#f92849", true),

    project2,



  /** 
      new ProjectData("project-2", "5 Props - Grandma Theme", "img/projects-other/5PropsGrandma.jpg", `
      <div class="paragraph">
        As a milestone for my Grandma's House themed diorama, I put together these 5 props to showcase the progress I'd made. 
        To keep it personal, I've chosen to include a ford pickup in the scene as I've always loved pickups and offroads as personal vehicles. 
        I've also added a hammock, cute little ducklings, and a black cat as these bring me joy and tranquility, which I wanted to express in the scene.
      </div>
  
      <div class="paragraph center sketchfab-wrapper">
        <iframe 
          class="sketchfab"
          src="https://sketchfab.com/models/cd14dcd14a8c4cd9a4638c2405d154d1/embed"
          allowfullscreen
        ></iframe>
      </div>
      `, "#f92849"),

      new ProjectData("project-3", "3 Props - Loner Theme", "img/projects-other/3PropsLoner.png", `
        <div class="paragraph">
          These 3 props were made as a milestone for my Forest Loner diorama. I was a bit ambitious and too inspired 
          by my very own motorcycle to resist recreating it in my project, along with its real scars and imperfections. As for the rowboat
          and the tree trunk, they are part of my forever long fantasy of things I'd like to have sitting near my own forest house one day.
        </div>
    
        <div class="paragraph center sketchfab-wrapper">
          <iframe 
            class="sketchfab"
            src="https://sketchfab.com/models/04f7921f67c849e78db80a2087647340/embed"
            allowfullscreen
          ></iframe>
        </div>
        `, "#635c88"),  
  
  new ProjectData("project-6", "Sultans Of Sing", "img/projects/Examples/project-6-icon.png", `
    <div class="paragraph">
      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It's available on Windows Store because why not.
      <br/>Image by <a href="https://www.pexels.com/fr-fr/@aldoalz" target="blank">Aldo Picaso</a>.
            </div>
            <div class="paragraph center">
              <a href="https://www.microsoft.com/en-us/p/some-app" target="_blank"><img src="img/projects/Icons/ms-store-logo.png" alt="MS Store button" /></a>
          </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>Some stuff</li>
            <li>Some great stuff</li>
            <li>More awesome stuff</li>
            <li>And then some</li>
            </ul>
        </div>

        <div class="paragraph center">
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> 
        </div>
    `, "#c10606", false, true),
    new ProjectData("project-7", "Drew Blood", "img/projects/Examples/project-7-icon.png", `
    <div class="paragraph">
                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Some stuff</li>
              <li>Some great stuff</li>
              <li>More awesome stuff</li>
              <li>And then some</li>
              </ul>
          </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> 
            </div>`, "#1ca1e2"),
    new ProjectData("project-8", "The Art of Walking", "img/projects/Examples/project-8-icon.png", `
    <div class="paragraph">
                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
            </div>

            <div class="paragraph center">
              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/Icons/play-store-logo.png" alt="Play Store badge" /></a>
          </div>

          <div class="paragraph">
          Main features :
          <ul>
          <li>Some stuff</li>
          <li>Some great stuff</li>
          <li>More awesome stuff</li>
          <li>And then some</li>
          </ul>
      </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
            </div>`),
    new ProjectData("project-9", "Nikolable", "img/projects/Examples/project-9-icon.png", `
     <div class="paragraph">
                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.
            </div>

            <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>`),
            */
];