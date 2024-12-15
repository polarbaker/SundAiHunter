import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sundai Bounties</h3>
            <p className="text-text-secondary">
              Connecting talented developers with exciting bounty opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/bounty-board" className="text-text-secondary hover:text-primary transition-colors">
                  Bounty Board
                </Link>
              </li>
              <li>
                <Link href="/hacker-dashboard" className="text-text-secondary hover:text-primary transition-colors">
                  Hacker Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-text-secondary">
              Have questions? Reach out to us at{' '}
              <a href="mailto:support@sundaibounties.com" className="text-primary hover:underline">
                support@sundaibounties.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Sundai Bounties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
