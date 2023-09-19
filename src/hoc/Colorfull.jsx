
const Colorfull = (WrappedComponent)=> {
    const colors = [
        'success',
        'warning',
        'danger',
        'info',
        'primary',
        'dark',
        'light'
    ];

    const randomColor = colors[Math.floor(Math.random() * 6)];
    const className = `bg-${randomColor}`;

    return (props)=> {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Colorfull;