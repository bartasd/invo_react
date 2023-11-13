import './Aside.css';
import { Logo } from "./Logo.jsx"
import { Navigation } from "./Navigation.jsx"
import { Nav_item } from "./Nav_item.jsx"

export function Aside(){
    return 
    (
        <>
            <div className='aside'>
                <Logo />
                <Navigation>
                    <Nav_item />
                    <Nav_item />
                    <Nav_item />
                    <Nav_item />
                    <Nav_item />
                    <Nav_item />
                    <Nav_item />
                </Navigation>
                <Navigation className="logOut">
                    <Nav_item />
                </Navigation>
            </div>   
        </>
    ); 
}