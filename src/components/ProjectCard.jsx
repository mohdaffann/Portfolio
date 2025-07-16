

function ProjectCards() {
    const Projects = [
        {
            id: 1,
            title: 'Articulo',
            desc: 'An end-to-end Article publishing application.Integrated rich text wysiwyg editor (EditorJs) with Image upload.Search,Filter and get Popular posts.Follow Users and Edit Account Details . Post , Edit and Modify comments.',
            imageUrl: 'https://res.cloudinary.com/dfmtemqoz/image/upload/Articulo_l3l1dm.png',
            Live: 'https://articulo.vercel.app',
            Git: 'https://github.com/mohdaffann',
            tech: ['React', 'Node', 'Zustand', 'React-Query', 'Express', 'MongoDb']
        }

    ];
    return (
        <>
            {Projects.map((project) => (
                <div className="flex flex-col md:flex-row gap-6 rounded-lg overflow-hidden shadow-md hover:shadow-lg bg-gray-50 max-w-5xl transition duration-200 ease-in-out">
                    <div className="md:w-2/5 w-full h-full relative flex items-center justify-center">
                        <img src={project.imageUrl} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="md:w-3/5 p-4">

                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold mb-2">
                                {project.title}

                            </h2>
                            <div className="flex items-center space-x-1.5 ">
                                <button className="bg-none flex items-center cursor-pointer hover:underline"
                                    onClick={() => window.open(project.Live, '_blank')}
                                >
                                    <img src="https://cdn-icons-png.freepik.com/512/2198/2198325.png?uid=R206061452&ga=GA1.1.27171285.1750180696" className="w-[16px] h-[16px] mr-0.5" />
                                    <span className="text-gray-800 text-[18px]">Live</span>
                                </button>
                                <button className="bg-none flex items-center cursor-pointer hover:underline"
                                    onClick={() => window.open(project.Git, '_blank')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] mr-0.5" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    <span className="text-gray-800 text-[18px]">GitHub</span>
                                </button>
                            </div>

                        </div>
                        {project.desc.split('.').map((line, ind) => (
                            line && <p key={ind} className="text-[17px] text-gray-600">{line.trim()}</p>
                        ))}
                        <div className="flex flex-wrap items-center gap-2 mt-2 ">
                            {project.tech.map((tech) => (
                                <span className="text-sm px-2 py-[3px] text-gray-600 bg-gray-200 rounded-md">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProjectCards;