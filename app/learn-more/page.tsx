"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const sections = [
  {
    title: "What do experts mean by 'extinction'?",
    content: [
      {
        type: "paragraph",
        text: "They mean the literal end of humanity. A superintelligent AI could pursue its goals in ways that are catastrophic for us, and we would be unable to stop it.",
      },
      {
        type: "paragraph",
        text: 'The world\'s top AI researchers and the CEOs of leading AI labs like Google DeepMind, OpenAI, and Anthropic have all signed a statement acknowledging this risk. You can see the full list of signatories <a href="https://safe.ai/work/statement-on-ai-risk" class="underline hover:text-primary">here</a>.',
      },
      {
        type: "blockquote",
        text: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war.",
      },
    ],
  },
  {
    title: "What is ASI, and why is it risky?",
    content: [
      {
        type: "paragraph",
        text: "<strong>ASI, or Artificial Superintelligence, is an AI that is smarter than all of humanity combined.</strong> Such a system could outmaneuver any person, company, or country in any domain—be it economic, scientific, or military.",
      },
      {
        type: "paragraph",
        text: "<strong>Leading AI companies are now openly working to build ASI.</strong> They are betting that the potential benefits are worth the existential risk. Here’s what their CEOs are saying about this ambition:",
      },
    ],
    quotes: [
      {
        name: "Sam Altman",
        title: "CEO of OpenAI",
        image: "/images/sam-altman.jpg",
        quotes: [
          "Development of superhuman machine intelligence is probably the greatest threat to the continued existence of humanity.",
          "OpenAI is a lot of things now, but before anything else, we are a superintelligence research company.",
        ],
        sources: [
          {
            name: 'Sam Altman\'s Blog "Machine Intelligence Part 1"',
            url: "https://blog.samaltman.com/machine-intelligence-part-1",
          },
          { name: '"The Gentle Singularity"', url: "https://blog.samaltman.com/the-gentle-singularity" },
        ],
      },
      {
        name: "Mark Zuckerberg",
        title: "CEO of Meta",
        image: "/images/mark-zuckerberg.jpg",
        quotes: [
          "For our superintelligence effort, I'm focused on building the most elite and talent-dense team in the industry. We're also going to invest hundreds of billions of dollars into compute to build superintelligence.",
        ],
        sources: [
          {
            name: "Threads",
            url: "https://www.threads.com/@zuck/post/DMF6tMAxkX8?xmt=AQF0I7Dablku5v4EgE-MWypMkAenYDhfs2_nSDlAImnh4A",
          },
        ],
      },
      {
        name: "Dario Amodei",
        title: "CEO of Anthropic",
        image: "/images/dario-amodei.jpg",
        quotes: [
          "I think at the extreme end is the Nick Bostrom style of fear that an AGI could destroy humanity. I can't see any reason in principle why that couldn't happen.",
          "My chance that something goes really quite catastrophically wrong on the scale of human civilization might be somewhere between 10 per cent and 25 per cent.",
        ],
        sources: [
          {
            name: "80,000 Hours",
            url: "https://80000hours.org/podcast/episodes/the-world-needs-ai-researchers-heres-how-to-become-one/",
          },
          { name: "Indy100", url: "https://www.indy100.com/science-tech/ai-extinction-chance-humans" },
        ],
      },
    ],
  },
  {
    title: "How much time do we have?",
    content: [
      {
        type: "paragraph",
        text: "The release of ChatGPT in 2022 marked a turning point. Before then, most experts saw ASI as a distant problem for future generations. That has changed.",
      },
      {
        type: "paragraph",
        text: "The rapid pace of AI progress has dramatically shortened timelines. <strong>Many experts now believe ASI could be developed within the next few years.</strong> Yet, this urgency is not reflected in public discourse or political planning. Here is what experts are saying about how quickly this could happen:",
      },
    ],
    quotes: [
      {
        name: "Geoffrey Hinton",
        title: 'Nobel Prize-winning "Godfather of AI"',
        image: "/images/geoffrey-hinton.jpg",
        quotes: [
          "The idea that this stuff could actually get smarter than people — a few people believed that … But most people thought it was way off. And I thought it was way off. I thought it was 30 to 50 years or even longer away. Obviously, I no longer think that.",
        ],
        sources: [
          {
            name: "The New York Times",
            url: "https://www.nytimes.com/2023/05/01/technology/ai-google-chatbot-engineer-quits-hinton.html",
          },
        ],
      },
      {
        name: "Daniel Kokotajlo",
        title: "Ex-OpenAI Analyst",
        image: "/images/daniel-kokotajlo.jpg",
        quotes: [
          "By 2027, we may automate AI R&D leading to vastly superhuman AIs ('artificial superintelligence' or ASI). In [our scenario that is titled] AI 2027, AI companies create expert-human-level AI systems in early 2027 which automate AI research, leading to ASI by the end of 2027.",
        ],
        sources: [{ name: "AI 2027", url: "https://ai-2027.com/" }],
      },
      {
        name: "Dario Amodei",
        title: "CEO of Anthropic",
        image: "/images/dario-amodei.jpg",
        quotes: [
          "Time is short, and we must accelerate our actions to match accelerating AI progress. Possibly by 2026 or 2027 (and almost certainly no later than 2030), the capabilities of AI systems will be best thought of as akin to an entirely new state populated by highly intelligent people appearing on the global stage — a “country of geniuses in a datacenter” — with the profound economic, societal, and security implications that would bring.",
        ],
        sources: [{ name: "Anthropic", url: "https://www.anthropic.com/news/perspectives-on-ai-progress" }],
      },
    ],
  },
  {
    title: "How do we prevent this?",
    content: [
      {
        type: "paragraph",
        text: "<strong>To prevent extinction, we must prohibit the development of ASI.</strong> This means banning any AI system that could subvert human control.",
      },
      {
        type: "paragraph",
        text: 'As the race to ASI accelerates, some experts are already predicting—and even recommending—drastic military actions to stop rival projects. To avoid such a future, we must act now to restrict the technologies that enable ASI. The necessary policies are outlined on our <a href="/take-action" class="underline hover:text-primary">Take Action</a> page. Here is what experts are saying about the geopolitical stakes:',
      },
    ],
    quotes: [
      {
        name: "Eric Schmidt",
        title: "ex-Google CEO",
        image: "/images/eric-schmidt.jpg",
        quotes: [
          "Should these measures falter, some leaders may contemplate kinetic attacks on datacenters, arguing that allowing one actor to risk dominating or destroying the world are graver dangers, though kinetic attacks are likely unnecessary. Finally, under dire circumstances, states may resort to broader hostilities by climbing up existing escalation ladders or threatening non-AI assets. We refer to attacks against rival AI projects as 'maiming attacks.'",
        ],
        sources: [{ name: "National Security AI", url: "https://www.nationalsecurity.ai/" }],
      },
      {
        name: "Dario Amodei",
        title: "CEO of Anthropic",
        image: "/images/dario-amodei.jpg",
        quotes: [
          "[U]se AI to achieve robust military superiority (the stick) while at the same time offering to distribute the benefits of powerful AI (the carrot) to a wider and wider group of countries in exchange for supporting the coalition's strategy to promote democracy (this would be a bit analogous to 'Atoms for Peace'). The coalition would aim to gain the support of more and more of the world, isolating our worst adversaries and eventually putting them in a position where they are better off taking the same bargain as the rest of the world: give up competing with democracies in order to receive all the benefits and not fight a superior foe.",
        ],
        sources: [{ name: "Dario Amodei", url: "https://x.com/darioamodei/status/1585345342590943232" }],
      },
    ],
  },
]

