import React from "react";
import Link from "next/link";
import "./header.css";
function Header() {
    return (
        <header>
            <nav className="w-100 d-flex">
                <Link href={`/`}>
                    <ul>Home</ul>
                </Link>
                <Link href={`/shortlisted`}>
                    <ul> Goto Shortlisted</ul>
                </Link>
                <Link href={`/rejected`}>
                    <ul>Goto Rejected</ul>
                </Link>
                 <Link href={`/`}>
                    <ul onClick={()=>{localStorage.clear();location.reload();}}>Re-run Demo</ul>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
