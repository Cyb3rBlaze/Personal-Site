import './App.css';


function Home() {
  return (
      <div className="Home" class="w-2/3 flex items-stretch p-auto m-auto my-20">
        <div class="w-2/3 m-5">
          <h1 class="text-3xl">Anshul Kaashyup</h1>
          <h1 class="underline my-10 text-wrap">Notes + Ideas: <a href="https://drive.google.com/drive/folders/18r8Jl35DHDUrHkMomGS8kaTwAt9IFlP6?usp=drive_link">https://drive.google.com/drive/folders/18r8Jl35DHDUrHkMomGS8kaTwAt9IFlP6?usp=drive_link</a></h1>
          <div class="my-10">
            <p class="my-10">I dream of a world where intelligence is embodied in the world around us and we are able to interact with it in a seamless, natural way. From assitive robots to automated healthcare systems which have an accurate understanding of our needs, we can create a world where we are able to live our best lives. Everyone will be able to feel the complete human experience :) (ironically enhanced by embodied intelligence).</p>
            <p class="my-10">I started thinking about perception and the way the “most complex system” known to man operates alongside our sensory systems a few years ago when I read Ready Player One. It pushed me to think about the ways we could bring hyperrealistic VR into the world to provide everyone with out-of-world experiences. As I dug deeper, I became entrenched within the "world modeling" rabbithole. I began to realize just how much more we could do with these technologies outside of the VR scope - being able to accurately model out enviornment meant we could provide next level intelligence to robots and autonomous system and solve a lot of our problems. There are three goals I hope we can accomplish (hopefully within my lifetime) w.r.t. intelligence embodiment development:</p>
            <ol>
                <li>- Build perception AI models that enable robotic systems to restore or augment human sensory and motor capabilities—unlocking accessibility and human-machine synergy at scale</li>
                <li class="ml-10">- Translate advanced perception research into deployable robotic solutions, accelerating the path from concept to clinical or assistive impact</li>
                <li>- Enhance the bandwidth of human–robot and human–human interaction through intelligent sensory interpretation, enabling more natural, high-fidelity communication</li>
                <li>- Create perception-driven systems that allow users to experience richly immersive, physically responsive environments—blurring the line between real and simulated worlds through robotics and AI</li>
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
