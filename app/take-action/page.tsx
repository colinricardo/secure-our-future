import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const citizenActions = [
  {
    title: "Contact Your Lawmakers",
    duration: "10-15 min",
    content: {
      description:
        "Use our simple tool to tell your elected officials that AI safety is important. This is one of the most effective actions you can take.",
      why: "Most politicians are not aware of AI risk. Hearing from you shows them it's a priority.",
      buttonText: "Contact Lawmakers Now",
    },
  },
  {
    title: "Talk to a Friend or Family Member",
    duration: "15-30 min",
    content: {
      description:
        "Ask one person what they think about this website and the risk of AI extinction. Then, share their feedback with us to help improve our message.",
      why: "Understanding how people react helps us communicate more effectively and reach more people.",
      whatToAsk: ["What's your first reaction to this?", "Is the information clear?", "What questions do you have?"],
      buttonText: "Share Feedback",
    },
  },
  {
    title: "Share Key Facts on Social Media",
    duration: "5-10 min",
    content: {
      description:
        "Learn three key facts about AI risk and share them with your network. Spreading awareness helps build pressure for action.",
      why: "Public understanding is crucial for creating political will to pass safety laws.",
      keyFacts: [
        "Top AI experts have warned about extinction risk.",
        "Superintelligence could be developed in just a few years.",
        "There are no meaningful safety laws in place.",
      ],
      buttonText: "See the Facts",
    },
  },
  {
    title: "Contact Newspaper Editors",
    duration: "10-15 min",
    content: {
      description:
        "Use our tool to send a letter to editors at major newspapers. We provide contact info and a template to make it easy.",
      why: "Media coverage shapes public opinion. More stories on AI risk will help make it a priority.",
      buttonText: "Contact Editors",
    },
  },
  {
    title: "Find Others in Your Area",
    duration: "5 min",
    content: {
      description:
        "Connect with other people near you who are concerned about AI risk. Our tool helps you find local groups and plan actions together.",
      why: "Working together is more powerful. Local groups can organize events and support each other.",
      buttonText: "Find Local Groups",
    },
  },
]

const policies = [
  {
    title: "Acknowledge the Risk Publicly",
    description: "Governments must officially state that AI poses an extinction-level risk, just as experts have.",
  },
  {
    title: "Prepare for Extinction Risk",
    description: "Governments must treat AI risk as a national security threat, like pandemics or nuclear war.",
  },
  {
    title: "Ban Superintelligence Development",
    description: "We need a law to stop the creation of superintelligent AI until it can be proven safe.",
  },
  {
    title: "Mandate Emergency 'Kill Switches'",
    description: "All advanced AI systems must have a shutdown switch in case they become dangerous.",
  },
  {
    title: "Ban Precursors to Superintelligence",
    description: "Prohibit AI tech that is a clear stepping stone to superintelligence, even if it's not there yet.",
  },
]

export default function TakeActionPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl">How You Can Help</h1>
        <p className="mt-4 text-lg text-center text-muted-foreground">
          To prevent AI extinction, we must stop the development of superintelligence. This requires a global effort,
          similar to past efforts to stop nuclear proliferation. Everyone can play a part in building awareness and
          pushing for change.
        </p>
      </section>

      <section className="my-16 md:my-24">
        <h2 className="text-3xl font-bold mb-8 text-center">For Concerned Citizens</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          We make it easy for anyone to take meaningful action. For example, this short video shows our free tool for
          contacting lawmakers. Thousands have already used it.
        </p>
        <div className="max-w-2xl mx-auto mb-12 aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/OobwKcLGWK4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Concrete Actions You Can Take</h3>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {citizenActions.map((action, index) => (
            <AccordionItem value={`item-${index}`} key={action.title}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex w-full items-center justify-between pr-4">
                  <span className="text-lg font-semibold">{action.title}</span>
                  <span className="text-sm text-muted-foreground">{action.duration}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-4">
                  <p>
                    <span className="font-semibold">What:</span> {action.content.description}
                  </p>
                  <p>
                    <span className="font-semibold">Why:</span> {action.content.why}
                  </p>
                  {action.content.whatToAsk && (
                    <div>
                      <p className="font-semibold">What to ask:</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {action.content.whatToAsk.map((q) => (
                          <li key={q}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {action.content.keyFacts && (
                    <div>
                      <p className="font-semibold">Key facts to share:</p>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {action.content.keyFacts.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Button className="w-full">{action.content.buttonText}</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="my-16 md:my-24">
        <h2 className="text-3xl font-bold mb-8 text-center">For Strategic Partners</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
          If you are in a position to do more, we can help you find high-impact ways to contribute. We have experience
          briefing leaders in government, industry, and civil society. Below are the key policies we believe are needed
          to create a world safe from superintelligence.
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {policies.map((policy) => (
            <Card key={policy.title} className="bg-secondary">
              <CardHeader>
                <CardTitle>{policy.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{policy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
