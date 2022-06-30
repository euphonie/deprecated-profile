import { useRef } from "react";
import { Animate } from "react-simple-animate";
import useOnScreen from "../../hooks/useOnScreen";

export const AnimateWhenVisible = ({animation, children}: {animation: string, children: any}) => {
    const ref = useRef(null)
    const isVisible = useOnScreen(ref)
    
    // default: fadeTop
    let setup = {
        start: { opacity: 0, transform: "translateY(-25px)" },
        end: { opacity: 1, transform: "translateY(0)" }
    };

    return(
        <div ref={ref}>
            <Animate
                play={isVisible}
                duration={1}
                delay={0.3}
                start={setup.start}
                end={setup.end}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
            >
                {children}
            </Animate>
        </div>
    );
}