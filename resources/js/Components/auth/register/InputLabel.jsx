export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block font-semibold text-2xl text-[#101010] lne ` + className
            }
        >
            {value ? value : children}
        </label>
    );
}
