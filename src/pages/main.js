import './main.css'
import WaypointStep from "../components/waypointStep/waypointStep"

function Main(props) {
    return (
        <div className='wrapper'>
            <div className='stepWrapper-horizontal'>
                <WaypointStep header='Explore' type='exploration' description='Explore the zone until you find Hillock.' />
                <WaypointStep header='Obtain Skill Gems' type='loot' description='While progressing through the zone, you will find two skill gems. The second one is hidden in a chest.' />
            </div>

            <div className='stepWrapper-vertical'>
                <WaypointStep header='Kill: Hillock' type='kill' />
                <WaypointStep header="Enter Lioneye's Watch (town)" type='portal' />
                <WaypointStep header="Turn in Quest: Enemy at the Gate" type='quest' description="Talk to Nessa." />
                <WaypointStep header="Enter The Coast" type='portal' />
                <WaypointStep header="Find the Waypoint" type='exploration' />
                <WaypointStep header="Enter Tidal Island" type='portal' />
                <WaypointStep header='Kill: Hailrake' type='kill' />
                <WaypointStep header='Obtain Medicine Chest' type='loot' />
                <WaypointStep header="Enter The Mud Flats" type='portal' />
            </div>

            <div className='stepWrapper-horizontal'>
                <WaypointStep header='Obtain Ammonite Glyph' type='loot' description='Open Rhoa nests throughout the zone.' />
                <WaypointStep header='Obtain Hallotis Glyph' type='loot' description='Open Rhoa nests throughout the zone.' />
                <WaypointStep header='Obtain Roseas Glyph' type='loot' description='Open Rhoa nests throughout the zone.' />
            </div>

            <div className='stepWrapper-vertical'>
                <WaypointStep header="Open the entrance to The Submerged Passage" type='exploration' description='Find a glyph wall and click it with the looted glyphs in the inventory.' />
                <WaypointStep header="Enter The Submerged Passage" type='portal' />
                <WaypointStep header="Grab the waypoint" type='exploration' description='Find a glyph wall and click it with the looted glyphs in the inventory.' />
                <WaypointStep header="Go to Lioneye's Watch (town)" type='portal' />
            </div>

            <div className='stepWrapper-horizontal'>
                <WaypointStep header="Turn in Quest: Mercy Mission" type='quest' description="Talk to ..." />
                <WaypointStep header="Turn in Quest: Breaking Some Eggs" type='quest' description="Talk to ..." />
            </div>

            <div className='stepWrapper-vertical'>
                <WaypointStep header="Go to The Submerged Passage" type='portal' />
                <WaypointStep header="Enter The Flooded Depths" type='portal' description='If you happen to find a big bridge section before killing Dweller of the Deep in The flooded depths, ignore it as it leads to The Ledge.'/>
                <WaypointStep header='Kill: The Dweller of the Deep' type='kill' />
                <WaypointStep header="Enter The Submerged Passage" type='portal'/>
                <WaypointStep header="Enter The Ledge" type='portal'/>
                <WaypointStep header="Find the Waypoint" type='exploration' />
                <WaypointStep header="Go to Lioneye's Watch (town)" type='portal' />
                <WaypointStep header="Turn in Quest: Dweller of the Deep" type='quest' description="Talk to ..." />
                <WaypointStep header="Go to The Ledge" type='portal'/>
                <WaypointStep header="Enter The Climb" type='portal' />
                {/* <WaypointStep header="Find the Waypoint" type='exploration' /> */}
                <WaypointStep header="Enter The Lower Prison" type='portal' />
                <WaypointStep header="Trial of Ascendency: 1" type='trial' />
                <WaypointStep header="Enter The Upper Prison" type='portal' />
                <WaypointStep header="Enter The Warden's Quarters" type='portal' />
                <WaypointStep header='Kill: Brutus' type='kill' />
                <WaypointStep header="Enter The Warden's Quarters" type='portal' />
                <WaypointStep header="Enter The Prisoners Gate" type='portal' />
                <WaypointStep header="Find the Waypoint" type='exploration' />
                <WaypointStep header="Go to Lioneye's Watch (town)" type='portal' />
                <WaypointStep header="Turn in Quest: The Caged Brute" type='quest' description="Talk to ..." />
                <WaypointStep header="Go to The Prisoners Gate" type='portal' />
                <WaypointStep header="Enter The Ship Graveyard" type='portal' />
                <WaypointStep header="Enter The Ship Graveyard Cave" type='portal' />
                <WaypointStep header='Obtain The Allflame' type='loot' description='Interact with the Slave Girl to have it dropped. The zone boss can be ignored.'/>
                <WaypointStep header="Enter The Ship Graveyard" type='portal' />
                <WaypointStep header='Kill: Fairgraves' type='kill' />
                <WaypointStep header="Enter The Caverns of Wraith" type='portal' />
                <WaypointStep header="Find the Waypoint" type='exploration' />
                <WaypointStep header="Go to Lioneye's Watch (town)" type='portal' description='This is the last time we hit town before the Merveil encounter. Try and get a Sapphire Ring for the Cold Resistance it provides.'/>
                <WaypointStep header="Turn in Quest: ????????" type='quest' description="Talk to ..." />
                <WaypointStep header="Go to The Caverns of Wraith" type='portal' />
                <WaypointStep header="Enter The Caverns of Anger" type='portal' />
                <WaypointStep header="Enter Merveil's Lair" type='portal' />
                <WaypointStep header='Kill: Merveil' type='kill' />
                <WaypointStep header="Enter The Southern Forest" type='portal' />
                <WaypointStep header="Find the Waypoint" type='exploration' />
                <WaypointStep header="Go to Lioneye's Watch (town)" type='portal' />
                <WaypointStep header="Turn in Quest: ????????" type='quest' description="Talk to ..." />
            </div>
        </div>
    )
}

export default Main