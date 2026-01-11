import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Send, Twitter } from "lucide-react"

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "HOW TO BUY", href: "#how-to-buy" },
  { name: "TOKENOMICS", href: "#tokenomics" },
  { name: "JOIN US", href: "#join-us" },
]

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Telegram", href: "https://t.me", icon: Send },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300 ${
        scrolled 
          ? "bg-[#71c84f]/95 backdrop-blur-md py-2 border-b-[3px] border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]" 
          : "bg-[#71c84f] border-b-[3px] border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Pepe 0xFEFE" 
              className="h-12 w-auto md:h-16 hover:scale-110 transition-transform drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black font-sans font-black text-sm md:text-base tracking-wide hover:text-white hover:-rotate-3 transition-all duration-200 drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,0.1)]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials & Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 mr-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white rounded-full border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
              >
                <social.icon className="w-5 h-5 text-black" />
              </a>
            ))}
          </div>
          <Button 
            className="bg-[#ef3338] hover:bg-[#d1282d] text-white font-sans font-black text-xs md:text-sm px-4 py-4 md:px-6 md:py-5 rounded-xl border-[3px] border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            BUY $PEPE
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-3">
           <Button 
            className="bg-[#ef3338] hover:bg-[#d1282d] text-white font-sans font-black text-[10px] px-3 py-2 h-auto rounded-lg border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
          >
            BUY
          </Button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-black hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[71px] bg-[#71c84f] z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } border-t-[3px] border-black`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-32">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-black font-sans font-black text-3xl hover:text-white hover:-rotate-3 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-white rounded-full border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                <social.icon className="w-8 h-8 text-black" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

