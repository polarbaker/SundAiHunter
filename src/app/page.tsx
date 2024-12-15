import Link from 'next/link'

export default function Home() {
  const bounties = [
    {
      id: 1,
      title: "Implement Dark Mode for React Component Library",
      description: "Add dark mode support to our open source React component library using CSS variables and theme context.",
      amount: "$500",
      status: "Open",
      technologies: ["React", "TypeScript"]
    },
    {
      id: 2,
      title: "Implement Dark Mode for React Component Library",
      description: "Add dark mode support to our open source React component library using CSS variables and theme context.",
      amount: "$500",
      status: "Open",
      technologies: ["React", "TypeScript"]
    },
    {
      id: 3,
      title: "Implement Dark Mode for React Component Library",
      description: "Add dark mode support to our open source React component library using CSS variables and theme context.",
      amount: "$500",
      status: "Open",
      technologies: ["React", "TypeScript"]
    }
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <div className="mx-auto max-w-screen-xl px-4 pt-32 sm:pt-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-[2.5rem] font-medium leading-[1.15] tracking-[-0.02em] text-text-primary">
            Bounties for Open Source Projects
          </h1>
          <p className="mt-6 text-xl leading-8 text-text-secondary">
            Connect with developers and fund open source projects. Our platform makes it easy to post bounties, find contributors, and get work done.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href="/bounty-board"
              className="btn-primary"
            >
              View Bounties
            </Link>
            <Link
              href="/submit-bounty"
              className="btn-secondary"
            >
              Submit a Bounty
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Bounties Section */}
      <div className="mx-auto max-w-screen-xl px-4 py-24">
        <h2 className="text-2xl font-medium tracking-[-0.02em] text-text-primary">
          Featured Bounties
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bounties.map((bounty) => (
            <div key={bounty.id} className="card group">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-text-primary">
                    {bounty.title}
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    {bounty.description}
                  </p>
                </div>
                <span className="text-lg font-medium text-primary">
                  {bounty.amount}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {bounty.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
