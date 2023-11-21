import React, { Component } from "react";
import Content from "./Content";
import Radio from "./Radio";
import Email from "./Email";
class ContentDock extends Component {

    render() {
        return (
            <div>
                <Content></Content>
                <div>
                    <Radio name="radio-group" id="radio1" order="1" label="Credit card" />
                    <Radio name="radio-group" id="radio2" order="2" label="PayPal" />
                    <Radio name="radio-group" id="radio3" order="3" label="Check" />
                </div>
                <Email/>
            </div>
        )
    }
}

export default ContentDock