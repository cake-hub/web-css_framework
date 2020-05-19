import React from "react";
import Footer from "@Develop/Components/Footer/footer.html";
import FooterList from "@Develop/Components/Footer/footerList.html";
import FooterListItem from "@Develop/Components/Footer/footerListItem.html";

const FooterDefault = () => (
    <Footer>
        <ul className="list-unstyled mb-0">
            <li className="mb-4">
                <strong className="footer-headline">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li>
                <strong className="footer-headline">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
        </ul>

        <hr />

        <FooterList>
            <FooterListItem>Main-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
        </FooterList>

    </Footer>
);

const FooterWithoutHeadline = () => (
    <Footer>
        <ul className="list-unstyled mb-0">
            <li className="mb-4">
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
        </ul>

        <hr />

        <FooterList>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
        </FooterList>
    </Footer>
);

const FooterVertical = () => (
    <Footer>

        <ul className="footer-list row justify-content-center text-md-left mb-4">
            <li className="col-md-2 mb-4 mb-md-0">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li className="col-md-2 mb-4 mb-md-0">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li className="col-md-2">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
        </ul>

        <hr />

        <FooterList>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
        </FooterList>

    </Footer>
);

const FooterVerticalMaximum = () => (
    <Footer>

        <ul className="footer-list row justify-content-center text-md-left mb-4">
            <li className="col-md-2 mb-4 mb-md-0">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li className="col-md-2 mb-4 mb-md-0">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li className="col-md-2 mb-4 mb-md-0">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li className="col-md-2 mb-4 mb-md-0">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li className="col-md-2 mb-4 mb-md-0">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
            <li className="col-md-2">
                <strong className="footer-headline ml-md-1">Headline</strong>
                <FooterList>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                    <FooterListItem>Main-Nav title</FooterListItem>
                </FooterList>
            </li>
        </ul>

        <hr />

        <FooterList>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
            <FooterListItem>Meta-Nav title</FooterListItem>
        </FooterList>

    </Footer>
);

export default {
    FooterDefault,
    FooterVertical,
    FooterWithoutHeadline,
    FooterVerticalMaximum,
};
