import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col items-center justify-center p-8 bg-background text-foreground">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-6xl font-bold tracking-tighter">
          Notebook Theme
        </h1>
        <p className="text-xl text-muted-foreground font-serif">
          A clean, handwriting-inspired aesthetic for your next project.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
        
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-6 border rounded-lg bg-card shadow-sm space-y-2">
            <h3 className="text-lg font-bold">Handwritten feel</h3>
            <p className="text-sm text-muted-foreground">
              Using the Architects Daughter font for a personal, informal touch.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-accent/20 shadow-sm space-y-2">
            <h3 className="text-lg font-bold">Paper Palette</h3>
            <p className="text-sm text-muted-foreground">
              Soft whites and charcoal grays inspired by high-quality stationery.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
