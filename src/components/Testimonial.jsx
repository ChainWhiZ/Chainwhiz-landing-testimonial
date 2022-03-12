import ColorText from "./ColorText";
import TwitterCard from "./TwitterCard";

function Testimonal() {
  return (
    <section className="App-header">
      <div className="title">
        <ColorText
          context="Kya Kool Hein Hum"
          tag="h2"
          classname="text-yellow"
          wordIndexes={[1]}
        />
        <ColorText
          context="Basically, WAGMI"
          tag="p"
          classname="text-yellow"
          wordIndexes={[1]}
        />
      </div>
      <div class="testimonal">
        <TwitterCard
          author="Ritvik"
          source="via Forum"
          context={
            "Chainwhiz is an awesome community-centric project built on Polygon. I’m super pumped to see how Chainwhiz plays an important role in helping OSS projects scale using bounties and community."
          }
        />
        <TwitterCard
          author="Greg"
          source="via Forum"
          context={
            "Chainwhiz is a great initiative. Having something like Gitcoin but with much lower fees would be really exciting! \n\n Looking forward to seeing amazing bounties being listed on the platform and helping scale Web3 projects and DAOs."
          }
        />
        <TwitterCard
          author="AlexP"
          source="via Discord"
          context={
            " I like Chainwhiz. It has my vote. Any future voting mechanisms for a DAO or a project needs to be on a blockchain like Polygon anyway so would be a good first step. Looking forward!"
          }
        />
        <TwitterCard
          author="Greg"
          source="via Discord"
          context={
            "Chainwhiz is a great initiative. Having something like Gitcoin but with much lower fees would be really exciting!\n\nLooking forward to seeing amazing bounties being listed on the platform and helping scale Web3 projects and DAOs."
          }
        />
        <TwitterCard
          author="Ritvik"
          source="via Forum"
          context={
            "Chainwhiz is an awesome community-centric project built on Polygon. I’m super pumped to see how Chainwhiz plays an important role in helping OSS projects scale using bounties and community."
          }
        />
        <TwitterCard
          author="Greg"
          source="via Discord"
          context={
            "Chainwhiz is a great initiative. Having something like Gitcoin but with much lower fees would be really exciting!\n\nLooking forward to seeing amazing bounties being listed on the platform and helping scale Web3 projects and DAOs."
          }
        />
      </div>
    </section>
  );
}


export default Testimonal;