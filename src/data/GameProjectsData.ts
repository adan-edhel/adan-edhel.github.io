import ProjectData from '@/data/ProjectData'


// Add "true, true" to the end of color code to increase thumbnail size

export default [
    new ProjectData("project-1", "Custom Engine - (Hollow Knight)", "img/projects/Covers/CustomEngine.png", 
    `
    This project is a <strong>faithful vertical slice of Hollow Knight</strong>, built entirely on top of a custom 2D game engine I developed from scratch. 
    Inspired by Unity's architecture, the engine features a GameObject-Component system, and supports key systems like rendering, animation, physics, and audio. 
    The vertical slice includes a playable section mimicking the original's tight movement, aesthetic, and mechanics.

    <!-- This is a comment -->

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Covers/CustomEngine.png" alt="Custom Engine Cover" />
    </div>
    
    <!--
    <div class="paragraph center">
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight" target="_blank"><img class="logo-small" src="img/projects/Icons/github-logo.png" alt="Github badge" /></a>
    </div>
    -->

    <div class="paragraph">
        <strong>Custom Engine Features</strong> </br></br>
        <li><strong>GameObject + Component System</strong> (Unity Style) </br>
        <li><strong>Core Components</strong> I implemented :
        <ul>
        <li><a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/Collider.cpp" target="_blank">Collider</a></li>
        <li><a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/Rigidbody2D.cpp" target="_blank">Rigidbody2D</a></li>
        <li><a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/SpriteRenderer.cpp" target="_blank">SpriteRenderer</a></li>
        <li><a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/Animator.cpp" target="_blank">Animator</a></li>
        <li><a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/Camera.cpp" target="_blank">Camera</a></li>
        <li><a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/AudioSource.cpp" target="_blank">AudioSource</a></li>
        <li><a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/AudioListener.cpp" target="_blank">AudioListener</a></li>
        </ul>

        <strong>Scripting Interface:</strong> All logic is coded directly against my engine's API, which mimics Unity's component access model (e.g., gameObject.GetComponent<Animator>()).
    </div>

    <div class="paragraph">
        <strong>Vertical Slice Features</strong> </br>
        
        <ul>
        <li><strong>Playable character</strong> with: Responsive movement & double jump, sword attack animations and knockback & damage feedback.
        <li><strong>Enemy AI:</strong> Simple patrol and chase behaviors, including death animations and health system.</li>
        <li><strong>Cinematic camera:</strong> Smooth follow with configurable damping and boundary clamping.</li>
        <li><strong>Audio system:</strong> Footsteps, attack sounds, ambient background music. Including a custom made sound attenuation feature.</li>
        <li><strong>Environment:</strong> Parallax-scrolling backgrounds and destructible platforms.</li>
        </ul>
    </div>

    <div class="paragraph">
        Main takeaways:
        <ul>
        <li><strong>Engine-level development skills.</strong> Not just gameplay, but systems thinking.</li>
        <li><strong>Reverse engineering ability.</strong> Reproducing Hollow Knight's feel without access to its codebase.</li>
        <li><strong>Design/technical balance.</strong> Ensuring a polished and playable game on top of a fully custom tech stack.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code is available on <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight" target="_blank">GitHub</a>.
        </div>
    </div>
    `, "#000000", true),

    //-------------------------------------------------------------------------------------------
    // Line Break
    //-------------------------------------------------------------------------------------------

    new ProjectData("project-2", "Treacherous Waters", "img/projects/Covers/TreacherousWaters.png", `
    <div class="paragraph">
        <strong>Treacherous Waters</strong> is a 3D arcade-style naval combat game built using the Synty Pirate Asset Pack. 
        The game was developed as a showcase piece to highlight the pack's stylized models, animation versatility, and environmental assets. 
        You play as a pirate captain tasked with ambushing merchant ships sailing between coastal cities.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Covers/TreacherousWaters.png" alt="Treacherous Waters Cover" />
    </div>

    <!--
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>
    -->


    <div class="paragraph">
        <strong>Gameplay Summary</strong> </br>

        Core Mechanics :
        <ul>
        <li>Free sailing between islands</li>
        <li>Salvaging different types of ammunition from floating rafts</li>
        <li>Engaging and destroying AI Merchant ships to collect their cargo for points</li>
        <li>Trigger Escalation: defeating a merchant ships spawns warships to be sent after you</li>
        </ul>
    </div>

    <div class="paragraph">
        Win/Loss Conditions :
        <ul>
        <li>Earn as many points as possible within the time given to you.</li>
        <li>Survive the retaliation ships sent after you</li>
        </ul>
    </div>

    <div class="paragraph">
        Main takeaways:
        <ul>
        <li>Designing game loops with escalation mechanics.</li>
        <li>Working within asset constraints while keeping gameplay original.</li>
        <li>Developing AI behaviors that are fun but performant.</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/adan-edhel/TreacherousWaters" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Gameplay/TreacherousWaters_00.gif" alt="TreacherousWaters Media" />
    <img class="pc-screenshot" src="img/projects/Gameplay/TreacherousWaters_01.gif" alt="TreacherousWaters Media" />
    <img class="pc-screenshot" src="img/projects/Gameplay/TreacherousWaters_02.png" alt="TreacherousWaters Media" />
    <img class="pc-screenshot" src="img/projects/Gameplay/TreacherousWaters_03.png" alt="TreacherousWaters Media" />
    </div>
    `, "#5a78af", true, true),

    //-------------------------------------------------------------------------------------------
    // Line Break
    //-------------------------------------------------------------------------------------------
    // Link example: <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.

    new ProjectData("project-3", "Soul Hunter", "img/projects/Covers/SoulHunter.png", `

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Covers/SoulHunter.png" alt="Soul Hunter Cover" />
    </div>

    <div class="paragraph center">
    A 2D platformer telling the coming of age story of a fledgeling psycophant <br/>
    who morally struggles with the concept of reaping souls. <br/><br/>
    </div>

    <div class="paragraph">
    This game was created by myself, a fellow programmer, and one artist over the course of nine weeks. 
    My personal contributions include, but are not limited to: All code <strong>except for</strong> enemy, combat & grapple mechanics, <strong> scrum master, shaders, audio and asset & level design.</strong>
    </div>

    <div class="paragraph">
        <strong>Main features:</strong>
        <ul>
        <li>Dialogue System</li>
        <li>Portal Mechanics</li>
        <li>Satisfying grappling hook using pull and push forces</li>
        </ul>
    </div>

    <div class="paragraph">
        Main takeaways:
        <ul>
        <li><strong>Tool Development.</strong> Creating user-friendly systems for dialogue and portal placement to streamline the workflow for artists and designers.</li>
        <li><strong>Shader Programming.</strong> Designing custom visual effects to enhance the game's aesthetic appeal.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code is available on <a href="https://github.com/adan-edhel/SoulHunter" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <strong>Feature Showcase</strong>
    </div>

    <div class="feature-block image-left">
        <img src="img/projects/Gameplay/SoulHunter_01.gif" alt="..." />
            <div class="text-block align-left">
                <strong>Dialogue System</strong> </br></br>

                Linear dialogue system using serializable structs streamlined for artists to use. Initially meant as a simple "monologue" feature to allow us to insert tutorials into the scene, 
                I have expanded it to allow for dialogue between indefinite amount of characters and exchanges, over a single weekend, allowing our artist's affectionately written lore to be 
                implemented into the game.</br></br>

                <a target="_blank" href="https://github.com/adan-edhel/SoulHunter/blob/master/Platformer/Assets/Code/UI/DialogueManager.cs">Code on Github</a>

        </div>
    </div>

    <div class="feature-block image-right">
        <img src="img/projects/Gameplay/SoulHunter_02.gif" alt="..." />
            <div class="text-block align-left">
                <strong>Portals & Shaders</strong> </br></br>

                A drag & drop portal system, with dissolving FX created with Unity's ShaderGraph. </br></br>

                <a target="_blank" href="https://github.com/adan-edhel/SoulHunter/blob/master/Platformer/Assets/Code/Gameplay/PortalScript.cs">Code on Github</a>
        </div>
    </div>

    <div class="feature-block image-left">
        <img src="img/projects/Gameplay/SoulHunter_03.gif" alt="..." />
            <div class="text-block align-left">
                <strong>Grapple Mechanics</strong> </br></br>

                Grapple hook ability using line renderer, hinge joints and raycasts. This was the second iteration of the mechanic, as the first had been improvised using a physics object, 
                which had made it too unpredictable for our taste.</br></br>

                <a target="_blank" href="https://github.com/adan-edhel/SoulHunter/blob/master/Platformer/Assets/Code/Player/GrappleSystem.cs">Code on Github</a>
        </div>
    </div>

    <!--
    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
        -->
    `, "#006603"),

    //-------------------------------------------------------------------------------------------
    // Line Break
    //-------------------------------------------------------------------------------------------

    new ProjectData("project-4", "Flip The Game", "img/projects/Covers/FlipTheGame.png", `
    <div class="paragraph">
        <strong>FlipTheGame</strong> is a quirky 2D platformer created during a week-long workplace game jam.
        Set entirely in a kitchen-themed world, the game features gravity-flipping mechanics, hazardous utensils, and cheeky appearances from me and my coworkers as NPCs.
        The goal? Use portals, timing, and gravity shifts to escape a culinary labyrinth full of traps.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Covers/FlipTheGame.png" alt="FlipTheGame Cover" />
    </div>

    <div class="paragraph">
        <strong>Gameplay Summary</strong> </br>

        Core Mechanics :
        <ul>
        <li>Gravity Flip: At any time, the player can reverse gravity, flipping the entire game world upside down to traverse ceilings and bypass obstacles.</li>
        <li>Portal System: Scattered across the map, portals allow for non-linear exploration—some lead to progress, others to cleverly disguised traps that test reflexes and problem-solving.</li>
        <li>Hazard Navigation: Timed movement, jump arcs, and environmental awareness are key to avoiding death-by-utensil.</li>
        </ul>
    </div>

    <div class="paragraph">
        Main takeaways:
        <ul>
        <li>Prototype complex mechanics under a tight deadline.</li>
        <li>Collaborate creatively with colleagues.</li>
        <li>Blend humor and design in a playful, team-centered game.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code is available on <a href="https://github.com/adan-edhel/FlipTheGame" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Gameplay/FlipTheGame_00.gif" alt="FlipTheGame Media" />
        <img class="pc-screenshot" src="img/projects/Gameplay/FlipTheGame_01.png" alt="FlipTheGame Media" />
        <img class="pc-screenshot" src="img/projects/Gameplay/FlipTheGame_02.png" alt="FlipTheGame Media" />
        <img class="pc-screenshot" src="img/projects/Gameplay/FlipTheGame_03.png" alt="FlipTheGame Media" />
    </div>
    `, "#383838"),

    //-------------------------------------------------------------------------------------------
    // Line Break
    //-------------------------------------------------------------------------------------------

    new ProjectData("Project-5", "Misc Games", "img/projects/Covers/Dinasauralis.png", `
        <div class="paragraph">
        A series of casual games I've made with collaborators that I felt were still worth mentioning.
        </div>

        <div class="feature-block image-left">
        <img src="img/projects/Covers/Dinasauralis.png" alt="..." />
            <div class="text-block align-left">
                <strong>Dinasauralis</strong> </br></br>

                A game of survival where the "big fish eats the small fish" with a prehistoric twist. Made for Naturalis Biodiversity Center.

                <a target="_blank" href="https://github.com/adan-edhel/Dinosauralis">Code on Github</a>
            </div>
        </div>
        
        <div class="feature-block image-left">
        <img src="img/projects/Covers/SpaceShake.png" alt="..." />
            <div class="text-block align-left">
                <strong>Space Shake</strong> </br></br>
                A splitscreen co-op basketball game on a moon.
            </div>
        </div>

        <div class="feature-block image-left">
        <img src="img/projects/Covers/Disciples.png" alt="..." />
            <div class="text-block align-left">
                <strong>Project Disciples</strong> </br></br>
                
                A 2D Multiplayer team-based platformer where teams use elemental projectiles to be the last one standing.
            </div>
        </div>
        
        <div class="feature-block image-left">
        <img src="img/projects/Covers/Retrowave.jpg" alt="..." />
            <div class="text-block align-left">
                <strong>Retrowave</strong> </br></br>
                A 3D flappy bird-esque game set in an arcadey retrowave world, where you try to make it through obstacles in an increasingly faster tempo.
            </div>
        </div>
        
        `, "#916103")
];