import Card from '@/components/card';
import React from 'react'

const ProjectList = async () => {

    const response = await fetch('http://localhost:3001/repos'
        // , { cache: 'no-store' }
    );

    const repos = await response.json();

    throw new Error("bir sorun çıktı dostum")    

    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {repos.map(repo => (
                <li key={repo.id} className="mb-4">
                    <Card className='font-mono h-full'>
                        <div className='flex justify-between items-center mb-4'>
                            <div className='font-semibold'>{repo.title}</div>
                            <div>⭐️{repo.stargazers_count}</div>

                        </div>
                        <div>{repo.description}</div>
                    </Card>
                </li>
            ))}
        </ul>
    )
}

export default ProjectList