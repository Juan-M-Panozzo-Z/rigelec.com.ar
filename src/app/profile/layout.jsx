import { GoArrowRight } from "react-icons/go";

const ProfileLayout = ({ children }) => (
    <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <label
                htmlFor="my-drawer"
                className="fixed left-2 inset-y-1/2 drawer-overlay btn btn-sm btn-circle btn-primary text-white"
            >
                <GoArrowRight />
            </label>
            {children}
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu pt-32 p-4 w-56 min-h-full bg-base-200 text-base-content"></ul>
        </div>
    </div>
);

export default ProfileLayout;
