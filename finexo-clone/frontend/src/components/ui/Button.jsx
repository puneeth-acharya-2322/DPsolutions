import { Link } from 'react-router-dom'

export default function Button({
    children, variant = 'primary', size = 'md',
    to, href, onClick, className = '', disabled = false, type = 'button',
}) {
    const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

    const variants = {
        primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary hover:-translate-y-0.5',
        secondary: 'border-2 border-neutral-200 hover:border-primary-300 text-neutral-800 hover:text-primary-600 hover:bg-primary-50 bg-white',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
        white: 'bg-white text-primary-700 hover:bg-primary-50 shadow-sm',
        ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100',
    }
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-7 py-3.5 text-base',
    }

    const cls = `${base} ${variants[variant]} ${sizes[size]}`
    const body = children

    if (to) return <Link to={to} className={cls}>{body}</Link>
    if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>
    return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{body}</button>
}
