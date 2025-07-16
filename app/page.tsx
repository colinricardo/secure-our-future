import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const researchers = [
  {
    name: "Yoshua Bengio",
    title: 'Turing Award Winner & AI "Godfather"',
    image: "/images/yoshua-bengio.jpg",
  },
  {
    name: "Geoffrey Hinton",
    title: 'Nobel Prize Winner & AI "Godfather"',
    image: "/images/geoffrey-hinton.jpg",
  },
  {
    name: "Ilya Sutskever",
    title: "Cofounder of OpenAI, Founder of SSI",
    image: "/images/ilya-sutskever.jpg",
  },
]

const ceos = [
  {
    name: "Sam Altman",
    title: "CEO, OpenAI (ChatGPT)",
    image: "/images/sam-altman.jpg",
  },
  {
    name: "Demis Hassabis",
    title: "CEO, Google DeepMind (Gemini)",
    image: "/images/demis-hassabis.jpg",
  },
  {
    name: "Dario Amodei",
    title: "CEO, Anthropic (Claude)",
    image: "/images/dario-amodei.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Let's Prevent AI Extinction</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Top AI experts warn that superintelligent AI could lead to human extinction. We must act now to prevent this
          risk.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/take-action">Take Action</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/learn-more">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="my-16 md:my-24">
        <Card className="max-w-4xl mx-auto bg-secondary">
          <CardContent className="p-8 text-center">
            <p className="text-xl font-medium md:text-2xl">
              “Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale
              risks such as pandemics and nuclear war.”
            </p>
            <p className="mt-4 text-muted-foreground">- Statement signed by hundreds of AI experts, 2023</p>
          </CardContent>
        </Card>
      </section>

      <section className="my-16 md:my-24">
        <h2 className="text-3xl font-bold text-center mb-8">Warnings from Top AI Researchers</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {researchers.map((person) => (
            <Card key={person.name} className="text-center">
              <CardHeader>
                <div className="relative h-40 w-40 mx-auto">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    sizes="160px"
                    className="rounded-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="my-16 md:my-24">
        <h2 className="text-3xl font-bold text-center mb-8">And the Top 3 AI CEOs</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ceos.map((person) => (
            <Card key={person.name} className="text-center">
              <CardHeader>
                <div className="relative h-40 w-40 mx-auto">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    fill
                    sizes="160px"
                    className="rounded-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
