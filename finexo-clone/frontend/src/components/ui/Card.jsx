export default function Card({ children, className = '', hover = true }) {
    return (
        <div className={`card ${hover ? '' : 'hover:transform-none hover:shadow-card hover:border-neutral-200'} ${className}`}>
            {children}
        </div>
    )
}
