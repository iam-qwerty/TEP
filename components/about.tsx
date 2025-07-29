import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Lightbulb, Handshake, Leaf } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Heart,
    title: "Bold Leadership",
    description:
      "We inspire and equip young people to lead with courage, empathy, and integrity, especially in the face of uncertainty or injustice.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "We create safe, diverse, and welcoming spaces where every voice is valued, every story matters, and every individual feels empowered to contribute.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and adaptability, encouraging continuous learning and improvement in a fast-changing world.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "We believe in the power of connection. By working together, we co-create solutions and build resilient communities.",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description: "We are committed to long-term change, supporting young people to create solutions that endure.",
  },
]

const workModel = [
  {
    step: "01",
    title: "Discover",
    description: "Unlocking self-awareness, identity, and purpose",
  },
  {
    step: "02",
    title: "Lead",
    description: "Cultivating leadership, life skills, and character",
  },
  {
    step: "03",
    title: "Thrive",
    description: "Enabling sustainable growth and success",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        {/* About Introduction */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              About Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Changing the Reality for Young Nigerians
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                For many young Nigerians, especially those in underserved communities, finding purpose can feel like
                navigating a maze without a map.
              </p>
              <p>
                The Emergence Porch was born out of a deep need to change this reality. With over 65% of Nigeria's
                unemployed population aged 15–34, and disadvantaged youth nearly twice as likely to face prolonged
                joblessness, the system is failing our greatest asset.
              </p>
              <p>
                Founded on June 1, 2025, The Emergence Porch is a transformative community where young people gain
                clarity, support, and the resilience to thrive.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/nigerian-learning-environment.png"
              alt="Young Nigerians in supportive community"
              width={600}
              height={500}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <Card className="p-8 border-primary/20">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To empower young Nigerians with leadership skills, career clarity, entrepreneurial capacity, and a
                strong sense of social responsibility through mentorship, personal development, and evidence-based
                advocacy.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-secondary/20">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-secondary" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To become Nigeria's foremost go-to community for raising purpose-driven young leaders equipped to lead
                meaningful lives, transform their communities, and shape an equitable and thriving future for all.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Drives Us Forward</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do and shape how we serve our community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <value.icon className="h-10 w-10 text-primary" />
                  <h4 className="text-xl font-semibold">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Work Model */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Approach
          </Badge>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How We Work</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our three-step model guides young people through their journey of growth and impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {workModel.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                {step.step}
              </div>
              <h4 className="text-2xl font-bold">{step.title}</h4>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
