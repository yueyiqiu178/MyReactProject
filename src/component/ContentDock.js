import React, { Component } from "react";
import Content from "./Content";
import Email from "./Email";
import Radio from "./Radio";
class ContentDock extends Component {

    render() {
        return (
            <div>
                <Content>
                    <h1>React</h1>
                    <p>Rocks</p>
                </Content>
                <div>
                    <Radio name="radio-group" id="radio1" order="1" label="Credit card" />
                    <Radio name="radio-group" id="radio2" order="2" label="PayPal" />
                    <Radio name="radio-group" id="radio3" order="3" label="Check" />
                </div>
                <Email />
            </div>
        )
    }
}

export default ContentDock