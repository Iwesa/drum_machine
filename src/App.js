import { useEffect, useState } from "react";

const sounds = JSON.parse(
    `[{"name": "Heater-1", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3", "id": "Q"},
    {"name": "Heater-2", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3", "id": "W"},
    {"name": "Heater-3", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3", "id": "E"},
    {"name": "Heater-4", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3", "id": "A"},
    {"name": "Clap", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3", "id": "S"},
    {"name": "Open-HH", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3", "id": "D"},
    {"name": "Kick-n'-Hat", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3", "id": "Z"},
    {"name": "Kick", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3", "id": "X"},
    {"name": "Closed-HH", "source": "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3", "id": "C"}
    ]`
)

function playSound(key) {
    document.getElementById(key).play();
}

function Pad({ id, name, src, setCurrentSound }) {
    useEffect(() => {
        const keyEvent = ({ key }) => {
            if (key.toUpperCase() === id) {
                playSound(id);
                setCurrentSound(name)
            }
        }
        window.addEventListener('keypress', keyEvent);

        return () => {
            window.removeEventListener('keypress', keyEvent);
        };
    }, [id, name, setCurrentSound]);

    return (
        <div className="drum-pad" id={name} onClick={() => { playSound(id); setCurrentSound(name) }}>
            {id}
            <audio id={id} src={src} />
        </div>
    )
}

export default function Drum() {
    const [currentSound, setCurrentSound] = useState('');
    return (
        <div className="container" id="container">
            <div id="display">{currentSound}</div>
            <div className="pad-container">
                {sounds.map(({ name, source, id }) => (
                    <Pad key={id} name={name} src={source} id={id} setCurrentSound={setCurrentSound} />
                ))}
            </div>
        </div>
    )
}