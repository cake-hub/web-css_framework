import React from "react";
import PlaceholderImage from "@Cake/build/PlaceholderImage";
import CakeExampleImage from "@Cake/build/CakeExampleImage";

const CardDefault = () => (
    <div className="card" style={{"width": "18rem"}}>
        <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

const CardBody = () => (
    <div className="card">
        <div className="card-body">
            This is some text within a card body.
        </div>
    </div>
);

const CardTitlesTextLinks = () => (
    <div className="card" style={{"width": "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle text-sm mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
);

const CardImages = () => (
    <div className="card" style={{"width": "18rem"}}>
        <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
);

const CardListGroups = () => (
    <div className="card" style={{"width": "18rem"}}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </div>
);

const CardListGroupsHeader = () => (
    <div className="card" style={{"width": "18rem"}}>
        <div className="card-header">
            Featured
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </div>
);

const CardKitchenSink = () => (
    <div className="card" style={{"width": "18rem"}}>
        <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
);

const CardHeaderFooter = () => (
    <div className="card">
        <div className="card-header">
            Featured
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

const CardHeaderHeadline = () => (
    <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

const CardHeaderQuote = () => (
    <div className="card">
        <div className="card-header">
            Quote
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
        </div>
    </div>
);

const CardHeaderFooterCenter = () => (
    <div className="card text-center">
        <div className="card-header">
            Featured
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        <div className="card-footer text-muted">
            2 days ago
        </div>
    </div>
);

const CardGrid = () => (
    <div className="row">
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
);

const CardUtilities = () => (
    <React.Fragment>
        <div className="card w-75">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Button</a>
            </div>
        </div>

        <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Button</a>
            </div>
        </div>
    </React.Fragment>
);

const CardCustomCss = () => (
    <div className="card" style={{"width": "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

const CardTextAlignment = () => (
    <React.Fragment>
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className="card text-center" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className="card text-right" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </React.Fragment>
);

const CardImageCaps = () => (
    <React.Fragment>
        <div className="card mb-2">
            <PlaceholderImage height="100" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
            </div>
            <PlaceholderImage height="100" className="card-img-bottom" />
        </div>
    </React.Fragment>
);

const CardImageOverlays = () => (
    <div className="card text-white" style={{ "backgroundColor": "#343a40" }}>
        <PlaceholderImage height="270" className="bd-placeholder-img-lg card-img" text="Card image" />
        <div className="card-img-overlay">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text">Last updated 3 mins ago</p>
        </div>
    </div>
);

const CardHorizontal = () => (
    <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <PlaceholderImage height="250" className="card-img" text="Image" />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
            </div>
            </div>
        </div>
    </div>
);

const CardBackgroundColor = () => (
    <React.Fragment>
        <div className="card text-white bg-primary mb-2" style={{"width": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card text-white bg-danger mb-2" style={{"width": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Danger card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card text-white bg-success mb-2" style={{"width": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card text-white bg-warning mb-2" style={{"width": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Warning card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card text-white bg-info mb-2" style={{"width": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Info card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        <div className="card text-white bg-gray mb-2" style={{"width": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">Gray card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </React.Fragment>
);

const CardBorder = () => (
    <React.Fragment>
        <div className="card border-primary mb-2" style={{"maxWidth": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body text-primary">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card border-success mb-2" style={{"maxWidth": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card border-danger mb-2" style={{"maxWidth": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body text-danger">
                <h5 className="card-title">Danger card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card border-warning mb-2" style={{"maxWidth": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body text-warning">
                <h5 className="card-title">Warning card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card border-info mb-2" style={{"maxWidth": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body text-info">
                <h5 className="card-title">Info card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card border-gray mb-2" style={{"maxWidth": "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body text-gray">
                <h5 className="card-title">Gray card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </React.Fragment>
);

const CardMixins = () => (
    <div className="card border-success mb-2" style={{"maxWidth": "18rem"}}>
        <div className="card-header bg-transparent border-success">Header</div>
        <div className="card-body text-success">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="card-footer bg-transparent border-success">Footer</div>
    </div>
);

const CardGroups = () => (
    <React.Fragment>
        <div className="card-group">
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
        </div>
    </React.Fragment>
);

const CardGroupsFooter = () => (
    <React.Fragment>
        <div className="card-group">
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                </div>
            </div>
        </div>
    </React.Fragment>
);

const CardDecks = () => (
    <React.Fragment>
        <div className="card-deck">
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
        </div>
    </React.Fragment>
);

const CardDecksFooter = () => (
    <React.Fragment>
        <div className="card-deck">
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                    <span className="text-sm text-muted">Last updated 3 mins ago</span>
                </div>
            </div>
        </div>
    </React.Fragment>
);

const CardColumns = () => (
    <React.Fragment>
        <div className="card-columns">
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title that wraps to a new line</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
            <div className="card p-3">
                <blockquote className="blockquote mb-0 card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">
                        <span className="text-sm text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </span>
                    </footer>
                </blockquote>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
            <div className="card bg-primary text-white text-center p-3">
                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                    <footer className="blockquote-footer text-white">
                        <span className="text-sm">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </span>
                    </footer>
                </blockquote>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
            <div className="card">
                <CakeExampleImage callFilePath={__dirname} className="card-img" alt="Card image" />
            </div>
            <div className="card p-3 text-right">
                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">
                        <span className="text-sm text-muted">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </span>
                    </footer>
                </blockquote>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                    <p className="card-text"><span className="text-sm text-muted">Last updated 3 mins ago</span></p>
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default {
    CardDefault,
    CardBody,
    CardTitlesTextLinks,
    CardImages,
    CardListGroups,
    CardListGroupsHeader,
    CardKitchenSink,
    CardHeaderFooter,
    CardHeaderHeadline,
    CardHeaderQuote,
    CardHeaderFooterCenter,
    CardGrid,
    CardUtilities,
    CardCustomCss,
    CardTextAlignment,
    CardImageCaps,
    CardImageOverlays,
    CardHorizontal,
    CardBackgroundColor,
    CardBorder,
    CardMixins,
    CardGroups,
    CardGroupsFooter,
    CardDecks,
    CardDecksFooter,
    CardColumns,
};
