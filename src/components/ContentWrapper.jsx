import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";

export default function ContentWrapper() {
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                </div>
            </div>
        </>
    );
}
