import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
    return (
        <TypeAnimation
        sequence={[
            'Plan it. Crush it. Done!',
            3000, 
            'Your day, your rules.',
            3000,
           'Less chaos, more clarity!',
            3000,
            'Organize today, conquer tomorrow.',
            3000,
            'Tasks don’t stand a chance!',
            3000,
            'Get it sorted. Get it done.',
            3000,
            'Small steps, big wins!',
            3000,
            'Plan. Act. Repeat.',
            3000,
            'Your time, your power!',
            3000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '3em', display: 'inline-block', textShadow: "none", color: "#fff" }}
        repeat={Infinity}
        />
    )
};

export default TypingAnimation;
