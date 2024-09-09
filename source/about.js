import hello_word from "./hello.js";
import world_word from "./world.js";
import $ from "jquery";
import _ from "lodash";
import css from "./style.css";

$("#root").html(_.join([world_word, hello_word], " "));
