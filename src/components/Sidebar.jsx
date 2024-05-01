import React from 'react'
import { ClockCounterClockwise, Gear, List, Plus, Question } from 'phosphor-react'

const Sidebar = () => {

    return (
        <aside className='sidebar-styled'>
            <div>
                <List weight='bold' size={20} />
                <button><Plus weight='bold' size={20} />Nouveau chat</button>
            </div>
            <div className='sidebar-bottom'>
                <div><Question weight='bold' size={20} />Aide</div>
                <div><ClockCounterClockwise weight='bold' size={20} />Historique</div>
                <div><Gear weight='bold' size={20} />Configuration</div>
                <p>Rayen Hasni IA 2.2</p>
            </div>
        </aside>
    )
}

export default Sidebar