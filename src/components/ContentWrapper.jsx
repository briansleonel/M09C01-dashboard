import TopBar from "./TopBar";

export default function ContentWrapper() {
    return (
        <>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />
                </div>
            </div>
        </>
    );
}
