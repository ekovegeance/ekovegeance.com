import Projects from '@/components/projects'
import React from 'react'

export default async function ProjectsPage() {
    const data = await fetch('https://api.github.com/users/ekovegeance/repos')
    const repos= await data.json()

    
  return (
    <div><Projects repos={repos} /></div>
  )
}
