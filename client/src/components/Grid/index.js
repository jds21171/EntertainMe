import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}
export function H2() {
    return (
        <h2 className={"text-center"}><b>Welcome!</b></h2>
    );
}
export function BookH2() {
    return (
        <h2 className={"text-center"}><b>Top 15 Books Currently on NYT Best Sellers List</b></h2>
    );
}
export function MovieH2() {
    return (
        <h2 className={"text-center"}><b>Top 20 Daily Trending Movies</b></h2>
    );
}
export function MusicH2() {
    return (
        <h2 className={"text-center"}><b>Top 20 Trending Songs in the US</b></h2>
    );
}
