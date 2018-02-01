import * as $ from "jquery";
import msg from "../contents";
import "../message.scss";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";

$(() => {

    $("<div id='message'>")

        .text(msg + "!")
        .appendTo("body");
});

platformBrowserDynamic().bootstrapModule(AppModule);