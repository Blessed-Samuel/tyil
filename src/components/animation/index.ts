export const createItemVariant = (
    direction: "up" | "down" | "left" | "right" = "up",
    duration = 0.5,
    delay = 0,
) => {
    const x = direction === "left" ? -50 : direction === "right" ? 50 : 0;
    const y = direction === "up" ? 50 : direction === "down" ? -50 : 0;

    return {
        initial: { opacity: 0, x, y },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    };
};

export const containerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const createImageVariant = createItemVariant;
