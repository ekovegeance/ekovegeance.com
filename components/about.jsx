import React from 'react'

export default function About() {
  return (
    <div>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted dark:bg-background">
          <div
            className="container flex flex-col items-center justify-between gap-8 px-4 md:px-6 md:flex-row">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tentang Saya</h2>
              <p
                className="max-w-[500px] text-muted-foreground md:text-xl dark:text-card-foreground">
                Saya memiliki pengalaman dengan berbagai teknologi, termasuk React, Node.js.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="flex flex-col items-center justify-center p-6 rounded-md shadow-sm bg-background dark:bg-card">
                <CodeIcon className="w-8 h-8 mb-2" />
                <h3 className="text-lg font-semibold dark:text-card-foreground">Front-end</h3>
                <p className="text-sm text-muted-foreground dark:text-card-foreground">
                  React JS, Next JS  dan kerangka kerja front-end modern.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center p-6 rounded-md shadow-sm bg-background dark:bg-card">
                <ServerIcon className="w-8 h-8 mb-2" />
                <h3 className="text-lg font-semibold dark:text-card-foreground">Back-end</h3>
                <p className="text-sm text-muted-foreground dark:text-card-foreground">
                Node.js, Express, dan membangun API yang skalabel.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center p-6 rounded-md shadow-sm bg-background dark:bg-card">
                <DatabaseIcon className="w-8 h-8 mb-2" />
                <h3 className="text-lg font-semibold dark:text-card-foreground">Databases</h3>
                <p className="text-sm text-muted-foreground dark:text-card-foreground">
                Pengalaman dengan database SQL dan NoSQL seperti PostgreSQL dan MongoDB.
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center p-6 rounded-md shadow-sm bg-background dark:bg-card">
                <CloudIcon className="w-8 h-8 mb-2" />
                <h3 className="text-lg font-semibold dark:text-card-foreground">Cloud</h3>
                <p className="text-sm text-muted-foreground dark:text-card-foreground">
                Familiar dengan platform cloud seperti AWS, Alibaba Cloud, dan Google Cloud.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

function CodeIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>)
    );
  }

  function CloudIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>)
    );
  }
  
  
  
  
  function DatabaseIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>)
    );
  }
  
  
  function ServerIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>)
    );
  }
  
