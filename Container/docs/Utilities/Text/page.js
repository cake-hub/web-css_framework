import React from "react";

const TextWrap = () => (
    <div className="badge badge-primary text-wrap" style={{width: "6rem"}}>
        This text should wrap.
    </div>
);

const TextBreak = () => (
    <p className="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
);

const TypographyWordBreakText = () => (
    <React.Fragment>
        Sesquipedalianism is a common problem on small elements. There is no need for Floccinaucinihilipilification on this subject.
        Take care of word separation over multiple lines to not generate Incomprehensibilities.
        This text is uncopyrightable, everything else were Unimaginatively.
    </React.Fragment>
);

const TypographyWordBreakTextWithShy = () => (
    <React.Fragment>
        Ses&shy;qui&shy;pe&shy;da&shy;lian&shy;ism is a common prob&shy;lem on small el&shy;e&shy;ments. There is no need for Floc&shy;cin&shy;aucini&shy;hilipil&shy;i&shy;fi&shy;ca&shy;tion on this subject.
        Take care of word sep&shy;a&shy;ra&shy;tion over multiple lines to not generate In&shy;com&shy;pre&shy;hen&shy;si&shy;bili&shy;ties.
        This text is un&shy;copy&shy;right&shy;able, ev&shy;ery&shy;thing else were Un&shy;imag&shy;i&shy;na&shy;tive&shy;ly.
    </React.Fragment>
);

const TypographyWordBreak = () => (
    <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Normal</th>
                    <th>Hyphens (.hyphens)</th>
                    <th>Shy (&amp;shy;)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>wide</th>
                    <td>
                        <p className="border">
                            <TypographyWordBreakText />
                        </p>
                    </td>
                    <td>
                        <p className="border hyphens" lang="en-GB">
                            <TypographyWordBreakText />
                        </p>
                    </td>
                    <td>
                        <p className="border">
                            <TypographyWordBreakTextWithShy />
                        </p>
                    </td>
                </tr>
                <tr>
                    <th>narrow</th>
                    <td>
                        <p className="border" style={{'width': '100px'}}>
                            <TypographyWordBreakText />
                        </p>
                    </td>
                    <td>
                        <p className="border hyphens" style={{'width': '100px'}} lang="en-GB">
                            <TypographyWordBreakText />
                        </p>
                    </td>
                    <td>
                        <p className="border" style={{'width': '100px'}}>
                            <TypographyWordBreakTextWithShy />
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

const TextReset = () => (
    <p className="text-muted">
        Muted text with a <a href="#" className="text-reset">reset link</a>.
    </p>
);

const TextDecoration = () => (
    <a href="#" className="text-decoration-none">Non-underlined link</a>
);

export default {
    TextWrap,
    TextBreak,
    TypographyWordBreak,
    TextReset,
    TextDecoration,
};
