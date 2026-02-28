export default function SectionTitle({ badge, title, subtitle, align = 'center', className = '' }) {
    const a = { center: 'text-center items-center', left: 'text-left items-start' }[align]
    return (
        <div className={`flex flex-col gap-4 ${a} ${className}`}>
            {badge && (
                <span className="badge badge-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block" />
                    {badge}
                </span>
            )}
            <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-neutral-900 leading-tight"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle && (
                <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-2xl">{subtitle}</p>
            )}
        </div>
    )
}
