import './App.css';


function Home() {
  return (
      <div className="Home" class="w-2/3 flex items-stretch p-auto m-auto my-20">
        <div class="w-2/3 m-5">
          <h1 class="text-3xl">Anshul Kaashyup</h1>
          <h1 class="underline my-10 text-wrap">Notes + Ideas: <a href="https://drive.google.com/drive/folders/18r8Jl35DHDUrHkMomGS8kaTwAt9IFlP6?usp=drive_link">https://drive.google.com/drive/folders/18r8Jl35DHDUrHkMomGS8kaTwAt9IFlP6?usp=drive_link</a></h1>
          <div class="my-10">
            <p class="my-10">I dream of a world where BCIs are used universally to restore all physical and sensory capabilities to every human on the planet. A world where someone who has been blind for a decade is able to walk through a beautiful grass meadow and look at the small ants crawling in the dirt covered by a beautiful blue sky. A world where an individual suffering from anarthria + paralysis due to a stroke is able to speak and move as if nothing had ever happened - being able to hug their loved ones and tell them they love them. A world where there are no disabilities related to physical, sensory, and even cognitive impairments. Everyone will be able to feel the complete human experience :).</p>
            <p class="my-10">I started thinking about the brain and the way the “most complex system” known to man operates alongside our sensory systems a few years ago when I read Ready Player One. It pushed me to think about the ways we could bring hyperrealistic VR into the world to provide everyone with out-of-world experiences. As I dug deeper, I became entrenched within the Neurotech rabbithole. I began to realize just how much more we could do with these technologies outside of the VR scope - being able to interface with our brains (or our sensory systems) seemed like the best way to solve a lot of our problems. There are three goals I hope we can accomplish (hopefully within my lifetime) w.r.t. Neurotech development:</p>
            <ol>
                <li>- Restore all physical and sensory capabilities to every human on the planet</li>
                <li class="ml-10">- Go from concept to clinical deployment</li>
                <li>- Increase of bit rate of information flow between humans + humans and humans + machines</li>
                <li>- Allow everyone to experience beautiful universes/worlds (like the bioluminescent forest scene from Avatar) as if we were actually there - simulating hyperrealistic senses using BCIs</li>
            </ol>
          </div>
        </div>
        <div class="w-1/4 m-10 py-20 invisible md:visible">
            <img src="/assets/pfp.jpg"/>
        </div>
      </div>
  );
}

export default Home;
