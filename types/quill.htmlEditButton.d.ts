import "./styles.css";
import Quill from "quill";
import { QuillHtmlEditButtonOptions } from "./options";
declare class htmlEditButton {
    constructor(quill: Quill, optionsInput: QuillHtmlEditButtonOptions);
}
export default htmlEditButton;
export { htmlEditButton };
