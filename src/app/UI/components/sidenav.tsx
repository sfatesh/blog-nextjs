import NavLink from "./nav-link";

export default function SideNav(){
    return (
        <div className="flex h-full flex-col px-3 py-4 ">
            <div className="flex grow flex-row justify-between ">
                <NavLink/>
            </div>
        </div>
    )
}