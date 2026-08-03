import ProjectData from '@/data/ProjectData'


// Add "true, true" to the end of color code to increase thumbnail size

const RealmOfAeris = new ProjectData("project-6", "Realm of Aeris", "img/projects/Covers/ROA.jpg", `
    <strong>Realm of Aeris</strong> is a medieval fantasy survival sandbox where players wash ashore on the embattled island of <strong>Obsidian Peak</strong>. 
    Blending a classless progression system with impactful, visceral, stamina-based combat, players must survive harsh conditions, 
    construct modular castles, and utilize siege weaponry to dominate rival chapters in a persistent PvP and PvE world, all the while learning what went on on Obsidian Peak.

    <div class="paragraph center">
        <img class="large-screenshot" src="img/projects/Covers/ROA.jpg" alt="Realm of Aeris Cover" />
    </div>

    <div class="paragraph">
        <strong>Personal Contributions</strong> </br>
        <ul>
        <li>Identified and optimized memory usage by roughly 70% within the project.</li>
        <li>Created internal wiki guides on industry-proven designs and patterns (e.g. Observer, Component, Factory) to ensure scalability 
        and maintainability across the project, as well as version control usage instructions for colleagues and interns.</li>
        <li>Reviewed pull requests, as well as optimizing and streamlining the review process to maximize efficieny and cut down wasted time..</li>
        <li>Developed a character state system to maintain flags and status effects with flexible lookup methods.</li>
        <li>Developed a modular NPC AI foundation with dynamic environment queries.</li>
        <li>Developed a dynamic archery mechanic inspired by M&B Bannerlord and Skyrim.</li>
        <li>Developed a combat combo system supporting chained attacks with dynamic follow-up animations.</li>
        <li>Developed a souls-like target locking system with distinct softlock and hardlock modes, including locational locking ability.</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Relevant Skills & Tools</strong> </br>
        <ul>
        <li><strong>Engine & Core:</strong> Unreal Engine 5 (C++/Blueprints), Enhanced Input, World Partition</li>
        <li><strong>Gameplay Systems:</strong> Gameplay Ability System (GAS), Gameplay Tags, Data Assets/Tables, Animation Blueprints & Montages</li>
        <li><strong>Networking & Multiplayer:</strong> Replication, Network Prediction, RPCs, Client/Server authority</li>
        <li><strong>AI:</strong> Behavior Trees, State Trees and Environment Query System. </li>
        <li><strong>Performance & Optimization:</strong> Memory profiling & reduction (~70% overall reduction), Async Loading of assets on demand. </li>
        <li><strong>Version Control:</strong> Git</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Find out more about Realm of Aeris on <a href="https://www.bfgs.nl/" target="_blank">www.BFGS.nl</a>
        </div>
    </div>
 
    `, "#000000", "Unreal Engine 5 (C++/Blueprints)", true, true);

    const CustomEngine = new ProjectData("project-5", "Custom Engine + Vertical Slice", "img/projects/Covers/CustomEngine.png", `
    <!-- SUMMARY -->
    This project is a faithful vertical slice of Hollow Knight, created on a self-initiated custom engine/framework.
    The engine is inspired by Unity Engine's architecture and features game objects with component system and custom implementations of various components natively provided by Unity.

    </br> </br>

    <strong>Additional context:</strong> This was a graded assignment with the goal of creating a vertical slice of an existing 2D game in raw C++, 
    I decided to take it a step further and created my own rudimentary engine/framework top of the SDL 2 framework in the first half of the semester, 
    which gave me a lot of insight into engine-level development and systems thinking and made it trivial to later build the vertical slice on top.

    <!-- COVER PHOTO -->
    <div class="paragraph center">
        <img class="large-screenshot" src="img/projects/Covers/CustomEngine.png" alt="Custom Engine Cover" />
    </div>

    <!-- GITHUB LINK -->
    <!--
    <div class="paragraph center">
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight" target="_blank"><img class="logo-small" src="img/projects/Icons/github-logo.png" alt="Github badge" /></a>
    </div>
    -->

    <!-- BODY -->
    <div class="center">
        <strong>Custom Engine Features</strong>
    </div>

    <div class="paragraph">
        
        <strong>Object Oriented Architecture:</strong> </br>
        Object </br>
        Transform </br>
        Components </br>
        <strong>List of components:</strong> </br>
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/Collider.cpp" target="_blank">Collider</a> </br>
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/Rigidbody2D.cpp" target="_blank">Rigidbody2D</a> </br>
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/SpriteRenderer.cpp" target="_blank">SpriteRenderer</a> </br>
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/Animator.cpp" target="_blank">Animator</a> </br>
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/Camera.cpp" target="_blank">Camera</a> </br>
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/AudioSource.cpp" target="_blank">AudioSource</a> </br>
        <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight/blob/main/Engine/AudioListener.cpp" target="_blank">AudioListener</a> </br>
    </div>

    <div class="center">
        <strong>Vertical Slice Features</strong>
    </div>

    <div class="paragraph">
        <strong>A faithful first level of Hollow Knight</strong>: Player movement, combat, enemy AI, and destructible environment. </br>
        <strong>Playable character</strong>: Responsive movement & double jump, sword attack animations and knockback & damage feedback. </br>
        <strong>Enemy AI:</strong> Simple patrol and chase behaviors, death animations and health system. </br>
        <strong>Cinematic camera:</strong> Smooth follow with configurable damping and boundary clamping as well as camera shake effect. </br>
        <strong>Audio system:</strong> Footsteps, attack sounds, ambient background music. Including custom 3D sound and attenuation implementation. </br>
        <strong>Environment:</strong> Parallax-scrolling backgrounds and destructible obstacles. </br>
    </div>

    <!-- GITHUB LINK -->
    <div class="paragraph">
        <div class="notice">
        Full source code is available on <a href="https://github.com/adan-edhel/CustomEngine_HollowKnight" target="_blank">GitHub</a>.
        </div>
    </div>
    `, "#000000", "C++", true);

    const TreacherousWaters = new ProjectData("project-4", "Treacherous Waters", "img/projects/Covers/TreacherousWaters.png", `
    <!-- SUMMARY -->
    <div class="paragraph">
        Treacherous Waters is a 3D arcade-style naval combat game built using the Synty Pirate Asset Pack. 
        The project was developed as a graduation assignment within five days, three of which involved production, 
        with the goal of showcasing the assetpack's stylized models and environmental assets.  <br/> </br/>

        You play as a pirate captain tasked with sinking merchant ships sailing between coastal cities and collecting the loot they leave behind. However, your actions have consequences, as defeating merchant ships will trigger retaliation from warships that will hunt you down.
    </div>
    
    <!-- COVER PHOTO -->
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Covers/TreacherousWaters.png" alt="Treacherous Waters Cover" />
    </div>

    <!-- BODY -->
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
        <li>Keeping explicit journals on any design deviations.</li>
        <li>Working within strict time restrictions. One day to design the concept, 
        one day to plan the technical design and feature priorities, three days to build the game.</li>
        </ul>
    </div>

    <!-- LINKS -->
    <div class="paragraph">
    <div class="notice">
        Play on browser on <a href="https://amroth-eldarion.itch.io/treacherous-waters" target="_blank">Itch.io</a>
    </div>
    <div class="notice">
        Source code is available on <a href="https://github.com/adan-edhel/TreacherousWaters" target="_blank">GitHub</a>
    </div>

    </div>

    <!-- iMAGES -->
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Gameplay/TreacherousWaters_00.gif" alt="TreacherousWaters Media" />
    <img class="pc-screenshot" src="img/projects/Gameplay/TreacherousWaters_01.gif" alt="TreacherousWaters Media" />
    <img class="pc-screenshot" src="img/projects/Gameplay/TreacherousWaters_02.png" alt="TreacherousWaters Media" />
    <img class="pc-screenshot" src="img/projects/Gameplay/TreacherousWaters_03.png" alt="TreacherousWaters Media" />
    </div>
    
    `, "#5a78af", "Unity Engine - C#", true, true);

    const SoulHunter = new ProjectData("project-3", "Soul Hunter", "img/projects/Covers/SoulHunter.png", `

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Covers/SoulHunter.png" alt="Soul Hunter Cover" />
    </div>

    <div class="paragraph center">
    A 2D platformer telling the coming of age story of a fledgeling psycophant <br/>
    who morally struggles with the concept of reaping souls. <br/><br/>
    </div>

    <div class="paragraph">
    This game was created by myself, a fellow programmer, and one artist over the course of a semester.
    </div>

    <div class="paragraph"> 
        <strong>Game features:</strong> </br>
        - Original storyline </br>
        - Grappling mechanic </br>
        - Portals & teleportation </br>
        - Moody environment with parallax </br>
    </div>

    <div class="paragraph">
        <strong>Personal Contribution:</strong> </br>
        - Grapple mechanics </br>
        - Dialogue system </br>
        - Portal mechanics </br>
        - Player movement and physics </br>
        - UI, menu and input functionality </br>
        - Audio system & sound design </br>
        - Asset & Level design </br>
        - Project lead and scrum </br>
        - Custom shaders
    </div>

    <div class="paragraph">
        <div class="notice">
        Playable on browser on <a href="https://amroth-eldarion.itch.io/soul-hunter" target="_blank">itch.io</a>.
        </div>
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
                I have expanded it to allow for dialogue between indefinite amount of characters and exchanges, allowing our artist's affectionately written lore to be 
                implemented into the game.</br></br>

        </div>
    </div>

    <div class="feature-block image-right">
        <img src="img/projects/Gameplay/SoulHunter_02.gif" alt="..." />
            <div class="text-block align-left">
                <strong>Portals & Shaders</strong> </br></br>

                A color based portal system automatically connecting to others with identical color, with dissolving shader FX created with Unity's ShaderGraph. </br></br>
        </div>
    </div>

    <div class="feature-block image-left">
        <img src="img/projects/Gameplay/SoulHunter_03.gif" alt="..." />
            <div class="text-block align-left">
                <strong>Grapple Mechanics</strong> </br></br>

                Grapple hook ability using line renderer, hinge joints and raycasts.
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
    `, "#006603", "Unity Engine - C#");

    const FlipTheGame = new ProjectData("project-2", "Flip The Game", "img/projects/Covers/FlipTheGame.png", `
    <div class="paragraph">
        <strong>FlipTheGame</strong> is a quirky 2D platformer created during a week-long studio game jam.
        Set entirely in a kitchen-themed world, the game features gravity-flipping mechanics, hazardous utensils, and cheeky appearances from me and my coworkers as NPCs.
        The goal is to use portals, timing, and gravity shifts to escape a culinary labyrinth full of traps.
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
        <div class="notice">
        Playable on browser on <a href="https://amroth-eldarion.itch.io/flip-the-game" target="_blank">itch.io</a>.
        </div>
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
    `, "#383838", "Unity Engine - C#");

    const MiscGames = new ProjectData("Project-1", "Misc Games", "img/projects/Covers/Dinasauralis.png", `
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
        
        `, "#916103");

export default [
        RealmOfAeris,
        CustomEngine,
        TreacherousWaters,
        FlipTheGame,
        SoulHunter,
        // MiscGames
        
    // Link example: <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
];