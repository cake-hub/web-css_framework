import React from "react";
import CakeExampleImage from "@Cake/build/CakeExampleImage";

export const Teaser = ( { className="",
                            c_href="#",
                            c_subhead="",
                            c_title="",
                            c_addon,
                            ...props } ) => (
    <article className={"card teaser-card " + className} {...props}>
        <a href={c_href} className="teaser-card-link">
            {c_addon}
            <CakeExampleImage callFilePath={__dirname} className="card-img" />
            {!c_subhead && !c_title ? '' :
                <header className="card-img-overlay teaser-card-img-overlay">
                    {c_title ? <h2 className="teaser-card-title">{c_title}</h2> : ''}
                    {c_subhead ? <h3 className="teaser-card-subhead">{c_subhead}</h3> : ''}
                </header>
            }
        </a>
    </article>
);

export const TeaserNotLinked = ( { className="",
                                    c_subhead="",
                                    c_title="",
                                    c_addon,
                                    ...props } ) => (
    <article className={"card teaser-card " + className} {...props}>
        {c_addon}
        <CakeExampleImage callFilePath={__dirname} className="card-img" />
        {!c_subhead && !c_title ? '' :
            <header className="card-img-overlay teaser-card-img-overlay">
                {c_title ? <h2 className="teaser-card-title">{c_title}</h2> : ''}
                {c_subhead ? <h3 className="teaser-card-subhead">{c_subhead}</h3> : ''}
            </header>
        }
    </article>
);
