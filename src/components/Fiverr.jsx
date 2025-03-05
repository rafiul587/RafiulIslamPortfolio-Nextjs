import React from "react";

function Fiverr() {
  return (
    <div
      itemScope=""
      itemType="http://schema.org/Person"
      className="fiverr-seller-widget"
      style={{ display: "inline-block" }}
    >
      <a
        itemProp="url"
        href="https://www.fiverr.com/rafiul587"
        rel="nofollow"
        target="_blank"
        style={{ display: "inline-block" }}
      >
        <div
          className="fiverr-seller-content"
          id="fiverr-seller-widget-content-19471011-286c-4fdc-9a8d-bbcbccd0d2f1"
          itemProp="contentURL"
          style={{ display: "none" }}
        />
        <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
          <div itemProp="name">rafiul587</div>
          <div itemScope="" itemType="http://schema.org/Organization">
            <span itemProp="name">Fiverr</span>
          </div>
          <div itemProp="jobtitle">Seller</div>
          <div itemProp="description">
            I am an android mobile app developer. I can build any kind of modern app. 
            Have good knowledge in android advanced topics like MVVM, LiveData, 
            data binding, dagger2, networking, firebase, google maps, places, direction API, etc.
            And also have a clear concept in Kotlin, JAVA, and android's modern UI toolkit Jetpack compose.
            I can ensure quality performance by preventing all kinds of memory leaks and unnecessary battery draining.
            I have a team member with 5+ years of experience in PHP, MYSQL. 
            So we can provide any kind of backend and API-related support as well.
          </div>
        </div>
      </a>
    </div>
  );
}

export default Fiverr;
