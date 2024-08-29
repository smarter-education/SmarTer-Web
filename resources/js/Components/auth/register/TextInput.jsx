import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-300 bg-smarter4/10 py-4 px-6 text-xl rounded-[20px] focus:border-indigo-500 focus:ring-indigo-500   " +
                className
            }
            ref={input}
        />
    );
});
