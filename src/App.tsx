import { useState, useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Wallet, Coins, ArrowRightLeft, Rocket, TrendingUp, Users, ChevronUp } from "lucide-react"
import { Toaster, toast } from "sonner"

function Hero() {
  const contractAddress = "0xFEFE1234567890ABCDEF1234567890ABCDEF6942"
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    toast.success("Contract address copied!", {
      description: "Ready to paste in your wallet",
      duration: 3000,
    })
  }
  
  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 min-h-screen flex flex-col items-center justify-center text-center bg-[#71c84f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative z-10 w-full">
        {/* Mobile optimized title */}
        <h1 className="font-black text-[#ffd700] tracking-wider mb-2 sm:mb-4 animate-slide-up uppercase px-2">
          <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[16rem] -rotate-2" style={{ 
            textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 3px 0 0 #000, 0 3px 0 #000, -3px 0 0 #000, 0 -3px 0 #000, 4px 4px 8px rgba(0,0,0,0.8)',
            WebkitTextStroke: '2px black',
            paintOrder: 'stroke fill',
            fontFamily: 'Impact, "Arial Black", sans-serif',
            letterSpacing: '0.05em',
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.5))'
          }}>
            $PEPE
          </span>
        </h1>
        
        {/* Mobile optimized tagline with better background */}
        <div className="px-4 sm:px-0">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white max-w-2xl mx-auto rotate-1 animate-slide-up inline-block" style={{ 
            animationDelay: "100ms",
            textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 0 0 #000, 0 2px 0 #000, -2px 0 0 #000, 0 -2px 0 #000'
          }}>
            The most memeable memecoin in existence. It's time for Pepe to take reign.
          </p>
        </div>
        
        {/* Contract address - improved mobile layout */}
        <div className="mt-6 sm:mt-8 animate-slide-up mx-auto max-w-full" style={{ animationDelay: "200ms" }}>
          <div className="p-3 sm:p-4 bg-white border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span className="font-black text-xs sm:text-sm md:text-base break-all text-center sm:text-left px-2 leading-relaxed">{contractAddress}</span>
            <Button 
              onClick={copyToClipboard}
              className="bg-[#71c84f] hover:bg-[#65b346] text-black border-2 border-black h-9 sm:h-9 px-4 sm:px-4 font-black text-xs whitespace-nowrap shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex-shrink-0 w-full sm:w-auto"
            >
              COPY ADDRESS
            </Button>
          </div>
        </div>

        {/* CTA Buttons - improved mobile spacing */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center pt-6 sm:pt-8 animate-slide-up px-2" style={{ animationDelay: "300ms" }}>
          <Button size="lg" className="bg-[#ef3338] hover:bg-[#d1282d] text-white text-xl sm:text-xl md:text-2xl h-16 sm:h-16 md:h-20 px-10 sm:px-10 md:px-16 rounded-2xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all font-black w-full sm:w-auto">
            BUY NOW
          </Button>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-black text-xl sm:text-xl md:text-2xl h-16 sm:h-16 md:h-20 px-10 sm:px-10 md:px-16 rounded-2xl border-[4px] border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all font-black w-full sm:w-auto">
            CHART
          </Button>
        </div>
      </div>

      {/* Stats Bar - improved mobile layout */}
      <div className="w-full max-w-5xl mx-auto mt-8 sm:mt-12 relative z-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            { icon: Users, label: "Holders", value: "69,420+" },
            { icon: TrendingUp, label: "Market Cap", value: "$420M" },
            { icon: Coins, label: "Liquidity", value: "$42M" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white border-[3px] border-black rounded-xl p-5 shadow-[4px_4px_0_0_rgba(0,0,0,1)] animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <stat.icon className="w-6 h-6 sm:w-6 sm:h-6 mx-auto mb-2" />
              <p className="text-sm sm:text-sm font-black text-gray-600">{stat.label}</p>
              <p className="text-2xl sm:text-2xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function Section({ id, title, children, bgColor = "bg-white", titleColor = "text-black" }: { id: string, title: string, children: React.ReactNode, bgColor?: string, titleColor?: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(id)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [id])

  return (
    <section id={id} className={`py-24 px-4 border-t-[4px] border-black ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-5xl md:text-7xl font-black ${titleColor} mb-16 text-center underline decoration-[#71c84f] decoration-8 underline-offset-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {title}
        </h2>
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {children}
        </div>
      </div>
    </section>
  )
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-[#ef3338] text-white rounded-full border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}

function App() {
  return (
    <div className="min-h-screen font-sans bg-[#71c84f]">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        
        <Section id="about" title="ABOUT" bgColor="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="p-6 sm:p-8 border-[4px] border-black rounded-3xl shadow-[8px_8px_0_0_rgba(113,200,79,1)] bg-white rotate-2 hover:rotate-0 transition-transform duration-300">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
                Pepe is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The dogs have had their day. 
                <br/><br/>
                It's time for the most recognizable meme in the world to take his reign as king of the memes.
              </p>
            </div>
            <div className="flex justify-center -rotate-2 hover:rotate-0 transition-transform duration-300">
               <img 
                 src="/pepe-mascot.png" 
                 alt="Pepe the Frog mascot giving thumbs up"
                 className="w-full max-w-sm sm:max-w-md h-auto rounded-3xl border-[4px] border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] bg-[#71c84f] p-6 sm:p-8"
               />
            </div>
          </div>
        </Section>

        <Section id="how-to-buy" title="HOW TO BUY" bgColor="bg-[#71c84f]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: "1", icon: Wallet, title: "Create Wallet", desc: "Download Metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension." },
              { step: "2", icon: Coins, title: "Get Some ETH", desc: "Have ETH in your wallet to switch to $PEPE. If you don't have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange." },
              { step: "3", icon: ArrowRightLeft, title: "Go to Uniswap", desc: "Connect to Uniswap. Go to app.uniswap.org in chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address." },
              { step: "4", icon: Rocket, title: "Switch ETH for $PEPE", desc: "Switch ETH for $PEPE. We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility." }
            ].map((item, idx) => (
              <div 
                key={item.step} 
                className="p-5 sm:p-6 bg-white border-[4px] border-black rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ef3338] text-white border-[3px] border-black rounded-full flex items-center justify-center font-black text-xl sm:text-2xl shadow-[3px_3px_0_0_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform">
                    {item.step}
                  </div>
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#71c84f] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">{item.title}</h3>
                <p className="font-bold text-gray-700 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="tokenomics" title="TOKENOMICS" bgColor="bg-white">
           <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
               <div className="p-6 sm:p-8 border-[4px] border-black rounded-3xl bg-[#71c84f] shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                 <h4 className="text-xl sm:text-2xl font-black mb-2">Total Supply</h4>
                 <p className="text-2xl sm:text-3xl md:text-4xl font-black break-all">420,690,000,000,000</p>
               </div>
               <div className="p-6 sm:p-8 border-[4px] border-black rounded-3xl bg-[#ef3338] text-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all">
                 <h4 className="text-xl sm:text-2xl font-black mb-2">Tax</h4>
                 <p className="text-2xl sm:text-3xl md:text-4xl font-black">0% / 0%</p>
                 <p className="text-xs sm:text-sm mt-2 font-bold">Buy & Sell</p>
               </div>
             </div>
             <div className="p-6 sm:p-8 border-[4px] border-black rounded-3xl bg-white shadow-[12px_12px_0_0_rgba(113,200,79,1)] hover:shadow-[16px_16px_0_0_rgba(113,200,79,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all">
               <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center leading-relaxed">
                 93.1% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract is renounced. The remaining 6.9% of the supply is being held in a multi-sig wallet only to be used as tokens for future centralized exchange listings, bridges, and liquidity pools.
               </p>
             </div>
           </div>
        </Section>

        <Section id="join-us" title="JOIN THE COMMUNITY" bgColor="bg-black" titleColor="text-white">
          <div className="text-center space-y-6 sm:space-y-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#71c84f] mb-6 sm:mb-8">FOLLOW THE REVOLUTION</h3>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
               <a 
                 href="https://twitter.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="transform hover:scale-110 transition-all duration-300 group"
                 aria-label="Follow us on Twitter"
               >
                 <div className="bg-white p-6 sm:p-8 rounded-2xl border-[6px] border-[#71c84f] shadow-[0_0_30px_rgba(113,200,79,0.5)] group-hover:shadow-[0_0_50px_rgba(113,200,79,0.8)] transition-all">
                    <span className="text-black font-black text-2xl sm:text-3xl md:text-4xl">Twitter</span>
                 </div>
               </a>
               <a 
                 href="https://t.me" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="transform hover:scale-110 transition-all duration-300 group"
                 aria-label="Join our Telegram"
               >
                 <div className="bg-white p-6 sm:p-8 rounded-2xl border-[6px] border-[#ef3338] shadow-[0_0_30px_rgba(239,51,56,0.5)] group-hover:shadow-[0_0_50px_rgba(239,51,56,0.8)] transition-all">
                    <span className="text-black font-black text-2xl sm:text-3xl md:text-4xl">Telegram</span>
                 </div>
               </a>
            </div>
            <p className="text-gray-400 font-bold pt-8 sm:pt-12 max-w-3xl mx-auto text-xs sm:text-sm md:text-base px-4">
              $PEPE coin has no association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize.
              <br/><br/>
              $PEPE is a memecoin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
            </p>
          </div>
        </Section>
      </main>
      
      <footer className="py-6 sm:py-8 bg-black text-white text-center border-t-[4px] border-[#71c84f]">
        <p className="font-black text-sm sm:text-base">© {new Date().getFullYear()} BY $PEPE. ALL RIGHTS RESERVED.</p>
      </footer>
      
      <BackToTop />
    </div>
  )
}

export default App
