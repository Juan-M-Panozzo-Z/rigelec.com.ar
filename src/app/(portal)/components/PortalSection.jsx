import Link from 'next/link'

export default function PortalSection({ title, children, className, link, linkHref, linkSpan, linkIcon }) {
    return (
        <div>
            <div className='flex items-center justify-between gap-4'>
                <h3 className="uppercase tracking-tight text-neutral-700">{title}</h3>
                {
                    link && (
                        <Link className='btn btn-sm btn-secondary' href={linkHref}>
                            {linkSpan}
                            {linkIcon}
                        </Link>
                    )
                }
            </div>

            <div className="divider w-10"></div>
            <div className={`border p-4 rounded-box shadow ${className}`}>
                {children}
            </div>
        </div>
    )
}