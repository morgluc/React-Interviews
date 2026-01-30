import { useEffect } from 'react'

function HooksComponent() {

    useEffect(() => {
        // Some code
    }, [])

    useEffect(() => {
        // Some code
    })

    return (
        <div className="component-box">
            <h2>Hooks Component</h2>
            <p>This component uses the modern hooks-based approach.</p>
        </div>
    )
}

export default HooksComponent
