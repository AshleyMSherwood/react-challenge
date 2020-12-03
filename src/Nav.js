import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
    return (
        <div className="navigation">
            <a href="/"><span className="sr-only">Go back</span><FontAwesomeIcon aria-hidden="true" icon="long-arrow-alt-left" title="Go back, left arrow" /></a>
            {/* <a href="/detail"><FontAwesomeIcon icon="heart" /></a> */}
            <button ><FontAwesomeIcon icon="heart" title="Go back, left arrow" /></button>
        </div>
    )
}