const faqItems = [
  {
    question: "How could an AI actually cause human extinction?",
    answer:
      "A superintelligent AI might pursue its goals in unexpected and harmful ways. Because it's smarter than us, we wouldn't be able to predict its actions or shut it down. Just as humans dominate the planet through intelligence, an AI far more intelligent than us would leave humanity powerless.",
  },
  {
    question: "What's the difference between AGI and ASI?",
    answer:
      "AGI (Artificial General Intelligence) is an AI as smart as a human. ASI (Artificial Superintelligence) is an AI that is smarter than all humans combined. The goal of many AI labs is to build AGI, which could then rapidly improve itself to become ASI.",
  },
  {
    question: "Is it really possible to prevent this?",
    answer:
      "Yes. The solution is to ban the development of superintelligence through international agreements and strong regulations. It's a major challenge, but it is achievable if we act now.",
  },
  {
    question: "What if other countries build it anyway?",
    answer:
      "This is a global risk that requires a global solution. No single person, company, or country should be allowed to develop technology that could endanger everyone. The goal is an international treaty, similar to those for nuclear weapons, where all nations agree to prevent ASI development.",
  },
  {
    question: "What can one person or one country really do?",
    answer:
      "Individual action matters. Most advanced AI development is happening in a few key countries. If those countries lead on safety, others are likely to follow. Public pressure on lawmakers is the first step to making that happen.",
  },
  {
    question: "Why isn't more being done about this?",
    answer:
      "Many governments don't fully understand the risk, or they are focused on the potential economic benefits of AI. There is also a race dynamic—no country wants to fall behind. That's why raising public awareness is so critical to building the political will for action.",
  },
]

