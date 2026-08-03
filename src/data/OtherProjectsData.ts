import ProjectData from '@/data/ProjectData'
import Helpers from "@/helpers";

const DioramaForestLoner = new ProjectData(
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
  `, "#006603", "Maya 3D", true, true);

const DioramaGrandmasHouse = new ProjectData(
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
  `, "#9e5298", "Maya 3D", false, true);

  const CityBuilderPrototype = new ProjectData("project-3", "City Builder Prototype", "img/projects-other/KeuzedeelCover.jpg", `
      <div class="paragraph">
      <strong>Summary:</strong></br>
        An elective module/course I've done on the subject of city builder games, where I created a small prototype in Unity on building placement mechanics in uneven terrain.
        My inspiration for this project was the game <strong>Foundation</strong>, which has a unique building placement system that allows for organic city layouts.
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/WEHM5jrEgmg" frameborder="0" allowfullscreen></iframe>
      </div>

      `, "#f92849", "Unity Engine - C#", true);

DioramaForestLoner.iconUrl = Helpers.getSketchfabThumbnail("9b6a4dabdbb443e2adf1a82ae502ddfa", DioramaForestLoner);
DioramaGrandmasHouse.iconUrl = Helpers.getSketchfabThumbnail("4286ad09f5754a078b4c26f7b3f7732b", DioramaGrandmasHouse);

export default [
    DioramaForestLoner,
    CityBuilderPrototype,
    DioramaGrandmasHouse
];