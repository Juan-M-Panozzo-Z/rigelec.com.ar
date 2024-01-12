import Link from 'next/link';

export default function Navigation() {

    const paths = [
        {
            name: "Dashboard",
            url: "/"
        },
        // {
        //     name: "mis proyectos",
        //     url: "/projects"
        // }
    ]
    return (
        <div className='pb-4'>
            <div className='carousel gap-4 flex flex-row overflow-x-auto'>
                {
                    paths.map((path, index) => {
                        return (
                            <div key={index} className='carousel-item'>
                                <Link
                                    className='btn btn-xs uppercase'
                                    href={'/dashboard' + path.url}>
                                    {path.name}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}