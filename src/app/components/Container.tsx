interface props {
    children: React.ReactNode,
    className?: string
}

const Container = ({ children, className }: props) => {
    return (
        <div className={`${className} max-w-screen-xl mx-auto px-4 xl:px-0 py-8 `}>
            {children}
        </div>
    );
};

export default Container