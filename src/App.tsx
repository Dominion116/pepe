import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"

function Hero() {
  const contractAddress = "0xFEFE...69420"
  
  return (
    <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center text-center bg-[#71c84f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter drop-shadow-[4px_4px_0_rgba(255,255,255,1)] mb-4 -rotate-1">
          $PEPE 0xFEFE
        </h1>
        <p className="text-xl md:text-3xl font-black text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] max-w-2xl mx-auto rotate-1">
          The most memeable memecoin in existence. It's time for Pepe to take reign.
        </p>
        
        <div className="mt-8 p-4 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] inline-flex items-center space-x-4 max-w-full">
          <span className="font-black text-sm md:text-lg break-all">{contractAddress}</span>
          <Button 
            onClick={() => navigator.clipboard.writeText("0xFEFE...69420")}
            className="bg-[#71c84f] hover:bg-[#65b346] text-black border-2 border-black h-8 px-3 font-black text-xs"
          >
            COPY
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center pt-8">
          <Button size="lg" className="bg-[#ef3338] hover:bg-[#d1282d] text-white text-xl md:text-2xl h-16 md:h-20 px-10 md:px-16 rounded-2xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all font-black">
            BUY NOW
          </Button>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-black text-xl md:text-2xl h-16 md:h-20 px-10 md:px-16 rounded-2xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all font-black">
            CHART
          </Button>
        </div>
      </div>
      
      <div className="mt-16 animate-bounce">
        <div className="w-10 h-16 border-4 border-black rounded-full flex justify-center pt-2">
          <div className="w-2 h-4 bg-black rounded-full" />
        </div>
      </div>
    </section>
  )
}


function Section({ id, title, children, bgColor = "bg-white" }: { id: string, title: string, children: React.ReactNode, bgColor?: string }) {
  return (
    <section id={id} className={`py-24 px-4 border-t-[4px] border-black ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-black mb-16 text-center underline decoration-[#71c84f] decoration-8 underline-offset-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen font-sans bg-[#71c84f]">
      <Navbar />
      <main>
        <Hero />
        
        <Section id="about" title="ABOUT" bgColor="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-8 border-[4px] border-black rounded-3xl shadow-[8px_8px_0_0_rgba(113,200,79,1)] bg-white rotate-2">
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                Pepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The dogs have had their day. 
                <br/><br/>
                It's time for the most recognizable meme in the world to take his reign as king of the memes.
              </p>
            </div>
            <div className="flex justify-center -rotate-2">
               <div className="w-full h-80 bg-[#71c84f] border-[4px] border-black rounded-3xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex items-center justify-center text-black font-black text-2xl p-4 text-center">
                 [PEPE MASCOT IMAGE]
               </div>
            </div>
          </div>
        </Section>

        <Section id="how-to-buy" title="HOW TO BUY" bgColor="bg-[#71c84f]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Create Wallet", desc: "Download Metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension." },
              { step: "2", title: "Get Some ETH", desc: "Have ETH in your wallet to switch to $PEPE. If you don't have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange." },
              { step: "3", title: "Go to Uniswap", desc: "Connect to Uniswap. Go to app.uniswap.org in chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address." },
              { step: "4", title: "Switch ETH for $PEPE", desc: "Switch ETH for $PEPE. We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility." }
            ].map((item) => (
              <div key={item.step} className="p-6 bg-white border-[4px] border-black rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-[#ef3338] text-white border-[3px] border-black rounded-full flex items-center justify-center font-black text-2xl mb-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                  {item.step}
                </div>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="font-bold text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="tokenomics" title="TOKENOMICS" bgColor="bg-white">
           <div className="max-w-4xl mx-auto space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 border-[4px] border-black rounded-3xl bg-[#71c84f] shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                 <h4 className="text-2xl font-black mb-2">Total Supply</h4>
                 <p className="text-4xl font-black">420,690,000,000,000</p>
               </div>
               <div className="p-8 border-[4px] border-black rounded-3xl bg-[#ef3338] text-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                 <h4 className="text-2xl font-black mb-2">Tax</h4>
                 <p className="text-4xl font-black">0 / 0</p>
               </div>
             </div>
             <div className="p-8 border-[4px] border-black rounded-3xl bg-white shadow-[12px_12px_0_0_rgba(113,200,79,1)]">
               <p className="text-2xl font-bold text-center">
                 93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining 6.9% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools.
               </p>
             </div>
           </div>
        </Section>

        <Section id="join-us" title="JOIN US" bgColor="bg-black">
          <div className="text-center space-y-8">
            <h3 className="text-4xl md:text-6xl font-black text-[#71c84f] mb-8">FOLLOW THE REVOLUTION</h3>
            <div className="flex flex-wrap justify-center gap-8">
               <a href="#" className="transform hover:scale-110 transition-transform">
                 <div className="bg-white p-6 rounded-full border-[6px] border-[#71c84f] shadow-[0_0_20px_rgba(113,200,79,0.5)]">
                    <span className="text-black font-black text-4xl">Twitter</span>
                 </div>
               </a>
               <a href="#" className="transform hover:scale-110 transition-transform">
                 <div className="bg-white p-6 rounded-full border-[6px] border-[#ef3338] shadow-[0_0_20px_rgba(239,51,56,0.5)]">
                    <span className="text-black font-black text-4xl">Telegram</span>
                 </div>
               </a>
            </div>
            <p className="text-gray-400 font-bold pt-12">
              $PEPE coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.
              <br/><br/>
              $PEPE is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
            </p>
          </div>
        </Section>
      </main>
      
      <footer className="py-8 bg-black text-white text-center border-t-[4px] border-[#71c84f]">
        <p className="font-black">© 2024 BY $PEPE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  )
}

export default App