const additionalResources = [
  {
    title: "The Compendium",
    description: "An explainer on AI extinction risk: where it comes from and how to stop it.",
    href: "https://www.thecompendium.ai/summary",
  },
  {
    title: "Expert Quotes on AI Risk",
    description: "A large collection of quotes from experts on catastrophic risks from AI.",
    href: "https://controlai.com/quotes",
  },
  {
    title: "AI 2027",
    description: "A wargamed scenario showing what rapid AI progress might look like.",
    href: "https://ai-2027.com/",
  },
]

function Quote({
  name,
  title,
  image,
  quotes,
  sources,
}: {
  name: string
  title: string
  image: string
  quotes: string[]
  sources: { name: string; url: string }[]
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <div className="relative h-12 w-12 flex-shrink-0 sm:h-20 sm:w-20">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="rounded-full object-cover"
          sizes="(max-width: 640px) 48px, 80px"
        />
      </div>
      <div className="flex-1 rounded-lg border bg-secondary/30 p-4">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="mt-4 space-y-4 text-muted-foreground">
          {quotes.map((q, i) => (
            <p key={i}>“{q}”</p>
          ))}
        </div>
        <div className="mt-4 text-sm">
          {sources.map((source, i) => (
            <span key={source.name}>
              <Link
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {source.name}
              </Link>
              {i < sources.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function QuoteSection({ quotes }: { quotes: any[] }) {
  const [showAll, setShowAll] = useState(false)
  const displayedQuotes = showAll ? quotes : quotes.slice(0, 1)

  return (
    <div className="space-y-8">
      {displayedQuotes.map((q) => (
        <Quote key={q.name} {...q} />
      ))}
      {quotes.length > 1 && (
        <div className="text-center">
          <Button variant="ghost" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : `Show ${quotes.length - 1} More Quote${quotes.length > 2 ? "s" : ""}`}
          </Button>
        </div>
      )}
    </div>
  )
}

export default function LearnMorePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 lg:py-16">
      <div className="space-y-8">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardContent className="p-6 md:p-8">
              <h2 className="text-3xl font-bold tracking-tight border-b border-primary pb-4 mb-6">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((item, index) => {
                  if (item.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: item.text }}
                        className="text-muted-foreground"
                      />
                    )
                  }
                  if (item.type === "blockquote") {
                    return (
                      <blockquote key={index} className="mt-6 border-l-2 pl-6 italic">
                        {item.text}
                      </blockquote>
                    )
                  }
                  return null
                })}
                {section.quotes && <QuoteSection quotes={section.quotes} />}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-3xl font-bold tracking-tight border-b border-primary pb-4 mb-6">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={item.question}>
                  <AccordionTrigger className="text-left text-lg">{item.question}</AccordionTrigger>
                  <AccordionContent className="pt-2 text-base text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-3xl font-bold tracking-tight border-b border-primary pb-4 mb-6">
              Additional Resources
            </h2>
            <ul className="space-y-4">
              {additionalResources.map((resource) => (
                <li key={resource.title}>
                  <Link
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:text-primary"
                  >
                    {resource.title}
                  </Link>
                  <p className="text-muted-foreground">{resource.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
